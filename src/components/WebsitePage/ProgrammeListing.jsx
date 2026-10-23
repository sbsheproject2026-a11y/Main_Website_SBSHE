 import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FILE_URL } from "../api";
import { getProgramme } from "./HomeService";

function ProgrammeListing() {
    const [data, setData] = useState([]);
    const sliderRef = useRef(null);
    const isHovered = useRef(false);

    useEffect(() => {
        loadProgramme();
    }, []);

    const loadProgramme = async () => {
        try {
            const result = await getProgramme(13);
            const activeData = (result || []).filter(
                (item) => item.isActive === 1 || item.isActive === true
            );
            setData(activeData);
        } catch (error) {
            console.log("Programme Error:", error);
            setData([]);
        }
    };

    // ✅ Infinite Loop ke liye data ko 3 baar repeat kar rahe hain
    const sliderData = data.length > 0 ? [...data, ...data, ...data] : [];

    // ✅ Auto-Scroll Logic (Smooth Infinite)
    useEffect(() => {
        if (data.length === 0) return;

        const interval = setInterval(() => {
            if (!isHovered.current && sliderRef.current) {
                const container = sliderRef.current;
                const card = container.querySelector('.programme-slide');
                if (!card) return;

                const cardWidth = card.offsetWidth;
                const gap = 20; // CSS gap ke barabar
                const scrollAmount = cardWidth + gap;
                const singleSetWidth = scrollAmount * data.length; // Ek set ki total width

                const nextScroll = container.scrollLeft + scrollAmount;

                // Agar hum dusre set ke end par pahuch gaye hain, toh bina animation ke wapas start par jump karo
                if (nextScroll >= singleSetWidth * 2) {
                    container.style.scrollBehavior = 'auto'; // Bina smooth ke jump
                    container.scrollLeft = nextScroll - singleSetWidth;
                    setTimeout(() => {
                        container.style.scrollBehavior = 'smooth'; // Wapas smooth on karo
                    }, 50);
                } else {
                    container.scrollTo({ left: nextScroll, behavior: 'smooth' });
                }
            }
        }, 3000); // Har 3 second me 1 card aage badhega

        return () => clearInterval(interval);
    }, [data]);

    const getImageUrl = (path) => {
        if (!path) return null;
        if (path.startsWith("http")) return path;
        return `${FILE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
    };

    // ✅ Manual Arrows Click Logic (Infinite)
    const scroll = (direction) => {
        if (sliderRef.current) {
            const container = sliderRef.current;
            const card = container.querySelector('.programme-slide');
            if (!card) return;

            const cardWidth = card.offsetWidth;
            const gap = 20;
            const scrollAmount = cardWidth + gap;
            const singleSetWidth = scrollAmount * data.length;

            const currentScroll = container.scrollLeft;
            const nextScroll = currentScroll + (direction === "right" ? scrollAmount : -scrollAmount);

            // Agar left me gaye aur start se pehle aa gaye
            if (nextScroll < 0) {
                container.style.scrollBehavior = 'auto';
                container.scrollLeft = singleSetWidth + nextScroll;
                setTimeout(() => { container.style.scrollBehavior = 'smooth'; }, 50);
            } 
            // Agar right me gaye aur end se aage nikal gaye
            else if (nextScroll >= singleSetWidth * 2) {
                container.style.scrollBehavior = 'auto';
                container.scrollLeft = nextScroll - singleSetWidth;
                setTimeout(() => { container.style.scrollBehavior = 'smooth'; }, 50);
            } 
            // Normal Scroll
            else {
                container.scrollTo({ left: nextScroll, behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            {data.length > 0 && (
                <section className="programme-section">
                    {/* HEADER */}
                    <div className="programme-section-header">
                        <div className="programme-section-label">
                            <span className="programme-label-line"></span>
                            <span>Schools of Studies</span>
                        </div>
                        <h2 className="programme-section-title">
                            Explore Our Programmes
                        </h2>
                        <p className="programme-section-subtitle">
                            Discover professional programmes designed to
                            build practical knowledge and support your
                            career goals.
                        </p>
                    </div>

                    {/* SLIDER */}
                    <div 
                        className="programme-slider-wrapper"
                        onMouseEnter={() => { isHovered.current = true; }} 
                        onMouseLeave={() => { isHovered.current = false; }} 
                        onTouchStart={() => { isHovered.current = true; }} 
                        onTouchEnd={() => { isHovered.current = false; }}
                    >
                        <button className="slider-nav-btn prev" onClick={() => scroll("left")} aria-label="Previous">
                            <i className="fas fa-chevron-left"></i>
                        </button>

                        <div className="programme-slider-container" ref={sliderRef}>
                            <div className="programme-track">
                                {sliderData.map((item, index) => {
                                    const originalUrl = getImageUrl(item.filePath);
                                    const optimizedImage = originalUrl 
                                        ? `https://wsrv.nl/?url=${encodeURIComponent(originalUrl)}&w=600&output=webp&q=80` 
                                        : null;

                                    return (
                                        <div className="programme-slide" key={`${item.id}-${index}`}>
                                            <div className="programme-card">
                                                
                                                {/* ✅ IMAGE FIX */}
                                                <div className="programme-image">
                                                    {item.filePath ? (
                                                        <img src={optimizedImage} alt={item.name} loading="lazy" />
                                                    ) : (
                                                        <div className="programme-placeholder"></div>
                                                    )}
                                                    <div className="programme-image-overlay"></div>
                                                </div>

                                                <div className="programme-content">
                                                    <div className="programme-card-line">
                                                        <span></span>
                                                    </div>

                                                    <Link to={`/course-details/${item.slug}`} state={{ id: item.id }} className="programme-name">
                                                        {item.name}
                                                    </Link>

                                                    <p className="programme-description">
                                                        {item.description || "Explore professional courses and develop practical skills for your career."}
                                                    </p>

                                                    <div className="programme-card-footer">
                                                        <Link to={`/course-details/${item.slug}`} state={{ id: item.id }} className="programme-link">
                                                            <span>Explore Courses</span>
                                                            <span className="programme-link-icon">
                                                                <i className="fas fa-arrow-right" aria-hidden="true"></i>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <button className="slider-nav-btn next" onClick={() => scroll("right")} aria-label="Next">
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </section>
            )}

            {/* CSS */}
            <style>
                {`
                .programme-section { width: 100%; padding: 70px 0 75px; background: linear-gradient(180deg, #ffffff 0%, #f7fbfd 100%); position: relative; overflow: hidden; }
                .programme-section-header { width: 100%; max-width: 800px; margin: 0 auto 38px; padding: 0 15px; text-align: center; position: relative; z-index: 2; }
                .programme-section-label { display: flex; align-items: center; justify-content: center; gap: 9px; margin-bottom: 10px; color: #07567f; font-size: 11px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase; }
                .programme-label-line { width: 30px; height: 3px; border-radius: 20px; background: #ffd33d; }
                .programme-section-title { margin: 0; color: #063d59; font-size: 34px; line-height: 1.25; font-weight: 800; }
                .programme-section-subtitle { max-width: 650px; margin: 12px auto 0; color: #687780; font-size: 14px; line-height: 1.75; }

                .programme-slider-wrapper { position: relative; width: 100%; max-width: 1400px; margin: 0 auto; padding: 0 20px; z-index: 2; }
                
                .programme-slider-container { 
                    width: 100%; 
                    overflow-x: auto; 
                    scroll-snap-type: x mandatory; 
                    scrollbar-width: none; 
                    -ms-overflow-style: none; 
                    padding: 10px 0 25px;
                    scroll-behavior: smooth;
                }
                .programme-slider-container::-webkit-scrollbar { display: none; }

                .programme-track { 
                    display: flex; 
                    gap: 20px; 
                    padding: 0 5px; 
                }

                .programme-slide { 
                    flex: 0 0 calc(33.333% - 13.33px); 
                    scroll-snap-align: start; 
                }

                .programme-card { width: 100%; height: 100%; min-height: 445px; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(1, 80, 124, 0.09); box-shadow: 0 8px 28px rgba(6, 42, 60, 0.08); transition: transform 0.35s ease, box-shadow 0.35s ease; display: flex; flex-direction: column; position: relative; }
                .programme-card:hover { transform: translateY(-8px); box-shadow: 0 18px 42px rgba(1, 80, 124, 0.16); }
                
                /* ✅ IMAGE FIX */
                .programme-image { 
                    width: 100%; 
                    height: 220px; 
                    flex-shrink: 0; 
                    position: relative; 
                    overflow: hidden; 
                    background: #f0f4f7; 
                }
                .programme-image img { 
                    width: 100%; 
                    height: 100%; 
                    display: block; 
                    object-fit: cover; 
                    object-position: center; 
                    transition: transform 0.6s ease; 
                }
                .programme-card:hover .programme-image img { transform: scale(1.07); }
                
                .programme-image-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(6,42,60,0.48) 100%); }
                .programme-content { flex: 1; display: flex; flex-direction: column; padding: 20px 21px 21px; }
                .programme-card-line { width: 100%; height: 3px; margin-bottom: 13px; }
                .programme-card-line span { display: block; width: 42px; height: 3px; background: #ffd33d; border-radius: 20px; transition: width 0.35s ease; }
                .programme-card:hover .programme-card-line span { width: 70px; }

                /* ✅ TITLE (programme-name) HOVER FIX */
                .programme-name { 
                    display: block; 
                    color: #063d59; 
                    text-decoration: none; 
                    font-size: 19px; 
                    line-height: 1.4; 
                    font-weight: 800; 
                    margin: 0 0 10px; 
                    min-height: 53px; 
                    transition: color 0.25s ease; /* Added Smooth Transition */
                }
                .programme-name:hover {
                    color: #07567f; /* Color change on hover */
                    text-decoration: none;
                }

                .programme-description { color: #68747b; font-size: 13px; line-height: 1.7; margin: 0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; min-height: 66px; }
                .programme-card-footer { margin-top: auto; padding-top: 20px; border-top: 1px solid #edf1f3; }
                
                /* ✅ EXPLORE COURSES HOVER FIX */
                .programme-link { 
                    display: inline-flex; 
                    align-items: center; 
                    gap: 9px; 
                    color: #07567f; 
                    text-decoration: none; 
                    font-size: 12px; 
                    font-weight: 800; 
                    transition: color 0.25s ease; /* Added Smooth Transition */
                }
                .programme-link:hover { 
                    color: #e2a900; /* Yellow color on hover */
                    text-decoration: none; 
                }
                .programme-link-icon { width: 27px; height: 27px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: #eaf4f8; color: #07567f; transition: all 0.25s ease; }
                .programme-link:hover .programme-link-icon { background: #07567f; color: #ffffff; transform: translateX(4px); }

                .slider-nav-btn { position: absolute; top: 50%; transform: translateY(-50%); width: 45px; height: 45px; border-radius: 50%; background: #ffffff; color: #07567f; border: 1px solid rgba(1, 80, 124, 0.15); box-shadow: 0 4px 15px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 10; transition: all 0.2s ease; }
                .slider-nav-btn:hover { background: #07567f; color: #ffffff; }
                .slider-nav-btn.prev { left: -15px; }
                .slider-nav-btn.next { right: -15px; }

                @media (max-width: 991px) {
                    .programme-slide { flex: 0 0 calc(50% - 10px); } 
                    .slider-nav-btn { display: none; }
                }
                @media (max-width: 767px) {
                    .programme-slide { flex: 0 0 100%; } 
                    .programme-track { gap: 15px; }
                    .programme-card { min-height: 415px; }
                }
                `}
            </style>
        </>
    );
}

export default ProgrammeListing;