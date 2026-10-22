 import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getWebsiteContentdata } from "./HomeService";
import { FILE_URL } from "../api"; // ✅ Added FILE_URL import

function Career() {
    const { slug } = useParams();
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

            const data = [...(result || [])]
                .filter((item) => item.isActive === 1)
                .sort((a, b) => {
                    const sa = a.srNo;
                    const sb = b.srNo;

                    const aIsNull = sa === null || sa === undefined;
                    const bIsNull = sb === null || sb === undefined;

                    if (aIsNull && bIsNull) return 0;
                    if (aIsNull) return 1;
                    if (bIsNull) return -1;

                    return Number(sa) - Number(sb);
                });

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
            <div className="cms-loading">
                <div className="cms-loader"></div>
                <span>Loading content...</span>
            </div>
        );
    }

    if (!contents || contents.length === 0) {
        return (
            <div className="cms-not-found">
                <div className="cms-not-found-icon">
                    <i className="bi bi-file-earmark-x" aria-hidden="true"></i>
                </div>
                <h4>Content Not Found</h4>
                <p>The requested content is not available.</p>
            </div>
        );
    }

    return (
        <>
            <section className="cms-section">
                <div className="cms-bg-shape cms-shape-one"></div>
                <div className="cms-bg-shape cms-shape-two"></div>

                <div className="container">
                    {/* Page Header */}
                    <div className="cms-page-header">
                        <div className="cms-page-header-line"></div>
                        <h1 className="cms-page-main-title">
                            {contents[0]?.short_name || contents[0]?.name || "Information"}
                        </h1>
                        <div className="cms-page-header-underline"></div>
                    </div>

                    {contents.map((content, index) => {
                        const doc = content.productCategoryDocuments?.[0];

                        // ✅ Build Full URL & Proxy
                        const rawPath = doc?.fileupload || "";
                        const fullUrl = rawPath 
                            ? (rawPath.startsWith('http') ? rawPath : `${FILE_URL}${rawPath.startsWith('/') ? '' : '/'}${rawPath}`) 
                            : "";
                        
                        const isImage = fullUrl && /\.(jpeg|jpg|gif|png|webp|svg)$/i.test(fullUrl);
                        const hasImage = isImage;

                        // ✅ Image Proxy (800px width, webp, 80% quality)
                        const optimizedImage = fullUrl 
                            ? `https://wsrv.nl/?url=${encodeURIComponent(fullUrl)}&w=800&output=webp&q=80` 
                            : "";

                        const imageOnLeft = index % 2 === 0;

                        return (
                            <div className="cms-card" key={content.id ?? index}>
                                {/* Card Title */}
                                <div className="cms-card-header">
                                    <div className="cms-card-number">
                                        {(index + 1).toString().padStart(2, "0")}
                                    </div>

                                    <div className="cms-card-title-wrap">
                                        <h2 className="cms-card-title">
                                            {content.name}
                                        </h2>

                                        {content.short_intro && (
                                            <p className="cms-card-subtitle">
                                                {content.shortDescription}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="cms-card-body">
                                    <div className={`row g-0 align-items-start ${hasImage && index % 2 === 1 ? "flex-lg-row-reverse" : ""}`}>
                                        {/* Image */}
                                        {hasImage && (
                                            <div className="col-lg-5">
                                                <div className="cms-image-wrap">
                                                    <img
                                                        src={optimizedImage} // ✅ Fixed: using optimizedImage instead of undefined imageUrl
                                                        alt={doc?.altTag || content.name || "Content"}
                                                        className="cms-image"
                                                        loading="lazy"
                                                        width="600"
                                                        height="400"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className={hasImage ? "col-lg-7" : "col-lg-12"}>
                                            <div className={`cms-content ${hasImage ? "cms-content-with-image" : ""}`}>
                                                <div
                                                    className="cms-rich-text"
                                                    dangerouslySetInnerHTML={{
                                                        __html: content.descrption || "",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <style>
                {`
                /* Aapka original CSS yahan aayega, maine isme koi change nahi kiya hai */
                .cms-section { position: relative; min-height: 100vh; padding: 70px 0 90px; background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #fff8f2 100%); overflow: hidden; }
                .cms-bg-shape { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(2px); }
                .cms-shape-one { width: 450px; height: 450px; top: -200px; left: -180px; background: rgba(255, 102, 0, 0.06); }
                .cms-shape-two { width: 520px; height: 520px; right: -250px; bottom: -270px; background: rgba(245, 166, 35, 0.07); }
                .cms-page-header { text-align: center; margin-bottom: 55px; position: relative; z-index: 2; }
                .cms-page-header-line { width: 60px; height: 4px; background: linear-gradient(90deg, #ff6600, #f5a623); border-radius: 5px; margin: 0 auto 22px; }
                .cms-page-main-title { font-size: 34px; font-weight: 800; color: #1c2430; margin: 0; letter-spacing: -0.8px; line-height: 1.25; max-width: 900px; margin-left: auto; margin-right: auto; }
                .cms-page-header-underline { width: 100px; height: 3px; background: #ff6600; border-radius: 5px; margin: 18px auto 0; opacity: 0.5; }
                .cms-card { position: relative; z-index: 2; background: #ffffff; border: 1px solid rgba(0, 0, 0, 0.06); border-radius: 20px; box-shadow: 0 15px 45px rgba(20, 30, 50, 0.07); overflow: hidden; margin-bottom: 35px; transition: all 0.3s ease; }
                .cms-card:hover { box-shadow: 0 25px 60px rgba(20, 30, 50, 0.10); transform: translateY(-2px); }
                .cms-card:last-child { margin-bottom: 0; }
                .cms-card-header { display: flex; align-items: flex-start; gap: 18px; padding: 28px 35px 22px; border-bottom: 1px solid #eef1f5; background: linear-gradient(135deg, #fffaf5 0%, #ffffff 100%); }
                .cms-card-number { min-width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #ff6600, #f5a623); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 800; letter-spacing: 0.5px; box-shadow: 0 6px 16px rgba(255, 102, 0, 0.25); flex-shrink: 0; }
                .cms-card-title-wrap { flex: 1; min-width: 0; }
                .cms-card-title { margin: 0; color: #1c2430; font-size: 22px; font-weight: 750; line-height: 1.35; letter-spacing: -0.3px; }
                .cms-card-subtitle { margin: 8px 0 0; color: #8b95a7; font-size: 14px; font-weight: 500; line-height: 1.6; }
                .cms-card-body { padding: 0; }
                .cms-image-wrap { padding: 30px 20px 30px 35px; display: flex; align-items: center; justify-content: center; }
                .cms-image { width: 100%; max-width: 380px; height: auto; max-height: 400px; object-fit: contain; border-radius: 14px; box-shadow: 0 12px 35px rgba(0, 0, 0, 0.10); border: 1px solid #eef1f5; }
                .cms-content { padding: 30px 35px 35px; }
                .cms-content-with-image { padding-left: 10px; }
                .cms-rich-text { color: #4b5563; font-size: 15px; line-height: 1.85; word-wrap: break-word; }
                .cms-rich-text h1, .cms-rich-text h2, .cms-rich-text h3, .cms-rich-text h4, .cms-rich-text h5 { color: #1c2430; font-weight: 750; line-height: 1.35; margin-top: 26px; margin-bottom: 14px; letter-spacing: -0.3px; }
                .cms-rich-text h1 { font-size: 26px; }
                .cms-rich-text h2 { font-size: 21px; padding-bottom: 8px; border-bottom: 2px solid #ff6600; display: inline-block; padding-right: 25px; }
                .cms-rich-text h3 { font-size: 18px; color: #2d3748; }
                .cms-rich-text h4 { font-size: 16px; color: #2d3748; }
                .cms-rich-text h5 { font-size: 15px; color: #4b5563; }
                .cms-rich-text h1:first-child, .cms-rich-text h2:first-child, .cms-rich-text h3:first-child { margin-top: 0; }
                .cms-rich-text p { margin-bottom: 14px; color: #4b5563; }
                .cms-rich-text strong, .cms-rich-text b { color: #1c2430; font-weight: 700; }
                .cms-rich-text em, .cms-rich-text i { color: #ff6600; font-style: italic; }
                .cms-rich-text a { color: #ff6600; text-decoration: none; font-weight: 600; border-bottom: 1px solid rgba(255, 102, 0, 0.3); transition: all 0.2s ease; }
                .cms-rich-text a:hover { color: #e65c00; border-bottom-color: #e65c00; }
                .cms-rich-text ul, .cms-rich-text ol { padding-left: 24px; margin-bottom: 18px; }
                .cms-rich-text li { margin-bottom: 8px; line-height: 1.75; color: #4b5563; }
                .cms-rich-text ul li::marker { color: #ff6600; font-size: 18px; }
                .cms-rich-text ol li::marker { color: #ff6600; font-weight: 700; }
                .cms-rich-text table { width: 100%; border-collapse: collapse; margin: 20px 0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); font-size: 14px; }
                .cms-rich-text table thead { background: linear-gradient(135deg, #ff6600, #f5a623); }
                .cms-rich-text table th { color: #fff; padding: 13px 15px; text-align: left; font-weight: 700; font-size: 13px; letter-spacing: 0.3px; text-transform: uppercase; }
                .cms-rich-text table td { padding: 12px 15px; border-bottom: 1px solid #f0f2f6; color: #4b5563; vertical-align: top; }
                .cms-rich-text table tbody tr:nth-child(even) { background: #fafbfc; }
                .cms-rich-text table tbody tr:hover { background: #fff8f2; }
                .cms-rich-text table tbody tr:last-child td { border-bottom: none; }
                .cms-rich-text blockquote { border-left: 4px solid #ff6600; background: #fff8f2; padding: 15px 20px; margin: 20px 0; border-radius: 0 10px 10px 0; color: #4b5563; font-style: italic; }
                .cms-rich-text hr { border: none; border-top: 2px solid #eef1f5; margin: 30px 0; }
                .cms-rich-text img { max-width: 100%; height: auto; border-radius: 10px; margin: 15px 0; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08); }
                .cms-rich-text code { background: #fff4ea; color: #ff6600; padding: 2px 8px; border-radius: 5px; font-size: 13px; font-family: 'Courier New', monospace; }
                .cms-loading { min-height: 500px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 15px; color: #68717d; background: #f8fafc; }
                .cms-loader { width: 42px; height: 42px; border: 3px solid #f0f0f0; border-top-color: #ff6600; border-radius: 50%; animation: cmsSpin 0.8s linear infinite; }
                @keyframes cmsSpin { to { transform: rotate(360deg); } }
                .cms-not-found { min-height: 500px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #f8fafc; text-align: center; padding: 30px; }
                .cms-not-found-icon { width: 80px; height: 80px; border-radius: 50%; background: #fff1e8; color: #ff6600; display: flex; align-items: center; justify-content: center; font-size: 34px; margin-bottom: 20px; }
                .cms-not-found h4 { color: #1c2430; font-weight: 700; margin-bottom: 8px; font-size: 22px; }
                .cms-not-found p { color: #8b95a7; margin: 0; font-size: 15px; }
                @media (max-width: 991px) { .cms-section { padding: 50px 0 60px; } .cms-page-main-title { font-size: 28px; } .cms-card-header { padding: 22px 25px 18px; } .cms-card-title { font-size: 19px; } .cms-card-number { min-width: 42px; height: 42px; font-size: 14px; } .cms-content { padding: 25px 25px 30px; } .cms-content-with-image { padding-left: 25px; } .cms-image-wrap { padding: 25px 25px 10px; } .cms-image { max-width: 100%; max-height: 320px; } }
                @media (max-width: 767px) { .cms-section { padding: 35px 0 45px; } .cms-page-header { margin-bottom: 35px; } .cms-page-main-title { font-size: 23px; } .cms-card { border-radius: 16px; margin-bottom: 25px; } .cms-card-header { padding: 18px 20px 15px; gap: 13px; } .cms-card-number { min-width: 38px; height: 38px; font-size: 13px; border-radius: 10px; } .cms-card-title { font-size: 17px; } .cms-card-subtitle { font-size: 13px; } .cms-content { padding: 20px 20px 25px; } .cms-content-with-image { padding-left: 20px; } .cms-image-wrap { padding: 20px 20px 5px; } .cms-image { max-height: 260px; border-radius: 12px; } .cms-rich-text { font-size: 14px; line-height: 1.75; } .cms-rich-text h2 { font-size: 18px; } .cms-rich-text h3 { font-size: 16px; } .cms-rich-text table { font-size: 13px; } .cms-rich-text table th, .cms-rich-text table td { padding: 10px 12px; } }
                @media (max-width: 480px) { .cms-section { padding: 25px 0 35px; } .cms-page-main-title { font-size: 20px; } .cms-card-header { padding: 16px 16px 13px; gap: 11px; } .cms-card-number { min-width: 34px; height: 34px; font-size: 12px; } .cms-card-title { font-size: 16px; } .cms-content { padding: 18px 16px 22px; } .cms-content-with-image { padding-left: 16px; } .cms-image-wrap { padding: 16px 16px 5px; } .cms-rich-text { font-size: 13px; line-height: 1.7; } .cms-rich-text h2 { font-size: 16px; } .cms-rich-text h3 { font-size: 15px; } .cms-rich-text table { font-size: 12px; } .cms-rich-text table th, .cms-rich-text table td { padding: 8px 10px; } }
                `}
            </style>
        </>
    );
}

export default Career;