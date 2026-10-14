import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getStudyCentres } from "../DocumentPrintFiles/PrintService";


function StudyCentres() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const [studyCentres, setStudyCentres] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        loadStudyCentres();
    }, []);

    const loadStudyCentres = async () => {
        try {
            setLoading(true);

            const response = await getStudyCentres(9);

            setStudyCentres(response.data || []);
        } catch (error) {
            console.log("Study Centre data error:", error);
            setStudyCentres([]);
        } finally {
            setLoading(false);
        }
    };

    const studyCentreData = useMemo(() => {
        return studyCentres.map((item) => ({
            id: item.id,
            instituteName: item.name || "",
            contactPerson: item.contactpersonname || "",
            location: item.address || "",
            cityName: item.cityName || "",
            stateName: item.stateName || "",
            mobileNo: item.mobileNo || "",
            email: item.email || "",
            code: item.code || "",
            authorityLetter: item.authorityLetter || "",
        }));
    }, [studyCentres]);

    const filteredStudyCentres = useMemo(() => {
        const searchText = search.toLowerCase().trim();

        if (!searchText) {
            return studyCentreData;
        }

        return studyCentreData.filter((item) =>
            [
                item.instituteName,
                item.contactPerson,
                item.location,
                item.cityName,
                item.stateName,
                item.mobileNo,
                item.email,
                item.code,
            ].some((value) =>
                String(value).toLowerCase().includes(searchText)
            )
        );
    }, [studyCentreData, search]);

    const totalPages = Math.ceil(
        filteredStudyCentres.length / recordsPerPage
    );

    const startIndex = (currentPage - 1) * recordsPerPage;

    const endIndex = Math.min(
        startIndex + recordsPerPage,
        filteredStudyCentres.length
    );

    const currentStudyCentres = filteredStudyCentres.slice(
        startIndex,
        endIndex
    );

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    const handleRecordsChange = (e) => {
        setRecordsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const getPageNumbers = () => {
        const pages = [];

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }

            return pages;
        }

        pages.push(1);

        if (currentPage > 4) {
            pages.push("...");
        }

        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (currentPage < totalPages - 3) {
            pages.push("...");
        }

        pages.push(totalPages);

        return pages;
    };

    return (
        <>
            <style>{`

                /* =========================
                   MAIN PAGE
                ========================== */

                .study-page {
                    min-height: 100vh;
                    background:
                        radial-gradient(
                            circle at top left,
                            rgba(1, 80, 124, 0.08),
                            transparent 30%
                        ),
                        linear-gradient(
                            180deg,
                            #f5f8fc 0%,
                            #ffffff 100%
                        );
                    padding: 55px 0 70px;
                }

                /* =========================
                   HEADER
                ========================== */

                .study-header {
                    text-align: center;
                    margin-bottom: 35px;
                }

                .study-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 9px;
                    color: #01507c;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 2.5px;
                    text-transform: uppercase;
                    margin-bottom: 12px;
                }

                .study-eyebrow::before,
                .study-eyebrow::after {
                    content: "";
                    width: 28px;
                    height: 2px;
                    background: #01507c;
                    border-radius: 5px;
                }

                .study-header h1 {
                    margin: 0;
                    color: #0f172a;
                    font-size: 40px;
                    line-height: 1.2;
                    font-weight: 800;
                    letter-spacing: -0.8px;
                }

                .study-header p {
                    max-width: 680px;
                    margin: 13px auto 0;
                    color: #64748b;
                    font-size: 15px;
                    line-height: 1.8;
                }

                /* =========================
                   SUMMARY
                ========================== */

                .study-summary {
                    display: flex;
                    align-items: center;
                    background: rgba(255, 255, 255, 0.95);
                    border: 1px solid #e5ebf2;
                    border-radius: 18px;
                    padding: 20px 22px;
                    margin-bottom: 18px;
                    box-shadow:
                        0 8px 35px rgba(15, 23, 42, 0.06);
                }

                .study-summary-icon {
                    width: 54px;
                    height: 54px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 14px;
                    color: #01507c;
                    background: linear-gradient(
                        135deg,
                        #e9f5fc,
                        #dceefa
                    );
                    font-size: 21px;
                }

                .study-summary-content {
                    margin-left: 15px;
                }

                .study-summary-content span {
                    display: block;
                    color: #94a3b8;
                    font-size: 12px;
                    font-weight: 600;
                    margin-bottom: 3px;
                }

                .study-summary-content strong {
                    display: block;
                    color: #0f172a;
                    font-size: 24px;
                    font-weight: 800;
                    line-height: 1;
                }

                .study-summary-action {
                    margin-left: auto;
                }

                .register-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    min-height: 42px;
                    padding: 0 18px;
                    border-radius: 9px;
                    color: #fff;
                    background: #01507c;
                    text-decoration: none;
                    font-size: 13px;
                    font-weight: 700;
                    box-shadow:
                        0 7px 18px rgba(1, 80, 124, 0.18);
                    transition: all 0.25s ease;
                }

                .register-btn:hover {
                    color: #fff;
                    text-decoration: none;
                    background: #013e61;
                    transform: translateY(-2px);
                    box-shadow:
                        0 10px 24px rgba(1, 80, 124, 0.25);
                }

                /* =========================
                   TOOLBAR
                ========================== */

                .study-toolbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    background: #fff;
                    border: 1px solid #e5ebf2;
                    border-radius: 16px;
                    padding: 15px 18px;
                    margin-bottom: 18px;
                    box-shadow:
                        0 6px 25px rgba(15, 23, 42, 0.045);
                }

                .entries-control {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #64748b;
                    font-size: 13px;
                    font-weight: 500;
                }

                .entries-select {
                    width: 72px;
                    height: 39px;
                    border: 1px solid #dbe3ec;
                    border-radius: 8px;
                    background: #fff;
                    color: #334155;
                    font-size: 13px;
                    font-weight: 600;
                    padding: 0 8px;
                    outline: none;
                    cursor: pointer;
                }

                .entries-select:focus {
                    border-color: #01507c;
                    box-shadow:
                        0 0 0 3px rgba(1, 80, 124, 0.08);
                }

                .search-box {
                    position: relative;
                    width: 330px;
                }

                .search-box i {
                    position: absolute;
                    left: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #94a3b8;
                    font-size: 13px;
                    pointer-events: none;
                }

                .search-box input {
                    width: 100%;
                    height: 42px;
                    border: 1px solid #dbe3ec;
                    border-radius: 9px;
                    background: #f8fafc;
                    color: #334155;
                    padding: 0 15px 0 42px;
                    font-size: 13px;
                    outline: none;
                    transition: all 0.2s ease;
                }

                .search-box input::placeholder {
                    color: #a1acba;
                }

                .search-box input:focus {
                    background: #fff;
                    border-color: #01507c;
                    box-shadow:
                        0 0 0 3px rgba(1, 80, 124, 0.08);
                }

                /* =========================
                   TABLE
                ========================== */

                .study-table-card {
                    overflow: hidden;
                    background: #fff;
                    border: 1px solid #e3e9f0;
                    border-radius: 18px;
                    box-shadow:
                        0 10px 40px rgba(15, 23, 42, 0.065);
                }

                .table-responsive {
                    overflow-x: auto;
                }

                .study-table {
                    width: 100%;
                    min-width: 1050px;
                    margin: 0;
                    border-collapse: separate;
                    border-spacing: 0;
                }

                .study-table thead th {
                    border: 0;
                    background: #01507c;
                    color: #fff;
                    padding: 16px 18px;
                    font-size: 11px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.7px;
                    white-space: nowrap;
                }

                .study-table thead th:first-child {
                    width: 80px;
                }

                .study-table tbody td {
                    padding: 18px;
                    color: #475569;
                    font-size: 13px;
                    border-bottom: 1px solid #edf1f5;
                    vertical-align: middle;
                }

                .study-table tbody tr:last-child td {
                    border-bottom: none;
                }

                .study-table tbody tr {
                    transition: all 0.2s ease;
                }

                .study-table tbody tr:hover {
                    background: #f8fbfd;
                }

                /* =========================
                   SERIAL NUMBER
                ========================== */

                .serial-number {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 20px;
                    height: 30px;
                    border-radius: 8px;
                    background: #f1f5f9;
                    color: #64748b;
                    font-size: 11px;
                    font-weight: 800;
                }

                /* =========================
                   CODE
                ========================== */

                .centre-code {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 72px;
                    padding: 7px 10px;
                    border-radius: 7px;
                    background: #eaf4fa;
                    color: #01507c;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 0.4px;
                }

                /* =========================
                   STUDY CENTRE NAME
                ========================== */

                .institute-box {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    min-width: 250px;
                }

                .institute-icon {
                    width: 44px;
                    height: 44px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 11px;
                    background: #eaf4fa;
                    color: #01507c;
                    font-size: 17px;
                }

                .institute-info {
                    min-width: 0;
                }

                .institute-info strong {
                    display: block;
                    color: #1e293b;
                    font-size: 14px;
                    font-weight: 750;
                    line-height: 1.4;
                }

                .institute-info small {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    margin-top: 5px;
                    color: #16a34a;
                    font-size: 10px;
                    font-weight: 700;
                }

                .institute-info small::before {
                    content: "";
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #22c55e;
                }

                /* =========================
                   CONTACT
                ========================== */

                .contact-box {
                    min-width: 200px;
                }

                .contact-person {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    color: #334155;
                    font-weight: 700;
                    margin-bottom: 7px;
                }

                .contact-person-icon {
                    width: 29px;
                    height: 29px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: #f1f5f9;
                    color: #64748b;
                    font-size: 11px;
                }

                .contact-details {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    padding-left: 38px;
                }

                .contact-details a {
                    color: #64748b;
                    font-size: 11px;
                    text-decoration: none;
                    line-height: 1.4;
                }

                .contact-details a:hover {
                    color: #01507c;
                }

                .contact-details i {
                    width: 15px;
                    color: #94a3b8;
                    margin-right: 4px;
                }

                /* =========================
                   LOCATION
                ========================== */

                .location-box {
                    display: flex;
                    align-items: flex-start;
                    gap: 9px;
                    min-width: 180px;
                    max-width: 280px;
                    color: #475569;
                    font-size: 12px;
                    line-height: 1.5;
                }

                .location-icon {
                    width: 30px;
                    height: 30px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    background: #fff4e8;
                    color: #ea580c;
                    font-size: 12px;
                }

                .location-content {
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .location-address {
                    color: #334155;
                    font-size: 12px;
                    font-weight: 600;

                    /* Address always stays in ONE line */
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 220px;
                }

                .location-place {
                    color: #64748b;
                    font-size: 11px;
                    line-height: 1.4;
                    white-space: nowrap;
                }

                /* =========================
                   AUTHORITY LETTER
                ========================== */

                .authority-letter {
                    text-align: center;
                    min-width: 120px;
                }

                .authority-view-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    min-width: 76px;
                    height: 34px;
                    padding: 0 12px;
                    border: 1px solid #d9e5ed;
                    border-radius: 8px;
                    background: #f8fbfd;
                    color: #01507c;
                    font-size: 11px;
                    font-weight: 800;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }

                .authority-view-btn:hover {
                    color: #ffffff;
                    background: #01507c;
                    border-color: #01507c;
                    text-decoration: none;
                    transform: translateY(-1px);
                    box-shadow:
                        0 5px 13px rgba(1, 80, 124, 0.16);
                }

                .authority-view-btn i {
                    font-size: 12px;
                }

                /* =========================
                   EMPTY STATE
                ========================== */

                .empty-state {
                    text-align: center;
                    padding: 70px 20px !important;
                }

                .empty-icon {
                    width: 70px;
                    height: 70px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 17px;
                    border-radius: 50%;
                    background: #f1f5f9;
                    color: #94a3b8;
                    font-size: 26px;
                }

                .empty-state h5 {
                    margin: 0 0 7px;
                    color: #334155;
                    font-size: 17px;
                    font-weight: 750;
                }

                .empty-state p {
                    margin: 0;
                    color: #94a3b8;
                    font-size: 13px;
                }

                /* =========================
                   LOADING
                ========================== */

                .loading-state {
                    text-align: center;
                    padding: 80px 20px;
                }

                .spinner {
                    width: 42px;
                    height: 42px;
                    margin: 0 auto 15px;
                    border: 3px solid #e2e8f0;
                    border-top-color: #01507c;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                }

                .loading-state span {
                    color: #64748b;
                    font-size: 13px;
                }

                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }

                /* =========================
                   PAGINATION
                ========================== */

                .pagination-card {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    margin-top: 18px;
                    padding: 15px 18px;
                    background: #fff;
                    border: 1px solid #e5ebf2;
                    border-radius: 15px;
                    box-shadow:
                        0 6px 24px rgba(15, 23, 42, 0.04);
                }

                .pagination-info {
                    color: #64748b;
                    font-size: 12px;
                }

                .pagination-info strong {
                    color: #334155;
                    font-weight: 750;
                }

                .pagination-list {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }

                .page-btn {
                    min-width: 35px;
                    height: 35px;
                    padding: 0 9px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid transparent;
                    border-radius: 8px;
                    background: transparent;
                    color: #64748b;
                    font-size: 12px;
                    font-weight: 700;
                    transition: all 0.2s ease;
                }

                .page-btn:hover:not(:disabled) {
                    background: #eaf4fa;
                    color: #01507c;
                }

                .page-btn.active {
                    color: #fff;
                    background: #01507c;
                    box-shadow:
                        0 5px 13px rgba(1, 80, 124, 0.2);
                }

                .page-btn:disabled {
                    color: #cbd5e1;
                    cursor: not-allowed;
                }

                .page-dots {
                    padding: 0 4px;
                    color: #94a3b8;
                }

                /* =========================
                   RESPONSIVE
                ========================== */

                @media (max-width: 767px) {

                    .study-page {
                        padding: 38px 0 50px;
                    }

                    .study-header {
                        margin-bottom: 28px;
                    }

                    .study-header h1 {
                        font-size: 29px;
                    }

                    .study-header p {
                        padding: 0 10px;
                        font-size: 13px;
                        line-height: 1.7;
                    }

                    .study-eyebrow {
                        font-size: 10px;
                        letter-spacing: 1.8px;
                    }

                    .study-eyebrow::before,
                    .study-eyebrow::after {
                        width: 20px;
                    }

                    .study-summary {
                        padding: 16px;
                        border-radius: 14px;
                    }

                    .study-summary-icon {
                        width: 46px;
                        height: 46px;
                        border-radius: 11px;
                    }

                    .study-summary-content strong {
                        font-size: 21px;
                    }

                    .register-btn {
                        min-height: 38px;
                        padding: 0 12px;
                        font-size: 11px;
                    }

                    .study-toolbar {
                        align-items: stretch;
                        flex-direction: column;
                        padding: 14px;
                    }

                    .search-box {
                        width: 100%;
                    }

                    .study-table-card {
                        border-radius: 14px;
                    }

                    .study-table {
                        min-width: 1100px;
                    }

                    .study-table thead th {
                        padding: 13px 12px;
                    }

                    .study-table tbody td {
                        padding: 13px 12px;
                    }

                    .pagination-card {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .pagination-list {
                        width: 100%;
                        justify-content: flex-start;
                        flex-wrap: wrap;
                    }
                }

                @media (max-width: 480px) {

                    .study-header h1 {
                        font-size: 25px;
                    }

                    .study-summary {
                        gap: 10px;
                    }

                    .study-summary-content {
                        margin-left: 2px;
                    }

                    .study-summary-action {
                        margin-left: auto;
                    }

                    .register-btn {
                        width: 42px;
                        height: 38px;
                        padding: 0;
                        min-height: 38px;
                    }

                    .register-btn span {
                        display: none;
                    }

                    .pagination-card {
                        padding: 14px;
                    }
                }

            `}</style>

            <div className="study-page">

                <div className="container">

                    {/* HEADER */}
                    <div className="study-header">

                        <div className="study-eyebrow">
                            Study Centres
                        </div>

                        <h1>
                            Our Study Centres
                        </h1>

                        <p>
                            Explore our network of authorised study centres
                            and find institute, contact and location
                            information in one place.
                        </p>

                    </div>

                    {/* SUMMARY */}
                    <div className="study-summary">

                        <div className="study-summary-icon">
                            <i className="fa fa-university"></i>
                        </div>

                        <div className="study-summary-content">

                            <span>
                                Total Study Centres
                            </span>

                            <strong>
                                {studyCentreData.length}
                            </strong>

                        </div>

                        <div className="study-summary-action">

                            <Link
                                to="https://soft.shaheedbhagatsinghhealthandeducation.com/study-centre-apply"
                                className="register-btn"
                                title="Register Study Centre"
                            >
                                <i className="fa fa-plus-circle"></i>

                                <span>
                                    Register Study Centre
                                </span>

                            </Link>

                        </div>

                    </div>

                    {/* TOOLBAR */}
                    <div className="study-toolbar">

                        <div className="entries-control">

                            <span>
                                Show
                            </span>

                            <select
                                className="entries-select"
                                value={recordsPerPage}
                                onChange={handleRecordsChange}
                            >
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                            </select>

                            <span>
                                entries
                            </span>

                        </div>

                        <div className="search-box">

                            <i className="fa fa-search"></i>

                            <input
                                type="text"
                                placeholder="Search by name, contact, email or location..."
                                value={search}
                                onChange={handleSearch}
                            />

                        </div>

                    </div>

                    {/* TABLE */}
                    <div className="study-table-card">

                        {loading ? (

                            <div className="loading-state">

                                <div className="spinner"></div>

                                <span>
                                    Loading study centres...
                                </span>

                            </div>

                        ) : (

                            <div className="table-responsive">

                                <table className="table study-table">

                                    <thead>

                                        <tr>

                                            <th>
                                                Sr. No.
                                            </th>

                                            <th>
                                                Code
                                            </th>

                                            <th>
                                                Study Centre Name
                                            </th>

                                            <th>
                                                Contact Information
                                            </th>

                                            <th>
                                                Location
                                            </th>

                                            <th>
                                                Authority Letter
                                            </th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        {currentStudyCentres.length > 0 ? (

                                            currentStudyCentres.map(
                                                (item, index) => (

                                                    <tr
                                                        key={`${item.id ?? "centre"}-${startIndex + index}`}
                                                    >

                                                        {/* SR. NO. */}
                                                        <td>

                                                            <span className="serial-number">
                                                                {startIndex + index + 1}
                                                            </span>

                                                        </td>

                                                        {/* CODE */}
                                                        <td>

                                                            {item.code && (
                                                                <span className="centre-code">
                                                                    {item.code}
                                                                </span>
                                                            )}

                                                        </td>

                                                        {/* STUDY CENTRE NAME */}
                                                        <td>

                                                            <div className="institute-box">

                                                                <div className="institute-icon">
                                                                    <i className="fa fa-university"></i>
                                                                </div>

                                                                <div className="institute-info">

                                                                    <strong>
                                                                        {item.instituteName}
                                                                    </strong>

                                                                    <small>
                                                                        Authorised Study Centre
                                                                    </small>

                                                                </div>

                                                            </div>

                                                        </td>

                                                        {/* CONTACT */}
                                                        <td>

                                                            <div className="contact-box">

                                                                {item.contactPerson && (
                                                                    <div className="contact-person">

                                                                        <div className="contact-person-icon">
                                                                            <i className="fa fa-user"></i>
                                                                        </div>

                                                                        <span>
                                                                            {item.contactPerson}
                                                                        </span>

                                                                    </div>
                                                                )}

                                                                <div className="contact-details">

                                                                    {item.email && (
                                                                        <a
                                                                            href={`mailto:${item.email}`}
                                                                        >
                                                                            <i className="fa fa-envelope"></i>
                                                                            {item.email}
                                                                        </a>
                                                                    )}

                                                                    {item.mobileNo && (
                                                                        <a
                                                                            href={`tel:${item.mobileNo}`}
                                                                        >
                                                                            <i className="fa fa-phone"></i>
                                                                            {item.mobileNo}
                                                                        </a>
                                                                    )}

                                                                </div>

                                                            </div>

                                                        </td>

                                                        {/* LOCATION */}
                                                        <td>

                                                            <div className="location-box">

                                                                <div className="location-icon">
                                                                    <i className="fa fa-map-marker"></i>
                                                                </div>

                                                                <div className="location-content">

                                                                    {/* ADDRESS - ONE LINE */}
                                                                    {item.location && (
                                                                        <div
                                                                            className="location-address"
                                                                            title={item.location}
                                                                        >
                                                                            {item.location}
                                                                        </div>
                                                                    )}

                                                                    {/* CITY */}
                                                                    {item.cityName && (
                                                                        <div className="location-place">
                                                                            {item.cityName}
                                                                        </div>
                                                                    )}

                                                                    {/* STATE */}
                                                                    {item.stateName && (
                                                                        <div className="location-place">
                                                                            {item.stateName}
                                                                        </div>
                                                                    )}

                                                                </div>

                                                            </div>

                                                        </td>

                                                        {/* AUTHORITY LETTER */}

                                                        <td>
                                                            <div className="authority-letter">

                                                                <a
                                                                    href="#"
                                                                    className="authority-view-btn"
                                                                    title="View Authority Letter"
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        navigate(`/authority-letterPrint-print/${item.id}`);
                                                                    }}
                                                                >
                                                                    <i className="fa fa-eye"></i>
                                                                    <span>View</span>
                                                                </a>

                                                            </div>
                                                        </td>

                                                    </tr>

                                                )
                                            )

                                        ) : (

                                            <tr>

                                                <td
                                                    colSpan="6"
                                                    className="empty-state"
                                                >

                                                    <div className="empty-icon">

                                                        <i className="fa fa-university"></i>

                                                    </div>

                                                    <h5>
                                                        No Study Centres Found
                                                    </h5>

                                                    <p>
                                                        {search
                                                            ? "Try changing your search keyword."
                                                            : "No active study centres are available at the moment."
                                                        }
                                                    </p>

                                                </td>

                                            </tr>

                                        )}

                                    </tbody>

                                </table>

                            </div>

                        )}

                    </div>

                    {/* PAGINATION */}
                    {!loading &&
                        filteredStudyCentres.length > 0 && (

                            <div className="pagination-card">

                                <div className="pagination-info">

                                    Showing{" "}

                                    <strong>
                                        {startIndex + 1}
                                    </strong>{" "}

                                    to{" "}

                                    <strong>
                                        {endIndex}
                                    </strong>{" "}

                                    of{" "}

                                    <strong>
                                        {filteredStudyCentres.length}
                                    </strong>{" "}

                                    study centres

                                </div>

                                <div className="pagination-list">

                                    <button
                                        type="button"
                                        className="page-btn"
                                        disabled={currentPage === 1}
                                        onClick={handlePrevious}
                                        aria-label="Previous page"
                                    >

                                        <i className="fa fa-angle-left"></i>

                                    </button>

                                    {getPageNumbers().map(
                                        (page, index) =>
                                            page === "..." ? (

                                                <span
                                                    key={`dots-${index}`}
                                                    className="page-dots"
                                                >
                                                    ...
                                                </span>

                                            ) : (

                                                <button
                                                    key={page}
                                                    type="button"
                                                    className={`page-btn ${currentPage === page
                                                        ? "active"
                                                        : ""
                                                        }`}
                                                    onClick={() =>
                                                        setCurrentPage(page)
                                                    }
                                                >
                                                    {page}
                                                </button>

                                            )
                                    )}

                                    <button
                                        type="button"
                                        className="page-btn"
                                        disabled={
                                            currentPage === totalPages
                                        }
                                        onClick={handleNext}
                                        aria-label="Next page"
                                    >

                                        <i className="fa fa-angle-right"></i>

                                    </button>

                                </div>

                            </div>

                        )}

                </div>

            </div>
        </>
    );
}

export default StudyCentres;