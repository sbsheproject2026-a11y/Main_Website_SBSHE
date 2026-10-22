 import React, { useEffect, useState } from "react";
import { getWebsiteContentdata } from "./HomeService";

function EducationalStatistics() {
    const [totalcounts, setTotalcounts] = useState([]);
    
    // ✅ Ye state har minute UI ko refresh karegi taaki naya count bina reload dikhe
    const [, setTick] = useState(0); 

    useEffect(() => {
        loadPageData();

        // Har 1 minute me UI update hogi
        const interval = setInterval(() => {
            setTick((t) => t + 1);
        }, 60000); 

        return () => clearInterval(interval);
    }, []);

    const loadPageData = async () => {
        try {
            const totalcountsData = await getWebsiteContentdata(1162);
            
            let allDocuments = [];

            // ✅ Parent array me se productCategoryDocuments nikalna
            (totalcountsData || []).forEach((parent) => {
                if (parent.isActive === 1 && parent.productCategoryDocuments) {
                    parent.productCategoryDocuments.forEach((doc) => {
                        allDocuments.push({
                            ...doc,
                            // ✅ Parent ka date save kar rahe hain calculation ke liye
                            parentDate: parent.date 
                        });
                    });
                }
            });

            // srNo ke hisaab se sort karna (1, 2, 3, 4)
            allDocuments.sort((a, b) => (a.srNo || 0) - (b.srNo || 0));

            setTotalcounts(allDocuments);
        } catch (error) {
            console.log("Page data error:", error);
            setTotalcounts([]);
        }
    };

    // ✅ 2-2 ghante me +1 badhane ka Function
    const calculateDynamicCount = (originalValue, startDateStr) => {
        if (!originalValue) return "0";

        // String se number nikalna (Jaise "200+" se 200, "1000" se 1000)
        const numericMatch = originalValue.match(/\d+/);
        if (!numericMatch) return originalValue; // Agar number nahi hai (jaise "N/A")

        const baseNumber = parseInt(numericMatch[0], 10);
        const suffix = originalValue.replace(numericMatch[0], ""); // "+" sign bacha lo

        // Date Calculation
        const startDate = new Date(startDateStr).getTime();
        const currentDate = new Date().getTime();

        // Agar API ki date future me hai ya invalid hai, toh original hi dikhao
        if (isNaN(startDate) || currentDate <= startDate) return originalValue; 

        // Kitne ghante pure hue
        const hoursPassed = (currentDate - startDate) / (1000 * 60 * 60);

        // Har 2 ghante me 1 badhega
        const increments = Math.floor(hoursPassed / 2);

        return `${baseNumber + increments}${suffix}`;
    };

    return (
        <>
            <section className="count-section">
                <div className="">
                    <div className="row justify-content-center">
                        {totalcounts.map((item, index) => {
                            const colorIndex = (index % 4) + 1;

                            // ✅ CHECK: Sirf Happy Students aur Enquiries par dynamic logic lagega
                            const nameStr = item.name?.trim().toLowerCase();
                            const isDynamic = nameStr === "happy students" || nameStr === "enquiries";

                            const displayValue = isDynamic 
                                ? calculateDynamicCount(item.altTag, item.parentDate) 
                                : item.altTag;

                            return (
                                <div
                                    className="col-xl-3 col-lg-3 col-md-6 col-sm-6 count-column"
                                    key={`count-${item.id ?? index}`}
                                >
                                    <div
                                        className={`count-card count-card-${colorIndex}`}
                                    >
                                        <div className="count-icon">
                                            <i className="fa fa-graduation-cap"></i>
                                        </div>

                                        <div className="count-content">

                                            {/* ✅ Dynamic value ya Normal Value */}
                                            {displayValue && (
                                                <div className="count-short-name">
                                                    {displayValue}
                                                </div>
                                            )}

                                            {/* ✅ Title (Happy Students, etc) */}
                                            {item.name && (
                                                <h2>{item.name}</h2>
                                            )}

                                        </div>

                                        <span className="count-number">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <div className="count-arrow">
                                            <i className="fa fa-arrow-right"></i>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <style>
                {`
                html,
                body {
                    overflow-x: hidden;
                }
                .count-section {
                    --stats-position: -80px;
                    position: relative;
                    margin-top: var(--stats-position);
                    z-index: 50;
                    padding: 0 0 0px;
                    background: linear-gradient(135deg, #fff7f0 0%, #ffffff 45%, #fff4e8 100%);
                    overflow: visible;
                }

                .count-section::before {
                    content: "";
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    border-radius: 50%;
                    background: rgba(255, 102, 0, 0.05);
                    top: -120px;
                    left: -100px;
                    pointer-events: none;
                    z-index: 0;
                }

                .count-section::after {
                    content: "";
                    position: absolute;
                    width: 350px;
                    height: 350px;
                    border-radius: 50%;
                    background: rgba(255, 102, 0, 0.04);
                    right: -150px;
                    bottom: -150px;
                    pointer-events: none;
                    z-index: 0;
                }

                .count-section .container {
                    position: relative;
                    z-index: 5;
                    max-width: 1200px;
                }

                .count-section .row {
                    position: relative;
                    z-index: 5;
                    margin-left: 0;
                    margin-right: 0;
                }

                .count-column {
                    padding: 0 !important;
                    margin: 0;
                }

                .count-card {
                    position: relative;
                    min-height: 190px; /* Thoda height badhaya hai taaki space mile */
                    padding: 70px 25px 25px; /* ✅ Top padding 52px se 70px kiya hai taaki icon aur text ke beech gap aaye */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 0;
                    overflow: visible;
                    color: #fff;
                    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.15);
                    transform: none !important;
                    transition: box-shadow 0.25s ease;
                    border-right: 3px solid rgba(255, 255, 255, 0.95);
                }

                .count-card:hover {
                    transform: none !important;
                    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.15);
                }

                .count-card-1 {
                    background: linear-gradient(135deg, #8561a9 0%, #79559d 100%);
                }

                .count-card-2 {
                    background: linear-gradient(135deg, #f19a1b 0%, #ed8b12 100%);
                }

                .count-card-3 {
                    background: linear-gradient(135deg, #2cb2da 0%, #20a8d0 100%);
                }

                .count-card-4 {
                    background: linear-gradient(135deg, #ef4c20 0%, #e84419 100%);
                    border-right: none;
                }

                /* ✅ Arrow alignment ko center kiya gaya hai */
                .count-card::after {
                    content: "";
                    position: absolute;
                    right: -29px;
                    top: 55%; /* 50% se 55% kiya hai taaki icon ke overlap ke baad perfect center lage */
                    transform: translateY(-50%);
                    width: 0;
                    height: 0;
                    border-top: 29px solid transparent;
                    border-bottom: 29px solid transparent;
                    border-left: 29px solid #8561a9;
                    z-index: 4;
                }

                .count-card-2::after {
                    border-left-color: #f19a1b;
                }

                .count-card-3::after {
                    border-left-color: #2cb2da;
                }

                .count-card-4::after {
                    display: none;
                }

                /* ✅ Icon perfectly center aur clean kiya gaya hai */
                .count-icon {
                    position: absolute;
                    top: -39px;
                    left: 50%;
                    transform: translateX(-50%) !important;
                    width: 78px;
                    height: 78px;
                    min-width: 78px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: #fff;
                    color: #273b66;
                    border: 6px solid #ffb400; /* Border 8px se 6px kiya hai (Sleek look) */
                    font-size: 28px;
                    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); /* Shadow thodi soft ki hai */
                    z-index: 10;
                    transition: none !important;
                }

                .count-card:hover .count-icon {
                    transform: translateX(-50%) !important;
                    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
                }

                .count-icon i {
                    display: block;
                    color: #273b66;
                    font-size: 28px;
                    line-height: 1;
                }

                .count-content {
                    position: relative;
                    z-index: 5;
                    width: 100%;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    gap: 6px; /* Number aur text ke beech gap */
                }

                .count-short-name {
                    color: #fff;
                    font-size: 32px; /* Text ko thoda bada kiya hai */
                    font-weight: 800;
                    line-height: 1.1;
                    text-align: center;
                    text-transform: uppercase;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
                }

                .count-content h2 {
                    margin: 0;
                    color: #fff;
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 1.5;
                    text-align: center;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
                }

                .count-number {
                    position: absolute;
                    right: 8px;
                    bottom: -10px;
                    font-size: 75px;
                    line-height: 1;
                    font-weight: 900;
                    color: rgba(255, 255, 255, 0.13);
                    pointer-events: none;
                    user-select: none;
                    z-index: 1;
                }

                .count-arrow {
                    position: absolute;
                    right: 15px;
                    top: 15px;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.2);
                    color: #fff;
                    font-size: 12px;
                    opacity: 0;
                    transform: none !important;
                    transition: opacity 0.2s ease;
                }

                .count-card:hover .count-arrow {
                    opacity: 1;
                    transform: none !important;
                }

                @media (max-width: 1199px) {
                    .count-section {
                        --stats-position: -60px;
                    }

                    .count-card {
                        min-height: 180px;
                        padding: 65px 20px 20px; /* Tablets ke liye adjust kiya */
                    }

                    .count-short-name {
                        font-size: 26px;
                    }

                    .count-content h2 {
                        font-size: 13px;
                    }

                    .count-icon {
                        width: 74px;
                        height: 74px;
                        min-width: 74px;
                        top: -37px;
                    }

                    .count-icon i {
                        font-size: 26px;
                    }
                }

                @media (max-width: 767px) {
                    .count-section {
                        --stats-position: -35px;
                        padding-bottom: 15px;
                    }

                    .count-section .row {
                        row-gap: 40px;
                    }

                    .count-column {
                        padding-left: 12px !important;
                        padding-right: 12px !important;
                    }

                    .count-card {
                        min-height: 160px;
                        padding: 55px 20px 20px; /* Mobile me space fix */
                        border-radius: 8px;
                        border-right: none;
                    }

                    .count-card::after {
                        display: none;
                    }

                    .count-icon {
                        width: 68px;
                        height: 68px;
                        min-width: 68px;
                        top: -34px;
                        border-width: 5px;
                    }

                    .count-icon i {
                        font-size: 23px;
                    }

                    .count-short-name {
                        font-size: 24px;
                    }

                    .count-content h2 {
                        font-size: 12px;
                        line-height: 1.4;
                    }

                    .count-number {
                        font-size: 65px;
                    }

                    .count-arrow {
                        display: none;
                    }
                }

                @media (max-width: 480px) {
                    .count-section {
                        --stats-position: -25px;
                    }

                    .count-card {
                        min-height: 150px;
                        padding: 50px 15px 15px;
                    }

                    .count-icon {
                        width: 62px;
                        height: 62px;
                        min-width: 62px;
                        top: -31px;
                        border-width: 5px;
                    }

                    .count-icon i {
                        font-size: 21px;
                    }

                    .count-short-name {
                        font-size: 22px;
                    }

                    .count-content h2 {
                        font-size: 11px;
                    }

                    .count-number {
                        font-size: 58px;
                    }
                }
                `}
            </style>
        </>
    );
}

export default EducationalStatistics;