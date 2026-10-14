 
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWebsiteContentdata } from "./HomeService";

function About() {
    const { slug } = useParams();
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPageData();
    }, [slug]);

    const loadPageData = async () => {
        try {
            setLoading(true);

            if (!slug) {
                setContent(null);
                return;
            }

            const result = await getWebsiteContentdata(slug);
            const data = (result || []).find(
                item => item.is_active === true
            );

            setContent(data || null);
        } catch (error) {
            console.log("Page data error:", error);
            setContent(null);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="about-loading">
                <div className="about-loader"></div>
                <span>Loading...</span>
            </div>
        );
    }

    if (!content) {
        return (
            <div className="about-not-found">
                <div className="not-found-icon">
                    <i className="bi bi-file-earmark-x"></i>
                </div>
                <h4>Content Not Found</h4>
                <p>The requested content is not available.</p>
            </div>
        );
    }

    const imageUrl = content.file_url || content.file || "";

    return (
        <>
            <section className="about-section">
                <div className="about-bg-shape about-shape-one"></div>
                <div className="about-bg-shape about-shape-two"></div>

                <div className="container">
                    <div className="about-card">
                        <div className="row align-items-center g-0">

                            {imageUrl && (
                                <div className="col-lg-5">
                                    <div className="about-visual">
                                        <div className="about-image-box">
                                            <div className="image-glow"></div>

                                            <div className="image-inner">
                                                <img
                                                    src={imageUrl}
                                                    alt={content.name || "About Us"}
                                                    className="about-main-image"
                                                />
                                            </div>

                                            <div className="image-corner corner-top"></div>
                                            <div className="image-corner corner-bottom"></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className={imageUrl ? "col-lg-7" : "col-lg-12"}>
                                <div className="about-content">

                                     
                                    <h1 className="about-title">
                                     {content.short_name}   {content.name}
                                    </h1>

                                    <div className="title-line">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        
                                    </div>

                                    {content.short_intro && (
                                        <div className="about-short-intro">
                                            {content.short_intro}
                                        </div>
                                    )}

                                    <div
                                        className="about-description"
                                        dangerouslySetInnerHTML={{
                                            __html: content.description || ""
                                        }}
                                    />

                                    <div className="about-bottom-line">
                                        <span></span>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <style>
                {`
                    .about-section {
                        position: relative;
                        min-height: 650px;
                        padding: 80px 0;
                        background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #fff8f2 100%);
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                    }

                    .about-bg-shape {
                        position: absolute;
                        border-radius: 50%;
                        pointer-events: none;
                    }

                    .about-shape-one {
                        width: 420px;
                        height: 420px;
                        top: -180px;
                        left: -160px;
                        background: rgba(255, 102, 0, 0.055);
                    }

                    .about-shape-two {
                        width: 500px;
                        height: 500px;
                        right: -240px;
                        bottom: -260px;
                        background: rgba(245, 166, 35, 0.06);
                    }

                    .about-card {
                        position: relative;
                        z-index: 2;
                        width: 100%;
                        background: rgba(255, 255, 255, 0.96);
                        border: 1px solid rgba(0, 0, 0, 0.055);
                        border-radius: 28px;
                        box-shadow: 0 25px 70px rgba(20, 30, 50, 0.09);
                        overflow: hidden;
                    }

                    .about-visual {
                        height: 100%;
                        min-height: 560px;
                        padding: 45px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(145deg, #fff7ef, #ffffff);
                        border-right: 1px solid rgba(0, 0, 0, 0.05);
                    }

                    .about-image-box {
                        position: relative;
                        width: 100%;
                        max-width: 410px;
                        padding: 12px;
                    }

                    .image-inner {
                        position: relative;
                        z-index: 2;
                        width: 100%;
                        height: 450px;
                        padding: 15px;
                        background: #ffffff;
                        border-radius: 24px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                        box-shadow: 0 20px 45px rgba(0, 0, 0, 0.12);
                        border: 1px solid rgba(255, 102, 0, 0.08);
                    }

                    .about-main-image {
                        width: 100%;
                        height: 100%;
                        display: block;
                        object-fit: contain;
                        object-position: center;
                        border-radius: 15px;
                        transition: transform 0.5s ease;
                    }

                    .about-image-box:hover .about-main-image {
                        transform: scale(1.025);
                    }

                    .image-glow {
                        position: absolute;
                        z-index: 0;
                        width: 80%;
                        height: 80%;
                        left: 10%;
                        top: 10%;
                        background: rgba(255, 102, 0, 0.12);
                        filter: blur(55px);
                        border-radius: 50%;
                    }

                    .image-corner {
                        position: absolute;
                        z-index: 3;
                        width: 65px;
                        height: 65px;
                        border-color: #ff6600;
                    }

                    .corner-top {
                        top: 0;
                        right: 0;
                        border-top: 4px solid;
                        border-right: 4px solid;
                        border-radius: 0 14px 0 0;
                    }

                    .corner-bottom {
                        bottom: 0;
                        left: 0;
                        border-bottom: 4px solid;
                        border-left: 4px solid;
                        border-radius: 0 0 0 14px;
                    }

                    .about-content {
                        padding: 65px 70px;
                    }

                    .section-label {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        color: #ff6600;
                        font-size: 12px;
                        font-weight: 800;
                        letter-spacing: 3.5px;
                        text-transform: uppercase;
                        margin-bottom: 18px;
                    }

                    .label-line {
                        width: 35px;
                        height: 3px;
                        background: linear-gradient(90deg, #ff6600, #f5a623);
                        border-radius: 10px;
                    }

                    .about-title {
                        margin: 0;
                        max-width: 650px;
                        color: #1c2430;
                        font-size: 42px;
                        font-weight: 750;
                        line-height: 1.2;
                        letter-spacing: -0.8px;
                    }

                    .title-line {
                        display: flex;
                        align-items: center;
                        gap: 5px;
                        margin: 22px 0 25px;
                    }

                    .title-line span {
                        display: block;
                        height: 4px;
                        border-radius: 5px;
                        background: #ff6600;
                    }

                    .title-line span:nth-child(1) {
                        width: 42px;
                    }

                    .title-line span:nth-child(2) {
                        width: 18px;
                        opacity: 0.55;
                    }

                    .title-line span:nth-child(3) {
                        width: 7px;
                        opacity: 0.3;
                    }

                    .about-short-intro {
                        color: #3c4653;
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 1.75;
                        margin-bottom: 20px;
                    }

                    .about-description {
                        color: #68717d;
                        font-size: 15.5px;
                        line-height: 1.95;
                    }

                    .about-description p {
                        margin-bottom: 15px;
                    }

                    .about-description strong {
                        color: #303944;
                    }

                    .about-description ul,
                    .about-description ol {
                        padding-left: 22px;
                        margin-bottom: 18px;
                    }

                    .about-description li {
                        margin-bottom: 8px;
                    }

                    .about-bottom-line {
                        margin-top: 30px;
                        width: 100%;
                        height: 1px;
                        background: #e8ebef;
                        position: relative;
                    }

                    .about-bottom-line span {
                        position: absolute;
                        left: 0;
                        top: -1px;
                        width: 65px;
                        height: 3px;
                        background: #ff6600;
                        border-radius: 5px;
                    }

                    .about-loading {
                        min-height: 500px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 14px;
                        color: #68717d;
                        background: #f8fafc;
                    }

                    .about-loader {
                        width: 38px;
                        height: 38px;
                        border: 3px solid #eee;
                        border-top-color: #ff6600;
                        border-radius: 50%;
                        animation: aboutSpin 0.8s linear infinite;
                    }

                    .about-not-found {
                        min-height: 500px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background: #f8fafc;
                        text-align: center;
                        padding: 30px;
                    }

                    .not-found-icon {
                        width: 70px;
                        height: 70px;
                        border-radius: 50%;
                        background: #fff1e8;
                        color: #ff6600;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 30px;
                        margin-bottom: 18px;
                    }

                    .about-not-found h4 {
                        color: #222;
                        font-weight: 700;
                        margin-bottom: 7px;
                    }

                    .about-not-found p {
                        color: #777;
                        margin: 0;
                    }

                    @keyframes aboutSpin {
                        to {
                            transform: rotate(360deg);
                        }
                    }

                    @media (max-width: 1199px) {
                        .about-content {
                            padding: 55px 45px;
                        }

                        .about-visual {
                            padding: 35px;
                        }

                        .about-title {
                            font-size: 37px;
                        }

                        .image-inner {
                            height: 420px;
                        }
                    }

                    @media (max-width: 991px) {
                        .about-section {
                            padding: 55px 0;
                        }

                        .about-card {
                            border-radius: 22px;
                        }

                        .about-visual {
                            min-height: auto;
                            padding: 45px 35px;
                            border-right: 0;
                            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                        }

                        .about-image-box {
                            max-width: 500px;
                        }

                        .image-inner {
                            height: 400px;
                        }

                        .about-content {
                            padding: 45px 40px 50px;
                        }

                        .about-title {
                            font-size: 34px;
                        }
                    }

                    @media (max-width: 767px) {
                        .about-section {
                            padding: 30px 0;
                        }

                        .about-card {
                            border-radius: 18px;
                        }

                        .about-visual {
                            padding: 25px 18px;
                        }

                        .about-image-box {
                            padding: 8px;
                        }

                        .image-inner {
                            height: 300px;
                            padding: 10px;
                            border-radius: 18px;
                        }

                        .about-main-image {
                            border-radius: 11px;
                        }

                        .image-corner {
                            width: 45px;
                            height: 45px;
                            border-width: 3px;
                        }

                        .about-content {
                            padding: 35px 24px 40px;
                        }

                        .section-label {
                            font-size: 10px;
                            letter-spacing: 2.5px;
                            margin-bottom: 13px;
                        }

                        .label-line {
                            width: 25px;
                            height: 2px;
                        }

                        .about-title {
                            font-size: 28px;
                            letter-spacing: -0.4px;
                        }

                        .title-line {
                            margin: 17px 0 20px;
                        }

                        .about-short-intro {
                            font-size: 16px;
                        }

                        .about-description {
                            font-size: 14px;
                            line-height: 1.85;
                        }
                    }

                    @media (max-width: 480px) {
                        .about-section {
                            padding: 20px 0;
                        }

                        .about-visual {
                            padding: 20px 12px;
                        }

                        .image-inner {
                            height: 250px;
                        }

                        .about-content {
                            padding: 28px 18px 32px;
                        }

                        .about-title {
                            font-size: 24px;
                        }

                        .about-short-intro {
                            font-size: 15px;
                        }

                        .about-description {
                            font-size: 13.5px;
                        }
                    }
                `}
            </style>
        </>
    );
}

export default About;
 
