 import React, { useEffect, useState } from "react";
import { getWebsiteContent } from "./HomeService";
import { Link } from "react-router-dom";

function WhyChosseUs() {
    const [whyChosseUs, setWhychosseus] = useState([]);

    useEffect(() => {
        loadPageData();
    }, []);

    const loadPageData = async () => {
        try {
            const [data23, data43] = await Promise.all([
                getWebsiteContent(23),
                getWebsiteContent(43),
            ]);

            // ✅ Dono ka data merge + filter
            const merged = [
                ...(data23 || []),
                ...(data43 || []),
            ].filter((item) => item.is_active === true);

            setWhychosseus(merged);
        } catch (error) {
            console.log("Page data error:", error);
            setWhychosseus([]);
        }
    };

    // =========================================================
    // ✅ Description ko PARAGRAPHS me convert karo (200 words limit)
    // =========================================================
    const getLimitedDescription = (html, wordLimit = 100) => {
        if (!html) return { paragraphs: [], truncated: false };

        // HTML tags remove karo
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;

        // ✅ Original HTML se paragraphs nikalo
        // (p, li, br → paragraphs)
        const paragraphs = [];
        let currentText = "";
        let wordCount = 0;
        let truncated = false;

        // Saare elements ko traverse karo
        const walker = document.createTreeWalker(
            tempDiv,
            NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
            null,
            false
        );

        const blockTags = ["P", "DIV", "LI", "BR", "H1", "H2", "H3", "H4", "H5", "H6"];
        const nodes = [];
        let node;

        while ((node = walker.nextNode())) {
            if (node.nodeType === Node.ELEMENT_NODE) {
                if (blockTags.includes(node.tagName)) {
                    nodes.push({ type: "block" });
                }
            } else if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent.trim();
                if (text) {
                    nodes.push({ type: "text", value: text });
                }
            }
        }

        // ✅ Paragraphs banao
        for (const n of nodes) {
            if (n.type === "block") {
                if (currentText.trim()) {
                    paragraphs.push(currentText.trim());
                    currentText = "";
                }
                continue;
            }

            if (n.type === "text") {
                const words = n.value.split(/\s+/);

                for (const word of words) {
                    if (wordCount >= wordLimit) {
                        truncated = true;
                        break;
                    }
                    currentText += (currentText ? " " : "") + word;
                    wordCount++;
                }

                if (truncated) break;
            }
        }

        // Last paragraph bhi push karo
        if (currentText.trim()) {
            paragraphs.push(currentText.trim());
        }

        return { paragraphs, truncated };
    };

    // ✅ Read More link — menu_id ke hisaab se
    const getReadMoreLink = (item) => {
        // menu 23 → chairman-message
        if (item.menu === 23 || item.menu_id === 23) {
            return "/about/chairman-message";
        }

        // menu 43 → intro-shaheed-bhagat-singh
        if (item.menu === 43 || item.menu_id === 43) {
            return "/about/intro-shaheed-bhagat-singh";
        }

        // Fallback
        return `/about/${item.menu_slug || ""}`;
    };

    // ✅ Agar koi data nahi hai to kuch bhi render mat karo
    if (!whyChosseUs || whyChosseUs.length === 0) {
        return null;
    }

    return (
        <>
            {/* ✅ Har item ka apna section */}
            {whyChosseUs.map((item, index) => {

                // ✅ Image URL check
                const imageUrl = item?.file_url || item?.file || "";
                const hasImage = Boolean(imageUrl && imageUrl.trim() !== "");

                // ✅ Description — paragraphs + truncated
                const { paragraphs, truncated } = getLimitedDescription(
                    item.description,
                    100
                );

                const readMoreLink = getReadMoreLink(item);

                return (
                    <section
                        className="why-choose-section"
                        key={item.id ?? index}
                    >

                        {/* BACKGROUND DECORATION */}
                        <div className="why-bg-circle why-bg-circle-one"></div>
                        <div className="why-bg-circle why-bg-circle-two"></div>


                        <div className="why-choose-container">

                            {/* ✅ Layout class — image hai ya nahi */}
                            <div
                                className={
                                    hasImage
                                        ? "why-choose-row"
                                        : "why-choose-row why-choose-row-no-image"
                                }
                            >

                                {/* =================================================
                                    IMAGE — sirf tab jab image ho
                                ================================================== */}
                                {hasImage && (
                                    <div className="why-choose-image-col">

                                        <div className="why-choose-image-wrapper">

                                            <span className="image-decoration decoration-one"></span>

                                            <span className="image-decoration decoration-two"></span>

                                            <span className="image-dots image-dots-one"></span>
                                            <span className="image-dots image-dots-two"></span>


                                            <img
                                                src={imageUrl}
                                                alt={
                                                    item.name ||
                                                    "Shaheed Bhagat Singh Health and Education"
                                                }
                                                className="why-choose-image"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = "none";
                                                }}
                                            />

                                        </div>

                                    </div>
                                )}


                                {/* =================================================
                                    CONTENT — always show
                                ================================================== */}
                                <div className="why-choose-content-col">

                                    <div className="why-choose-content">

                                        <div className="section-label">

                                            <span className="label-line"></span>

                                            <span className="label-text">
                                                {item.menu_name || "WHY CHOOSE US"}
                                            </span>

                                        </div>


                                        <h2 className="why-choose-title">
                                            {item.name}
                                        </h2>


                                        <div className="heading-decoration">

                                            <span className="heading-dot"></span>

                                            <span className="heading-line"></span>

                                            <span className="heading-dot"></span>

                                        </div>


                                        {/* ✅ Description — PROPER PARAGRAPHS me */}
                                        <div className="about-description">
                                            {paragraphs.map((para, i) => (
                                                <p key={i}>{para}</p>
                                            ))}

                                            {truncated && (
                                                <p className="description-truncated">
                                                     
                                                </p>
                                            )}
                                        </div>


                                        {/* ✅ Read More button */}
                                        {truncated && (
                                            <Link
                                                to={readMoreLink}
                                                className="read-more-btn"
                                            >
                                                <span>Read More</span>
                                                <i className="fas fa-arrow-right"></i>
                                            </Link>
                                        )}


                                        <div className="why-choose-footer">

                                            <span className="footer-line"></span>

                                            <span className="footer-dot"></span>

                                            <span className="footer-small-line"></span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>
                );
            })}


            {/* =====================================================
                CSS
            ====================================================== */}

            <style>
                {`

                /* =====================================================
                   MAIN SECTION
                ====================================================== */

                .why-choose-section {
                    width: 100%;

                    padding: 75px 0;

                    background: #ffffff;

                    position: relative;

                    overflow: hidden;
                }


                /* =====================================================
                   BACKGROUND CIRCLES
                ====================================================== */

                .why-bg-circle {
                    position: absolute;

                    border-radius: 50%;

                    pointer-events: none;

                    z-index: 0;
                }


                .why-bg-circle-one {
                    width: 400px;

                    height: 400px;

                    right: -230px;

                    top: -200px;

                    background: rgba(7, 86, 127, 0.035);
                }


                .why-bg-circle-two {
                    width: 300px;

                    height: 300px;

                    left: -190px;

                    bottom: -170px;

                    background: rgba(255, 211, 61, 0.045);
                }


                /* =====================================================
                   CONTAINER
                ====================================================== */

                .why-choose-container {
                    width: 100%;

                    max-width: 1200px;

                    margin: 0 auto;

                    padding-left: 15px;

                    padding-right: 15px;

                    box-sizing: border-box;

                    position: relative;

                    z-index: 2;
                }


                /* =====================================================
                   ROW — 2 Columns (image + content)
                ====================================================== */

                .why-choose-row {
                    width: 100%;

                    display: grid;

                    grid-template-columns:
                        minmax(0, 0.95fr)
                        minmax(0, 1.05fr);

                    align-items: center;

                    gap: 70px;
                }


                /* ✅ ROW WITHOUT IMAGE — content full width, LEFT aligned */
                .why-choose-row-no-image {
                    grid-template-columns: 1fr;

                    gap: 0;

                    justify-items: start;
                }

                .why-choose-row-no-image .why-choose-content-col {
                    max-width: 100%;

                    width: 100%;

                    text-align: left;
                }

                .why-choose-row-no-image .why-choose-content {
                    max-width: 100%;

                    text-align: left;
                }

                .why-choose-row-no-image .section-label {
                    justify-content: flex-start;
                }

                .why-choose-row-no-image .heading-decoration {
                    justify-content: flex-start;
                }

                .why-choose-row-no-image .why-choose-footer {
                    justify-content: flex-start;
                }


                /* =====================================================
                   IMAGE COLUMN
                ====================================================== */

                .why-choose-image-col {
                    width: 100%;

                    display: flex;

                    align-items: center;

                    justify-content: center;
                }


                /* =====================================================
                   IMAGE WRAPPER
                ====================================================== */

                .why-choose-image-wrapper {
                    position: relative;

                    width: 100%;

                    max-width: 500px;

                    min-height: 400px;

                    display: flex;

                    align-items: center;

                    justify-content: center;

                    padding: 15px;

                    box-sizing: border-box;
                }


                /* =====================================================
                   MAIN IMAGE
                ====================================================== */

                .why-choose-image {
                    position: relative;

                    width: 100%;

                    max-width: 480px;

                    height: auto;

                    max-height: 430px;

                    display: block;

                    object-fit: contain;

                    object-position: center;

                    background: transparent;

                    border: none;

                    border-radius: 0;

                    box-shadow: none;

                    z-index: 3;

                    transition:
                        transform 0.4s ease;
                }


                /* =====================================================
                   YELLOW DECORATION
                ====================================================== */

                .image-decoration {
                    position: absolute;

                    pointer-events: none;

                    z-index: 1;
                }


                .decoration-one {
                    width: 95px;

                    height: 95px;

                    left: 0;

                    bottom: 10px;

                    background: #ffd33d;

                    border-radius: 50%;

                    opacity: 0.18;
                }


                /* =====================================================
                   BLUE DECORATION
                ====================================================== */

                .decoration-two {
                    width: 75px;

                    height: 75px;

                    right: 0;

                    top: 10px;

                    background: #07567f;

                    border-radius: 50%;

                    opacity: 0.12;
                }


                /* =====================================================
                   DOT PATTERN
                ====================================================== */

                .image-dots {
                    position: absolute;

                    width: 6px;

                    height: 6px;

                    border-radius: 50%;

                    background: #07567f;

                    z-index: 1;

                    opacity: 0.35;

                    box-shadow:
                        18px 0 0 #07567f,
                        36px 0 0 #07567f,
                        0 18px 0 #07567f,
                        18px 18px 0 #07567f,
                        36px 18px 0 #07567f,
                        0 36px 0 #07567f,
                        18px 36px 0 #07567f,
                        36px 36px 0 #07567f;
                }


                .image-dots-one {
                    left: 5px;

                    top: 35px;
                }


                .image-dots-two {
                    right: 8px;

                    bottom: 45px;

                    background: #ffd33d;

                    box-shadow:
                        18px 0 0 #ffd33d,
                        36px 0 0 #ffd33d,
                        0 18px 0 #ffd33d,
                        18px 18px 0 #ffd33d,
                        36px 18px 0 #ffd33d,
                        0 36px 0 #ffd33d,
                        18px 36px 0 #ffd33d,
                        36px 36px 0 #ffd33d;
                }


                /* =====================================================
                   CONTENT COLUMN
                ====================================================== */

                .why-choose-content-col {
                    width: 100%;
                }


                .why-choose-content {
                    width: 100%;

                    max-width: 650px;
                }


                /* =====================================================
                   SECTION LABEL
                ====================================================== */

                .section-label {
                    display: flex;

                    align-items: center;

                    gap: 10px;

                    margin-bottom: 13px;
                }


                .label-line {
                    width: 35px;

                    height: 3px;

                    flex-shrink: 0;

                    background: #ffd33d;

                    border-radius: 20px;
                }


                .label-text {
                    color: #07567f;

                    font-size: 12px;

                    font-weight: 800;

                    letter-spacing: 2.5px;

                    line-height: 1.4;

                    text-transform: uppercase;
                }


                /* =====================================================
                   MAIN TITLE
                ====================================================== */

                .why-choose-title {
                    margin: 0;

                    color: #063d59;

                    font-size: 35px;

                    line-height: 1.25;

                    font-weight: 800;

                    letter-spacing: -0.3px;
                }


                /* =====================================================
                   HEADING DECORATION
                ====================================================== */

                .heading-decoration {
                    display: flex;

                    align-items: center;

                    gap: 5px;

                    margin: 15px 0 22px;
                }


                .heading-dot {
                    width: 6px;

                    height: 6px;

                    flex-shrink: 0;

                    background: #ffd33d;

                    border-radius: 50%;
                }


                .heading-line {
                    width: 65px;

                    height: 3px;

                    background: #07567f;

                    border-radius: 10px;
                }


                /* =====================================================
                   DESCRIPTION — proper paragraphs
                ====================================================== */

                .about-description {
                    color: #555d63;

                    font-size: 15px;

                    line-height: 1.85;

                    font-weight: 400;
                }


                .about-description p {
                    margin-top: 0;

                    margin-bottom: 16px;

                    text-align: justify;
                }


                .about-description p:last-child {
                    margin-bottom: 0;
                }


                .about-description .description-truncated {
                    margin: 0;

                    color: #555d63;
                }


                .about-description strong,
                .about-description b {
                    color: #063d59;

                    font-weight: 700;
                }


                .about-description a {
                    color: #07567f;

                    font-weight: 600;

                    text-decoration: none;
                }


                .about-description ul,
                .about-description ol {
                    margin-top: 10px;

                    margin-bottom: 15px;

                    padding-left: 22px;
                }


                .about-description li {
                    margin-bottom: 7px;
                }


                /* =====================================================
                   ✅ READ MORE BUTTON
                ====================================================== */

                .read-more-btn {
                    display: inline-flex;

                    align-items: center;

                    gap: 8px;

                    margin-top: 22px;

                    padding: 9px 20px;

                    background: #07567f;

                    color: #ffffff;

                    border-radius: 30px;

                    font-size: 13px;

                    font-weight: 700;

                    letter-spacing: 0.3px;

                    text-decoration: none;

                    transition: all 0.3s ease;

                    box-shadow: 0 4px 12px rgba(7, 86, 127, 0.25);
                }

                .read-more-btn i {
                    font-size: 11px;

                    transition: transform 0.3s ease;
                }

                .read-more-btn:hover {
                    background: #ff6600;

                    color: #ffffff;

                    text-decoration: none;

                    transform: translateY(-2px);

                    box-shadow: 0 8px 20px rgba(255, 102, 0, 0.35);
                }

                .read-more-btn:hover i {
                    transform: translateX(4px);
                }


                /* =====================================================
                   FOOTER DECORATION
                ====================================================== */

                .why-choose-footer {
                    display: flex;

                    align-items: center;

                    gap: 5px;

                    margin-top: 27px;
                }


                .footer-line {
                    width: 35px;

                    height: 4px;

                    background: #07567f;

                    border-radius: 10px;
                }


                .footer-dot {
                    width: 12px;

                    height: 4px;

                    background: #ffd33d;

                    border-radius: 10px;
                }


                .footer-small-line {
                    width: 5px;

                    height: 4px;

                    background: #07567f;

                    border-radius: 10px;
                }


                /* =====================================================
                   LAPTOP
                ====================================================== */

                @media (max-width: 1200px) {

                    .why-choose-section {
                        padding: 65px 0;
                    }


                    .why-choose-row {
                        gap: 45px;
                    }


                    .why-choose-image-wrapper {
                        max-width: 460px;

                        min-height: 350px;
                    }


                    .why-choose-image {
                        max-width: 440px;

                        max-height: 390px;
                    }


                    .why-choose-title {
                        font-size: 31px;
                    }


                    .about-description {
                        font-size: 14px;

                        line-height: 1.8;
                    }

                }


                /* =====================================================
                   TABLET
                ====================================================== */

                @media (max-width: 991px) {

                    .why-choose-section {
                        padding: 55px 0;
                    }


                    .why-choose-row {
                        grid-template-columns: 1fr;

                        gap: 40px;
                    }


                    .why-choose-row-no-image .why-choose-content-col {
                        max-width: 100%;
                    }


                    /* IMAGE */

                    .why-choose-image-wrapper {
                        max-width: 620px;

                        min-height: auto;

                        padding: 10px;
                    }


                    .why-choose-image {
                        max-width: 560px;

                        max-height: 400px;
                    }


                    .decoration-one {
                        width: 75px;

                        height: 75px;

                        left: 5px;

                        bottom: 5px;
                    }


                    .decoration-two {
                        width: 65px;

                        height: 65px;

                        right: 5px;

                        top: 5px;
                    }


                    /* CONTENT */

                    .why-choose-content {
                        max-width: 100%;
                    }


                    .why-choose-title {
                        font-size: 30px;
                    }

                }


                /* =====================================================
                   MOBILE
                ====================================================== */

                @media (max-width: 767px) {

                    .why-choose-section {
                        padding: 42px 0;
                    }


                    .why-choose-container {
                        padding-left: 14px;

                        padding-right: 14px;
                    }


                    .why-choose-row {
                        gap: 30px;
                    }


                    /* IMAGE */

                    .why-choose-image-wrapper {
                        width: 100%;

                        max-width: 100%;

                        min-height: auto;

                        padding: 5px;
                    }


                    .why-choose-image {
                        width: 100%;

                        max-width: 100%;

                        max-height: 300px;

                        object-fit: contain;
                    }


                    /* DECORATIONS */

                    .decoration-one {
                        width: 55px;

                        height: 55px;

                        left: 0;

                        bottom: 5px;
                    }


                    .decoration-two {
                        width: 48px;

                        height: 48px;

                        right: 0;

                        top: 5px;
                    }


                    .image-dots {
                        width: 4px;

                        height: 4px;

                        box-shadow:
                            13px 0 0 #07567f,
                            26px 0 0 #07567f,
                            0 13px 0 #07567f,
                            13px 13px 0 #07567f,
                            26px 13px 0 #07567f,
                            0 26px 0 #07567f,
                            13px 26px 0 #07567f,
                            26px 26px 0 #07567f;
                    }


                    .image-dots-one {
                        left: 2px;

                        top: 25px;
                    }


                    .image-dots-two {
                        right: 3px;

                        bottom: 30px;

                        box-shadow:
                            13px 0 0 #ffd33d,
                            26px 0 0 #ffd33d,
                            0 13px 0 #ffd33d,
                            13px 13px 0 #ffd33d,
                            26px 13px 0 #ffd33d,
                            0 26px 0 #ffd33d,
                            13px 26px 0 #ffd33d,
                            26px 26px 0 #ffd33d;
                    }


                    /* CONTENT */

                    .section-label {
                        gap: 8px;

                        margin-bottom: 10px;
                    }


                    .label-line {
                        width: 25px;

                        height: 2px;
                    }


                    .label-text {
                        font-size: 10px;

                        letter-spacing: 1.8px;
                    }


                    .why-choose-title {
                        font-size: 25px;

                        line-height: 1.3;
                    }


                    .heading-decoration {
                        margin: 12px 0 17px;
                    }


                    .about-description {
                        font-size: 13px;

                        line-height: 1.75;
                    }


                    .about-description p {
                        margin-bottom: 13px;

                        text-align: left;
                    }


                    .why-choose-footer {
                        margin-top: 20px;
                    }

                    .read-more-btn {
                        font-size: 12px;

                        padding: 8px 16px;
                    }

                }


                /* =====================================================
                   SMALL MOBILE
                ====================================================== */

                @media (max-width: 480px) {

                    .why-choose-section {
                        padding: 35px 0;
                    }


                    .why-choose-image-wrapper {
                        padding: 0;
                    }


                    .why-choose-image {
                        width: 100%;

                        max-height: 250px;
                    }


                    .decoration-one {
                        width: 45px;

                        height: 45px;

                        left: -3px;

                        bottom: 2px;
                    }


                    .decoration-two {
                        width: 40px;

                        height: 40px;

                        right: -3px;

                        top: 2px;
                    }


                    .why-choose-title {
                        font-size: 22px;
                    }


                    .about-description {
                        font-size: 12.5px;

                        line-height: 1.7;
                    }


                    .image-dots {
                        display: none;
                    }

                }

                `}
            </style>
        </>
    );
}

export default WhyChosseUs;