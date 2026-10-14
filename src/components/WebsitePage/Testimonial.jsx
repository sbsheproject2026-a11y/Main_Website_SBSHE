 import React, { useEffect, useState } from "react";
import { getWebsiteContent } from "./HomeService";

function Testimonial() {
    const [testimonial, setTestimonial] = useState([]);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    useEffect(() => {
        loadPageData();
    }, []);

    const loadPageData = async () => {
        try {
            const testimonialdata = await getWebsiteContent(19);

            setTestimonial(
                (testimonialdata || []).filter(
                    item => item.is_active === true
                )
            );
        } catch (error) {
            console.log("Page data error:", error);
            setTestimonial([]);
        }
    };

    const displayTestimonials = testimonial.slice().reverse();

    const sliderTestimonials = [
        ...displayTestimonials,
        ...displayTestimonials
    ];

    useEffect(() => {
        if (displayTestimonials.length <= 1) return;

        const interval = setInterval(() => {
            setActiveTestimonial(prev => prev + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, [displayTestimonials.length]);

    useEffect(() => {
        if (
            displayTestimonials.length > 1 &&
            activeTestimonial === displayTestimonials.length
        ) {
            const timer = setTimeout(() => {
                setActiveTestimonial(0);
            }, 650);

            return () => clearTimeout(timer);
        }
    }, [activeTestimonial, displayTestimonials.length]);

    const currentIndex =
        activeTestimonial >= displayTestimonials.length
            ? 0
            : activeTestimonial;

    const handlePrevious = () => {
        if (activeTestimonial === 0) {
            setActiveTestimonial(displayTestimonials.length - 1);
        } else {
            setActiveTestimonial(prev => prev - 1);
        }
    };

    const handleNext = () => {
        setActiveTestimonial(prev => prev + 1);
    };

    return (
        <>
            <div className="testimonial-section">
                <div className="container py-4">

                    {/* HEADING */}
                    <div className="testimonial-heading text-center mb-4">
                        <div className="testimonial-label">
                            <span></span>
                            TESTIMONIAL
                            <span></span>
                        </div>

                        <h1>What Our Students Say</h1>
                    </div>

                    <div className="testimonial-slider">
                        <div className="testimonial-overflow">
                            <div
                                className={`testimonial-track ${
                                    activeTestimonial === displayTestimonials.length
                                        ? "testimonial-reset"
                                        : ""
                                }`}
                                style={{
                                    transform: `translateX(-${
                                        activeTestimonial * 100
                                    }%)`
                                }}
                            >
                                {sliderTestimonials.map((item, index) => (
                                    <div
                                        key={`testimonial-${item.id ?? index}-${index}`}
                                        className="testimonial-slide"
                                    >
                                        <div className="row justify-content-center">
                                            <div className="col-xl-10 col-lg-11">
                                                <div className="testimonial-card">

                                                    {/* LEFT — IMAGE */}
                                                    <div className="testimonial-left">
                                                        <div className="testimonial-image-wrapper">
                                                            <div className="testimonial-image-ring">
                                                                {item.file_url ? (
                                                                    <img
                                                                        src={item.file_url}
                                                                        alt={item.name || "Student"}
                                                                        className="testimonial-image"
                                                                    />
                                                                ) : (
                                                                    <div className="testimonial-placeholder">
                                                                        <i className="fa fa-user"></i>
                                                                    </div>
                                                                )}
                                                            </div>

                                                            <div className="verified-badge">
                                                                <i className="fa fa-check"></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* RIGHT — NAME + ROLE + DESC */}
                                                    <div className="testimonial-right">

                                                        {/* TOP — NAME + STARS */}
                                                        <div className="testimonial-head">
                                                            <div className="testimonial-head-info">
                                                                <h3>{item.name}</h3>
                                                                <p>{item.short_name}</p>
                                                            </div>

                                                            <div className="testimonial-stars">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                        </div>

                                                        {/* DESCRIPTION */}
                                                        <div className="testimonial-review">
                                                            <div className="quote-icon">
                                                                <i className="fa fa-quote-left"></i>
                                                            </div>

                                                            <p>{item.short_intro}</p>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {displayTestimonials.length > 1 && (
                            <div className="testimonial-controls">
                                <button
                                    type="button"
                                    className="testimonial-arrow"
                                    onClick={handlePrevious}
                                >
                                    <i className="fa fa-arrow-left"></i>
                                </button>

                                <div className="testimonial-dots">
                                    {displayTestimonials.map((item, index) => (
                                        <button
                                            key={`testimonial-dot-${item.id ?? index}`}
                                            type="button"
                                            className={`testimonial-dot ${
                                                currentIndex === index ? "active" : ""
                                            }`}
                                            onClick={() => setActiveTestimonial(index)}
                                        />
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    className="testimonial-arrow"
                                    onClick={handleNext}
                                >
                                    <i className="fa fa-arrow-right"></i>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style>
                {`
                /* =====================================================
                   TESTIMONIAL — LEFT IMAGE + RIGHT CONTENT
                ===================================================== */

                .testimonial-section {
                    position: relative;
                    padding: 45px 0 35px;
                    background:
                        radial-gradient(circle at 10% 20%, rgba(255,102,0,0.06), transparent 30%),
                        radial-gradient(circle at 90% 80%, rgba(255,102,0,0.05), transparent 30%),
                        #f8f9fc;
                    overflow: hidden;
                }

                /* HEADING */
                .testimonial-heading {
                    position: relative;
                    z-index: 2;
                }

                .testimonial-label {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    color: #01507c;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 3px;
                    margin-bottom: 6px;
                }

                .testimonial-label span {
                    width: 26px;
                    height: 2px;
                    background: #01507c;
                    display: inline-block;
                    border-radius: 5px;
                }

                .testimonial-heading h1 {
                    margin: 0;
                    color: #20242a;
                    font-size: 26px;
                    font-weight: 800;
                    letter-spacing: -0.5px;
                }

                /* SLIDER */
                .testimonial-slider {
                    position: relative;
                    z-index: 2;
                    max-width: 950px;
                    margin: auto;
                }

                .testimonial-overflow {
                    overflow: hidden;
                    padding: 10px 8px 15px;
                }

                .testimonial-track {
                    display: flex;
                    width: 100%;
                    transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
                    will-change: transform;
                }

                .testimonial-reset {
                    transition: none !important;
                }

                .testimonial-slide {
                    min-width: 100%;
                    width: 100%;
                    flex: 0 0 100%;
                }

                /* =====================================================
                   CARD — HORIZONTAL LAYOUT
                ===================================================== */

                .testimonial-card {
                    position: relative;
                    background: #ffffff;
                    border-radius: 18px;
                    padding: 24px 30px;
                    border: 1px solid #edf0f5;
                    box-shadow: 0 10px 30px rgba(20, 30, 50, 0.07);
                    overflow: hidden;

                    display: flex;
                    align-items: center;
                    gap: 25px;

                    transition: all 0.3s ease;
                }

                .testimonial-card:hover {
                    box-shadow: 0 15px 40px rgba(255,102,0,0.12);
                }

                .testimonial-card::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background: linear-gradient(90deg, #01507c, #ff8c42);
                }

                /* =====================================================
                   LEFT — IMAGE
                ===================================================== */

                .testimonial-left {
                    flex-shrink: 0;
                }

                .testimonial-image-wrapper {
                    position: relative;
                    width: 110px;
                    height: 110px;
                }

                .testimonial-image-ring {
                    width: 110px;
                    height: 110px;
                    padding: 4px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #01507c, #ffb37a, #01507c);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .testimonial-image {
                    width: 102px;
                    height: 102px;
                    object-fit: cover;
                    border-radius: 50%;
                    border: 4px solid #fff;
                    display: block;
                }

                .testimonial-placeholder {
                    width: 102px;
                    height: 102px;
                    border-radius: 50%;
                    background: #fff;
                    color: #01507c;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 38px;
                }

                .verified-badge {
                    position: absolute;
                    right: 0px;
                    bottom: 4px;
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    background: #28a745;
                    color: white;
                    border: 3px solid white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 10px;
                }

                /* =====================================================
                   RIGHT — NAME + STARS + DESCRIPTION
                ===================================================== */

                .testimonial-right {
                    flex: 1;
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                /* TOP ROW — Name + Stars */
                .testimonial-head {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 14px;
                    padding-bottom: 10px;
                    border-bottom: 1px solid #eef1f5;
                }

                .testimonial-head-info h3 {
                    margin: 0 0 3px;
                    color: #1c2430;
                    font-size: 18px;
                    font-weight: 800;
                    line-height: 1.2;
                }

                .testimonial-head-info p {
                    margin: 0;
                    color: #7a8794;
                    font-size: 12px;
                    font-weight: 600;
                    letter-spacing: 0.3px;
                    text-transform: uppercase;
                }

                .testimonial-stars {
                    display: flex;
                    gap: 3px;
                    flex-shrink: 0;
                }

                .testimonial-stars i {
                    color: #ffb400;
                    font-size: 14px;
                }

                /* DESCRIPTION */
                .testimonial-review {
                    position: relative;
                    padding-left: 26px;
                }

                .testimonial-review p {
                    margin: 0;
                    color: #4b5563;
                    font-size: 14px;
                    line-height: 1.75;
                    font-weight: 400;
                    font-style: italic;
                }

                .quote-icon {
                    position: absolute;
                    left: 0;
                    top: 0;
                    color: #01507c;
                    font-size: 18px;
                    opacity: 0.85;
                }

                /* =====================================================
                   CONTROLS
                ===================================================== */

                .testimonial-controls {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 14px;
                    margin-top: 10px;
                }

                .testimonial-arrow {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    border: 1px solid #e4e7ec;
                    background: #fff;
                    color: #01507c;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
                    font-size: 12px;
                }

                .testimonial-arrow:hover {
                    background: #01507c;
                    color: #fff;
                    border-color: #01507c;
                    transform: translateY(-2px);
                }

                .testimonial-dots {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .testimonial-dot {
                    width: 8px;
                    height: 8px;
                    padding: 0;
                    border: none;
                    border-radius: 50%;
                    background: #d7dbe1;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .testimonial-dot.active {
                    width: 24px;
                    border-radius: 10px;
                    background: #01507c;
                }

                /* =====================================================
                   RESPONSIVE
                ===================================================== */

                @media (max-width: 991px) {
                    .testimonial-heading h1 {
                        font-size: 22px;
                    }

                    .testimonial-card {
                        padding: 22px 24px;
                        gap: 20px;
                    }

                    .testimonial-image-wrapper,
                    .testimonial-image-ring {
                        width: 95px;
                        height: 95px;
                    }

                    .testimonial-image,
                    .testimonial-placeholder {
                        width: 87px;
                        height: 87px;
                    }

                    .testimonial-placeholder {
                        font-size: 32px;
                    }

                    .testimonial-head-info h3 {
                        font-size: 16px;
                    }

                    .testimonial-review p {
                        font-size: 13px;
                    }
                }

                @media (max-width: 767px) {
                    .testimonial-section {
                        padding: 30px 0 25px;
                    }

                    .testimonial-heading h1 {
                        font-size: 20px;
                    }

                    .testimonial-card {
                        padding: 18px 18px;
                        gap: 15px;
                        border-radius: 14px;
                    }

                    .testimonial-image-wrapper,
                    .testimonial-image-ring {
                        width: 80px;
                        height: 80px;
                    }

                    .testimonial-image,
                    .testimonial-placeholder {
                        width: 72px;
                        height: 72px;
                    }

                    .testimonial-placeholder {
                        font-size: 26px;
                    }

                    .verified-badge {
                        width: 22px;
                        height: 22px;
                        font-size: 9px;
                    }

                    .testimonial-head {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 6px;
                    }

                    .testimonial-head-info h3 {
                        font-size: 15px;
                    }

                    .testimonial-head-info p {
                        font-size: 11px;
                    }

                    .testimonial-stars i {
                        font-size: 12px;
                    }

                    .testimonial-review {
                        padding-left: 22px;
                    }

                    .testimonial-review p {
                        font-size: 12.5px;
                        line-height: 1.65;
                    }

                    .quote-icon {
                        font-size: 15px;
                    }
                }

                @media (max-width: 480px) {
                    .testimonial-heading h1 {
                        font-size: 17px;
                    }

                    .testimonial-label {
                        font-size: 9.5px;
                        letter-spacing: 2px;
                    }

                    .testimonial-card {
                        padding: 14px 14px;
                        gap: 12px;
                        flex-direction: column;
                        text-align: center;
                    }

                    .testimonial-left {
                        display: flex;
                        justify-content: center;
                    }

                    .testimonial-image-wrapper,
                    .testimonial-image-ring {
                        width: 75px;
                        height: 75px;
                    }

                    .testimonial-image,
                    .testimonial-placeholder {
                        width: 67px;
                        height: 67px;
                    }

                    .testimonial-placeholder {
                        font-size: 22px;
                    }

                    .testimonial-head {
                        align-items: center;
                        text-align: center;
                    }

                    .testimonial-head-info {
                        text-align: center;
                        width: 100%;
                    }

                    .testimonial-stars {
                        justify-content: center;
                    }

                    .testimonial-review {
                        padding: 0 16px;
                        text-align: center;
                    }

                    .testimonial-review p {
                        font-size: 12px;
                    }

                    .quote-icon {
                        left: 0;
                        top: -2px;
                        font-size: 14px;
                    }

                    .testimonial-arrow {
                        width: 32px;
                        height: 32px;
                        font-size: 11px;
                    }
                }
                `}
            </style>
        </>
    );
}

export default Testimonial;