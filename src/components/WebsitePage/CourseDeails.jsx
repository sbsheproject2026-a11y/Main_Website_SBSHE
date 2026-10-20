import React, { useEffect, useState } from "react";
 
import { Link, useLocation } from "react-router-dom";
import { getCourses } from "./HomeService";

function CourseDeails() {
    const location = useLocation();
    const id = location.state?.id;

    const [data, setData] = useState([]);

    const [showFileModal, setShowFileModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState("");
    const [fileType, setFileType] = useState("");

    

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);

    useEffect(() => {
        if (id) {
            loadCourses(id);
        }
    }, [id]);

    const ALLOWED_STUDY_MODES = [89, 127];

    const loadCourses = async (id) => {
        try {
            const result = await getCourses(id);

            const filtered = (result || []).filter((item) => {
                // ✅ isActive check
                const isActive =
                    item.isActive === 1 || item.isActive === true;

                // ✅ studyModeId null/undefined/empty na ho
                if (
                    item.studyModeId === null ||
                    item.studyModeId === undefined ||
                    item.studyModeId === ""
                ) {
                    return false;
                }

                // ✅ sirf 88 ya 127
                return isActive && ALLOWED_STUDY_MODES.includes(Number(item.studyModeId));
            });

            setData(filtered);
            setCurrentPage(1);
        } catch (error) {
            console.log("Course Error:", error);
            setData([]);
        }
    };
    const handleViewFile = async (fileUrl) => {
        try {
            const response = await fetch(fileUrl);

            if (!response.ok) {
                throw new Error("File load failed");
            }

            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);

            setSelectedFile(blobUrl);
            setFileType(blob.type);
            setShowFileModal(true);
        } catch (error) {
            console.error("File Error:", error);
        }
    };

    const handleCloseFileModal = () => {
        if (selectedFile) {
            URL.revokeObjectURL(selectedFile);
        }

        setShowFileModal(false);
        setSelectedFile("");
        setFileType("");
    };

   

    const filteredCourses = data.filter((course) => {
        const searchText = search.toLowerCase().trim();

        return (
            String(course.code ?? "")
                .toLowerCase()
                .includes(searchText) ||
            String(course.name ?? "")
                .toLowerCase()
                .includes(searchText) ||
            String(course.nameHindi ?? "")
                .toLowerCase()
                .includes(searchText) ||
            String(course.durationName ?? "")
                .toLowerCase()
                .includes(searchText)
        );
    });

    const totalPages = Math.ceil(
        filteredCourses.length / recordsPerPage
    );

    const startIndex =
        (currentPage - 1) * recordsPerPage;

    const endIndex = Math.min(
        startIndex + recordsPerPage,
        filteredCourses.length
    );

    const currentCourses = filteredCourses.slice(
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
                            COURSES
                            <span></span>
                        </div>

                        <h1 className="course-heading">
                            Course Details
                        </h1>

                        <p className="course-subtitle">
                            Explore our courses, durations, subjects and study materials
                        </p>
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
                                        <th>Eligbilty</th>
                                        {/* <th>Course Fee</th> */}
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

                                                    {course.nameHindi && (
                                                        <div
                                                            style={{
                                                                fontSize: "11px",
                                                                color: "#999",
                                                                marginTop: "3px",
                                                            }}
                                                        >
                                                            {course.nameHindi}
                                                        </div>
                                                    )}
                                                </td>

                                                <td>
                                                    <span className="duration-badge">
                                                        <i className="fa fa-clock-o mr-1"></i>
                                                        {course.durationName || "-"}
                                                    </span>
                                                </td>

                                                <td>
                                                    <div className="course-overview">
                                                        {course.eligbilty ? (
                                                            <span className="eligibility-text">
                                                                {course.eligbilty}
                                                            </span>
                                                        ) : (
                                                            <span className="eligibility-empty">—</span>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="8"
                                                className="no-course"
                                            >
                                                <div>
                                                    <i className="fa fa-search"></i>

                                                    <h5>
                                                        No Courses Found
                                                    </h5>

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
                                {filteredCourses.length > 0
                                    ? startIndex + 1
                                    : 0}
                            </strong>{" "}
                            to{" "}
                            <strong>{endIndex}</strong>{" "}
                            of{" "}
                            <strong>{filteredCourses.length}</strong>{" "}
                            entries
                        </div>

                        <nav>
                            <ul className="course-pagination">
                                <li>
                                    <button
                                        className={
                                            currentPage === 1
                                                ? "disabled"
                                                : ""
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
                                                currentPage === page
                                                    ? "active"
                                                    : ""
                                            }
                                            onClick={() =>
                                                setCurrentPage(page)
                                            }
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

                    .course-overview {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    align-items: center;
}

.eligibility-text {
    display: inline-block;
    padding: 5px 12px;
    background: #eef2ff;
    color: #4338ca;
    border: 1px solid #c7d2fe;
    border-radius: 6px;
    font-size: 12.5px;
    font-weight: 600;
    letter-spacing: .3px;
    white-space: nowrap;
}

.eligibility-empty {
    color: #cbd5e1;
    font-size: 14px;
}
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

                        .course-table {
                            width: 100%;
                            border-collapse: collapse;
                            margin: 0;
                            min-width: 1050px;
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
                            width: 220px;
                            color: #222;
                            font-weight: 600;
                            line-height: 1.5;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
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

                        .course-overview {
                            width: 260px;
                            line-height: 1.5;
                            color: #777;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
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

            {showFileModal && (
                <div
                    className="modal show d-block"
                    style={{
                        backgroundColor: "rgba(0,0,0,0.6)"
                    }}
                >
                    <div className="modal-dialog modal-xl modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    Study Material File
                                </h5>

                                <button
                                    type="button"
                                    className="btn btn-info"
                                    onClick={handleCloseFileModal}
                                >
                                    Close
                                </button>
                            </div>

                            <div className="modal-body text-center">
                                {fileType === "application/pdf" ? (
                                    <iframe
                                        src={`${selectedFile}#toolbar=0`}
                                        title="PDF"
                                        style={{
                                            width: "100%",
                                            height: "75vh",
                                            border: "none"
                                        }}
                                    />
                                ) : fileType.startsWith("image/") ? (
                                    <img
                                        src={selectedFile}
                                        alt="Course"
                                        style={{
                                            maxWidth: "100%",
                                            maxHeight: "75vh"
                                        }}
                                    />
                                ) : (
                                    <p>File format not supported.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

           
        </>
    );
}

export default CourseDeails;