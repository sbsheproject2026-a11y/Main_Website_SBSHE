 import React, { useEffect, useState } from "react";
import { getWebsiteContent, EnqueryDataSubmit, EnqueryDataFranchiseSubmit } from "./HomeService";

function SliderPage() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [sliders, setSliders] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [toast, setToast] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        mobileNo: "",
        email: "",
        course: "",
        remarks: ""
    });

    useEffect(() => {
        loadPageData();
    }, []);

    const loadPageData = async () => {
        try {
            const [slidersData] = await Promise.all([getWebsiteContent(1)]);
            setSliders(
                (slidersData || []).filter((item) => item.is_active === true)
            );
        } catch (error) {
            console.log("Page data error:", error);
        }
    };

    const slides = sliders
        .filter((item) => item.is_active && item.file)
        .map((item) => item.file);

    useEffect(() => {
        setActiveSlide(0);
    }, [sliders]);

    useEffect(() => {
        if (slides.length <= 1) return;
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [slides]);

    const showToast = (message, type = "info") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.course.trim()) {
            showToast("Please enter your institute name.", "error");
            return;
        }
        if (!formData.name.trim()) {
            showToast("Please enter your name.", "error");
            return;
        }

        if (!/^\d{10}$/.test(formData.mobileNo.trim())) {
            showToast("Please enter a valid 10 digit mobile number.", "error");
            return;
        }

        if (
            formData.email.trim() &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
        ) {
            showToast("Please enter a valid email address.", "error");
            return;
        }

        try {
            setSubmitting(true);
            const cleaned = {
                name: formData.name.trim(),
                mobileNo: formData.mobileNo.trim(),
                email: formData.email.trim(),
                course: "Franchise Enquiry",
                remarks: formData.remarks.trim()
            };

            const result = await EnqueryDataFranchiseSubmit(cleaned);
            const message = result?.message || result?.Message;

            if (message === "successfully submit") {
                showToast("Successfully Submitted", "success");
                setFormData({
                    name: "",
                    mobileNo: "",
                    email: "",
                    course: "Franchise Enquiry",
                    remarks: ""
                });
            } else {
                showToast(message || "Submission failed. Please try again.", "error");
            }
        } catch (error) {
            console.error("Submit error:", error);
            showToast(
                error?.response?.data?.message ||
                    "Unable to submit query. Please try again.",
                "error"
            );
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            {/* TOAST */}
            {toast && (
                <div className="fr-toast-wrap">
                    <div className={`fr-toast ${toast.type}`}>
                        <div className="fr-toast-icon">
                            {toast.type === "success" && "✓"}
                            {toast.type === "error" && "!"}
                            {toast.type === "info" && "i"}
                        </div>
                        <div className="fr-toast-msg">{toast.message}</div>
                    </div>
                </div>
            )}

            <div className="hero-split-section">
                <div className="hero-split-wrap">

                    {/* ================= SLIDER — 75% ================= */}
                    <div className="hero-slider-box">
                        <div id="header-carousel" className="carousel slide carousel-fade">
                            <ol className="carousel-indicators">
                                {slides.slice().reverse().map((_, index) => (
                                    <li
                                        key={`slide-indicator-${index}`}
                                        className={activeSlide === index ? "active" : ""}
                                        onClick={() => setActiveSlide(index)}
                                    />
                                ))}
                            </ol>

                            <div className="carousel-inner">
                                {slides.slice().reverse().map((image, index) => (
                                    <div
                                        key={`slide-${index}-${image}`}
                                        className={`carousel-item ${activeSlide === index ? "active" : ""}`}
                                    >
                                        <img
                                            src={image}
                                            alt={`Slide ${index + 1}`}
                                            className="header-slide-image"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ================= FRANCHISE FORM — 25% ================= */}
                    <div className="hero-form-box">
                        <div className="fr-card">

                            {/* HEADER */}
                            <div className="fr-header">
                                <div className="fr-icon">🎓</div>
                                <div>
                                    <h3>Franchise Enquiry</h3>
                                    <span>SBSHE</span>
                                </div>
                            </div>

                            {/* BODY */}
                            <div className="fr-body">
                                <form
                                    id="franchise-enquiry-form"
                                    className="fr-form"
                                    onSubmit={handleSubmit}
                                >
                                    <input
                                        type="text"
                                        name="course"
                                        className="fr-input"
                                        value={formData.course}
                                        onChange={handleChange}
                                        placeholder="institute Name *"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="name"
                                        className="fr-input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full Name *"
                                        required
                                    />

                                    <input
                                        type="tel"
                                        name="mobileNo"
                                        className="fr-input"
                                        value={formData.mobileNo}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                mobileNo: e.target.value
                                                    .replace(/\D/g, "")
                                                    .slice(0, 10)
                                            }))
                                        }
                                        placeholder="Mobile No *"
                                        maxLength={10}
                                        inputMode="numeric"
                                        required
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        className="fr-input"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                    />

                                    <textarea
                                        name="remarks"
                                        className="fr-input fr-textarea"
                                        value={formData.remarks}
                                        onChange={handleChange}
                                        placeholder="Remarks"
                                    />

                                    <button
                                        type="submit"
                                        className="fr-submit-btn"
                                        disabled={submitting}
                                    >
                                        {submitting ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm"></span>
                                                Submitting...
                                            </>
                                        ) : (
                                            "Submit Enquiry"
                                        )}
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                /* =========================================================
                   SPLIT WRAPPER — 75 / 25
                ========================================================= */
                .hero-split-section {
                    width: 98%;
                    padding: 0px 0px;
                     
                    box-sizing: border-box;
                }

                .hero-split-wrap {
                    max-width: 1400px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 75% 25%;
                    gap: 10px;
                    align-items: stretch;
                }

                /* =========================================================
                   SLIDER — 75%
                ========================================================= */
                .hero-slider-box {
                    position: relative;
                    width: 100%;
                    height: 580px;
                    
                    overflow: hidden;
                    box-shadow: 0 15px 40px rgba(15, 23, 42, 0.15);
                    
                }

                .hero-slider-box .carousel,
                .hero-slider-box .carousel-inner,
                .hero-slider-box .carousel-item {
                    height: 100%;
                    width: 100%;
                }

                .header-slide-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    display: block;
                }

                .hero-slider-box .carousel-indicators {
                    bottom: 15px;
                    margin-bottom: 0;
                    z-index: 5;
                }

                .hero-slider-box .carousel-indicators li {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.55);
                    border: none;
                    margin: 0 5px;
                    cursor: pointer;
                    transition: 0.25s ease;
                }

                .hero-slider-box .carousel-indicators li.active {
                    background: #ff6600;
                    width: 28px;
                    border-radius: 20px;
                }

                /* =========================================================
                   FORM — 25%
                ========================================================= */
                .hero-form-box {
                    width: 100%;
                    height: 540px;
                    display: flex;
                    align-items: stretch;
                    min-width: 0;
                }

                .fr-card {
                    width: 100%;
                    height: 100%;
                    background: #ffffff;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
                    border-top: 5px solid #ff6600;
                    display: flex;
                    flex-direction: column;
                    min-height: 0;
                }

                /* HEADER */
                .fr-header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 14px 16px;
                    border-bottom: 1px solid #eeeeee;
                    background: #ffffff;
                    flex-shrink: 0;
                }

                .fr-icon {
                    width: 40px;
                    height: 40px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;
                    background: #fff1e8;
                    font-size: 19px;
                }

                .fr-header h3 {
                    margin: 0;
                    font-size: 15px;
                    font-weight: 700;
                    color: #222222;
                    line-height: 1.2;
                }

                .fr-header span {
                    display: block;
                    margin-top: 2px;
                    font-size: 11px;
                    color: #777777;
                }

                /* BODY — scrollable */
                .fr-body {
                    flex: 1 1 auto;
                    min-height: 0;
                    overflow-y: auto;
                    padding: 16px;
                    background: #fafbfc;
                }

                .fr-body::-webkit-scrollbar {
                    width: 4px;
                }
                .fr-body::-webkit-scrollbar-track {
                    background: transparent;
                }
                .fr-body::-webkit-scrollbar-thumb {
                    background: #d1d5db;
                    border-radius: 10px;
                }

                /* FORM */
                .fr-form {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .fr-input {
                    width: 100%;
                    padding: 11px 13px;
                    font-size: 12.5px;
                    color: #222222;
                    background: #ffffff;
                    border: 1px solid #e2e2e2;
                    border-radius: 8px;
                    outline: none;
                    transition: 0.2s ease;
                    font-family: inherit;
                    box-sizing: border-box;
                }

                .fr-input::placeholder {
                    color: #9ca3af;
                    font-weight: 500;
                }

                .fr-input:focus {
                    border-color: #ff6600;
                    box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.12);
                }

                .fr-textarea {
                    resize: none;
                    min-height: 70px;
                }

                /* SUBMIT BUTTON */
                .fr-submit-btn {
                    width: 100%;
                    border: none;
                    padding: 12px 20px;
                    margin-top: 2px;
                    border-radius: 8px;
                    background: #07567f;
                    color: #ffffff;
                    font-size: 13.5px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: 0.2s ease;
                    font-family: inherit;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    letter-spacing: 0.3px;
                }

                .fr-submit-btn:hover:not(:disabled) {
                    background: #064a6d;
                    transform: translateY(-1px);
                    box-shadow: 0 6px 18px rgba(7, 86, 127, 0.28);
                }

                .fr-submit-btn:active:not(:disabled) {
                    transform: translateY(0);
                }

                .fr-submit-btn:disabled {
                    opacity: 0.65;
                    cursor: not-allowed;
                }

                /* =========================================================
                   TOAST
                ========================================================= */
                .fr-toast-wrap {
                    position: fixed;
                    top: 24px;
                    right: 24px;
                    z-index: 100000;
                    pointer-events: none;
                }

                .fr-toast {
                    pointer-events: auto;
                    min-width: 260px;
                    max-width: 340px;
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    padding: 14px 16px;
                    border-radius: 12px;
                    background: #ffffff;
                    color: #222222;
                    font-size: 14px;
                    font-weight: 500;
                    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);
                    border-left: 5px solid #07567f;
                    animation: frToastIn 0.35s ease;
                }

                .fr-toast.success { border-left-color: #16a34a; }
                .fr-toast.error { border-left-color: #dc2626; }
                .fr-toast.info { border-left-color: #07567f; }

                .fr-toast-icon {
                    flex-shrink: 0;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    font-size: 14px;
                    color: #ffffff;
                    background: #07567f;
                }

                .fr-toast.success .fr-toast-icon { background: #16a34a; }
                .fr-toast.error .fr-toast-icon { background: #dc2626; }

                .fr-toast-msg { flex: 1; word-break: break-word; }

                @keyframes frToastIn {
                    from { opacity: 0; transform: translateX(120%); }
                    to { opacity: 1; transform: translateX(0); }
                }

                /* =========================================================
                   RESPONSIVE
                ========================================================= */
                @media (max-width: 1199px) {
                    .hero-slider-box,
                    .hero-form-box {
                        height: 500px;
                    }
                }

                @media (max-width: 991px) {
                    .hero-split-section {
                        padding: 18px 14px;
                    }

                    .hero-split-wrap {
                        grid-template-columns: 1fr;
                        gap: 16px;
                    }

                    .hero-slider-box {
                        height: 400px;
                    }

                    .hero-form-box {
                        height: auto;
                        min-height: 500px;
                    }
                }

                @media (max-width: 767px) {
                    .hero-slider-box {
                        height: 340px;
                        border-radius: 12px;
                    }

                    .hero-slider-box .carousel-indicators li {
                        width: 8px;
                        height: 8px;
                        margin: 0 4px;
                    }

                    .hero-slider-box .carousel-indicators li.active {
                        width: 22px;
                    }
                }

                @media (max-width: 480px) {
                    .hero-split-section {
                        padding: 14px 10px;
                    }

                    .hero-slider-box {
                        height: 250px;
                    }

                    .hero-form-box {
                        min-height: 500px;
                    }

                    .fr-toast-wrap {
                        top: 12px;
                        right: 12px;
                        left: 12px;
                    }

                    .fr-toast {
                        min-width: auto;
                        max-width: 100%;
                    }
                }
            `}</style>
        </>
    );
}

export default SliderPage;