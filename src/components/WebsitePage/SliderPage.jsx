 import React, { useEffect, useState, useMemo } from "react";
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

    // ✅ srNo safely nikalne ke liye (multiple field names support)
    const getSrNo = (doc) => {
        const val =
            doc?.srNo ??
            doc?.srno ??
            doc?.serialNo ??
            doc?.sortOrder ??
            doc?.order ??
            0;
        return Number(val) || 0;
    };

    // ✅ srNo ke hisaab se sort — NO .reverse()
    const slides = useMemo(() => {
        return sliders.flatMap((item) =>
            (item.productCategoryDocuments || [])
                .slice()
                .sort((a, b) => getSrNo(a) - getSrNo(b))
                .map((doc) => ({
                    srNo: getSrNo(doc),
                    image: FILE_URL + doc.fileupload,
                    text: doc.altTag || "",
                }))
        );
    }, [sliders]);

    useEffect(() => {
        setActiveSlide(0);
    }, [slides]);

    useEffect(() => {
        if (slides.length <= 1) return;
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [slides]);

    const parseSlideText = (rawText) => {
        if (!rawText) return { topText: "", mainText: "", bottomText: "", plainText: "" };

        if (rawText.includes("|")) {
            const parts = rawText.split("|");
            return {
                topText: parts[0]?.trim() || "",
                mainText: parts[1]?.trim() || (parts.length === 1 ? parts[0]?.trim() : ""),
                bottomText: parts[2]?.trim() || "",
                plainText: rawText.replace(/\|/g, " ").replace(/<[^>]+>/g, ""),
            };
        }

        let textWithBreaks = rawText.replace(/<br\s*\/?>/gi, "\n");
        const doc = new DOMParser().parseFromString(textWithBreaks, "text/html");
        const cleanText = doc.body.textContent || "";
        const lines = cleanText
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line.length > 0);

        let topText = "",
            mainText = "",
            bottomText = "";

        if (lines.length === 1) {
            mainText = lines[0];
        } else if (lines.length === 2) {
            topText = lines[0];
            mainText = lines[1];
        } else if (lines.length >= 3) {
            topText = lines[0];
            mainText = lines[1];
            bottomText = lines.slice(2).join(" ");
        }

        return { topText, mainText, bottomText, plainText: cleanText.replace(/\n/g, " ") };
    };

    return (
        <>
            <div className="hero-slider-section">
                <div className="hero-slider-box">
                    <div id="header-carousel" className="carousel slide carousel-fade">
                        {/* ✅ NO .reverse() — srNo order me hi rahega */}
                        <div className="carousel-indicators">
                            {slides.map((_, index) => (
                                <button
                                    key={`slide-indicator-${index}`}
                                    type="button"
                                    className={activeSlide === index ? "active" : ""}
                                    onClick={() => setActiveSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        <div className="carousel-inner">
                            {slides.map((slide, index) => {
                                const { topText, mainText, bottomText, plainText } =
                                    parseSlideText(slide.text);
                                const isFirstSlide = index === 0;

                                return (
                                    <div
                                        key={`slide-${slide.srNo}-${index}`}
                                        className={`carousel-item ${activeSlide === index ? "active" : ""}`}
                                    >
                                        <img
                                            src={slide.image}
                                            alt={plainText || `Slide ${index + 1}`}
                                            className="header-slide-image"
                                            loading={isFirstSlide ? "eager" : "lazy"}
                                            fetchPriority={isFirstSlide ? "high" : "auto"}
                                            width="1920"
                                            height="800"
                                            onError={(e) => {
                                                e.target.style.display = "none";
                                            }}
                                        />

                                        {slide.text && (
                                            <div className="slider-overlay">
                                                <div className="slider-content">
                                                    {topText && (
                                                        <span className="slider-top-text">{topText}</span>
                                                    )}
                                                    {mainText && (
                                                        <h2 className="slider-main-text">{mainText}</h2>
                                                    )}
                                                    {bottomText && (
                                                        <p className="slider-bottom-text">{bottomText}</p>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .hero-slider-section { width: 100%; padding: 0; box-sizing: border-box; display: flex; justify-content: center; }

                /* ✅ 1920x800 poster ke liye aspect-ratio — no crop, no stretch */
                .hero-slider-box {
                    width: 100%;
                    max-width: 1920px;
                    margin: 0 auto;
                    position: relative;
                    aspect-ratio: 1920 / 800;
                    overflow: hidden;
                    box-shadow: 0 15px 40px rgba(15, 23, 42, 0.15);
                    border-radius: 0px;
                    background: #0a6a9c;
                }

                .hero-slider-box .carousel,
                .hero-slider-box .carousel-inner,
                .hero-slider-box .carousel-item {
                    height: 100%;
                    width: 100%;
                    position: relative;
                }

                .header-slide-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    display: block;
                    background-color: #e2e8f0;
                }

                .slider-overlay {
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    background: linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%);
                    display: flex;
                    align-items: center;
                    z-index: 2;
                }

                .slider-content {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 50px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 12px;
                }

                .slider-top-text {
                    display: inline-block;
                    background: #ff6600;
                    color: #ffffff;
                    font-size: 14px;
                    font-weight: 700;
                    padding: 6px 16px;
                    border-radius: 4px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 5px;
                    box-shadow: 0 4px 10px rgba(255, 102, 0, 0.4);
                    animation: slideUpFade 0.8s ease forwards;
                }

                .slider-main-text {
                    color: #ffffff;
                    font-size: 52px;
                    font-weight: 800;
                    line-height: 1.2;
                    font-family: "Baskerville", "Times New Roman", Georgia, serif;
                    text-shadow: 2px 4px 10px rgba(0, 0, 0, 0.6);
                    max-width: 750px;
                    margin: 0;
                    animation: slideUpFade 0.8s ease 0.2s forwards;
                    opacity: 0;
                }

                .slider-bottom-text {
                    color: #e2e8f0;
                    font-size: 18px;
                    font-weight: 500;
                    max-width: 600px;
                    margin: 0;
                    line-height: 1.5;
                    text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
                    animation: slideUpFade 0.8s ease 0.4s forwards;
                    opacity: 0;
                }

                @keyframes slideUpFade {
                    from { opacity: 0; transform: translateY(30px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .hero-slider-box .carousel-indicators {
                    bottom: 20px;
                    margin-bottom: 0;
                    z-index: 5;
                    display: flex;
                    justify-content: center;
                    gap: 6px;
                }

                .hero-slider-box .carousel-indicators button {
                    width: 12px; height: 12px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.55);
                    border: none;
                    padding: 0;
                    cursor: pointer;
                    transition: 0.25s ease;
                }

                .hero-slider-box .carousel-indicators button.active {
                    background: #ff6600;
                }

                @media (max-width: 1199px) {
                    .slider-main-text { font-size: 44px; }
                    .slider-bottom-text { font-size: 16px; }
                }

                @media (max-width: 991px) {
                    .hero-slider-section { padding: 0 14px; }
                    .slider-content { padding: 0 30px; }
                    .slider-main-text { font-size: 36px; }
                    .slider-top-text { font-size: 12px; padding: 5px 12px; }
                    .slider-bottom-text { font-size: 15px; }
                }

                @media (max-width: 767px) {
                    /* ✅ FIX: Yahan se min-height hataya hai taaki image side se cut na ho */
                    .hero-slider-box { border-radius: 0px; }
                    .slider-overlay {
                        background: linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 100%);
                    }
                    .slider-content { padding: 0 20px; gap: 8px; align-items: center; }
                    .slider-main-text { font-size: 28px; text-align: center; max-width: 100%; }
                    .slider-top-text { font-size: 10px; padding: 4px 10px; margin: 0 auto 5px auto; }
                    .slider-bottom-text { font-size: 12px; max-width: 100%; text-align: center; }
                    .hero-slider-box .carousel-indicators button { width: 8px; height: 8px; }
                    .hero-slider-box .carousel-indicators button.active { width: 12px; }
                }

                @media (max-width: 480px) {
                    .hero-slider-section { padding: 0 10px; }
                
                    .slider-main-text { font-size: 22px; }
                    .slider-top-text { font-size: 9px; }
                    .slider-bottom-text { font-size: 11px; }
                }
            `}</style>
        </>
    );
}

export default SliderPage;