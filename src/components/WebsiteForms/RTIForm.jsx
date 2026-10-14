 import React, { useEffect, useState } from "react";
import {
  creatertidata,
  getStudentData,
  getCheckStatus,
} from "../WebsitePage/HomeService";
import { FILE_URL } from "../api";

// ✅ File validation constants
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".pdf"];

function RTIForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [activeTab, setActiveTab] = useState("apply");
  const [loading, setLoading] = useState(false);
  const [courseTypes, setCourseTypes] = useState([]);

  // Check Status states
  const [checkId, setCheckId] = useState("");
  const [checkResult, setCheckResult] = useState(null);
  const [checkError, setCheckError] = useState("");
  const [checkLoading, setCheckLoading] = useState(false);

  // Form errors
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  // Form data
  const [formData, setFormData] = useState({
    userTypeId: "",
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    letterHead: null,
    allDocuments: null,
    centreReg: "",
    subject: "",
    infoRequired: "",
    declare: false,
  });

  // ============ HANDLE CHANGE ============
  const handleChange = (e) => {
    const { id, value, type, checked, files } = e.target;

    // Mobile
    if (id === "mobile") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, mobile: digitsOnly });
      if (digitsOnly.length > 0 && digitsOnly.length < 10) {
        setErrors({ ...errors, mobile: "Mobile number must be 10 digits" });
      } else {
        setErrors({ ...errors, mobile: "" });
      }
      return;
    }

    // Email
    if (id === "email") {
      setFormData({ ...formData, email: value });
      if (value.length > 0) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          setErrors({ ...errors, email: "Please enter a valid email address" });
        } else {
          setErrors({ ...errors, email: "" });
        }
      } else {
        setErrors({ ...errors, email: "" });
      }
      return;
    }

    // ✅ File validation
    if (type === "file") {
      const file = files[0];
      const fieldId = id;

      if (!file) {
        setFormData({ ...formData, [fieldId]: null });
        setErrors({ ...errors, [fieldId]: "Please select a file" });
        return;
      }

      const ext = "." + file.name.split(".").pop().toLowerCase();
      const isValidType =
        ALLOWED_TYPES.includes(file.type) ||
        ALLOWED_EXTENSIONS.includes(ext);

      if (!isValidType) {
        setFormData({ ...formData, [fieldId]: null });
        setErrors({
          ...errors,
          [fieldId]: "Only JPG, PNG, or PDF files are allowed",
        });
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        setFormData({ ...formData, [fieldId]: null });
        setErrors({
          ...errors,
          [fieldId]: "File size must be less than 2 MB",
        });
        return;
      }

      setFormData({ ...formData, [fieldId]: file });
      setErrors({ ...errors, [fieldId]: "" });
      return;
    }

    if (type === "checkbox") setFormData({ ...formData, [id]: checked });
    else setFormData({ ...formData, [id]: value });
  };

  // ============ REMOVE FILE ============
  const handleFileRemove = (fieldId) => {
    setFormData({ ...formData, [fieldId]: null });
    setErrors({ ...errors, [fieldId]: "" });

    const input = document.getElementById(fieldId);
    if (input) input.value = "";
  };

  // ============ CHANGE FILE ============
  const handleFileChange = (fieldId) => {
    setFormData({ ...formData, [fieldId]: null });

    const input = document.getElementById(fieldId);
    if (input) input.value = "";

    setTimeout(() => {
      document.getElementById(fieldId)?.click();
    }, 50);
  };

  // ============ LOAD APPLICANT TYPES ============
  useEffect(() => {
    loadCourseType();
  }, []);

  const loadCourseType = async () => {
    try {
      const result = await getStudentData(37);
      setCourseTypes(result.data || []);
    } catch (e) {
      console.log(e);
    }
  };

  const handleUserTypeChange = (e) => {
    setFormData({ ...formData, userTypeId: e.target.value });
  };

  // ============ FIND SELECTED ITEM ============
  const selectedType = courseTypes.find(
    (c) => String(c.id || c.Id) === String(formData.userTypeId)
  );

  const selectedName = selectedType
    ? selectedType.name || selectedType.Name || ""
    : "";

  // ============ DERIVED FLAGS ============
  const nameLower = selectedName.toLowerCase();
  const isGovtOrPrivate =
    nameLower.includes("government") || nameLower.includes("private");
  const isStudent = nameLower.includes("student");
  const isCentre =
    nameLower.includes("study") ||
    nameLower.includes("centre") ||
    nameLower.includes("center");

  // ============ VALIDATE ============
  const validateForm = () => {
    const newErrors = {};

    if (!formData.userTypeId) newErrors.userTypeId = "Please select applicant type";
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    else if (!/^[0-9]{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile number must be exactly 10 digits";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address";

    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.infoRequired.trim())
      newErrors.infoRequired = "Information required field cannot be empty";

    if (isGovtOrPrivate) {
      if (!formData.letterHead) newErrors.letterHead = "Letter Head is required";
      if (!formData.allDocuments) newErrors.allDocuments = "All Documents are required";
    }

    if (isStudent || isCentre) {
      if (!formData.allDocuments) newErrors.allDocuments = "All Documents are required";
    }

    if (isCentre && !formData.centreReg.trim())
      newErrors.centreReg = "Centre registration number is required";

    if (!formData.declare) newErrors.declare = "Please accept the declaration";

    return newErrors;
  };

  // ============ SUBMIT ============
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setErrors({});

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const errorCount = Object.keys(validationErrors).length;
      setSubmitError(
        `❌ Application rejected. Please fix ${errorCount} error${
          errorCount > 1 ? "s" : ""
        } below and try again.`
      );
      document.querySelector(".rti-body")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    setErrors({});
    setSubmitError("");
    setLoading(true);

    try {
      const payload = {
        ...formData,
        userTypeId: formData.userTypeId,
        userTypeName: selectedName,
      };

      const data = await creatertidata(payload);

      if (data.success) {
        setTrackingId(data.trackingId || data.message);
        setShowSuccess(true);

        setTimeout(() => {
          setFormData({
            userTypeId: "",
            fullName: "",
            mobile: "",
            email: "",
            address: "",
            letterHead: null,
            allDocuments: null,
            centreReg: "",
            subject: "",
            infoRequired: "",
            declare: false,
          });
          setErrors({});
          setSubmitError("");
          setShowSuccess(false);
        }, 8000);
      } else {
        setSubmitError(data.message || "Something went wrong");
      }
    } catch (err) {
      setSubmitError(
        err?.response?.data?.message || "Network error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // ============ CHECK STATUS ============
  const handleCheckStatus = async (e) => {
    e.preventDefault();
    setCheckError("");
    setCheckResult(null);

    if (!checkId.trim()) {
      setCheckError("Please enter your Tracking ID or Mobile Number / Email.");
      return;
    }

    setCheckLoading(true);

    try {
      const result = await getCheckStatus(checkId.trim());
      const list = result?.data?.data || result?.data || [];

      if (Array.isArray(list) && list.length > 0) {
        setCheckResult(list);
      } else if (list && typeof list === "object" && list.trackingId) {
        setCheckResult([list]);
      } else {
        setCheckError("❌ Application not found. Please check your input.");
      }
    } catch (err) {
      setCheckError(
        err?.response?.data?.message ||
          "❌ Application not found. Please check your Tracking ID / Mobile / Email."
      );
    } finally {
      setCheckLoading(false);
    }
  };

  // ============ HELPERS ============
  const getStatusClass = (statusName) => {
    const lower = (statusName || "").toLowerCase();
    if (lower.includes("approved") || lower.includes("confirm")) return "approved";
    if (lower.includes("progress")) return "inprogress";
    if (lower.includes("reject")) return "rejected";
    return "pending";
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    const d = new Date(dateStr);
    return d.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // ============ FILE INPUT RENDERER ============
  const renderFileInput = (fieldId, label, errorKey, showNote = false) => {
    const file = formData[fieldId];
    const error = errors[errorKey || fieldId];

    return (
      <div className="form-group">
        <label>
          {label} <span>*</span>
        </label>

        {/* Input (show when no file) */}
        {!file && (
          <>
            <input
              type="file"
              id={fieldId}
              onChange={handleChange}
              accept=".jpg,.jpeg,.png,.pdf"
              className={error ? "error" : ""}
            />
            {error && <div className="error-text">⚠ {error}</div>}
            {showNote && !error && (
              <div className="upload-note">📎 JPG, PNG ya PDF (max 2MB)</div>
            )}
            {showNote && !error && (
              <div className="info-message">
                <span className="icon">ℹ️</span>
                <span>
                  <strong>Note:</strong> Sabhi documents ko ek hi{" "}
                  <strong>PDF file</strong> me convert karke upload karein.
                </span>
              </div>
            )}
          </>
        )}

        {/* Preview (show when file selected) */}
        {file && (
          <div className="file-preview">
            <div className="file-info">
              <i className="bi bi-file-earmark-pdf file-icon"></i>
              <div className="file-details">
                <span className="file-name">{file.name}</span>
                <span className="file-size">
                  {(file.size / 1024).toFixed(1)} KB
                </span>
              </div>
            </div>

            <div className="file-actions">
              <button
                type="button"
                className="btn-change"
                onClick={() => handleFileChange(fieldId)}
              >
                <i className="bi bi-arrow-repeat"></i> Change
              </button>
              <button
                type="button"
                className="btn-remove"
                onClick={() => handleFileRemove(fieldId)}
              >
                <i className="bi bi-x-lg"></i> Remove
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="rti-container">
      <style>{`
        .rti-container {
          max-width: 700px; margin: 30px auto;
          background: #fff; border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          overflow: hidden; font-family: 'Segoe UI', Arial, sans-serif;
        }
        .rti-container * { box-sizing: border-box; }

        .rti-container .rti-header {
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          color: #fff; padding: 25px; text-align: center;
        }
        .rti-container .rti-header h1 {
          font-size: 24px; margin: 0 0 5px 0; color: #fff;
        }
        .rti-container .rti-header p {
          font-size: 14px; opacity: 0.9; margin: 0; color: #fff;
        }

        .rti-container .tabs {
          display: flex; background: #f8fafc;
          border-bottom: 1.5px solid #e2e8f0;
        }
        .rti-container .tab {
          flex: 1; padding: 14px 10px; text-align: center;
          font-size: 14px; font-weight: 600; color: #64748b;
          cursor: pointer; transition: 0.3s;
          border-bottom: 3px solid transparent;
          background: transparent;
          border-top: none; border-left: none; border-right: none;
          font-family: inherit;
        }
        .rti-container .tab:hover { color: #1e3a8a; background: #f1f5f9; }
        .rti-container .tab.active {
          color: #1e3a8a; background: #fff;
          border-bottom-color: #3b82f6;
        }

        .rti-container .rti-body { padding: 30px; }

        .rti-container .form-group { margin-bottom: 20px; }
        .rti-container .form-group label {
          display: block; font-weight: 600; margin-bottom: 8px;
          color: #1e293b; font-size: 14px;
        }
        .rti-container .form-group label span { color: #dc2626; }

        .rti-container .form-group input,
        .rti-container .form-group select,
        .rti-container .form-group textarea {
          width: 100%; padding: 12px 14px;
          border: 1.5px solid #cbd5e1; border-radius: 8px;
          font-size: 15px; transition: 0.3s;
          outline: none; font-family: inherit;
          background: #fff; color: #1e293b;
        }
        .rti-container .form-group input:focus,
        .rti-container .form-group select:focus,
        .rti-container .form-group textarea:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
        }
        .rti-container .form-group textarea {
          resize: vertical; min-height: 100px;
        }
        .rti-container .form-group input[type="file"] {
          padding: 10px 14px; cursor: pointer;
        }

        .rti-container .form-group input.error,
        .rti-container .form-group select.error,
        .rti-container .form-group textarea.error {
          border-color: #dc2626; background: #fef2f2;
        }
        .rti-container .error-text {
          color: #dc2626; font-size: 12.5px;
          margin-top: 5px; font-weight: 500;
        }

        /* Submit error box */
        .rti-container .submit-error-box {
          background: #fef2f2;
          border: 1.5px solid #dc2626;
          border-left: 5px solid #dc2626;
          color: #991b1b;
          padding: 14px 18px; border-radius: 8px;
          margin-bottom: 20px; font-size: 14px;
          font-weight: 600; display: flex;
          align-items: flex-start; gap: 10px;
          animation: shake 0.4s ease;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .rti-container .submit-error-box .icon {
          font-size: 18px; flex-shrink: 0;
        }

        /* File preview */
        .rti-container .file-preview {
          display: flex; justify-content: space-between;
          align-items: center; gap: 12px;
          padding: 12px 16px;
          background: #f0fdf4;
          border: 1.5px solid #86efac;
          border-radius: 8px; flex-wrap: wrap;
        }
        .rti-container .file-preview .file-info {
          display: flex; align-items: center;
          gap: 10px; flex: 1; min-width: 0;
        }
        .rti-container .file-preview .file-icon {
          font-size: 24px; color: #16a34a; flex-shrink: 0;
        }
        .rti-container .file-preview .file-details {
          display: flex; flex-direction: column;
          gap: 2px; min-width: 0;
        }
        .rti-container .file-preview .file-name {
          color: #166534; font-weight: 600;
          font-size: 13.5px; word-break: break-word;
        }
        .rti-container .file-preview .file-size {
          color: #64748b; font-size: 12px;
        }
        .rti-container .file-preview .file-actions {
          display: flex; gap: 8px; flex-shrink: 0;
        }
        .rti-container .file-preview .btn-change,
        .rti-container .file-preview .btn-remove {
          padding: 6px 12px; border-radius: 6px;
          font-size: 12px; font-weight: 600;
          cursor: pointer; border: 1.5px solid transparent;
          display: inline-flex; align-items: center;
          gap: 4px; transition: all 0.2s ease;
          font-family: inherit;
        }
        .rti-container .file-preview .btn-change {
          background: #eff6ff; color: #2563eb;
          border-color: #93c5fd;
        }
        .rti-container .file-preview .btn-change:hover {
          background: #2563eb; color: #fff;
        }
        .rti-container .file-preview .btn-remove {
          background: #fef2f2; color: #dc2626;
          border-color: #fca5a5;
        }
        .rti-container .file-preview .btn-remove:hover {
          background: #dc2626; color: #fff;
        }

        .rti-container .fee-box {
          background: #f1f5f9;
          border-left: 5px solid #3b82f6;
          padding: 15px 20px; border-radius: 8px;
          margin: 20px 0; display: none;
        }
        .rti-container .fee-box.show { display: block; }
        .rti-container .fee-box h3 {
          color: #1e293b; font-size: 16px; margin: 0 0 5px 0;
        }
        .rti-container .fee-box .amount {
          font-size: 28px; font-weight: bold; color: #16a34a;
        }
        .rti-container .fee-box .free {
          font-size: 22px; font-weight: bold; color: #16a34a;
        }
        .rti-container .fee-note {
          font-size: 13px; color: #64748b; margin-top: 5px;
        }

        .rti-container .btn-submit {
          width: 100%; padding: 14px;
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          color: #fff; border: none; border-radius: 8px;
          font-size: 16px; font-weight: 600;
          cursor: pointer; transition: 0.3s; font-family: inherit;
        }
        .rti-container .btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(59,130,246,0.4);
        }
        .rti-container .btn-submit:disabled {
          background: #94a3b8; cursor: not-allowed; transform: none;
        }

        .rti-container .success-msg {
          background: #dcfce7; color: #166534;
          padding: 20px; border-radius: 8px;
          margin-top: 20px; text-align: center; font-weight: 600;
        }
        .rti-container .success-msg .tracking-box {
          background: #fff; border: 1.5px solid #86efac;
          padding: 12px 18px; border-radius: 8px;
          margin-top: 12px; font-family: 'Courier New', monospace;
          font-size: 16px; color: #15803d;
          letter-spacing: 1px; display: inline-block;
        }
        .rti-container .success-msg .hint {
          font-size: 12.5px; color: #166534;
          margin-top: 10px; font-weight: 500;
        }

        .rti-container .upload-note {
          font-size: 12px; color: #64748b; margin-top: 4px;
        }

        .rti-container .info-message {
          background: #eff6ff;
          border-left: 5px solid #3b82f6;
          padding: 12px 16px; border-radius: 8px;
          margin-top: 8px; font-size: 13px; color: #1e40af;
          display: flex; align-items: flex-start;
          gap: 8px; line-height: 1.5;
        }
        .rti-container .info-message .icon {
          font-size: 16px; flex-shrink: 0; margin-top: 1px;
        }

        .rti-container .check-desc {
          font-size: 14px; color: #64748b;
          margin-bottom: 20px; line-height: 1.6;
        }
        .rti-container .error-msg {
          background: #fef2f2;
          border-left: 5px solid #dc2626;
          color: #991b1b;
          padding: 12px 16px; border-radius: 8px;
          font-size: 13.5px; margin-top: 15px;
        }

        .rti-container .status-card {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px; padding: 20px;
          margin-top: 20px; animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .rti-container .status-card .status-header {
          display: flex; justify-content: space-between;
          align-items: center; padding-bottom: 14px;
          border-bottom: 1px dashed #cbd5e1;
          margin-bottom: 16px; flex-wrap: wrap; gap: 8px;
        }
        .rti-container .status-card .status-header h3 {
          font-size: 16px; color: #1e3a8a; margin: 0;
        }
        .rti-container .status-badge {
          padding: 5px 14px; border-radius: 20px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.3px;
        }
        .rti-container .status-badge.inprogress {
          background: #fef3c7; color: #92400e; border: 1px solid #fcd34d;
        }
        .rti-container .status-badge.approved {
          background: #dcfce7; color: #15803d; border: 1px solid #86efac;
        }
        .rti-container .status-badge.pending {
          background: #dbeafe; color: #1e40af; border: 1px solid #93c5fd;
        }
        .rti-container .status-badge.rejected {
          background: #fee2e2; color: #991b1b; border: 1px solid #fca5a5;
        }

        .rti-container .status-row {
          display: flex; justify-content: space-between;
          padding: 10px 0; font-size: 14px;
          border-bottom: 1px solid #f1f5f9; gap: 10px;
        }
        .rti-container .status-row:last-child { border-bottom: none; }
        .rti-container .status-row .key {
          color: #64748b; font-weight: 500; flex-shrink: 0;
        }
        .rti-container .status-row .val {
          color: #1e293b; font-weight: 600;
          text-align: right; max-width: 65%;
          word-break: break-word;
        }
        .rti-container .status-note {
          background: #eff6ff;
          border-left: 4px solid #3b82f6;
          padding: 12px 14px; border-radius: 6px;
          margin-top: 14px; font-size: 13px;
          color: #1e40af; line-height: 1.5;
        }

        .rti-container .rti-file-link {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 12px; border-radius: 6px;
          background: #eff6ff; color: #2563eb;
          font-size: 12px; font-weight: 600;
          text-decoration: none;
          transition: all .2s ease; cursor: pointer;
        }
        .rti-container .rti-file-link:hover {
          background: #2563eb; color: #fff;
          text-decoration: none;
        }

        @media (max-width: 600px) {
          .rti-container { margin: 15px; border-radius: 10px; }
          .rti-container .rti-body { padding: 20px; }
          .rti-container .rti-header h1 { font-size: 20px; }
          .rti-container .tab { font-size: 13px; padding: 12px 8px; }
          .rti-container .status-row .val { max-width: 55%; }
          .rti-container .file-preview {
            flex-direction: column; align-items: stretch;
          }
          .rti-container .file-preview .file-actions {
            width: 100%; justify-content: flex-end;
          }
        }
      `}</style>

      {/* HEADER */}
      <div className="rti-header">
        <h1>📄 RTI Application Portal</h1>
        <p>Right to Information Act, 2005</p>
      </div>

      {/* TABS */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "apply" ? "active" : ""}`}
          onClick={() => setActiveTab("apply")}
        >
          📝 Apply RTI
        </button>
        <button
          className={`tab ${activeTab === "check" ? "active" : ""}`}
          onClick={() => setActiveTab("check")}
        >
          🔍 Check Status
        </button>
      </div>

      <div className="rti-body">
        {/* ==================== APPLY TAB ==================== */}
        {activeTab === "apply" && (
          <>
            {!showSuccess ? (
              <form onSubmit={handleSubmit}>
                {/* Global error */}
                {submitError && (
                  <div className="submit-error-box">
                    <span className="icon">⚠️</span>
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Applicant Type */}
                <div className="form-group">
                  <label>
                    Applicant Type <span>*</span>
                  </label>
                  <select
                    id="userTypeId"
                    value={formData.userTypeId}
                    onChange={handleUserTypeChange}
                    className={errors.userTypeId ? "error" : ""}
                    required
                  >
                    <option value="">-- Select Applicant Type --</option>
                    {courseTypes.map((item) => (
                      <option key={item.id || item.Id} value={item.id || item.Id}>
                        {item.name || item.Name}
                      </option>
                    ))}
                  </select>
                  {errors.userTypeId && (
                    <div className="error-text">⚠ {errors.userTypeId}</div>
                  )}
                </div>

                {/* Fee Box */}
                <div className={`fee-box ${formData.userTypeId ? "show" : ""}`}>
                  <h3>Applicable Fee</h3>
                  <div>
                    {isGovtOrPrivate && (
                      <>
                        <span className="free">FREE</span>
                        <div className="fee-note">
                          Government / Private departments are exempted from
                          any charges.
                        </div>
                      </>
                    )}
                    {isStudent && (
                      <>
                        <span className="amount">₹49</span>
                        <div className="fee-note">
                          Student RTI applications are charged ₹49 as service
                          fee.
                        </div>
                      </>
                    )}
                    {isCentre && (
                      <>
                        <span className="amount">₹49</span>
                        <div className="fee-note">
                          Study Centre RTI applications are charged ₹49 as
                          service fee.
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Full Name */}
                <div className="form-group">
                  <label>
                    Full Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? "error" : ""}
                    placeholder="Enter your full name"
                    required
                  />
                  {errors.fullName && (
                    <div className="error-text">⚠ {errors.fullName}</div>
                  )}
                </div>

                {/* Mobile */}
                <div className="form-group">
                  <label>
                    Mobile Number <span>*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    maxLength={10}
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    className={errors.mobile ? "error" : ""}
                    placeholder="10-digit mobile number"
                    required
                  />
                  {errors.mobile && (
                    <div className="error-text">⚠ {errors.mobile}</div>
                  )}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label>
                    Email Address <span>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                    placeholder="example@email.com"
                    required
                  />
                  {errors.email && (
                    <div className="error-text">⚠ {errors.email}</div>
                  )}
                </div>

                {/* Address */}
                <div className="form-group">
                  <label>
                    Full Address <span>*</span>
                  </label>
                  <textarea
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={errors.address ? "error" : ""}
                    placeholder="Enter your complete address with PIN code"
                    required
                  />
                  {errors.address && (
                    <div className="error-text">⚠ {errors.address}</div>
                  )}
                </div>

                {/* ========== GOVT / PRIVATE ========== */}
                {isGovtOrPrivate && (
                  <>
                    {renderFileInput("letterHead", "Upload Letter Head", "letterHead", true)}
                    {renderFileInput("allDocuments", "Upload All Documents", "allDocuments", true)}
                  </>
                )}

                {/* ========== STUDENT ========== */}
                {isStudent && (
                  <>
                    {renderFileInput("allDocuments", "Upload All Documents", "allDocuments", true)}
                  </>
                )}

                {/* ========== STUDY CENTRE ========== */}
                {isCentre && (
                  <>
                    <div className="form-group">
                      <label>
                        Study Centre Registration Number <span>*</span>
                      </label>
                      <input
                        type="text"
                        id="centreReg"
                        value={formData.centreReg}
                        onChange={handleChange}
                        className={errors.centreReg ? "error" : ""}
                        placeholder="Enter centre registration number"
                        required
                      />
                      {errors.centreReg && (
                        <div className="error-text">⚠ {errors.centreReg}</div>
                      )}
                    </div>

                    {renderFileInput("allDocuments", "Upload All Documents", "allDocuments", true)}
                  </>
                )}

                {/* Subject */}
                <div className="form-group">
                  <label>
                    Subject <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? "error" : ""}
                    placeholder="Brief subject of your RTI application"
                    required
                  />
                  {errors.subject && (
                    <div className="error-text">⚠ {errors.subject}</div>
                  )}
                </div>

                {/* Info Required */}
                <div className="form-group">
                  <label>
                    Information Required <span>*</span>
                  </label>
                  <textarea
                    id="infoRequired"
                    value={formData.infoRequired}
                    onChange={handleChange}
                    className={errors.infoRequired ? "error" : ""}
                    placeholder="Write in detail what information you need..."
                    required
                  />
                  {errors.infoRequired && (
                    <div className="error-text">⚠ {errors.infoRequired}</div>
                  )}
                </div>

                {/* Declaration */}
                <div className="form-group">
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontWeight: "normal",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="declare"
                      checked={formData.declare}
                      onChange={handleChange}
                      style={{ width: "auto", margin: 0 }}
                      required
                    />
                    I hereby declare that the information provided is true and
                    correct.
                  </label>
                  {errors.declare && (
                    <div className="error-text">⚠ {errors.declare}</div>
                  )}
                </div>

                <button type="submit" className="btn-submit" disabled={loading}>
                  {loading ? "Submitting..." : "Submit RTI Application"}
                </button>
              </form>
            ) : (
              <div className="success-msg">
                ✅ Your RTI application has been submitted successfully!
                <div className="tracking-box">Tracking ID: {trackingId}</div>
                <div className="hint">
                  ⚠️ Please save this Tracking ID to check your application
                  status later.
                </div>
              </div>
            )}
          </>
        )}

        {/* ==================== CHECK STATUS TAB ==================== */}
        {activeTab === "check" && (
          <div>
            <p className="check-desc">
              Apni RTI application ka status check karne ke liye apna{" "}
              <strong>Tracking ID</strong> ya <strong>Mobile Number / Email</strong>{" "}
              daalein.
            </p>

            <form onSubmit={handleCheckStatus}>
              <div className="form-group">
                <label>
                  Tracking ID / Mobile Number / Email <span>*</span>
                </label>
                <input
                  type="text"
                  value={checkId}
                  onChange={(e) => setCheckId(e.target.value)}
                  placeholder="E.g., RTI0002 or 7656755566 or example@email.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-submit"
                disabled={checkLoading}
              >
                {checkLoading ? "Searching..." : "🔍 Check Status"}
              </button>
            </form>

            {checkError && <div className="error-msg">{checkError}</div>}

            {checkResult &&
              Array.isArray(checkResult) &&
              checkResult.map((item, index) => {
                const statusClass = getStatusClass(item.statusName);

                return (
                  <div className="status-card" key={item.id || index}>
                    <div className="status-header">
                      <h3>📋 Application Details</h3>
                      {item.statusName && (
                        <span className={`status-badge ${statusClass}`}>
                          {item.statusName}
                        </span>
                      )}
                    </div>

                    {item.trackingId && (
                      <div className="status-row">
                        <span className="key">Tracking ID</span>
                        <span className="val">{item.trackingId}</span>
                      </div>
                    )}

                    {item.name && (
                      <div className="status-row">
                        <span className="key">Applicant Name</span>
                        <span className="val">{item.name}</span>
                      </div>
                    )}

                    {item.mobileNo && (
                      <div className="status-row">
                        <span className="key">Mobile Number</span>
                        <span className="val">{item.mobileNo}</span>
                      </div>
                    )}

                    {item.email && (
                      <div className="status-row">
                        <span className="key">Email</span>
                        <span className="val">{item.email}</span>
                      </div>
                    )}

                    {item.address && (
                      <div className="status-row">
                        <span className="key">Address</span>
                        <span className="val">{item.address}</span>
                      </div>
                    )}

                    {item.applicantType && (
                      <div className="status-row">
                        <span className="key">Applicant Type</span>
                        <span className="val">{item.applicantType}</span>
                      </div>
                    )}

                    {item.subject && (
                      <div className="status-row">
                        <span className="key">Subject</span>
                        <span className="val">{item.subject}</span>
                      </div>
                    )}

                    {item.infoRequired && (
                      <div className="status-row">
                        <span className="key">Information Required</span>
                        <span className="val">{item.infoRequired}</span>
                      </div>
                    )}

                    {item.remarks && (
                      <div className="status-row">
                        <span className="key">Remarks</span>
                        <span className="val">{item.remarks}</span>
                      </div>
                    )}

                    {item.code && (
                      <div className="status-row">
                        <span className="key">Centre Reg No</span>
                        <span className="val">{item.code}</span>
                      </div>
                    )}

                    {item.createdAt && (
                      <div className="status-row">
                        <span className="key">Applied On</span>
                        <span className="val">{formatDate(item.createdAt)}</span>
                      </div>
                    )}

                    {(item.filePath || item.filePath1) && (
                      <div className="status-note">
                        <strong>Documents:</strong>
                        <div
                          style={{
                            marginTop: 8,
                            display: "flex",
                            gap: 8,
                            flexWrap: "wrap",
                          }}
                        >
                          {item.filePath1 && (
                            <a
                              href={`${FILE_URL}/Uploads/${item.filePath1}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rti-file-link"
                            >
                              <i className="bi bi-file-earmark-pdf"></i>
                              Letter Head
                            </a>
                          )}
                          {item.filePath && (
                            <a
                              href={`${FILE_URL}/Uploads/${item.filePath}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rti-file-link"
                            >
                              <i className="bi bi-file-earmark-pdf"></i>
                              Documents
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default RTIForm;