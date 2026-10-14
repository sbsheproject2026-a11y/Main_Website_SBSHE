 import React, { useState } from "react";
import { EnqueryDataSubmit } from "./HomeService"; // apna sahi path use karo

function ModelPage() {

    const [showModal, setShowModal] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [toast, setToast] = useState(null); // { message, type }

    const [formData, setFormData] = useState({
        name: "",
        mobileNo: "",
        email: "",
        course: "",
        remarks: ""
    });

    /* ================= TOAST HELPER ================= */
    const showToast = (message, type = "info") => {
        setToast({ message, type });
        setTimeout(() => {
            setToast(null);
        }, 3000);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
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
                course: formData.course.trim(),
                remarks: formData.remarks.trim()
            };

            const result = await EnqueryDataSubmit(cleaned);
            const message = result?.message || result?.Message;

            if (message === "successfully submit") {
                showToast("Successfully Submitted", "success");
                setFormData({
                    name: "",
                    mobileNo: "",
                    email: "",
                    course: "",
                    remarks: ""
                });

                // popup close thoda delay se taki toast dikh jaye
                setTimeout(() => {
                    setShowModal(false);
                }, 3000);
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

    if (!showModal) {
        return null;
    }

    return (
        <>
            <style>{`

                .model-page-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 99999;
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    padding: 30px 20px 20px;
                    background: rgba(0, 0, 0, 0.65);
                    backdrop-filter: blur(5px);
                    animation: modelOverlayShow 0.25s ease;
                    overflow-y: auto;
                }

                .model-page-modal {
                    width: 100%;
                    max-width: 650px;
                    background: #ffffff;
                    border-radius: 18px;
                    overflow: hidden;
                    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.30);
                    animation: modelModalShow 0.4s ease;
                    border-top: 5px solid #ff6600;
                }

                /* HEADER */
                .model-page-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 18px 22px;
                    border-bottom: 1px solid #eeeeee;
                    background: #ffffff;
                }

                .model-page-title {
                    display: flex;
                    align-items: center;
                    gap: 13px;
                }

                .model-page-icon {
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    background: #fff1e8;
                    color: #ff6600;
                    font-size: 21px;
                }

                .model-page-title h3 {
                    margin: 0;
                    font-size: 21px;
                    font-weight: 700;
                    color: #222222;
                }

                .model-page-title span {
                    display: block;
                    margin-top: 3px;
                    font-size: 13px;
                    color: #777777;
                }

                .model-page-close {
                    width: 38px;
                    height: 38px;
                    border: none;
                    border-radius: 50%;
                    background: #f5f5f5;
                    color: #555555;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    font-size: 24px;
                    line-height: 1;
                    transition: 0.2s ease;
                }

                .model-page-close:hover {
                    background: #ff6600;
                    color: #ffffff;
                }

                /* CONTENT */
                .model-page-content {
                    max-height: 65vh;
                    overflow-y: auto;
                    padding: 22px;
                }

                .model-page-form {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                }

                .model-page-field {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .model-page-field.full {
                    grid-column: 1 / -1;
                }

                .model-page-field label {
                    font-size: 13px;
                    font-weight: 600;
                    color: #333333;
                }

                .model-page-field label span {
                    color: #ff6600;
                }

                .model-page-field input,
                .model-page-field textarea {
                    width: 100%;
                    padding: 11px 14px;
                    font-size: 14px;
                    color: #222222;
                    background: #fafafa;
                    border: 1px solid #e2e2e2;
                    border-radius: 9px;
                    outline: none;
                    transition: 0.2s ease;
                    font-family: inherit;
                }

                .model-page-field input:focus,
                .model-page-field textarea:focus {
                    border-color: #ff6600;
                    background: #ffffff;
                    box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.12);
                }

                .model-page-field textarea {
                    resize: vertical;
                    min-height: 80px;
                }

                /* FOOTER */
                .model-page-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    padding: 16px 22px;
                    border-top: 1px solid #eeeeee;
                    background: #fafafa;
                }

                .model-page-footer span {
                    color: #777777;
                    font-size: 13px;
                }

                .model-page-actions {
                    display: flex;
                    gap: 10px;
                }

                .model-page-cancel-btn {
                    border: 1px solid #dcdcdc;
                    padding: 10px 22px;
                    border-radius: 8px;
                    background: #ffffff;
                    color: #555555;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: 0.2s ease;
                }

                .model-page-cancel-btn:hover {
                    background: #f3f3f3;
                }

                .model-page-ok-btn {
                    border: none;
                    padding: 10px 22px;
                    border-radius: 8px;
                    background: #07567f;
                    color: #ffffff;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: 0.2s ease;
                }

                .model-page-ok-btn:hover:not(:disabled) {
                    background: #064a6d;
                    transform: translateY(-1px);
                }

                .model-page-ok-btn:disabled {
                    opacity: 0.65;
                    cursor: not-allowed;
                }

                /* ================= TOAST ================= */
                .model-toast-wrap {
                    position: fixed;
                    top: 24px;
                    right: 24px;
                    z-index: 100000;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    pointer-events: none;
                }

                .model-toast {
                    pointer-events: auto;
                    min-width: 260px;
                    max-width: 360px;
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    padding: 14px 16px;
                    border-radius: 12px;
                    background: #ffffff;
                    color: #222222;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 1.4;
                    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);
                    border-left: 5px solid #07567f;
                    animation: modelToastIn 0.35s ease;
                }

                .model-toast.success {
                    border-left-color: #16a34a;
                }

                .model-toast.error {
                    border-left-color: #dc2626;
                }

                .model-toast.info {
                    border-left-color: #07567f;
                }

                .model-toast-icon {
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

                .model-toast.success .model-toast-icon {
                    background: #16a34a;
                }

                .model-toast.error .model-toast-icon {
                    background: #dc2626;
                }

                .model-toast-msg {
                    flex: 1;
                    word-break: break-word;
                }

                /* ANIMATION */
                @keyframes modelOverlayShow {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes modelModalShow {
                    from {
                        opacity: 0;
                        transform: translateY(-80px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes modelToastIn {
                    from {
                        opacity: 0;
                        transform: translateX(120%);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                /* MOBILE */
                @media (max-width: 576px) {
                    .model-page-overlay {
                        padding: 15px 12px 20px;
                    }

                    .model-page-modal {
                        border-radius: 14px;
                    }

                    .model-page-header {
                        padding: 15px;
                    }

                    .model-page-content {
                        padding: 15px;
                        max-height: 68vh;
                    }

                    .model-page-form {
                        grid-template-columns: 1fr;
                    }

                    .model-page-footer {
                        flex-direction: column;
                        align-items: stretch;
                        padding: 14px 15px;
                    }

                    .model-page-actions {
                        width: 100%;
                    }

                    .model-page-actions button {
                        flex: 1;
                    }

                    .model-toast-wrap {
                        top: 12px;
                        right: 12px;
                        left: 12px;
                    }

                    .model-toast {
                        min-width: auto;
                        max-width: 100%;
                    }
                }

            `}</style>

            {/* ================= TOAST RENDER ================= */}
            {toast && (
                <div className="model-toast-wrap">
                    <div className={`model-toast ${toast.type}`}>
                        <div className="model-toast-icon">
                            {toast.type === "success" && "✓"}
                            {toast.type === "error" && "!"}
                            {toast.type === "info" && "i"}
                        </div>
                        <div className="model-toast-msg">
                            {toast.message}
                        </div>
                    </div>
                </div>
            )}

            <div className="model-page-overlay">

                <div className="model-page-modal">

                    {/* HEADER */}
                    <div className="model-page-header">

                        <div className="model-page-title">
                            <div className="model-page-icon">🎓</div>
                            <div>
                                <h3>Student Enquiry</h3>
                                <span>SBSHE</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="model-page-close"
                            onClick={handleClose}
                            aria-label="Close"
                        >
                            ×
                        </button>

                    </div>


                    {/* CONTENT - FORM */}
                    <div className="model-page-content">

                        <form
                            id="student-enquiry-form"
                            className="model-page-form"
                            onSubmit={handleSubmit}
                        >

                            {/* NAME */}
                            <div className="model-page-field">
                                <label>
                                    Full Name <span>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>


                            {/* MOBILE */}
                            <div className="model-page-field">
                                <label>
                                    Mobile No <span>*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="mobileNo"
                                    value={formData.mobileNo}
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            mobileNo: e.target.value
                                                .replace(/\D/g, "")
                                                .slice(0, 10)
                                        }))
                                    }
                                    placeholder="10 digit mobile number"
                                    maxLength={10}
                                    inputMode="numeric"
                                    required
                                />
                            </div>


                            {/* EMAIL */}
                            <div className="model-page-field">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                />
                            </div>


                            {/* COURSE — MANUAL INPUT */}
                            <div className="model-page-field">
                                <label>Course</label>
                                <input
                                    type="text"
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                    placeholder="Enter your course (e.g.)"
                                />
                            </div>


                            {/* REMARKS */}
                            <div className="model-page-field full">
                                <label>Remarks</label>
                                <textarea
                                    name="remarks"
                                    value={formData.remarks}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                />
                            </div>

                        </form>

                    </div>


                    {/* FOOTER */}
                    <div className="model-page-footer">

                        <span>
                            Fields marked with <strong>*</strong> are required.
                        </span>

                        <div className="model-page-actions">

                            <button
                                type="button"
                                onClick={handleClose}
                                className="model-page-cancel-btn"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                form="student-enquiry-form"
                                className="model-page-ok-btn"
                                disabled={submitting}
                            >
                                {submitting ? "Submitting..." : "Submit Enquiry"}
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}

export default ModelPage;