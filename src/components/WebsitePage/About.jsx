 import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { getWebsiteContentdata, getMenu } from "./HomeService";
import { FILE_URL } from "../api";

function About() {
    const location = useLocation();
    const id = location.state?.id;
    
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);

    // ✅ Sidebar Menu ke liye state
    const [aboutMenu, setAboutMenu] = useState([]);

    useEffect(() => {
        if (id) {
            loadPageData(id);
        } else {
            setLoading(false);
        }
        loadMenuData(); 
    }, [id]);

    // ✅ Sidebar Menu Data Fetch
    const loadMenuData = async () => {
        try {
            const menuData = await getMenu(0, 128);
            const sortedMenu = [...(menuData || [])]
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
            setAboutMenu(sortedMenu);
        } catch (error) {
            console.log("Menu data error:", error);
            setAboutMenu([]);
        }
    };

    const loadPageData = async (pageId) => {
        try {
            setLoading(true);
            const result = await getWebsiteContentdata(pageId);

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

    if (!id) {
        return (
            <div className="about-not-found">
                <div className="not-found-icon">
                    <i className="bi bi-info-circle" aria-hidden="true"></i>
                </div>
                <h4>Please select a menu</h4>
                <p>Select a page from the sidebar to view content.</p>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="about-loading">
                <div className="about-loader"></div>
                <span>Loading...</span>
            </div>
        );
    }

    return (
        <>
            <section className="about-section">
                <div className="about-bg-shape about-shape-one"></div>
                <div className="about-bg-shape about-shape-two"></div>

                <div className="container">
                    <div className="row">
                        
                        {/* ================= LEFT SIDE: MAIN CONTENT ================= */}
                        <div className="col-lg-9 col-md-8 mb-4">
                            {!contents || contents.length === 0 ? (
                                <div className="about-card" style={{ padding: '40px', textAlign: 'center' }}>
                                    <h4 style={{ color: '#555' }}>No content available for this page.</h4>
                                </div>
                            ) : (
                                contents.map((content, index) => {
                                    const doc = content.productCategoryDocuments?.[0];
                                    const rawFileUrl = doc?.fileupload || "";
                                    
                                    // ✅ 1. Direct URL Construct kiya (No proxy)
                                    const originalUrl = rawFileUrl 
                                        ? (rawFileUrl.startsWith('http') ? rawFileUrl : `${FILE_URL}${rawFileUrl.startsWith('/') ? '' : '/'}${rawFileUrl}`) 
                                        : "";

                                    // ✅ 2. Regex fix kiya taaki query params (?v=1) wali images bhi detect ho
                                    const isImage = originalUrl && /\.(jpeg|jpg|gif|png|webp|svg)(\?.*)?$/i.test(originalUrl);

                                    const hasImage = isImage;
                                    
                                    return (
                                        <div className="about-card" key={content.id ?? index}>
                                            {hasImage && (
                                                <div className="about-visual">
                                                    <div className="about-image-box">
                                                        <div className="image-inner">
                                                            <img
                                                                src={originalUrl} // ✅ Direct URL use kiya
                                                                alt={doc?.altTag || content.name || "About Us"}
                                                                className="about-main-image"
                                                                loading="lazy"
                                                                onError={(e) => {
                                                                    // Agar image load na ho toh hide kar do
                                                                    e.target.style.display = 'none';
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="about-content">
                                                <h1 className="about-title">
                                                    {content.shortDescription} {content.name}
                                                </h1>
                                                <div className="title-line">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>

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
                                    );
                                })
                            )}
                        </div>

                        {/* ================= RIGHT SIDE: SIDEBAR ================= */}
                        <div className="col-lg-3 col-md-4 mb-4">
                            <div className="about-sidebar">
                                <h3 className="sidebar-title">
                                    <i className="bi bi-list-ul"></i> About Us
                                </h3>
                                <ul className="sidebar-list">
                                    {aboutMenu.length > 0 ? (
                                        aboutMenu.map((item) => (
                                            <li key={item.id}>
                                                <Link
                                                    to={`/about/${item.slug}`}
                                                    state={{ id: item.id, pageTitle: item.name }}
                                                    className={`sidebar-link ${id === item.id ? "active" : ""}`}
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))
                                    ) : (
                                        <li className="text-muted p-3">No menu available</li>
                                    )}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ✅ CSS */}
            <style>
                {`
                    .about-section { position: relative; min-height: 650px; padding: 80px 0; background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #fff8f2 100%); overflow: hidden; }
                    .about-bg-shape { position: absolute; border-radius: 50%; pointer-events: none; }
                    .about-shape-one { width: 420px; height: 420px; top: -180px; left: -160px; background: rgba(255, 102, 0, 0.055); }
                    .about-shape-two { width: 500px; height: 500px; right: -240px; bottom: -260px; background: rgba(245, 166, 35, 0.06); }
                    
                    .about-sidebar { background: #ffffff; border-radius: 16px; padding: 20px 0; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.05); position: sticky; top: 20px; }
                    .sidebar-title { font-size: 18px; font-weight: 700; color: #1c2430; padding: 0 20px 15px; margin: 0; border-bottom: 2px solid #f0f0f0; display: flex; align-items: center; gap: 8px; }
                    .sidebar-title i { color: #ff6600; }
                    .sidebar-list { list-style: none; padding: 0; margin: 0; }
                    .sidebar-link { display: block; padding: 12px 20px; color: #555; font-weight: 500; font-size: 14px; text-decoration: none; border-left: 3px solid transparent; transition: all 0.2s ease; }
                    .sidebar-link:hover { background: #f8f9fa; color: #ff6600; }
                    .sidebar-link.active { background: #fff5f0; color: #ff6600; border-left-color: #ff6600; font-weight: 600; }
                    
                    .about-card { position: relative; z-index: 2; width: 100%; background: rgba(255, 255, 255, 0.96); border: 1px solid rgba(0, 0, 0, 0.055); border-radius: 20px; box-shadow: 0 15px 50px rgba(20, 30, 50, 0.08); overflow: hidden; margin-bottom: 30px; }
                    .about-card:last-child { margin-bottom: 0; }
                    
                    /* ✅ Inline styles hataye taaki CSS class properly kaam kare */
                    .about-visual { width: 100%; height: 100%; padding: 30px; display: flex; align-items: center; justify-content: center; background: linear-gradient(145deg, #fff7ef, #ffffff); border-bottom: 1px solid #eee; }
                    .about-image-box { position: relative; width: 100%; max-width: 100%; padding: 8px; display: flex; justify-content: center; }
                    .image-inner { position: relative; z-index: 2; width: 100%; height: auto; max-height: 450px; background: #ffffff; border-radius: 16px; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08); border: 1px solid rgba(255, 102, 0, 0.08); padding: 10px; }
                    .about-main-image { width: 100%; height: auto; max-height: 430px; display: block; object-fit: contain; object-position: center; border-radius: 10px; transition: transform 0.5s ease; }
                    .about-image-box:hover .about-main-image { transform: scale(1.02); }
                    
                    .about-content { padding: 40px; }
                    .about-title { margin: 0; max-width: 800px; color: #1c2430; font-size: 30px; font-weight: 750; line-height: 1.2; letter-spacing: -0.8px; }
                    .title-line { display: flex; align-items: center; gap: 5px; margin: 15px 0 20px; }
                    .title-line span { display: block; height: 4px; border-radius: 5px; background: #ff6600; }
                    .title-line span:nth-child(1) { width: 42px; } .title-line span:nth-child(2) { width: 18px; opacity: 0.55; } .title-line span:nth-child(3) { width: 7px; opacity: 0.3; }
                    .about-short-intro { color: #3c4653; font-size: 16px; font-weight: 600; line-height: 1.75; margin-bottom: 18px; }
                    .about-description { color: #68717d; font-size: 15px; line-height: 1.9; }
                    .about-description p { margin-bottom: 14px; } .about-description strong { color: #303944; }
                    .about-description ul, .about-description ol { padding-left: 22px; margin-bottom: 18px; } .about-description li { margin-bottom: 8px; }
                    .about-bottom-line { margin-top: 25px; width: 100%; height: 1px; background: #e8ebef; position: relative; }
                    .about-bottom-line span { position: absolute; left: 0; top: -1px; width: 65px; height: 3px; background: #ff6600; border-radius: 5px; }

                    .about-loading { min-height: 500px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; color: #68717d; background: #f8fafc; }
                    .about-loader { width: 38px; height: 38px; border: 3px solid #eee; border-top-color: #ff6600; border-radius: 50%; animation: aboutSpin 0.8s linear infinite; }
                    .about-not-found { min-height: 500px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #f8fafc; text-align: center; padding: 30px; }
                    .not-found-icon { width: 70px; height: 70px; border-radius: 50%; background: #fff1e8; color: #ff6600; display: flex; align-items: center; justify-content: center; font-size: 30px; margin-bottom: 18px; }
                    .about-not-found h4 { color: #222; font-weight: 700; margin-bottom: 7px; }
                    .about-not-found p { color: #777; margin: 0; }
                    @keyframes aboutSpin { to { transform: rotate(360deg); } }
                    
                    @media (max-width: 991px) { 
                        .about-section { padding: 50px 0; } 
                        .about-sidebar { position: relative; top: 0; margin-top: 20px; }
                        .about-content { padding: 30px; } 
                        .about-title { font-size: 26px; } 
                        .about-visual { padding: 20px; }
                    }
                    @media (max-width: 767px) { 
                        .about-section { padding: 30px 0; } 
                        .image-inner { max-height: 300px; }
                        .about-main-image { max-height: 280px; }
                        .about-content { padding: 25px 20px; } 
                        .about-title { font-size: 22px; } 
                        .about-short-intro { font-size: 15px; } 
                        .about-description { font-size: 14px; } 
                    }
                `}
            </style>
        </>
    );
}

export default About;