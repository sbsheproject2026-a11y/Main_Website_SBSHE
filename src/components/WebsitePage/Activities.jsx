 import React, { useEffect, useState } from "react";
import {   getWebsiteContentdata } from "./HomeService";

function Activities() {
    const [placements, setPlacements] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState("");
    const [selectedTitle, setSelectedTitle] = useState("");

    useEffect(() => {
        loadPlacementData();
    }, []);

    const loadPlacementData = async () => {
        try {
            const placementData = await getWebsiteContentdata(40);

            setPlacements(
                (placementData || []).filter(
                    item => item.is_active === true
                )
            );
        } catch (error) {
            console.log("Placement data error:", error);
            setPlacements([]);
        }
    };

    const placementData = placements.map(item => ({
        id: item.id,
        title: item.name || "",
        date: item.date
            ? item.date.split("-").reverse().join("-")
            : "",
        description: item.description || "",
        file: item.file || "",
        file_url: item.file_url || "",
        image: item.file_url || item.file || ""
    }));

    // ---------- Modal Handlers ----------
    const handleView = (file, title) => {
        setSelectedFile(file);
        setSelectedTitle(title);
        setShowModal(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedFile("");
        setSelectedTitle("");
        document.body.style.overflow = "auto";
    };

    // File type detect
    const getFileType = (url) => {
        if (!url) return "unknown";
        const cleanUrl = url.split("?")[0].toLowerCase();
        if (cleanUrl.match(/\.(jpg|jpeg|png|gif|webp|bmp|svg)$/)) return "image";
        if (cleanUrl.match(/\.(pdf)$/)) return "pdf";
        return "other";
    };

    const fileType = getFileType(selectedFile);

    // Description short karo
    const truncateText = (html, limit = 120) => {
        if (!html) return "";
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        const text = tmp.textContent || tmp.innerText || "";
        return text.length > limit
            ? text.substring(0, limit) + "..."
            : text;
    };

    return (
        <>
            <div className="container-fluid py-5 approvals-section">
                <div className="container py-4">

                    {/* Header */}
                    <div className="text-center mb-5">
                        <div className="approvals-label">
                            <span></span>
                            Activities
                            <span></span>
                        </div>

                        <h1 className="approvals-heading">
                            Latest Activities
                        </h1>

                        <p className="approvals-subtitle">
                            Stay updated with our recent activities and remarkable achievements.
                        </p>
                    </div>

                    {/* ✅ GRID of cards — har screen pe 3 per row */}
                    {placementData.length > 0 ? (
                        <div className="activities-grid">
                            {placementData.map((item) => (
                                <div
                                    className="activity-card"
                                    key={item.id}
                                >
                                    {/* IMAGE TOP */}
                                    <div className="activity-image-wrapper">
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="activity-image"
                                                onError={(e) => {
                                                    e.target.style.display = "none";
                                                    e.target.parentElement.classList.add("no-image");
                                                }}
                                            />
                                        ) : (
                                            <div className="activity-no-image">
                                                <i className="fa fa-image"></i>
                                            </div>
                                        )}

                                        {/* Top-left badge */}
                                        <div className="activity-badge">
                                            {item.date ? item.date : "Activity"}
                                        </div>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="activity-body">
                                        <h4 className="activity-title">
                                            {item.title}
                                        </h4>

                                        {item.description && (
                                            <p className="activity-desc">
                                                {truncateText(item.description, 120)}
                                            </p>
                                        )}

                                        <button
                                            type="button"
                                            className="activity-btn"
                                            onClick={() =>
                                                handleView(item.file, item.title)
                                            }
                                        >
                                            View Details
                                            <i className="fa fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="approvals-empty">
                            <div className="approvals-empty-icon">
                                <i className="fa fa-trophy"></i>
                            </div>

                            <h4>No Activities Found</h4>

                            <p>
                                There are currently no activities to display.
                            </p>
                        </div>
                    )}
                </div>

                {/* ---------- MODAL ---------- */}
                {showModal && (
                    <div className="approvals-modal-overlay" onClick={closeModal}>
                        <button
                            type="button"
                            className="approvals-modal-close"
                            onClick={closeModal}
                            aria-label="Close"
                        >
                            <i className="fa fa-times"></i>
                        </button>

                        <div
                            className="approvals-modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedFile ? (
                                fileType === "image" ? (
                                    <img
                                        src={selectedFile}
                                        alt={selectedTitle}
                                        className="approvals-modal-image"
                                    />
                                ) : fileType === "pdf" ? (
                                    <iframe
                                        src={`${selectedFile}#toolbar=0&navpanes=0&scrollbar=0`}
                                        title={selectedTitle}
                                        className="approvals-modal-iframe"
                                    />
                                ) : (
                                    <div className="approvals-modal-fallback">
                                        <i className="fa fa-file-o"></i>
                                        <p>Preview not available for this file type.</p>
                                    </div>
                                )
                            ) : (
                                <div className="approvals-modal-fallback">
                                    <i className="fa fa-exclamation-circle"></i>
                                    <p>No file available to view.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                <style>
                    {`
                    .approvals-section {
                        background: #f8f9fc;
                        min-height: 100vh;
                    }

                    /* Header */
                    .approvals-label {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 12px;
                        color: #01507c;
                        font-size: 13px;
                        font-weight: 700;
                        letter-spacing: 4px;
                        text-transform: uppercase;
                        margin-bottom: 14px;
                    }

                    .approvals-label span {
                        width: 30px;
                        height: 3px;
                        background: #01507c;
                        border-radius: 10px;
                    }

                    .approvals-heading {
                        color: #1a1a1a;
                        font-size: 40px;
                        font-weight: 800;
                        margin-bottom: 12px;
                        letter-spacing: -0.5px;
                    }

                    .approvals-subtitle {
                        max-width: 620px;
                        margin: auto;
                        color: #7a7a7a;
                        font-size: 15px;
                        line-height: 1.7;
                    }

                    /* =========================================================
                       ✅ GRID — har screen pe 3 cards per row
                    ========================================================= */

                    .activities-grid {
                        display: grid;
                        grid-template-columns: repeat(3, minmax(0, 1fr));
                        gap: 24px;
                    }

                    .activity-card {
                        background: #fff;
                        border: 1px solid #eee;
                        border-radius: 18px;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
                    }

                    .activity-card:hover {
                        transform: translateY(-6px);
                        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.10);
                        border-color: rgba(1, 80, 124, 0.2);
                    }

                    /* Image */
                    .activity-image-wrapper {
                        position: relative;
                        width: 100%;
                        aspect-ratio: 16 / 10;
                        overflow: hidden;
                        background: #f0f4f8;
                    }

                    .activity-image {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        display: block;
                        transition: transform 0.5s ease;
                    }

                    .activity-card:hover .activity-image {
                        transform: scale(1.06);
                    }

                    .activity-no-image {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(135deg, #e8f4fb, #d0e8f5);
                        color: #01507c;
                        font-size: 46px;
                    }

                    .activity-badge {
                        position: absolute;
                        bottom: 12px;
                        left: 12px;
                        padding: 6px 14px;
                        background: #01507c;
                        color: #fff;
                        font-size: 12px;
                        font-weight: 600;
                        border-radius: 30px;
                        box-shadow: 0 4px 12px rgba(1, 80, 124, 0.35);
                        z-index: 2;
                    }

                    /* Body */
                    .activity-body {
                        padding: 22px;
                        display: flex;
                        flex-direction: column;
                        flex: 1;
                    }

                    .activity-title {
                        margin: 0 0 12px;
                        color: #1a1a1a;
                        font-size: 18px;
                        font-weight: 800;
                        line-height: 1.35;
                        text-transform: uppercase;
                        letter-spacing: 0.3px;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    .activity-desc {
                        margin: 0 0 20px;
                        color: #7a7a7a;
                        font-size: 14px;
                        line-height: 1.65;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    /* Button */
                    .activity-btn {
                        margin-top: auto;
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        align-self: flex-start;
                        padding: 0;
                        background: transparent;
                        border: none;
                        color: #01507c;
                        font-size: 14px;
                        font-weight: 700;
                        cursor: pointer;
                        transition: all 0.25s ease;
                    }

                    .activity-btn i {
                        font-size: 13px;
                        transition: transform 0.25s ease;
                    }

                    .activity-btn:hover {
                        color: #0a7bb5;
                    }

                    .activity-btn:hover i {
                        transform: translateX(5px);
                    }

                    /* Empty State */
                    .approvals-empty {
                        background: #fff;
                        border: 1px solid #eee;
                        border-radius: 16px;
                        text-align: center;
                        padding: 70px 20px;
                    }

                    .approvals-empty-icon {
                        width: 80px;
                        height: 80px;
                        margin: auto auto 18px;
                        border-radius: 50%;
                        background: linear-gradient(135deg, #e8f4fb, #d0e8f5);
                        color: #01507c;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 32px;
                    }

                    .approvals-empty h4 {
                        color: #333;
                        font-weight: 700;
                        margin-bottom: 8px;
                    }

                    .approvals-empty p {
                        color: #888;
                        margin: 0;
                        font-size: 14px;
                    }

                    /* ================= MODAL ================= */
                    .approvals-modal-overlay {
                        position: fixed;
                        inset: 0;
                        background: rgba(0, 0, 0, 0.85);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 9999;
                        padding: 0;
                        animation: approvalsFadeIn 0.2s ease;
                    }

                    @keyframes approvalsFadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }

                    .approvals-modal-content {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        max-width: 100%;
                        max-height: 100%;
                        background: transparent;
                        border: none;
                        box-shadow: none;
                        padding: 0;
                        margin: 0;
                    }

                    .approvals-modal-image {
                        max-width: 100vw;
                        max-height: 100vh;
                        width: auto;
                        height: auto;
                        display: block;
                        object-fit: contain;
                        border: none;
                        border-radius: 0;
                        box-shadow: none;
                    }

                    .approvals-modal-iframe {
                        width: 100vw;
                        height: 100vh;
                        border: none;
                        display: block;
                        background: #fff;
                    }

                    .approvals-modal-close {
                        position: fixed;
                        top: 20px;
                        right: 20px;
                        width: 44px;
                        height: 44px;
                        border-radius: 50%;
                        border: none;
                        background: rgba(255, 255, 255, 0.15);
                        color: #fff;
                        font-size: 18px;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: 0.25s;
                        z-index: 10000;
                        backdrop-filter: blur(6px);
                    }

                    .approvals-modal-close:hover {
                        background: #d32f2f;
                        transform: rotate(90deg) scale(1.08);
                    }

                    .approvals-modal-fallback {
                        text-align: center;
                        color: #fff;
                        padding: 60px 20px;
                    }

                    .approvals-modal-fallback i {
                        font-size: 55px;
                        color: #fff;
                        margin-bottom: 18px;
                        display: block;
                        opacity: 0.7;
                    }

                    .approvals-modal-fallback p {
                        margin: 0;
                        font-size: 15px;
                        color: #fff;
                        opacity: 0.85;
                    }

                    /* =========================================================
                       RESPONSIVE — card text thoda chhota mobile pe,
                       lekin grid phir bhi 3 per row
                    ========================================================= */

                    @media (max-width: 991px) {
                        .approvals-heading {
                            font-size: 30px;
                        }

                        .activities-grid {
                            gap: 18px;
                        }

                        .activity-body {
                            padding: 16px;
                        }

                        .activity-title {
                            font-size: 15px;
                        }

                        .activity-desc {
                            font-size: 12.5px;
                        }
                    }

                    @media (max-width: 767px) {
                        .approvals-section {
                            padding-top: 30px !important;
                            padding-bottom: 30px !important;
                        }

                        .approvals-heading {
                            font-size: 24px;
                        }

                        .approvals-label {
                            font-size: 11px;
                            letter-spacing: 2px;
                        }

                        .approvals-label span {
                            width: 20px;
                        }

                        .approvals-subtitle {
                            font-size: 13px;
                        }

                        .activities-grid {
                            gap: 12px;
                        }

                        .activity-body {
                            padding: 12px;
                        }

                        .activity-title {
                            font-size: 13px;
                        }

                        .activity-desc {
                            font-size: 11px;
                            -webkit-line-clamp: 2;
                        }

                        .activity-btn {
                            font-size: 12px;
                        }

                        .activity-badge {
                            font-size: 10px;
                            padding: 4px 9px;
                        }
                    }

                    @media (max-width: 480px) {
                        .approvals-heading {
                            font-size: 20px;
                        }

                        .activities-grid {
                            gap: 8px;
                        }

                        .activity-body {
                            padding: 10px;
                        }

                        .activity-title {
                            font-size: 12px;
                        }

                        .activity-desc {
                            font-size: 10.5px;
                        }

                        .activity-badge {
                            font-size: 9px;
                            padding: 3px 8px;
                        }
                    }
                    `}
                </style>
            </div>
        </>
    );
}

export default Activities;