 import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { getCourses } from "./HomeService";

function OnlineCourseDeails() {
    const location = useLocation();
    const id = location.state?.id;

    const [data, setData] = useState([]);

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);

    // ✅ Apply Now URL
    const APPLY_URL = "https://soft.shaheedbhagatsinghhealthandeducation.com/new-student-apply";

    useEffect(() => {
        if (id) {
            loadCourses(id);
        }
    }, [id]);

    const ALLOWED_STUDY_MODES = [88, 127];

    const loadCourses = async (id) => {
        try {
            const result = await getCourses(id);

            const filtered = (result || []).filter((item) => {
                const isActive =
                    item.isActive === 1 || item.isActive === true;

                if (
                    item.studyModeId === null ||
                    item.studyModeId === undefined ||
                    item.studyModeId === ""
                ) {
                    return false;
                }

                return (
                    isActive &&
                    ALLOWED_STUDY_MODES.includes(Number(item.studyModeId))
                );
            });

            setData(filtered);
            console.log("Course Data", filtered);
            setCurrentPage(1);
        } catch (error) {
            console.log("Course Error:", error);
            setData([]);
        }
    };

    // ✅ Apply Now
    const handleApplyNow = (studyModeId, courseId) => {
        if (!studyModeId) {
            window.location.href = APPLY_URL;
            return;
        }
        window.location.href = `${APPLY_URL}`;
    };

    const filteredCourses = data.filter((course) => {
        const searchText = search.toLowerCase().trim();

        return (
            String(course.code ?? "").toLowerCase().includes(searchText) ||
            String(course.name ?? "").toLowerCase().includes(searchText) ||
            String(course.nameHindi ?? "").toLowerCase().includes(searchText) ||
            String(course.durationName ?? "").toLowerCase().includes(searchText)
        );
    });

    const totalPages = Math.ceil(filteredCourses.length / recordsPerPage);

    const startIndex = (currentPage - 1) * recordsPerPage;

    const endIndex = Math.min(
        startIndex + recordsPerPage,
        filteredCourses.length
    );

    const currentCourses = filteredCourses.slice(startIndex, endIndex);

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
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <div className="container-fluid py-5 course-section">
                <div className="container pt-4 pb-4">
                    <div className="text-center mb-5">
                        <div className="course-label">
                            <span></span>
                            Online COURSES
                            <span></span>
                        </div>

                        <h1 className="course-heading">Online Course Details</h1>
                    </div>

                    <div className="course-controls mb-4">
                        <div className="entries-control">
                            <span>Show</span>

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

                            <span>entries</span>
                        </div>

                        <div className="search-box">
                            <i className="fa fa-search"></i>

                            <input
                                type="text"
                                placeholder="Search courses..."
                                value={search}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>

                    <div className="course-table-wrapper">
                        <div className="table-responsive">
                            <table className="course-table">
                                <thead>
                                    <tr>
                                        <th width="70">Sr No</th>
                                        <th>Course Code</th>
                                        <th>Course Name</th>
                                        <th>Duration</th>
                                        <th>Eligibility</th>
                                        <th>Course Fee</th>
                                        <th width="150">Apply Now</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {currentCourses.length > 0 ? (
                                        currentCourses.map((course, index) => (
                                            <tr key={course.id}>
                                                <td>
                                                    <span className="serial-number">
                                                        {startIndex + index + 1}
                                                    </span>
                                                </td>

                                                <td>
                                                    <span className="course-code">
                                                        {course.code || "-"}
                                                    </span>
                                                </td>

                                                <td>
                                                    <div className="course-name">
                                                        {course.name || "-"}
                                                    </div>
                                                </td>

                                                <td>
                                                    <span className="duration-badge">
                                                        <i className="fa fa-clock-o mr-1"></i>
                                                        {course.durationName || "-"}
                                                    </span>
                                                </td>

                                                {/* ELIGIBILITY */}
                                                <td>
                                                    {course.eligbilty ? (
                                                        <div className="elig-wrap">
                                                            {course.eligbilty
                                                                .split(/[/,|]/)
                                                                .map((e) => e.trim())
                                                                .filter(Boolean)
                                                                .map((item, i) => (
                                                                    <span key={i} className="elig-chip">
                                                                        {item}
                                                                        <i className="fa fa-check-circle"></i>
                                                                    </span>
                                                                ))}
                                                        </div>
                                                    ) : (
                                                        <span className="elig-empty">—</span>
                                                    )}
                                                </td>

                                                {/* ✅ COURSE FEE — sirf amountTypeId === 113 */}
                                                <td>
                                                    {(() => {
                                                        const feeAmounts = (
                                                            course.productAmounts || []
                                                        ).filter(
                                                            (p) =>
                                                                Number(p.amountTypeId) === 113
                                                        );

                                                        if (feeAmounts.length === 0) {
                                                            return (
                                                                <span className="fee-empty">
                                                                    —
                                                                </span>
                                                            );
                                                        }

                                                        return (
                                                            <div className="fee-list">
                                                                {feeAmounts.map((p, i) => (
                                                                    <div
                                                                        key={p.id ?? i}
                                                                        className="fee-card"
                                                                    >
                                                                        <div className="fee-icon">
                                                                            <i className="fa fa-inr"></i>
                                                                        </div>
                                                                        <div className="fee-info">
                                                                            <div className="fee-amount-row">
                                                                                <span className="fee-amount">
                                                                                    ₹
                                                                                    {Number(
                                                                                        p.amount || 0
                                                                                    ).toLocaleString(
                                                                                        "en-IN"
                                                                                    )}{" "}
                                                                                    + GST
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        );
                                                    })()}
                                                </td>

                                                {/* APPLY NOW */}
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="apply-now-btn"
                                                        onClick={() =>
                                                            handleApplyNow(
                                                                course.studyModeId,
                                                                course.id
                                                            )
                                                        }
                                                    >
                                                        <span>Apply Now</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="no-course">
                                                <div>
                                                    <i className="fa fa-search"></i>

                                                    <h5>No Courses Found</h5>

                                                    <p>
                                                        Try searching with a different keyword.
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="course-bottom">
                        <div className="record-info">
                            Showing{" "}
                            <strong>
                                {filteredCourses.length > 0 ? startIndex + 1 : 0}
                            </strong>{" "}
                            to <strong>{endIndex}</strong> of{" "}
                            <strong>{filteredCourses.length}</strong> entries
                        </div>

                        <nav>
                            <ul className="course-pagination">
                                <li>
                                    <button
                                        className={
                                            currentPage === 1 ? "disabled" : ""
                                        }
                                        onClick={handlePrevious}
                                        disabled={currentPage === 1}
                                    >
                                        <i className="fa fa-angle-left"></i>
                                        <span>Previous</span>
                                    </button>
                                </li>

                                {Array.from(
                                    { length: totalPages },
                                    (_, index) => index + 1
                                ).map((page) => (
                                    <li key={page}>
                                        <button
                                            className={
                                                currentPage === page ? "active" : ""
                                            }
                                            onClick={() => setCurrentPage(page)}
                                        >
                                            {page}
                                        </button>
                                    </li>
                                ))}

                                <li>
                                    <button
                                        className={
                                            currentPage === totalPages
                                                ? "disabled"
                                                : ""
                                        }
                                        onClick={handleNext}
                                        disabled={
                                            totalPages === 0 ||
                                            currentPage === totalPages
                                        }
                                    >
                                        <span>Next</span>
                                        <i className="fa fa-angle-right"></i>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <style>
                    {`
                        .course-section {
                            background: #f8f9fc;
                        }

                        .course-label {
                            color: #01507c;
                            font-size: 14px;
                            font-weight: 700;
                            letter-spacing: 4px;
                            text-transform: uppercase;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 12px;
                            margin-bottom: 12px;
                        }

                        .course-label span {
                            width: 28px;
                            height: 3px;
                            background: #01507c;
                            border-radius: 10px;
                        }

                        .course-heading {
                            font-size: 36px;
                            font-weight: 700;
                            color: #222;
                            margin-bottom: 8px;
                        }

                        .course-subtitle {
                            color: #777;
                            font-size: 15px;
                            margin: 0;
                        }

                        .course-controls {
                            background: #fff;
                            padding: 18px 20px;
                            border-radius: 10px;
                            border: 1px solid #eee;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            box-shadow: 0 3px 15px rgba(0, 0, 0, .04);
                        }

                        .entries-control {
                            display: flex;
                            align-items: center;
                            gap: 8px;
                            color: #666;
                            font-size: 14px;
                        }

                        .entries-select {
                            width: 75px;
                            height: 38px;
                            border: 1px solid #ddd;
                            border-radius: 6px;
                            padding: 0 8px;
                            color: #444;
                            background: #fff;
                        }

                        .search-box {
                            width: 280px;
                            height: 40px;
                            display: flex;
                            align-items: center;
                            border: 1px solid #ddd;
                            border-radius: 7px;
                            background: #fff;
                            padding: 0 12px;
                        }

                        .search-box i {
                            color: #999;
                            margin-right: 9px;
                        }

                        .search-box input {
                            border: none;
                            outline: none;
                            width: 100%;
                            font-size: 14px;
                            color: #444;
                        }

                        .course-table-wrapper {
                            background: #fff;
                            border-radius: 12px;
                            border: 1px solid #eee;
                            overflow: hidden;
                            box-shadow: 0 5px 25px rgba(0, 0, 0, .06);
                        }

                        .table-responsive {
                            overflow-x: auto;
                        }

                        .course-table {
                            width: 100%;
                            border-collapse: collapse;
                            margin: 0;
                            min-width: 1250px;
                        }

                        .course-table thead th {
                            background: #01507c;
                            color: #fff;
                            font-size: 13px;
                            font-weight: 600;
                            padding: 15px 13px;
                            border: none;
                            white-space: nowrap;
                        }

                        .course-table tbody td {
                            padding: 15px 13px;
                            border-bottom: 1px solid #eee;
                            vertical-align: middle;
                            font-size: 13px;
                            color: #555;
                        }

                        .course-table tbody tr {
                            transition: .2s ease;
                        }

                        .course-table tbody tr:hover {
                            background: #f8fbff;
                        }

                        .course-table tbody tr:last-child td {
                            border-bottom: none;
                        }

                        .serial-number {
                            width: 30px;
                            height: 30px;
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            background: #eef5ff;
                            color: #01507c;
                            border-radius: 50%;
                            font-size: 12px;
                            font-weight: 600;
                        }

                        .course-code {
                            background: #f3f5f8;
                            color: #555;
                            padding: 5px 9px;
                            border-radius: 5px;
                            font-size: 11px;
                            font-weight: 600;
                            white-space: nowrap;
                        }

                        .course-name {
                            width: 200px;
                            color: #222;
                            font-weight: 600;
                            line-height: 1.5;
                            word-break: break-word;
                            overflow-wrap: anywhere;
                        }

                        .duration-badge {
                            display: inline-block;
                            background: #fff5e9;
                            color: #e88a00;
                            padding: 6px 9px;
                            border-radius: 5px;
                            font-size: 11px;
                            font-weight: 600;
                            white-space: nowrap;
                        }

                        /* ============ ELIGIBILITY ============ */
                        .elig-wrap {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 4px;
                            max-width: 150px;
                        }

                        .elig-chip {
                            display: inline-flex;
                            align-items: center;
                            gap: 5px;
                            padding: 4px 10px;
                            background: linear-gradient(135deg, #eef5ff, #e0edff);
                            color: #01507c;
                            border: 1px solid #cfe3ff;
                            border-radius: 6px;
                            font-size: 11px;
                            font-weight: 700;
                            letter-spacing: .3px;
                            white-space: nowrap;
                            transition: .2s ease;
                        }

                        .elig-chip i {
                            font-size: 10px;
                            color: #1e88e5;
                        }

                        .elig-empty {
                            color: #cbd5e1;
                            font-size: 13px;
                        }

                        /* ============ COURSE FEE ============ */
                        .fee-list {
                            display: flex;
                            flex-direction: column;
                            gap: 8px;
                            width: 180px;
                        }

                        .fee-card {
                            display: flex;
                            align-items: center;
                            gap: 12px;
                            padding: 10px 14px 10px 10px;
                            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
                            border: 1px solid #bae6fd;
                            border-radius: 12px;
                            position: relative;
                            overflow: hidden;
                            transition: .25s ease;
                        }

                        .fee-card::before {
                            content: "";
                            position: absolute;
                            left: 0;
                            top: 0;
                            bottom: 0;
                            width: 4px;
                            background: linear-gradient(180deg, #01507c, #1e88e5);
                        }

                        .fee-card:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 6px 18px rgba(1, 80, 124, 0.18);
                            border-color: #7dd3fc;
                        }

                        .fee-icon {
                            width: 36px;
                            height: 36px;
                            flex-shrink: 0;
                            border-radius: 9px;
                            background: linear-gradient(135deg, #01507c, #1e88e5);
                            color: #fff;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 15px;
                            box-shadow: 0 3px 8px rgba(1, 80, 124, 0.3);
                        }

                        .fee-info {
                            display: flex;
                            flex-direction: column;
                            gap: 4px;
                            min-width: 0;
                            flex: 1;
                        }

                        .fee-name {
                            font-size: 10px;
                            color: #0369a1;
                            font-weight: 700;
                            text-transform: uppercase;
                            letter-spacing: .5px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }

                        .fee-amount-row {
                            display: flex;
                            align-items: baseline;
                            gap: 8px;
                            flex-wrap: wrap;
                        }

                        .fee-amount {
                            font-size: 14px;
                            font-weight: 800;
                            color: #01507c;
                            letter-spacing: -.3px;
                            line-height: 1;
                        }

                        .fee-gst {
                            display: inline-block;
                            font-size: 10px;
                            font-weight: 700;
                            color: #0369a1;
                            background: #cceeff;
                            padding: 3px 7px;
                            border-radius: 4px;
                            letter-spacing: .4px;
                            text-transform: uppercase;
                            line-height: 1;
                            white-space: nowrap;
                        }

                        .fee-empty {
                            color: #cbd5e1;
                            font-size: 13px;
                        }

                        /* ============ APPLY NOW BUTTON ============ */
                        .apply-now-btn {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            gap: 8px;
                            padding: 11px 20px;
                            background: linear-gradient(135deg, #01507c 0%, #1e88e5 100%);
                            color: #fff;
                            border: none;
                            border-radius: 10px;
                            font-size: 12px;
                            font-weight: 700;
                            letter-spacing: .5px;
                            cursor: pointer;
                            white-space: nowrap;
                            font-family: inherit;
                            text-transform: uppercase;
                            box-shadow:
                                0 6px 16px rgba(1, 80, 124, 0.3),
                                inset 0 1px 0 rgba(255, 255, 255, 0.2);
                            transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
                            position: relative;
                            overflow: hidden;
                        }

                        .apply-now-btn::before {
                            content: "";
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            width: 0;
                            height: 0;
                            background: rgba(255, 255, 255, 0.25);
                            border-radius: 50%;
                            transform: translate(-50%, -50%);
                            transition: width .5s ease, height .5s ease;
                        }

                        .apply-now-btn:hover::before {
                            width: 300px;
                            height: 300px;
                        }

                        .apply-now-btn:hover {
                            transform: translateY(-3px);
                            box-shadow:
                                0 12px 24px rgba(1, 80, 124, 0.4),
                                inset 0 1px 0 rgba(255, 255, 255, 0.3);
                            background: linear-gradient(135deg, #003d5f 0%, #01507c 100%);
                        }

                        .apply-now-btn:active {
                            transform: translateY(-1px);
                            box-shadow: 0 4px 10px rgba(1, 80, 124, 0.3);
                        }

                        .apply-now-btn i {
                            font-size: 13px;
                            position: relative;
                            z-index: 1;
                        }

                        .apply-now-btn span {
                            position: relative;
                            z-index: 1;
                        }

                        .no-course {
                            padding: 60px 20px !important;
                            text-align: center;
                        }

                        .no-course i {
                            font-size: 35px;
                            color: #bbb;
                            margin-bottom: 12px;
                        }

                        .no-course h5 {
                            color: #555;
                            margin-bottom: 5px;
                        }

                        .no-course p {
                            color: #999;
                            margin: 0;
                            font-size: 13px;
                        }

                        .course-bottom {
                            margin-top: 20px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }

                        .record-info {
                            color: #888;
                            font-size: 13px;
                        }

                        .record-info strong {
                            color: #444;
                        }

                        .course-pagination {
                            list-style: none;
                            display: flex;
                            align-items: center;
                            margin: 0;
                            padding: 0;
                            gap: 5px;
                        }

                        .course-pagination button {
                            min-width: 34px;
                            height: 34px;
                            border: 1px solid #ddd;
                            background: #fff;
                            color: #555;
                            border-radius: 5px;
                            font-size: 12px;
                            padding: 0 9px;
                            cursor: pointer;
                            transition: .2s ease;
                        }

                        .course-pagination button:hover:not(.disabled) {
                            background: #eef5ff;
                            border-color: #01507c;
                            color: #01507c;
                        }

                        .course-pagination button.active {
                            background: #01507c;
                            border-color: #01507c;
                            color: #fff;
                        }

                        .course-pagination button.disabled {
                            opacity: .45;
                            cursor: not-allowed;
                        }

                        @media (max-width: 991px) {
                            .course-heading {
                                font-size: 32px;
                            }

                            .course-controls {
                                padding: 15px;
                            }
                        }

                        @media (max-width: 767px) {
                            .course-section {
                                padding-top: 35px !important;
                                padding-bottom: 35px !important;
                            }

                            .course-heading {
                                font-size: 27px;
                            }

                            .course-subtitle {
                                font-size: 13px;
                            }

                            .course-label {
                                font-size: 11px;
                                letter-spacing: 3px;
                            }

                            .course-controls {
                                flex-direction: column;
                                align-items: stretch;
                                gap: 15px;
                            }

                            .entries-control {
                                justify-content: center;
                            }

                            .search-box {
                                width: 100%;
                            }

                            .course-table-wrapper {
                                border-radius: 8px;
                            }

                            .course-bottom {
                                flex-direction: column;
                                gap: 18px;
                                align-items: center;
                            }

                            .record-info {
                                text-align: center;
                            }

                            .course-pagination {
                                justify-content: center;
                                flex-wrap: wrap;
                            }

                            .course-pagination button {
                                height: 32px;
                                min-width: 32px;
                            }
                        }

                        @media (max-width: 480px) {
                            .course-heading {
                                font-size: 24px;
                            }

                            .course-label {
                                font-size: 10px;
                            }

                            .course-pagination button span {
                                display: none;
                            }

                            .course-pagination button {
                                padding: 0 8px;
                            }
                        }
                    `}
                </style>
            </div>
        </>
    );
}

export default OnlineCourseDeails;