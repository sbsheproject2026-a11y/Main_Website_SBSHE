import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getWebsiteContentdata } from "./HomeService";

function About() {
    //const { slug } = useParams();
    const location = useLocation();
    const id = location.state?.id;
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPageData();
        if (id) {
            loadPageData(id);
        }
    }, [id]);

    const loadPageData = async () => {
        try {
            setLoading(true);

            if (!id) {
                setContents([]);
                return;
            }

            const result = await getWebsiteContentdata(id);

            // ✅ Filter + Sort
            const data = [...(result || [])]
                .filter((item) => item.isActive === 1)
                .sort((a, b) => {
                    const sa = a.srNo;
                    const sb = b.srNo;

                    const aIsNull = sa === null || sa === undefined;
                    const bIsNull = sb === null || sb === undefined;

                    // Dono null → original order
                    if (aIsNull && bIsNull) return 0;

                    // Sirf a null → a LAST me
                    if (aIsNull) return 1;

                    // Sirf b null → b LAST me
                    if (bIsNull) return -1;

                    // Dono ke paas value → ascending (1, 2, 3...)
                    return Number(sa) - Number(sb);
                });

            console.log("SORTED DATA:", data.map((x) => ({
                id: x.id,
                name: x.name,
                serial: x.srNo,
            })));

            setContents(data);
        } catch (error) {
            console.log("Page data error:", error);
            setContents([]);
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

    if (!contents || contents.length === 0) {
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

    return (
        <>
            <section className="about-section">
                <div className="about-bg-shape about-shape-one"></div>
                <div className="about-bg-shape about-shape-two"></div>

                <div className="container">

                    {contents.map((content, index) => {
                        // ✅ 1. Array ke pehle element (index 0) ko access karo
                        const doc = content.productCategoryDocuments?.[0];

                        // ✅ 2. File ka URL nikaalo (Agar fileupload hai toh wo, warna kuch nahi)
                        const fileUrl = doc?.fileupload || "";

                        // ✅ 3. Check karo ki file ek IMAGE hai ya PDF
                        // (Kyunki agar PDF hui aur humne <img> tag me daala, toh image break ho jayegi)
                        const isImage = fileUrl && /\.(jpeg|jpg|gif|png|webp|svg)$/i.test(fileUrl);

                        // ✅ 4. Agar image hai tabhi layout me image dikhao
                        const hasImage = isImage;
                        const imageOnLeft = index % 2 === 0;

                        return (
                            <div className="about-card" key={content.id ?? index}>
                                <div className="row align-items-center g-0">

                                    {/* ✅ IMAGE LEFT */}
                                    {hasImage && imageOnLeft && (
                                        <div className="col-lg-5">
                                            <div className="about-visual">
                                                <div className="about-image-box">
                                                    <div className="image-glow"></div>
                                                    <div className="image-inner">
                                                        <img
                                                            src={fileUrl} // ✅ Yahan fileUrl use kiya
                                                            alt={doc?.altTag || content.name || "About Us"} // ✅ Alt tag DB se
                                                            className="about-main-image"
                                                        />
                                                    </div>
                                                    <div className="image-corner corner-top"></div>
                                                    <div className="image-corner corner-bottom"></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* CONTENT */}
                                    <div className={hasImage ? "col-lg-7" : "col-lg-12"}>
                                        <div className="about-content">
                                            <h1 className="about-title">
                                                {content.shortDescription} {content.name}
                                            </h1>
                                            <div className="title-line">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>

                                            {/* ✅ Yahan aapne 'short_intro' check kiya tha jo JSON me nahi hai. 
                            JSON me 'shortDescription' hai */}
                                            {content.shortDescription && (
                                                <div className="about-short-intro">
                                                    {content.shortDescription}
                                                </div>
                                            )}

                                            <div
                                                className="about-description"
                                                dangerouslySetInnerHTML={{
                                                    __html: content.descrption || ""
                                                }}
                                            />
                                            <div className="about-bottom-line">
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ✅ IMAGE RIGHT */}
                                    {hasImage && !imageOnLeft && (
                                        <div className="col-lg-5">
                                            <div className="about-visual">
                                                <div className="about-image-box">
                                                    <div className="image-glow"></div>
                                                    <div className="image-inner">
                                                        <img
                                                            src={fileUrl} // ✅ Yahan fileUrl use kiya
                                                            alt={doc?.altTag || content.name || "About Us"}
                                                            className="about-main-image"
                                                        />
                                                    </div>
                                                    <div className="image-corner corner-top"></div>
                                                    <div className="image-corner corner-bottom"></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                        );
                    })}

                </div>
            </section>

            {/* ✅ CSS */}
            <style>
                {`
                    .about-section {
                        position: relative;
                        min-height: 650px;
                        padding: 80px 0;
                        background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #fff8f2 100%);
                        overflow: hidden;
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

                    /* =========================================================
                       ✅ CARD — har record ka apna card + beech me space
                    ========================================================= */

                    .about-card {
                        position: relative;
                        z-index: 2;
                        width: 100%;
                        background: rgba(255, 255, 255, 0.96);
                        border: 1px solid rgba(0, 0, 0, 0.055);
                        border-radius: 28px;
                        box-shadow: 0 25px 70px rgba(20, 30, 50, 0.09);
                        overflow: hidden;
                        margin-bottom: 40px;
                    }

                    .about-card:last-child {
                        margin-bottom: 0;
                    }

                    /* =========================================================
                       VISUAL — sirf tab jab image ho
                    ========================================================= */

                    .about-visual {
                        height: 100%;
                        min-height: 480px;
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
                        height: 400px;
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

                    /* =========================================================
                       CONTENT
                    ========================================================= */

                    .about-content {
                        padding: 60px 70px;
                    }

                    .about-title {
                        margin: 0;
                        max-width: 800px;
                        color: #1c2430;
                        font-size: 34px;
                        font-weight: 750;
                        line-height: 1.2;
                        letter-spacing: -0.8px;
                    }

                    .title-line {
                        display: flex;
                        align-items: center;
                        gap: 5px;
                        margin: 20px 0 22px;
                    }

                    .title-line span {
                        display: block;
                        height: 4px;
                        border-radius: 5px;
                        background: #ff6600;
                    }

                    .title-line span:nth-child(1) { width: 42px; }
                    .title-line span:nth-child(2) { width: 18px; opacity: 0.55; }
                    .title-line span:nth-child(3) { width: 7px; opacity: 0.3; }

                    .about-short-intro {
                        color: #3c4653;
                        font-size: 17px;
                        font-weight: 600;
                        line-height: 1.75;
                        margin-bottom: 18px;
                    }

                    .about-description {
                        color: #68717d;
                        font-size: 15px;
                        line-height: 1.9;
                    }

                    .about-description p { margin-bottom: 14px; }
                    .about-description strong { color: #303944; }
                    .about-description ul,
                    .about-description ol {
                        padding-left: 22px;
                        margin-bottom: 18px;
                    }
                    .about-description li { margin-bottom: 8px; }

                    .about-bottom-line {
                        margin-top: 25px;
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

                    /* =========================================================
                       LOADING & NOT FOUND
                    ========================================================= */

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
                        to { transform: rotate(360deg); }
                    }

                    /* =========================================================
                       RESPONSIVE
                    ========================================================= */

                    @media (max-width: 1199px) {
                        .about-content { padding: 50px 50px; }
                        .about-visual { padding: 35px; }
                        .about-title { font-size: 34px; }
                        .image-inner { height: 360px; }
                    }

                    @media (max-width: 991px) {
                        .about-section { padding: 55px 0; }
                        .about-card { border-radius: 22px; margin-bottom: 30px; }

                        .about-visual {
                            min-height: auto;
                            padding: 40px 35px;
                            border-right: 0;
                            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                        }

                        .about-image-box { max-width: 500px; }
                        .image-inner { height: 350px; }
                        .about-content { padding: 40px 35px 45px; }
                        .about-title { font-size: 30px; }
                    }

                    @media (max-width: 767px) {
                        .about-section { padding: 30px 0; }
                        .about-card { border-radius: 18px; margin-bottom: 25px; }
                        .about-visual { padding: 25px 18px; }
                        .about-image-box { padding: 8px; }
                        .image-inner {
                            height: 280px;
                            padding: 10px;
                            border-radius: 18px;
                        }
                        .about-main-image { border-radius: 11px; }
                        .image-corner {
                            width: 45px;
                            height: 45px;
                            border-width: 3px;
                        }
                        .about-content { padding: 30px 22px 35px; }
                        .about-title {
                            font-size: 26px;
                            letter-spacing: -0.4px;
                        }
                        .title-line { margin: 15px 0 18px; }
                        .about-short-intro { font-size: 15px; }
                        .about-description {
                            font-size: 13.5px;
                            line-height: 1.8;
                        }
                    }

                    @media (max-width: 480px) {
                        .about-section { padding: 20px 0; }
                        .about-card { margin-bottom: 20px; }
                        .about-visual { padding: 20px 12px; }
                        .image-inner { height: 230px; }
                        .about-content { padding: 25px 18px 30px; }
                        .about-title { font-size: 22px; }
                        .about-short-intro { font-size: 14px; }
                        .about-description { font-size: 13px; }
                    }
                `}
            </style>
        </>
    );
}

export default About;