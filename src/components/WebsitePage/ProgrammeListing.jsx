 import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
import { FILE_URL } from "../api";
import { getProgramme } from "./HomeService";

function ProgrammeListing() {
    const [data, setData] = useState([]);

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

    const getImageUrl = (path) => {
        if (!path) return null;
        if (path.startsWith("http")) return path;
        return `${FILE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
    };

    // ✅ Duplicate data — smooth loop ke liye
    const sliderData =
        data.length > 0
            ? [...data, ...data]
            : [];

    return (
        <>
            {data.length > 0 && (
                <section className="programme-section">

                    {/* =================================================
                        SECTION HEADER
                    ================================================== */}

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


                    {/* =================================================
                        SLIDER
                    ================================================== */}

                    <div className="programme-slider">

                        <div className="programme-track">

                            {sliderData.map((item, index) => (

                                <div
                                    className="programme-slide"
                                    key={`${item.id}-${index}`}
                                >

                                    {/* =================================================
                                        CARD
                                    ================================================== */}

                                    <div className="programme-card">

                                        {/* ================= IMAGE ================= */}

                                        <div className="programme-image">

                                            {item.filePath ? (
                                                <img
                                                    src={getImageUrl(item.filePath)}
                                                    alt={item.name || "Programme"}
                                                />
                                            ) : (
                                                <div className="programme-placeholder"></div>
                                            )}

                                            <div className="programme-image-overlay"></div>
{/* 
                                            <span className="course-badge">
                                                Course {item.courseCount || 0}
                                            </span> */}

                                        </div>


                                        {/* ================= CONTENT ================= */}

                                        <div className="programme-content">

                                            <div className="programme-card-line">
                                                <span></span>
                                            </div>

                                            <Link
                                                to={`/course-details/${item.slug}`}
                                                state={{ id: item.id }}
                                                className="programme-name"
                                            >
                                                {item.name}
                                            </Link>

                                            <p className="programme-description">
                                                {item.description ||
                                                    "Explore professional courses and develop practical skills for your career."}
                                            </p>

                                            <div className="programme-card-footer">

                                                <Link
                                                    to={`/course-details/${item.slug}`}
                                                    state={{ id: item.id }}
                                                    className="programme-link"
                                                >
                                                    <span>
                                                        Explore Courses
                                                    </span>

                                                    <span className="programme-link-icon">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </span>
                                                </Link>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>
            )}


            {/* =========================================================
                CSS
            ========================================================== */}

            <style>
                {`

                /* =====================================================
                   PROGRAMME SECTION
                ====================================================== */

                .programme-section {
                    width: 100%;
                    padding: 70px 0 75px;

                    background:
                        linear-gradient(
                            180deg,
                            #ffffff 0%,
                            #f7fbfd 100%
                        );

                    position: relative;
                    overflow: hidden;
                }


                .programme-section::before {
                    content: "";

                    position: absolute;

                    width: 400px;
                    height: 400px;

                    top: -220px;
                    right: -150px;

                    border-radius: 50%;

                    background: rgba(1, 80, 124, 0.045);

                    pointer-events: none;
                }


                .programme-section::after {
                    content: "";

                    position: absolute;

                    width: 300px;
                    height: 300px;

                    bottom: -180px;
                    left: -140px;

                    border-radius: 50%;

                    background: rgba(255, 211, 61, 0.07);

                    pointer-events: none;
                }


                /* =====================================================
                   SECTION HEADER
                ====================================================== */

                .programme-section-header {
                    width: 100%;
                    max-width: 800px;
                    margin: 0 auto 38px;
                    padding: 0 15px;
                    text-align: center;
                    position: relative;
                    z-index: 2;
                    box-sizing: border-box;
                }


                .programme-section-label {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 9px;
                    margin-bottom: 10px;
                    color: #07567f;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 2.5px;
                    text-transform: uppercase;
                }


                .programme-label-line {
                    width: 30px;
                    height: 3px;
                    border-radius: 20px;
                    background: #ffd33d;
                }


                .programme-section-title {
                    margin: 0;
                    color: #063d59;
                    font-size: 34px;
                    line-height: 1.25;
                    font-weight: 800;
                    letter-spacing: -0.4px;
                }


                .programme-section-subtitle {
                    max-width: 650px;
                    margin: 12px auto 0;
                    color: #687780;
                    font-size: 14px;
                    line-height: 1.75;
                    font-weight: 400;
                }


                /* =====================================================
                   SLIDER
                ====================================================== */

                .programme-slider {
                    width: 100%;
                    overflow: hidden;
                    position: relative;
                    padding: 10px 0 25px;
                    z-index: 2;
                }


                /* =====================================================
                   TRACK — smooth continuous animation
                ====================================================== */

                .programme-track {
                    display: flex;
                    width: max-content;
                    align-items: stretch;

                    animation: programmeSlide 45s linear infinite;

                    will-change: transform;
                }


                /* ✅ Hover pe ruk jaye */

                .programme-slider:hover .programme-track {
                    animation-play-state: paused;
                }


                @keyframes programmeSlide {

                    from {
                        transform: translateX(0);
                    }

                    to {
                        transform: translateX(-50%);
                    }

                }


                /* =====================================================
                   SLIDE
                ====================================================== */

                .programme-slide {
                    width: 33.333vw;
                    max-width: 400px;
                    min-width: 320px;
                    padding: 0 10px;
                    box-sizing: border-box;
                    flex-shrink: 0;
                }


                /* =====================================================
                   CARD
                ====================================================== */

                .programme-card {
                    width: 100%;
                    height: 100%;
                    min-height: 445px;
                    background: #ffffff;
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid rgba(1, 80, 124, 0.09);
                    box-shadow: 0 8px 28px rgba(6, 42, 60, 0.08);
                    transition: transform 0.35s ease, box-shadow 0.35s ease;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                }


                .programme-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 18px 42px rgba(1, 80, 124, 0.16);
                }


                /* =====================================================
                   IMAGE
                ====================================================== */

                .programme-image {
                    width: 100%;
                    height: 220px;
                    flex-shrink: 0;
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(135deg, #eaf4f8, #f8fafb);
                }


                .programme-image img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: cover;
                    object-position: center;
                    transition: transform 0.6s ease;
                }


                .programme-card:hover .programme-image img {
                    transform: scale(1.07);
                }


                .programme-placeholder {
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, #eaf4f8 0%, #f7fbfd 50%, #e4f0f5 100%);
                }


                .programme-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(6,42,60,0.48) 100%);
                    pointer-events: none;
                }


                /* =====================================================
                   COURSE BADGE
                ====================================================== */

                .course-badge {
                    position: absolute;
                    left: 16px;
                    bottom: 15px;
                    z-index: 3;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    white-space: nowrap;
                    min-width: 78px;
                    height: 30px;
                    padding: 0 13px;
                    box-sizing: border-box;
                    border-radius: 30px;
                    background: #07567f;
                    color: #ffffff;
                    font-size: 11px;
                    font-weight: 800;
                    line-height: 1;
                    letter-spacing: 0.2px;
                    box-shadow: 0 5px 15px rgba(1,80,124,0.28);
                }


                /* =====================================================
                   CONTENT
                ====================================================== */

                .programme-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    padding: 20px 21px 21px;
                    position: relative;
                    box-sizing: border-box;
                }


                .programme-card-line {
                    width: 100%;
                    height: 3px;
                    margin-bottom: 13px;
                    overflow: hidden;
                }


                .programme-card-line span {
                    display: block;
                    width: 42px;
                    height: 3px;
                    background: #ffd33d;
                    border-radius: 20px;
                    transition: width 0.35s ease;
                }


                .programme-card:hover .programme-card-line span {
                    width: 70px;
                }


                .programme-name {
                    display: block;
                    color: #063d59;
                    text-decoration: none;
                    font-size: 19px;
                    line-height: 1.4;
                    font-weight: 800;
                    margin: 0 0 10px;
                    min-height: 53px;
                    transition: color 0.25s ease;
                }


                .programme-name:hover {
                    color: #07567f;
                    text-decoration: none;
                }


                .programme-description {
                    color: #68747b;
                    font-size: 13px;
                    line-height: 1.7;
                    margin: 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    min-height: 66px;
                }


                .programme-card-footer {
                    margin-top: auto;
                    padding-top: 20px;
                    border-top: 1px solid #edf1f3;
                }


                .programme-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 9px;
                    color: #07567f;
                    text-decoration: none;
                    font-size: 12px;
                    font-weight: 800;
                    transition: color 0.25s ease;
                }


                .programme-link:hover {
                    color: #e2a900;
                    text-decoration: none;
                }


                .programme-link-icon {
                    width: 27px;
                    height: 27px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: #eaf4f8;
                    color: #07567f;
                    transition: all 0.25s ease;
                }


                .programme-link:hover .programme-link-icon {
                    background: #07567f;
                    color: #ffffff;
                    transform: translateX(4px);
                }


                .programme-link-icon i {
                    font-size: 10px;
                }


                /* =====================================================
                   LAPTOP
                ====================================================== */

                @media (max-width: 1199px) {
                    .programme-section {
                        padding: 60px 0 65px;
                    }

                    .programme-section-title {
                        font-size: 31px;
                    }

                    .programme-track {
                        animation-duration: 48s;
                    }

                    .programme-slide {
                        width: 45vw;
                        min-width: 45vw;
                        max-width: none;
                    }

                    .programme-image {
                        height: 210px;
                    }
                }


                /* =====================================================
                   TABLET
                ====================================================== */

                @media (max-width: 991px) {
                    .programme-section {
                        padding: 55px 0 60px;
                    }

                    .programme-section-header {
                        margin-bottom: 30px;
                    }

                    .programme-section-title {
                        font-size: 29px;
                    }

                    .programme-section-subtitle {
                        font-size: 13px;
                    }

                    .programme-track {
                        animation-duration: 45s;
                    }

                    .programme-slide {
                        width: 50vw;
                        min-width: 50vw;
                        padding: 0 8px;
                    }

                    .programme-card {
                        min-height: 430px;
                        border-radius: 15px;
                    }

                    .programme-image {
                        height: 205px;
                    }

                    .programme-name {
                        font-size: 18px;
                    }
                }


                /* =====================================================
                   MOBILE
                ====================================================== */

                @media (max-width: 767px) {
                    .programme-section {
                        padding: 42px 0 48px;
                    }

                    .programme-section-header {
                        padding: 0 18px;
                        margin-bottom: 25px;
                    }

                    .programme-section-label {
                        font-size: 9px;
                        letter-spacing: 2px;
                    }

                    .programme-label-line {
                        width: 24px;
                        height: 2px;
                    }

                    .programme-section-title {
                        font-size: 25px;
                        line-height: 1.3;
                    }

                    .programme-section-subtitle {
                        margin-top: 9px;
                        font-size: 12px;
                        line-height: 1.7;
                    }

                    .programme-slider {
                        padding: 5px 0 20px;
                    }

                    .programme-track {
                        animation-duration: 42s;
                    }

                    .programme-slide {
                        width: 85vw;
                        min-width: 85vw;
                        padding: 0 7px;
                    }

                    .programme-card {
                        min-height: 415px;
                        border-radius: 15px;
                    }

                    .programme-image {
                        height: 195px;
                    }

                    .course-badge {
                        left: 13px;
                        bottom: 13px;
                        min-width: 72px;
                        height: 28px;
                        padding: 0 11px;
                        font-size: 10px;
                    }

                    .programme-content {
                        padding: 18px;
                    }

                    .programme-card-line {
                        margin-bottom: 11px;
                    }

                    .programme-name {
                        font-size: 17px;
                        line-height: 1.4;
                        min-height: 48px;
                        margin-bottom: 8px;
                    }

                    .programme-description {
                        font-size: 12.5px;
                        line-height: 1.65;
                        min-height: 62px;
                    }

                    .programme-card-footer {
                        padding-top: 17px;
                    }

                    .programme-link {
                        font-size: 11px;
                    }

                    .programme-link-icon {
                        width: 25px;
                        height: 25px;
                    }
                }


                /* =====================================================
                   SMALL MOBILE
                ====================================================== */

                @media (max-width: 480px) {
                    .programme-section {
                        padding: 35px 0 42px;
                    }

                    .programme-section-title {
                        font-size: 22px;
                    }

                    .programme-section-subtitle {
                        font-size: 11.5px;
                    }

                    .programme-slide {
                        width: 90vw;
                        min-width: 90vw;
                        padding: 0 6px;
                    }

                    .programme-card {
                        min-height: 400px;
                        border-radius: 14px;
                    }

                    .programme-image {
                        height: 180px;
                    }

                    .course-badge {
                        left: 12px;
                        bottom: 12px;
                        height: 27px;
                        min-width: 70px;
                        padding: 0 10px;
                        font-size: 10px;
                    }

                    .programme-content {
                        padding: 17px;
                    }

                    .programme-name {
                        font-size: 16px;
                        min-height: 45px;
                    }

                    .programme-description {
                        font-size: 12px;
                        line-height: 1.65;
                        -webkit-line-clamp: 3;
                    }
                }

                `}
            </style>
        </>
    );
}

export default ProgrammeListing;