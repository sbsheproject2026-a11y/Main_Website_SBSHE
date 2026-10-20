 import React, { useEffect, useState } from "react";
import { getWebsiteContent, getWebsiteContentdata } from "./HomeService";
import { FILE_URL } from "../api";

function AnnouncementPage() {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);

    // ✅ Modal states
    const [showModal, setShowModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState("");
    const [selectedTitle, setSelectedTitle] = useState("");

    useEffect(() => {
        loadPageData();
    }, []);

    // ✅ Escape key + body scroll lock
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") closeModal();
        };

        if (showModal) {
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", handleEsc);
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "";
        };
    }, [showModal]);

    const loadPageData = async () => {
        try {
            setLoading(true);

            const result = await getWebsiteContentdata(131);

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

    const formatDate = (dateStr) => {
        if (!dateStr) return "-";

        try {
            const d = new Date(dateStr);
            if (isNaN(d.getTime())) return dateStr;

            return d.toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            });
        } catch {
            return dateStr;
        }
    };

    const stripHtml = (html) => {
        if (!html) return "";
        return html
            .replace(/<[^>]*>/g, " ")
            .replace(/&nbsp;/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    };

    // ✅ File URL nikaalo
    const getFileUrl = (content) => {
        return  content.productCategoryDocuments?.[0]?.fileupload 
            ? `${FILE_URL}${content.productCategoryDocuments[0].fileupload}` 
            : "";
    };

    const hasFile = (content) => {
        const url = getFileUrl(content);
        return url && url.trim() !== "";
    };

    // ✅ File type detect
    const getFileType = (url) => {
        if (!url) return "unknown";
        const cleanUrl = url.split("?")[0].toLowerCase();

        if (cleanUrl.match(/\.(jpg|jpeg|png|gif|webp|bmp|svg)$/)) {
            return "image";
        }

        if (cleanUrl.match(/\.(pdf)$/)) {
            return "pdf";
        }

        return "other";
    };

    // ✅ Open modal
    const handleView = (file, title) => {
        setSelectedFile(file);
        setSelectedTitle(title);
        setShowModal(true);
        document.body.style.overflow = "hidden";
    };

    // ✅ Close modal
    const closeModal = () => {
        setShowModal(false);
        setSelectedFile("");
        setSelectedTitle("");
        document.body.style.overflow = "";
    };

    const fileType = getFileType(selectedFile);

    if (loading) {
        return (
            <div className="plc-loading">
                <div className="plc-loader"></div>
                <span>Loading...</span>
            </div>
        );
    }

    if (!contents || contents.length === 0) {
        return (
            <div className="plc-not-found">
                <div className="plc-nf-icon">
                    <i className="bi bi-file-earmark-x"></i>
                </div>
                <h4>Content Not Found</h4>
                <p>The requested content is not available.</p>
            </div>
        );
    }

    return (
        <>
            <section className="plc-section">
                <div className="plc-bg-circle plc-bg-one"></div>
                <div className="plc-bg-circle plc-bg-two"></div>
                <div className="plc-grid-lines"></div>

                <div className="container">
                    {/* HERO */}
                    <div className="plc-hero">
                        <div className="plc-hero-eyebrow">
                            <span className="plc-eyebrow-dot"></span>
                            <span>Announcements</span>
                        </div>

                        <h1 className="plc-hero-title">
                            Building Careers,{" "}
                            <span className="plc-hero-highlight">
                                Shaping Futures
                            </span>
                        </h1>

                        <p className="plc-hero-subtitle">
                            Explore our announcements records, top recruiters
                            and success stories
                        </p>

                        <div className="plc-hero-line"></div>
                    </div>

                    {/* TABLE */}
                    <div className="plc-table-card">
                        <div className="plc-table-header">
                            <div className="plc-table-icon">
                                <i className="bi bi-briefcase-fill"></i>
                            </div>

                            <div className="plc-table-title">
                                <h2>Announcements</h2>
                                <p>Complete announcement information</p>
                            </div>

                            <div className="plc-table-count">
                                <strong>{contents.length}</strong>
                                <span>Total</span>
                            </div>
                        </div>

                        <div className="plc-table-wrap">
                            <table className="plc-table">
                                <thead>
                                    <tr>
                                        <th className="plc-th-sr">Sr No</th>
                                        <th className="plc-th-date">Date</th>
                                        <th className="plc-th-name">Name</th>
                                        <th className="plc-th-desc">
                                            Description
                                        </th>
                                        <th className="plc-th-view">
                                            View
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {contents.map((content, index) => {
                                        const fileUrl = getFileUrl(content);
                                        const fileExists = hasFile(content);

                                        const description =
                                            content.descrption ||
                                            content.shortDescription ||
                                            "";

                                        const plainText =
                                            stripHtml(description);

                                        const dateVal =
                                        content.date ||
                                            content.created_at ||
                                            content.createdAt ||
                                            
                                            content.entry_date;

                                        return (
                                            <tr
                                                key={content.id ?? index}
                                                className="plc-row"
                                            >
                                                {/* SR NO */}
                                                <td className="plc-td-sr">
                                                    <span className="plc-sr-badge">
                                                        {String(
                                                            index + 1
                                                        ).padStart(2, "0")}
                                                    </span>
                                                </td>

                                                {/* DATE */}
                                                <td className="plc-td-date">
                                                    <div className="plc-date-wrap">
                                                        <i className="bi bi-calendar3"></i>
                                                        <span>
                                                            {formatDate(
                                                                dateVal
                                                            )}
                                                        </span>
                                                    </div>
                                                </td>

                                                {/* NAME */}
                                                <td className="plc-td-name">
                                                    <div className="plc-name-wrap">
                                                        <span className="plc-name-text">
                                                            {content.name ||
                                                                "-"}
                                                        </span>

                                                        {content.short_name && (
                                                            <span className="plc-name-short">
                                                                {
                                                                    content.shortDescription
                                                                }
                                                            </span>
                                                        )}
                                                    </div>
                                                </td>

                                                {/* DESCRIPTION */}
                                                <td className="plc-td-desc">
                                                    <div className="plc-desc-wrap">
                                                        {plainText || "-"}
                                                    </div>
                                                </td>

                                                {/* VIEW */}
                                                <td className="plc-td-view">
                                                    {fileExists ? (
                                                        <button
                                                            type="button"
                                                            className="plc-view-btn"
                                                            title="View File"
                                                            onClick={() =>
                                                                handleView(
                                                                    fileUrl,
                                                                    content.name ||
                                                                        "Document"
                                                                )
                                                            }
                                                        >
                                                            <i className="bi bi-eye-fill"></i>
                                                            <span>View</span>
                                                        </button>
                                                    ) : (
                                                        <span className="plc-view-disabled">
                                                            —
                                                        </span>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ MODAL */}
            {showModal && (
                <div
                    className="approvals-modal-overlay"
                    onClick={closeModal}
                >
                    {/* ✅ Close button with SVG X */}
                    <button
                        type="button"
                        className="approvals-modal-close"
                        onClick={closeModal}
                        title="Close"
                        aria-label="Close"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
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
                                    src={`${selectedFile}#toolbar=1&navpanes=0&scrollbar=1`}
                                    title={selectedTitle}
                                    className="approvals-modal-iframe"
                                />
                            ) : (
                                <div className="approvals-modal-fallback">
                                    <i className="bi bi-file-earmark"></i>
                                    <p>
                                        Preview not available for this
                                        file type.
                                    </p>
                                </div>
                            )
                        ) : (
                            <div className="approvals-modal-fallback">
                                <i className="bi bi-exclamation-circle"></i>
                                <p>No file available to view.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <style>{`
                /* =========================================================
                   ROOT
                ========================================================= */

                .plc-section {
                    position: relative;
                    padding: 70px 0 90px;
                    background: linear-gradient(180deg, #f4f7fb 0%, #ffffff 100%);
                    overflow: hidden;
                    min-height: 100vh;
                }

                .plc-bg-circle {
                    position: absolute;
                    border-radius: 50%;
                    pointer-events: none;
                }

                .plc-bg-one {
                    width: 520px;
                    height: 520px;
                    top: -240px;
                    left: -200px;
                    background: radial-gradient(
                        circle,
                        rgba(1, 80, 124, 0.08) 0%,
                        rgba(1, 80, 124, 0) 70%
                    );
                }

                .plc-bg-two {
                    width: 600px;
                    height: 600px;
                    bottom: -300px;
                    right: -240px;
                    background: radial-gradient(
                        circle,
                        rgba(255, 102, 0, 0.07) 0%,
                        rgba(255, 102, 0, 0) 70%
                    );
                }

                .plc-grid-lines {
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(1, 80, 124, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(1, 80, 124, 0.03) 1px, transparent 1px);
                    background-size: 60px 60px;
                    pointer-events: none;
                    mask-image: radial-gradient(
                        ellipse at center,
                        #000 40%,
                        transparent 85%
                    );
                    -webkit-mask-image: radial-gradient(
                        ellipse at center,
                        #000 40%,
                        transparent 85%
                    );
                }

                /* =========================================================
                   HERO
                ========================================================= */

                .plc-hero {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    max-width: 820px;
                    margin: 0 auto 60px;
                }

                .plc-hero-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 9px;
                    padding: 7px 16px;
                    border-radius: 30px;
                    background: rgba(1, 80, 124, 0.07);
                    border: 1px solid rgba(1, 80, 124, 0.12);
                    color: #01507c;
                    font-size: 12px;
                    font-weight: 750;
                    letter-spacing: 0.8px;
                    text-transform: uppercase;
                    margin-bottom: 22px;
                }

                .plc-eyebrow-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: #ff6600;
                    box-shadow: 0 0 0 4px rgba(255, 102, 0, 0.15);
                    animation: plcPulse 2s ease-in-out infinite;
                }

                @keyframes plcPulse {
                    0%, 100% { box-shadow: 0 0 0 4px rgba(255, 102, 0, 0.15); }
                    50% { box-shadow: 0 0 0 8px rgba(255, 102, 0, 0.05); }
                }

                .plc-hero-title {
                    font-size: 46px;
                    font-weight: 800;
                    color: #0f172a;
                    line-height: 1.15;
                    letter-spacing: -1.2px;
                    margin: 0 0 18px;
                }

                .plc-hero-highlight {
                    background: linear-gradient(135deg, #01507c 0%, #0273b0 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .plc-hero-subtitle {
                    color: #64748b;
                    font-size: 17px;
                    font-weight: 500;
                    line-height: 1.7;
                    margin: 0 auto;
                    max-width: 620px;
                }

                .plc-hero-line {
                    width: 90px;
                    height: 4px;
                    background: linear-gradient(90deg, #01507c, #ff6600);
                    border-radius: 5px;
                    margin: 28px auto 0;
                }

                /* =========================================================
                   TABLE
                ========================================================= */

                .plc-table-card {
                    position: relative;
                    z-index: 2;
                    background: #ffffff;
                    border-radius: 20px;
                    border: 1px solid rgba(15, 23, 42, 0.06);
                    box-shadow:
                        0 4px 6px rgba(15, 23, 42, 0.02),
                        0 20px 50px rgba(15, 23, 42, 0.06);
                    overflow: hidden;
                }

                .plc-table-header {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding: 20px 26px;
                    background: linear-gradient(135deg, #01507c 0%, #0273b0 100%);
                    color: #fff;
                }

                .plc-table-icon {
                    width: 48px;
                    height: 48px;
                    min-width: 48px;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.15);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                }

                .plc-table-title {
                    flex: 1;
                    min-width: 0;
                }

                .plc-table-title h2 {
                    margin: 0;
                    font-size: 19px;
                    font-weight: 750;
                    color: #fff;
                    letter-spacing: -0.3px;
                }

                .plc-table-title p {
                    margin: 3px 0 0;
                    font-size: 12.5px;
                    color: rgba(255, 255, 255, 0.75);
                }

                .plc-table-count {
                    text-align: center;
                    padding: 8px 16px;
                    background: rgba(255, 255, 255, 0.12);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                    min-width: 72px;
                }

                .plc-table-count strong {
                    display: block;
                    font-size: 20px;
                    font-weight: 800;
                    color: #fff;
                    line-height: 1.1;
                }

                .plc-table-count span {
                    font-size: 10px;
                    color: rgba(255, 255, 255, 0.75);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .plc-table-wrap {
                    width: 100%;
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    scrollbar-width: thin;
                    scrollbar-color: #c9ced8 #eef1f5;
                }

                .plc-table-wrap::-webkit-scrollbar {
                    height: 8px;
                }

                .plc-table-wrap::-webkit-scrollbar-track {
                    background: #eef1f5;
                    border-radius: 10px;
                }

                .plc-table-wrap::-webkit-scrollbar-thumb {
                    background: #c9ced8;
                    border-radius: 10px;
                }

                .plc-table {
                    width: 100%;
                    min-width: 950px;
                    border-collapse: collapse;
                    table-layout: fixed;
                }

                .plc-table thead {
                    background: #f5f8fb;
                }

                .plc-table thead th {
                    padding: 14px 16px;
                    text-align: left;
                    color: #5b6b7f;
                    font-size: 11.5px;
                    font-weight: 750;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    border-bottom: 2px solid #dbe5ee;
                    white-space: nowrap;
                }

                .plc-th-sr { width: 90px; }
                .plc-th-date { width: 130px; }
                .plc-th-name { width: 200px; }
                .plc-th-desc { width: auto; }
                .plc-th-view {
                    width: 130px;
                    text-align: center !important;
                }

                .plc-row {
                    border-bottom: 1px solid #f0f3f7;
                    transition: background 0.18s ease;
                }

                .plc-row:hover {
                    background: #f8fbfd;
                }

                .plc-row:last-child {
                    border-bottom: none;
                }

                .plc-table tbody td {
                    padding: 16px;
                    vertical-align: top;
                    font-size: 13.5px;
                    color: #344054;
                }

                .plc-sr-badge {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 40px;
                    height: 34px;
                    padding: 0 10px;
                    border-radius: 9px;
                    background: linear-gradient(135deg, #ff6600, #e65c00);
                    color: #fff;
                    font-size: 13px;
                    font-weight: 800;
                    letter-spacing: 0.4px;
                    box-shadow: 0 4px 12px rgba(255, 102, 0, 0.22);
                }

                .plc-date-wrap {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    color: #5b6b7f;
                    font-size: 12.5px;
                    font-weight: 600;
                    white-space: nowrap;
                }

                .plc-date-wrap i {
                    color: #01507c;
                    font-size: 13px;
                }

                .plc-name-wrap {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                }

                .plc-name-text {
                    color: #0f172a;
                    font-size: 14px;
                    font-weight: 700;
                    line-height: 1.45;
                    word-break: break-word;
                }

                .plc-name-short {
                    color: #94a3b8;
                    font-size: 11px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.3px;
                }

                .plc-desc-wrap {
                    color: #5b6b7f;
                    font-size: 13px;
                    line-height: 1.7;
                    word-break: break-word;
                    overflow-wrap: break-word;
                    white-space: normal;
                }

                .plc-td-view {
                    text-align: center;
                }

                .plc-view-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 7px 13px;
                    background: linear-gradient(135deg, #01507c, #0273b0);
                    color: #fff;
                    border: none;
                    border-radius: 8px;
                    font-size: 12px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.18s ease;
                    white-space: nowrap;
                    box-shadow: 0 4px 12px rgba(1, 80, 124, 0.22);
                    font-family: inherit;
                }

                .plc-view-btn i {
                    font-size: 13px;
                }

                .plc-view-btn:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 8px 18px rgba(1, 80, 124, 0.32);
                }

                .plc-view-disabled {
                    color: #b8c0cb;
                    font-size: 14px;
                }

                /* =========================================================
                   MODAL
                ========================================================= */

                .approvals-modal-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.88);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                }

                .approvals-modal-content {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    max-width: 100%;
                    max-height: 100%;
                }

                .approvals-modal-image {
                    max-width: 100vw;
                    max-height: 100vh;
                    object-fit: contain;
                }

                .approvals-modal-iframe {
                    width: 100vw;
                    height: 100vh;
                    border: none;
                    background: #fff;
                }

                /* ✅ Close button — SVG X */
                .approvals-modal-close {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    width: 46px;
                    height: 46px;
                    border-radius: 50%;
                    border: none;
                    background: rgba(255, 255, 255, 0.15);
                    color: #ffffff;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    backdrop-filter: blur(6px);
                    -webkit-backdrop-filter: blur(6px);
                    transition: all 0.25s ease;
                    padding: 0;
                }

                .approvals-modal-close svg {
                    width: 20px;
                    height: 20px;
                    display: block;
                }

                .approvals-modal-close:hover {
                    background: #d32f2f;
                    transform: rotate(90deg) scale(1.08);
                    color: #fff;
                }

                .approvals-modal-fallback {
                    text-align: center;
                    color: #fff;
                    padding: 60px 20px;
                }

                .approvals-modal-fallback i {
                    font-size: 55px;
                    margin-bottom: 18px;
                    display: block;
                    opacity: 0.7;
                }

                .approvals-modal-fallback p {
                    margin: 0;
                    font-size: 15px;
                    opacity: 0.85;
                }

                /* =========================================================
                   LOADING & NOT FOUND
                ========================================================= */

                .plc-loading {
                    min-height: 500px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 14px;
                    color: #64748b;
                    background: #f4f7fb;
                }

                .plc-loader {
                    width: 40px;
                    height: 40px;
                    border: 3px solid #e2e8f0;
                    border-top-color: #01507c;
                    border-radius: 50%;
                    animation: plcSpin 0.8s linear infinite;
                }

                @keyframes plcSpin {
                    to { transform: rotate(360deg); }
                }

                .plc-not-found {
                    min-height: 500px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: #f4f7fb;
                    text-align: center;
                    padding: 30px;
                }

                .plc-nf-icon {
                    width: 76px;
                    height: 76px;
                    border-radius: 50%;
                    background: #fff1e8;
                    color: #ff6600;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 32px;
                    margin-bottom: 20px;
                }

                .plc-not-found h4 {
                    color: #0f172a;
                    font-weight: 750;
                    margin-bottom: 7px;
                    font-size: 22px;
                }

                .plc-not-found p {
                    color: #94a3b8;
                    margin: 0;
                    font-size: 15px;
                }

                /* =========================================================
                   RESPONSIVE
                ========================================================= */

                @media (max-width: 991px) {
                    .plc-section { padding: 50px 0 70px; }
                    .plc-hero-title { font-size: 34px; }
                    .plc-hero-subtitle { font-size: 15px; }
                }

                @media (max-width: 767px) {
                    .plc-section { padding: 35px 0 50px; }
                    .plc-hero { margin-bottom: 40px; }
                    .plc-hero-title { font-size: 26px; }
                    .plc-hero-subtitle { font-size: 14px; }

                    .plc-table-header {
                        padding: 16px 18px;
                        gap: 12px;
                    }

                    .plc-table-icon {
                        width: 40px;
                        height: 40px;
                        min-width: 40px;
                        font-size: 17px;
                    }

                    .plc-table-title h2 { font-size: 16px; }
                    .plc-table-title p { font-size: 11px; }

                    .plc-table-count {
                        padding: 6px 12px;
                        min-width: 60px;
                    }

                    .plc-table-count strong { font-size: 17px; }

                    .plc-table { min-width: 850px; }

                    .plc-table thead th,
                    .plc-table tbody td {
                        padding: 12px;
                    }

                    .plc-table tbody td { font-size: 12.5px; }

                    .plc-sr-badge {
                        min-width: 34px;
                        height: 30px;
                        font-size: 12px;
                    }

                    .approvals-modal-close {
                        top: 14px;
                        right: 14px;
                        width: 42px;
                        height: 42px;
                    }

                    .approvals-modal-close svg {
                        width: 18px;
                        height: 18px;
                    }
                }

                @media (max-width: 480px) {
                    .plc-hero-title { font-size: 22px; }
                    .plc-hero-subtitle { font-size: 13px; }

                    .plc-table-header { padding: 14px; }
                    .plc-table-icon {
                        width: 36px;
                        height: 36px;
                        min-width: 36px;
                        font-size: 15px;
                    }

                    .plc-table-title h2 { font-size: 14.5px; }
                    .plc-table-count {
                        padding: 5px 10px;
                        min-width: 55px;
                    }
                    .plc-table-count strong { font-size: 15px; }

                    .plc-table { min-width: 780px; }

                    .plc-table thead th {
                        font-size: 10.5px;
                        padding: 10px;
                    }

                    .plc-table tbody td {
                        padding: 10px;
                        font-size: 12px;
                    }

                    .plc-name-text { font-size: 12.5px; }
                    .plc-desc-wrap { font-size: 11.5px; }

                    .plc-view-btn {
                        padding: 5px 10px;
                        font-size: 10.5px;
                    }

                    .plc-view-btn span { display: none; }
                    .plc-view-btn i { font-size: 14px; }

                    .approvals-modal-close {
                        top: 10px;
                        right: 10px;
                        width: 40px;
                        height: 40px;
                    }

                    .approvals-modal-close svg {
                        width: 16px;
                        height: 16px;
                    }
                }
            `}</style>
        </>
    );
}

export default AnnouncementPage;