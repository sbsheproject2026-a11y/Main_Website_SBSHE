 import React, { useState, useEffect } from "react";
import { EnqueryDataSubmit, EnqueryDataFranchiseSubmit } from "./HomeService"; 

function ModelPage({ isOpen: externalIsOpen, onClose: externalOnClose, initialTab = "student" }) {

    // ✅ FIX: Default value false kar di, taaki Home.jsx se control ho sake
    const [internalShowModal, setInternalShowModal] = useState(false);
    
    const showModal = externalIsOpen !== undefined ? externalIsOpen : internalShowModal;
    
    const handleCloseModal = () => {
        if (externalOnClose) externalOnClose();
        else setInternalShowModal(false);
    };

    const [activeTab, setActiveTab] = useState(initialTab);
    const [submitting, setSubmitting] = useState(false);
    const [toast, setToast] = useState(null); 

    const [formData, setFormData] = useState({
        name: "", mobileNo: "", email: "", course: "", instituteName: "", remarks: ""
    });

    useEffect(() => {
        if (showModal) {
            setActiveTab(initialTab);
            setFormData({ name: "", mobileNo: "", email: "", course: "", instituteName: "", remarks: "" });
        }
    }, [initialTab, showModal]);

    // ✅ Body scroll lock jab modal khula ho
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => { document.body.style.overflow = "auto"; };
    }, [showModal]);

    const showToast = (message, type = "info") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setFormData({ name: "", mobileNo: "", email: "", course: "", instituteName: "", remarks: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name.trim()) { showToast("Please enter your name.", "error"); return; }
        if (!/^\d{10}$/.test(formData.mobileNo.trim())) { showToast("Please enter a valid 10 digit mobile number.", "error"); return; }
        if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) { showToast("Please enter a valid email address.", "error"); return; }
        if (activeTab === "franchise" && !formData.instituteName.trim()) { showToast("Please enter your institute name.", "error"); return; }

        try {
            setSubmitting(true);
            let result;

            if (activeTab === "student") {
                const cleaned = { name: formData.name.trim(), mobileNo: formData.mobileNo.trim(), email: formData.email.trim(), course: formData.course.trim(), remarks: formData.remarks.trim() };
                result = await EnqueryDataSubmit(cleaned);
            } else {
                const cleaned = { name: formData.name.trim(), mobileNo: formData.mobileNo.trim(), email: formData.email.trim(), course: formData.instituteName.trim(), remarks: formData.remarks.trim() };
                result = await EnqueryDataFranchiseSubmit(cleaned);
            }

            const message = result?.message || result?.Message;

            if (message === "successfully submit") {
                showToast("Successfully Submitted", "success");
                setFormData({ name: "", mobileNo: "", email: "", course: "", instituteName: "", remarks: "" });
                setTimeout(() => { handleCloseModal(); }, 3000);
            } else {
                showToast(message || "Submission failed. Please try again.", "error");
            }
        } catch (error) {
            console.error("Submit error:", error);
            showToast(error?.response?.data?.message || "Unable to submit query. Please try again.", "error");
        } finally {
            setSubmitting(false);
        }
    };

    if (!showModal) return null;

    return (
        <>
            <style>{`
                .model-page-overlay { position: fixed; inset: 0; z-index: 99999; display: flex; align-items: flex-start; justify-content: center; padding: 30px 20px 20px; background: rgba(0, 0, 0, 0.65); backdrop-filter: blur(5px); animation: modelOverlayShow 0.25s ease; overflow-y: auto; }
                .model-page-modal { width: 100%; max-width: 650px; background: #ffffff; border-radius: 18px; overflow: hidden; box-shadow: 0 25px 70px rgba(0, 0, 0, 0.30); animation: modelModalShow 0.4s ease; border-top: 5px solid #ff6600; position: relative; }
                .model-page-header { display: flex; align-items: center; justify-content: space-between; padding: 18px 22px; border-bottom: 1px solid #eeeeee; background: #ffffff; }
                .model-page-title { display: flex; align-items: center; gap: 13px; }
                .model-page-icon { width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 12px; background: #fff1e8; color: #ff6600; font-size: 21px; }
                .model-page-title h3 { margin: 0; font-size: 21px; font-weight: 700; color: #222222; }
                .model-page-title span { display: block; margin-top: 3px; font-size: 13px; color: #777777; }
                .model-page-close { width: 38px; height: 38px; border: none; border-radius: 50%; background: #f5f5f5; color: #555555; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 24px; line-height: 1; transition: 0.2s ease; }
                .model-page-close:hover { background: #ff6600; color: #ffffff; }
                .model-page-tabs { display: flex; background: #f8fafc; border-bottom: 1px solid #eeeeee; }
                .model-page-tabs button { flex: 1; padding: 15px 10px; border: none; background: transparent; font-size: 15px; font-weight: 600; color: #777777; cursor: pointer; transition: all 0.3s ease; border-bottom: 3px solid transparent; outline: none; box-shadow: none; font-family: inherit; }
                .model-page-tabs button:hover:not(.active) { color: #333333; background: #f0f0f0; }
                .model-page-tabs button.active { color: #ff6600; background: #ffffff; border-bottom: 3px solid #ff6600; font-weight: 700; }
                .model-page-content { max-height: 65vh; overflow-y: auto; padding: 22px; }
                .model-page-form { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
                .model-page-field { display: flex; flex-direction: column; gap: 6px; }
                .model-page-field.full { grid-column: 1 / -1; }
                .model-page-field label { font-size: 13px; font-weight: 600; color: #333333; }
                .model-page-field label span { color: #ff6600; }
                .model-page-field input, .model-page-field textarea { width: 100%; padding: 11px 14px; font-size: 14px; color: #222222; background: #fafafa; border: 1px solid #e2e2e2; border-radius: 9px; outline: none; transition: 0.2s ease; font-family: inherit; }
                .model-page-field input:focus, .model-page-field textarea:focus { border-color: #ff6600; background: #ffffff; box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.12); }
                .model-page-field textarea { resize: vertical; min-height: 80px; }
                .model-page-footer { display: flex; align-items: center; justify-content: space-between; gap: 15px; padding: 16px 22px; border-top: 1px solid #eeeeee; background: #fafafa; }
                .model-page-footer span { color: #777777; font-size: 13px; }
                .model-page-actions { display: flex; gap: 10px; }
                .model-page-cancel-btn { border: 1px solid #dcdcdc; padding: 10px 22px; border-radius: 8px; background: #ffffff; color: #555555; font-size: 14px; font-weight: 600; cursor: pointer; transition: 0.2s ease; }
                .model-page-cancel-btn:hover { background: #f3f3f3; }
                .model-page-ok-btn { border: none; padding: 10px 22px; border-radius: 8px; background: #07567f; color: #ffffff; font-size: 14px; font-weight: 600; cursor: pointer; white-space: nowrap; transition: 0.2s ease; }
                .model-page-ok-btn:hover:not(:disabled) { background: #064a6d; transform: translateY(-1px); }
                .model-page-ok-btn:disabled { opacity: 0.65; cursor: not-allowed; }
                .model-toast-wrap { position: fixed; top: 24px; right: 24px; z-index: 100000; display: flex; flex-direction: column; gap: 10px; pointer-events: none; }
                .model-toast { pointer-events: auto; min-width: 260px; max-width: 360px; display: flex; align-items: flex-start; gap: 12px; padding: 14px 16px; border-radius: 12px; background: #ffffff; color: #222222; font-size: 14px; font-weight: 500; line-height: 1.4; box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18); border-left: 5px solid #07567f; animation: modelToastIn 0.35s ease; }
                .model-toast.success { border-left-color: #16a34a; } .model-toast.error { border-left-color: #dc2626; } .model-toast.info { border-left-color: #07567f; }
                .model-toast-icon { flex-shrink: 0; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-size: 14px; color: #ffffff; background: #07567f; }
                .model-toast.success .model-toast-icon { background: #16a34a; } .model-toast.error .model-toast-icon { background: #dc2626; }
                .model-toast-msg { flex: 1; word-break: break-word; }
                @keyframes modelOverlayShow { from { opacity: 0; } to { opacity: 1; } }
                @keyframes modelModalShow { from { opacity: 0; transform: translateY(-80px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes modelToastIn { from { opacity: 0; transform: translateX(120%); } to { opacity: 1; transform: translateX(0); } }
                @media (max-width: 576px) { .model-page-overlay { padding: 15px 12px 20px; } .model-page-modal { border-radius: 14px; } .model-page-header { padding: 15px; } .model-page-tabs button { font-size: 14px; padding: 12px 10px; } .model-page-content { padding: 15px; max-height: 68vh; } .model-page-form { grid-template-columns: 1fr; } .model-page-footer { flex-direction: column; align-items: stretch; padding: 14px 15px; } .model-page-actions { width: 100%; } .model-page-actions button { flex: 1; } .model-toast-wrap { top: 12px; right: 12px; left: 12px; } .model-toast { min-width: auto; max-width: 100%; } }
            `}</style>

            {toast && (
                <div className="model-toast-wrap">
                    <div className={`model-toast ${toast.type}`}>
                        <div className="model-toast-icon">{toast.type === "success" && "✓"}{toast.type === "error" && "!"}{toast.type === "info" && "i"}</div>
                        <div className="model-toast-msg">{toast.message}</div>
                    </div>
                </div>
            )}

            {/* ✅ FIX: Overlay par click karne se modal band hoga */}
            <div className="model-page-overlay" onClick={handleCloseModal} role="dialog" aria-modal="true">
                {/* ✅ FIX: Modal ke andar click karne par band nahi hoga (e.stopPropagation) */}
                <div className="model-page-modal" onClick={(e) => e.stopPropagation()}>
                    <div className="model-page-header">
                        <div className="model-page-title">
                            <div className="model-page-icon">{activeTab === "student" ? "🎓" : "🏢"}</div>
                            <div>
                                <h3>{activeTab === "student" ? "Student Enquiry" : "Franchise Enquiry"}</h3>
                                <span>Shaheed Bhagat Singh Health & Education</span>
                            </div>
                        </div>
                        {/* ✅ FIX: Added aria-label */}
                        <button type="button" className="model-page-close" onClick={handleCloseModal} aria-label="Close popup">×</button>
                    </div>

                    <div className="model-page-tabs">
                        <button type="button" className={activeTab === "student" ? "active" : ""} onClick={() => handleTabChange("student")}>Student Enquiry</button>
                        <button type="button" className={activeTab === "franchise" ? "active" : ""} onClick={() => handleTabChange("franchise")}>Franchise Enquiry</button>
                    </div>

                    <div className="model-page-content">
                        <form id="unified-enquiry-form" className="model-page-form" onSubmit={handleSubmit}>
                            {activeTab === "franchise" && (
                                <div className="model-page-field ">
                                    <label htmlFor="instituteName">Institute Name <span>*</span></label>
                                    <input type="text" id="instituteName" name="instituteName" value={formData.instituteName} onChange={handleChange} placeholder="Enter your institute name" required />
                                </div>
                            )}
                            <div className="model-page-field">
                                <label htmlFor="name">Full Name <span>*</span></label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required />
                            </div>
                            <div className="model-page-field">
                                <label htmlFor="mobileNo">Mobile No <span>*</span></label>
                                <input type="tel" id="mobileNo" name="mobileNo" value={formData.mobileNo} onChange={(e) => setFormData((prev) => ({ ...prev, mobileNo: e.target.value.replace(/\D/g, "").slice(0, 10) }))} placeholder="10 digit mobile number" maxLength={10} inputMode="numeric" required />
                            </div>
                            <div className="model-page-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
                            </div>
                            {activeTab === "student" && (
                                <div className="model-page-field">
                                    <label htmlFor="course">Course</label>
                                    <input type="text" id="course" name="course" value={formData.course} onChange={handleChange} placeholder="Enter your course (e.g.)" />
                                </div>
                            )}
                            <div className="model-page-field full">
                                <label htmlFor="remarks">Remarks</label>
                                <textarea id="remarks" name="remarks" value={formData.remarks} onChange={handleChange} placeholder="Write your message here..." />
                            </div>
                        </form>
                    </div>

                    <div className="model-page-footer">
                        <span>Fields marked with <strong>*</strong> are required.</span>
                        <div className="model-page-actions">
                            <button type="button" onClick={handleCloseModal} className="model-page-cancel-btn">Cancel</button>
                            <button type="submit" form="unified-enquiry-form" className="model-page-ok-btn" disabled={submitting}>{submitting ? "Submitting..." : "Submit Enquiry"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModelPage;