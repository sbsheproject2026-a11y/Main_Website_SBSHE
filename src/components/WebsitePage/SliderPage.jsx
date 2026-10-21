 import React, { useEffect, useState } from "react";
// ✅ Sirf data fetch karne wali API import rakhi hai
import { getWebsiteContentdata } from "./HomeService";
import { FILE_URL } from "../api";

function SliderPage() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        loadPageData();
    }, []);

    const loadPageData = async () => {
        try {
            const [slidersData] = await Promise.all([getWebsiteContentdata(119)]);
            setSliders(
                (slidersData || []).filter((item) => item.isActive === 1)
            );
        } catch (error) {
            console.log("Page data error:", error);
        }
    };

    const slides = sliders.flatMap((item) => 
        item.productCategoryDocuments?.map((doc) => FILE_URL + doc.fileupload) || []
    );

    useEffect(() => {
        setActiveSlide(0);
    }, [sliders]);

    // Auto slide interval
    useEffect(() => {
        if (slides.length <= 1) return;
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [slides]);

    return (
        <>
            <div className="hero-slider-section">
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
            </div>

            {/* ✅ Clean CSS without Form */}
            <style>{`
                /* =========================================================
                   MAIN SLIDER CONTAINER (Full Width)
                ========================================================= */
                .hero-slider-section {
                    width: 100%;
                    padding: 0;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                }

                .hero-slider-box {
                    width: 100%;
                    max-width: 1400px; /* Screen par slide ki max width */
                    margin: 0 auto;
                    position: relative;
                    height: 580px;
                    overflow: hidden;
                    box-shadow: 0 15px 40px rgba(15, 23, 42, 0.15);
                    border-radius: 12px; /* Form hatne ke baad thoda rounded look acha lagta hai */
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

                /* INDICATORS (Dots) */
                .hero-slider-box .carousel-indicators {
                    bottom: 20px;
                    margin-bottom: 0;
                    z-index: 5;
                }

                .hero-slider-box .carousel-indicators li {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.55);
                    border: none;
                    margin: 0 6px;
                    cursor: pointer;
                    transition: 0.25s ease;
                }

                .hero-slider-box .carousel-indicators li.active {
                    background: #ff6600;
                    width: 30px; /* Active dot ko pill shape diya hai */
                    border-radius: 50px;
                }

                /* =========================================================
                   RESPONSIVE
                ========================================================= */
                @media (max-width: 1199px) {
                    .hero-slider-box {
                        height: 500px;
                    }
                }

                @media (max-width: 991px) {
                    .hero-slider-section {
                        padding: 0 14px;
                    }
                    .hero-slider-box {
                        height: 400px;
                    }
                }

                @media (max-width: 767px) {
                    .hero-slider-box {
                        height: 340px;
                        border-radius: 8px;
                    }
                    .hero-slider-box .carousel-indicators li {
                        width: 8px;
                        height: 8px;
                        margin: 0 4px;
                    }
                    .hero-slider-box .carousel-indicators li.active {
                        width: 20px;
                    }
                }

                @media (max-width: 480px) {
                    .hero-slider-section {
                        padding: 0 10px;
                    }
                    .hero-slider-box {
                        height: 250px;
                    }
                }
            `}</style>
        </>
    );
}

export default SliderPage;