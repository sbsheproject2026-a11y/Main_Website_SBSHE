import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
import { FILE_URL } from "../api";
import { getProgramme } from "./HomeService";

function Programme() {
    const [data, setData] = useState([]);
    const [activeDepartment, setActiveDepartment] = useState("ALL");

    useEffect(() => {
        loadProgramme();
    }, []);

    const loadProgramme = async () => {
        try {
            const result = await getProgramme(13);

            // ✅ isActive === 1 (backend integer bhejta hai)
            setData(
                (result || []).filter(
                    (item) => item.isActive === 1 || item.isActive === true
                )
            );
        } catch (error) {
            console.log("Department Error:", error);
            setData([]);
        }
    };

    // ✅ Unique departments by name
    const departmentMap = new Map();
    data.forEach((item) => {
        if (item.name && !departmentMap.has(item.name)) {
            departmentMap.set(item.name, item);
        }
    });

    const programmes = ["ALL", ...departmentMap.keys()];

    const filteredDataRaw =
        activeDepartment === "ALL"
            ? data
            : data.filter((item) => item.name === activeDepartment);

    // ✅ srNo ke hisab se sort — jinke paas srNo hai wo pehle, phir baaki
    const filteredData = [...filteredDataRaw].sort((a, b) => {
        const aHasSr = a.srNo !== null && a.srNo !== undefined && a.srNo !== 0;
        const bHasSr = b.srNo !== null && b.srNo !== undefined && b.srNo !== 0;

        if (aHasSr && bHasSr) return a.srNo - b.srNo;
        if (aHasSr) return -1;
        if (bHasSr) return 1;
        return b.id - a.id;
    });

    // ✅ Image URL helper
    const getImageUrl = (path) => {
        if (!path) return null;
        if (path.startsWith("http")) return path;
        return `${FILE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
    };

    return (
        <>
            <div className="container-fluid py-5 department-section">
                <div className="container">
                    <div className="text-center mb-4">
                        <div className="department-label">
                            <span></span>
                            Programme
                            <span></span>
                        </div>

                        <h2 className="department-title">
                            Explore Our Programme
                        </h2>

                        <p className="department-subtitle">
                            Discover courses designed to build skills and careers.
                        </p>
                    </div>

                    <div className="department-tabs mb-4">
                        {programmes.map((department) => (
                            <button
                                key={department}
                                type="button"
                                className={`department-btn ${activeDepartment === department ? "active" : ""
                                    }`}
                                onClick={() => setActiveDepartment(department)}
                            >
                                {department}
                            </button>
                        ))}
                    </div>

                    <div className="row">
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <div
                                    className="col-lg-4 col-md-6 mb-4"
                                    key={item.id}
                                >
                                    <div className="department-card">
                                        <div className="department-image">
                                            {item.filePath ? (
                                                <img
                                                    src={getImageUrl(item.filePath)}
                                                    alt={item.name || "Programme"}
                                                    onError={(e) => {
                                                        e.target.style.display = "none";
                                                        e.target.parentElement.classList.add(
                                                            "show-placeholder"
                                                        );
                                                    }}
                                                />
                                            ) : (
                                                <div className="department-placeholder">
                                                    <i className="fa fa-book"></i>
                                                </div>
                                            )}
                                        </div>

                                        <div className="department-content">
                                            <Link
                                                to={`/course-details/${item.slug}`}
                                                state={{ id: item.id }}
                                                className="department-name"
                                            >
                                                {item.name}
                                            </Link>

                                            <p>
                                                {item.description ||
                                                    "Explore professional courses and develop practical skills for your career."}
                                            </p>

                                            <Link
                                                to={`/course-details/${item.slug}`}
                                                state={{ id: item.id }}         // 👈 ID state mein (URL mein nahi aayegi)
                                                className="department-link"
                                            >
                                                Explore Courses
                                                <i className="fa fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12">
                                <div className="department-empty">
                                    <i className="fa fa-folder-open"></i>
                                    <h5>No Department Found</h5>
                                    <p>
                                        No courses are available for this department.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <style>
                    {`
                        .department-label {
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

                        .department-label span {
                            width: 28px;
                            height: 3px;
                            background: #01507c;
                            border-radius: 10px;
                        }

                        .department-section {
                            background: #f8f9fc;
                        }

                        .department-title {
                            margin: 8px 0;
                            font-size: 32px;
                            font-weight: 700;
                            color: #222;
                        }

                        .department-subtitle {
                            color: #777;
                            font-size: 14px;
                            margin: 0 auto;
                        }

                        .department-tabs {
                            display: flex;
                            justify-content: center;
                            flex-wrap: wrap;
                            gap: 10px;
                        }

                        .department-btn {
                            border: 1px solid #01507c;
                            background: #fff;
                            color: #01507c;
                            padding: 8px 18px;
                            border-radius: 30px;
                            font-size: 13px;
                            font-weight: 600;
                            cursor: pointer;
                            transition: .25s ease;
                        }

                        .department-btn:hover,
                        .department-btn.active {
                            background: #01507c;
                            color: #fff;
                            box-shadow: 0 5px 15px rgba(255, 102, 0, .20);
                        }

                        .department-card {
                            background: #fff;
                            border-radius: 14px;
                            overflow: hidden;
                            height: 100%;
                            border: 1px solid #eee;
                            box-shadow: 0 5px 18px rgba(0, 0, 0, .06);
                            transition: .3s ease;
                        }

                        .department-card:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 12px 28px rgba(0, 0, 0, .12);
                        }

                        .department-image {
                            height: 190px;
                            position: relative;
                            overflow: hidden;
                            background: #f1f1f1;
                        }

                        .department-image img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            display: block;
                            transition: .4s ease;
                        }

                        .department-card:hover .department-image img {
                            transform: scale(1.05);
                        }

                        .department-placeholder {
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: #01507c;
                            font-size: 45px;
                        }

                        .department-image.show-placeholder::after {
                            content: "\\f02d";
                            font-family: "FontAwesome";
                            position: absolute;
                            inset: 0;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: #01507c;
                            font-size: 45px;
                        }

                        .course-badge {
                            position: absolute;
                            bottom: 12px;
                            left: 12px;
                            background: #01507c;
                            color: #fff;
                            padding: 6px 12px;
                            border-radius: 20px;
                            font-size: 11px;
                            font-weight: 600;
                        }

                        .department-content {
                            padding: 18px;
                        }

                        .department-name {
                            display: block;
                            color: #222;
                            font-size: 18px;
                            font-weight: 700;
                            text-decoration: none;
                            margin-bottom: 8px;
                        }

                        .department-name:hover {
                            color: #01507c;
                            text-decoration: none;
                        }

                        .department-content p {
                            color: #777;
                            font-size: 13px;
                            line-height: 1.6;
                            margin-bottom: 14px;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                        }

                        .department-link {
                            color: #01507c;
                            font-size: 12px;
                            font-weight: 700;
                            text-decoration: none;
                        }

                        .department-link:hover {
                            color: #e55500;
                            text-decoration: none;
                        }

                        .department-link i {
                            margin-left: 7px;
                            transition: .2s;
                        }

                        .department-link:hover i {
                            margin-left: 10px;
                        }

                        .department-empty {
                            text-align: center;
                            background: #fff;
                            padding: 45px 20px;
                            border-radius: 14px;
                            color: #777;
                        }

                        .department-empty i {
                            color: #01507c;
                            font-size: 40px;
                            margin-bottom: 10px;
                        }

                        .department-empty h5 {
                            color: #333;
                        }

                        @media (max-width: 767px) {
                            .department-section {
                                padding-top: 40px !important;
                                padding-bottom: 40px !important;
                            }

                            .department-title {
                                font-size: 26px;
                            }

                            .department-subtitle {
                                font-size: 13px;
                            }

                            .department-tabs {
                                display: none;
                            }

                            .department-image {
                                height: 190px;
                            }

                            .department-content {
                                padding: 16px;
                            }
                        }
                    `}
                </style>
            </div>
        </>
    );
}

export default Programme;