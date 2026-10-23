 import React, { useEffect, useState } from "react";
import { getWebsiteContentdata } from "./HomeService";
import { FILE_URL } from "../api";

function ApprovalsAchievements() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const [placements, setPlacements] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState("");
    const [selectedTitle, setSelectedTitle] = useState("");

    useEffect(() => {
        loadPlacementData();
    }, []);

    // ✅ Escape key se modal band karne ka logic
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") closeModal();
        };
        if (showModal) {
            document.addEventListener("keydown", handleEsc);
        }
        return () => document.removeEventListener("keydown", handleEsc);
    }, [showModal]);

    const loadPlacementData = async () => {
        try {
            const placementData = await getWebsiteContentdata(129);

            setPlacements(
                (placementData || []).filter(item => item.isActive === 1)
            );
            setCurrentPage(1);
        } catch (error) {
            console.log("Placement data error:", error);
            setPlacements([]);
        }
    };

    const placementData = placements.map(item => ({
        id: item.id,
        title: item.name || "",
        date: item.date ? item.date.split("-").reverse().join("-") : "",
        description: item.descrption || "",
        file: item.productCategoryDocuments?.[0]?.fileupload
            ? `${FILE_URL}${item.productCategoryDocuments[0].fileupload}`
            : ""
    }));

    const filteredPlacements = placementData.filter(item => {
        const searchText = search.toLowerCase().trim();
        return (
            item.title.toLowerCase().includes(searchText) ||
            item.date.toLowerCase().includes(searchText) ||
            item.description.toLowerCase().includes(searchText)
        );
    });

    const totalPages = Math.ceil(filteredPlacements.length / recordsPerPage);
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = Math.min(startIndex + recordsPerPage, filteredPlacements.length);
    const currentPlacements = filteredPlacements.slice(startIndex, endIndex);

    const handleSearch = e => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    const handleRecordsChange = e => {
        setRecordsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

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

    const getFileType = (url) => {
        if (!url) return "unknown";
        const cleanUrl = url.split("?")[0].toLowerCase();
        if (cleanUrl.match(/\.(jpg|jpeg|png|gif|webp|bmp|svg)$/)) return "image";
        if (cleanUrl.match(/\.(pdf)$/)) return "pdf";
        return "other";
    };

    const fileType = getFileType(selectedFile);

    const formatTitle = (title) => {
        if (!title) return "";
        const acronyms = ["ISO", "AYUSH", "IT", "NGO", "NEP", "UGC", "AICTE", "MHRD", "NAAC", "NBA", "CBSE", "ICSE"];
        return title
            .toLowerCase()
            .split(" ")
            .map((word) => {
                const upper = word.toUpperCase();
                if (acronyms.includes(upper)) return upper;
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join(" ");
    };

    return (
        <>
            <div className="approvals-section">
                <div className="approvals-container">

                    {/* ================= HEADER ================= */}
                    <div className="approvals-header">
                        <div className="approvals-eyebrow">
                            <i className="fa fa-certificate" aria-hidden="true"></i>
                            <span>Certified Excellence</span>
                        </div>

                        <h2 className="approvals-heading">
                            Our Approvals & <em>Achievements</em>
                        </h2>

                        <p className="approvals-subtitle">
                            Recognitions that validate our commitment to quality education and industry standards.
                        </p>
                    </div>

                    {/* ================= TOOLBAR ================= */}
                    <div className="approvals-toolbar">
                        <div className="approvals-records">
                            {/* ✅ Fix: Added htmlFor and id for select */}
                            <label htmlFor="recordsPerPage">Show</label>
                            <select 
                                id="recordsPerPage" 
                                value={recordsPerPage} 
                                onChange={handleRecordsChange}
                                aria-label="Select number of records per page"
                            >
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                            </select>
                            <span>entries</span>
                        </div>

                        <div className="approvals-search">
                            <i className="fa fa-search" aria-hidden="true"></i>
                            {/* ✅ Fix: Added aria-label for search input */}
                            <input
                                type="text"
                                placeholder="Search approvals..."
                                value={search}
                                onChange={handleSearch}
                                aria-label="Search approvals and achievements"
                            />
                        </div>
                    </div>

                    {/* ================= LIST (1 column) ================= */}
                    <div className="approvals-list">
                        {currentPlacements.length > 0 ? (
                            currentPlacements.map((item, index) => (
                                <div className="ac-card" key={item.id}>

                                    {/* Ribbon */}
                                    <div className="ac-ribbon">
                                        <i className="fa fa-check" aria-hidden="true"></i>
                                        <span>Approved</span>
                                    </div>

                                    {/* Card Main — Horizontal layout */}
                                    <div className="ac-main">

                                        {/* LEFT: Award Icon */}
                                        <div className="ac-left">
                                            <div className="ac-icon-circle">
                                                <i className="fa fa-award" aria-hidden="true"></i>
                                            </div>
                                        </div>

                                        {/* RIGHT: Content */}
                                        <div className="ac-right">

                                            {/* Meta row */}
                                            <div className="ac-meta">
                                                <span className="ac-title-num">
                                                    {String(startIndex + index + 1).padStart(2, "0")}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="ac-title">
                                                {formatTitle(item.title)}
                                            </h3>

                                            {/* Description — Full text, no truncation */}
                                            {item.description && (
                                                <div
                                                    className="ac-desc"
                                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                                />
                                            )}

                                        </div>

                                        {/* FAR RIGHT: View button */}
                                        <div className="ac-view-col">
                                            <button
                                                type="button"
                                                className="ac-btn"
                                                onClick={() => handleView(item.file, item.title)}
                                                aria-label={`View document for ${item.title}`}
                                            >
                                                <i className="fa fa-eye" aria-hidden="true"></i>
                                                <span>View</span>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="approvals-empty">
                                <div className="approvals-empty-icon">
                                    <i className="fa fa-trophy" aria-hidden="true"></i>
                                </div>
                                <h4>No Approvals / Achievements Found</h4>
                                <p>There are currently no records matching your search.</p>
                            </div>
                        )}
                    </div>

                    {/* ================= PAGINATION ================= */}
                    {filteredPlacements.length > 0 && (
                        <div className="approvals-pagination-wrapper">
                            <div className="approvals-info">
                                Showing <strong>{startIndex + 1}</strong> to{" "}
                                <strong>{endIndex}</strong> of{" "}
                                <strong>{filteredPlacements.length}</strong> entries
                            </div>

                            <div className="approvals-pagination">
                                <button
                                    className="page-btn"
                                    onClick={handlePrevious}
                                    disabled={currentPage === 1}
                                    aria-label="Previous page"
                                >
                                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1)
                                    .filter(page => {
                                        return (
                                            page === 1 ||
                                            page === totalPages ||
                                            Math.abs(page - currentPage) <= 1
                                        );
                                    })
                                    .map((page, idx, arr) => (
                                        <React.Fragment key={page}>
                                            {idx > 0 && arr[idx - 1] !== page - 1 && (
                                                <span className="page-dots">...</span>
                                            )}
                                            <button
                                                className={`page-btn ${currentPage === page ? "active" : ""}`}
                                                onClick={() => setCurrentPage(page)}
                                                aria-label={`Go to page ${page}`}
                                                aria-current={currentPage === page ? "page" : undefined}
                                            >
                                                {page}
                                            </button>
                                        </React.Fragment>
                                    ))}

                                <button
                                    className="page-btn"
                                    onClick={handleNext}
                                    disabled={currentPage === totalPages}
                                    aria-label="Next page"
                                >
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* ================= MODAL ================= */}
                {showModal && (
                    <div 
                        className="approvals-modal-overlay" 
                        onClick={closeModal}
                        role="dialog"
                        aria-modal="true"
                        aria-label={selectedTitle || "Document Preview"}
                    >
                        <button
                            type="button"
                            className="approvals-modal-close"
                            onClick={closeModal}
                            aria-label="Close document preview"
                        >
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </button>

                        <div
                            className="approvals-modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedFile ? (
                                fileType === "image" ? (
                                    <img src={selectedFile} alt={selectedTitle || "Approval Document"} className="approvals-modal-image" loading="lazy" />
                                ) : fileType === "pdf" ? (
                                    <iframe
                                        src={`${selectedFile}#toolbar=0&navpanes=0&scrollbar=0`}
                                        title={selectedTitle || "PDF Document"}
                                        className="approvals-modal-iframe"
                                    />
                                ) : (
                                    <div className="approvals-modal-fallback">
                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                        <p>Preview not available for this file type.</p>
                                    </div>
                                )
                            ) : (
                                <div className="approvals-modal-fallback">
                                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                    <p>No file available to view.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                <style>{`
                    /* Aapka saara CSS yahan same rahega, maine isme koi change nahi kiya hai */
                    .approvals-section { background: radial-gradient(circle at 10% 0%, rgba(10, 123, 181, 0.06), transparent 45%), radial-gradient(circle at 90% 100%, rgba(1, 80, 124, 0.05), transparent 45%), linear-gradient(180deg, #f6fafd 0%, #eef6fc 100%); padding: 70px 0; min-height: 100vh; }
                    .approvals-container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
                    .approvals-header { text-align: center; margin-bottom: 46px; }
                    .approvals-eyebrow { display: inline-flex; align-items: center; gap: 8px; padding: 7px 18px; background: linear-gradient(135deg, #01507c, #0a7bb5); color: #fff; border-radius: 50px; font-size: 10.5px; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 20px; box-shadow: 0 8px 22px rgba(1, 80, 124, 0.25); }
                    .approvals-eyebrow i { font-size: 11px; }
                    .approvals-heading { font-size: 44px; font-weight: 800; color: #0f172a; margin: 0 0 14px; letter-spacing: -1px; line-height: 1.15; }
                    .approvals-heading em { font-style: normal; background: linear-gradient(135deg, #01507c, #0a7bb5, #38bdf8); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
                    .approvals-subtitle { max-width: 620px; margin: 0 auto; color: #64748b; font-size: 14.5px; line-height: 1.7; }
                    .approvals-toolbar { background: #fff; padding: 14px 20px; border-radius: 14px; border: 1px solid #eef2f7; display: flex; justify-content: space-between; align-items: center; margin-bottom: 26px; gap: 20px; flex-wrap: wrap; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04); }
                    .approvals-records { display: flex; align-items: center; gap: 10px; color: #64748b; font-size: 14px; }
                    .approvals-records select { width: 78px; height: 38px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 13.5px; padding: 0 10px; outline: none; cursor: pointer; background: #fff; transition: 0.25s ease; }
                    .approvals-records select:focus { border-color: #01507c; box-shadow: 0 0 0 3px rgba(1, 80, 124, 0.08); }
                    .approvals-search { position: relative; width: 320px; height: 42px; max-width: 100%; }
                    .approvals-search i { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: #94a3b8; font-size: 13px; }
                    .approvals-search input { width: 100%; height: 100%; border: 1px solid #e2e8f0; border-radius: 12px; padding: 0 16px 0 42px; outline: none; font-size: 13.5px; background: #fafbfc; transition: 0.25s ease; }
                    .approvals-search input:focus { border-color: #01507c; background: #fff; box-shadow: 0 0 0 3px rgba(1, 80, 124, 0.08); }
                    .approvals-list { display: flex; flex-direction: column; gap: 20px; }
                    .ac-card { position: relative; background: #fff; border-radius: 20px; border: 1px solid #eef2f7; box-shadow: 0 4px 18px rgba(15, 23, 42, 0.05); transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); overflow: hidden; }
                    .ac-card:hover { transform: translateY(-4px); border-color: rgba(10, 123, 181, 0.3); box-shadow: 0 22px 45px rgba(1, 80, 124, 0.13), 0 0 0 1px rgba(10, 123, 181, 0.1); }
                    .ac-ribbon { position: absolute; top: 16px; right: -36px; background: linear-gradient(135deg, #059669, #10b981); color: #fff; padding: 4px 38px; font-size: 9.5px; font-weight: 800; letter-spacing: 1.3px; text-transform: uppercase; transform: rotate(45deg); box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35); z-index: 3; display: flex; align-items: center; gap: 3px; }
                    .ac-ribbon i { font-size: 8px; }
                    .ac-main { display: grid; grid-template-columns: auto 1fr auto; align-items: flex-start; gap: 24px; padding: 28px 30px; }
                    .ac-left { flex-shrink: 0; }
                    .ac-icon-circle { width: 76px; height: 76px; border-radius: 50%; background: linear-gradient(135deg, #01507c, #0a7bb5); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 32px; box-shadow: 0 12px 26px rgba(1, 80, 124, 0.28); transition: all 0.35s ease; position: relative; }
                    .ac-icon-circle::before { content: ""; position: absolute; inset: -7px; border-radius: 50%; border: 2px dashed rgba(10, 123, 181, 0.25); transition: all 0.4s ease; }
                    .ac-card:hover .ac-icon-circle { transform: scale(1.06) rotate(-8deg); box-shadow: 0 16px 32px rgba(1, 80, 124, 0.4); }
                    .ac-card:hover .ac-icon-circle::before { transform: rotate(180deg); }
                    .ac-right { min-width: 0; flex: 1; }
                    .ac-meta { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; flex-wrap: wrap; }
                    .ac-title-num { font-size: 12px; font-weight: 800; color: #0a7bb5; background: rgba(10, 123, 181, 0.1); padding: 4px 10px; border-radius: 6px; letter-spacing: 0.5px; }
                    .ac-title { margin: 0 0 12px; font-size: 22px; font-weight: 800; color: #0f172a; line-height: 1.3; letter-spacing: -0.4px; transition: color 0.3s ease; padding-right: 40px; }
                    .ac-card:hover .ac-title { color: #01507c; }
                    .ac-desc { color: #64748b; font-size: 14px; line-height: 1.75; word-break: break-word; margin: 0; }
                    .ac-desc p { margin: 0 0 10px; }
                    .ac-desc p:last-child { margin-bottom: 0; }
                    .ac-desc a { color: #0a7bb5; text-decoration: none; font-weight: 600; word-break: break-all; }
                    .ac-desc a:hover { text-decoration: underline; }
                    .ac-view-col { flex-shrink: 0; display: flex; align-items: center; align-self: center; }
                    .ac-btn { padding: 13px 26px; background: linear-gradient(135deg, #01507c, #0a7bb5); color: #fff; font-size: 13px; font-weight: 800; letter-spacing: 0.4px; border: none; border-radius: 50px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 9px; transition: all 0.3s ease; text-transform: uppercase; position: relative; overflow: hidden; white-space: nowrap; }
                    .ac-btn::before { content: ""; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent); transition: left 0.6s ease; }
                    .ac-btn:hover::before { left: 100%; }
                    .ac-btn i { font-size: 13px; transition: transform 0.3s ease; }
                    .ac-btn:hover { background: linear-gradient(135deg, #0a7bb5, #01507c); letter-spacing: 0.8px; transform: translateY(-2px); box-shadow: 0 12px 26px rgba(1, 80, 124, 0.32); }
                    .ac-btn:hover i { transform: scale(1.15); }
                    .approvals-empty { background: #fff; border: 1px solid #eef2f7; border-radius: 20px; text-align: center; padding: 80px 20px; }
                    .approvals-empty-icon { width: 90px; height: 90px; margin: auto auto 22px; border-radius: 50%; background: linear-gradient(135deg, #e8f4fb, #d0e8f5); color: #01507c; display: flex; align-items: center; justify-content: center; font-size: 38px; }
                    .approvals-empty h4 { color: #1e293b; font-weight: 800; margin-bottom: 10px; font-size: 20px; }
                    .approvals-empty p { color: #94a3b8; margin: 0; font-size: 14px; }
                    .approvals-pagination-wrapper { margin-top: 36px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; }
                    .approvals-info { color: #64748b; font-size: 13px; }
                    .approvals-info strong { color: #01507c; font-weight: 800; }
                    .approvals-pagination { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
                    .page-btn { min-width: 40px; height: 40px; border: 1px solid #e2e8f0; background: #fff; color: #475569; border-radius: 11px; display: inline-flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.25s ease; padding: 0 8px; }
                    .page-btn:hover:not(:disabled) { background: #f0f7fc; border-color: #01507c; color: #01507c; transform: translateY(-2px); }
                    .page-btn.active { background: linear-gradient(135deg, #01507c, #0a7bb5); border-color: #01507c; color: #fff; box-shadow: 0 8px 20px rgba(1, 80, 124, 0.30); }
                    .page-btn:disabled { opacity: 0.4; cursor: not-allowed; }
                    .page-dots { color: #94a3b8; padding: 0 4px; font-weight: 700; }
                    .approvals-modal-overlay { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.88); display: flex; align-items: center; justify-content: center; z-index: 9999; }
                    .approvals-modal-content { display: flex; align-items: center; justify-content: center; max-width: 100%; max-height: 100%; }
                    .approvals-modal-image { max-width: 100vw; max-height: 100vh; object-fit: contain; }
                    .approvals-modal-iframe { width: 100vw; height: 100vh; border: none; background: #fff; }
                    .approvals-modal-close { position: fixed; top: 20px; right: 20px; width: 46px; height: 46px; border-radius: 50%; border: none; background: rgba(255, 255, 255, 0.15); color: #fff; font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10000; backdrop-filter: blur(6px); transition: 0.25s; }
                    .approvals-modal-close:hover { background: #d32f2f; transform: rotate(90deg) scale(1.08); }
                    .approvals-modal-fallback { text-align: center; color: #fff; padding: 60px 20px; }
                    .approvals-modal-fallback i { font-size: 55px; margin-bottom: 18px; display: block; opacity: 0.7; }
                    .approvals-modal-fallback p { margin: 0; font-size: 15px; opacity: 0.85; }
                    @media (max-width: 991px) { .approvals-section { padding: 50px 0; } .approvals-heading { font-size: 34px; } .ac-main { grid-template-columns: auto 1fr; gap: 20px; padding: 24px 26px; } .ac-view-col { grid-column: 1 / -1; justify-content: flex-end; padding-top: 6px; } .ac-icon-circle { width: 68px; height: 68px; font-size: 28px; } .ac-title { font-size: 20px; padding-right: 0; } }
                    @media (max-width: 767px) { .approvals-section { padding: 40px 0; } .approvals-container { padding: 0 16px; } .approvals-header { margin-bottom: 32px; } .approvals-eyebrow { font-size: 10px; letter-spacing: 2px; padding: 6px 16px; margin-bottom: 16px; } .approvals-heading { font-size: 25px; } .approvals-subtitle { font-size: 13px; } .approvals-toolbar { flex-direction: column; align-items: stretch; gap: 12px; padding: 14px 16px; } .approvals-records { justify-content: center; } .approvals-search { width: 100%; } .approvals-list { gap: 16px; } .ac-card { border-radius: 16px; } .ac-main { grid-template-columns: 1fr; gap: 18px; padding: 22px 20px; } .ac-left { display: flex; justify-content: center; } .ac-icon-circle { width: 60px; height: 60px; font-size: 24px; } .ac-right { text-align: left; } .ac-title { font-size: 17px; padding-right: 0; } .ac-desc { font-size: 13px; } .ac-view-col { grid-column: 1 / -1; justify-content: center; } .ac-btn { width: 100%; } .approvals-pagination-wrapper { flex-direction: column; align-items: center; } .approvals-info { text-align: center; } .approvals-pagination { justify-content: center; } }
                    @media (max-width: 480px) { .approvals-heading { font-size: 22px; } .ac-title { font-size: 16px; } .page-btn { min-width: 36px; height: 36px; font-size: 12px; } }
                `}</style>
            </div>
        </>
    );
}

export default ApprovalsAchievements;