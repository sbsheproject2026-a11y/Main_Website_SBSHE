 import React, { useEffect, useState, useRef } from "react";
import { getWebsiteContentdata } from "./HomeService";

// ✅ 1. Naya CountUp Component (Number Animation ke liye)
const CountUp = ({ end, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const prevEnd = useRef(0);

    useEffect(() => {
        let startTimestamp = null;
        const startValue = prevEnd.current;
        const endValue = parseInt(end, 10);

        if (isNaN(endValue)) return;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Easing function (easeOutQuad) - smooth animation ke liye
            const easeOut = progress * (2 - progress);
            
            const currentCount = Math.floor(easeOut * (endValue - startValue) + startValue);
            setCount(currentCount);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setCount(endValue); // End exactly on target
                prevEnd.current = endValue; // Save for next update
            }
        };
        
        window.requestAnimationFrame(step);
    }, [end, duration]);

    return (
        <>
            {count}
            {suffix}
        </>
    );
};


function EducationalStatistics() {
    const [totalcounts, setTotalcounts] = useState([]);
    const [loading, setLoading] = useState(true); 

    const [, setTick] = useState(0);

    useEffect(() => {
        loadPageData();

        const interval = setInterval(() => {
            setTick((t) => t + 1);
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    const loadPageData = async () => {
        try {
            const totalcountsData = await getWebsiteContentdata(1162);

            let allDocuments = [];

            (totalcountsData || []).forEach((parent) => {
                if (parent.isActive === 1 && parent.productCategoryDocuments) {
                    parent.productCategoryDocuments.forEach((doc) => {
                        allDocuments.push({
                            ...doc,
                            parentDate: parent.date
                        });
                    });
                }
            });

            allDocuments.sort((a, b) => (a.srNo || 0) - (b.srNo || 0));

            setTotalcounts(allDocuments);
        } catch (error) {
            console.log("Page data error:", error);
            setTotalcounts([]);
        } finally {
            setLoading(false); 
        }
    };

    const calculateDynamicCount = (originalValue, startDateStr) => {
        if (!originalValue) return "0";

        const numericMatch = originalValue.match(/\d+/);
        if (!numericMatch) return originalValue;

        const baseNumber = parseInt(numericMatch[0], 10);
        const suffix = originalValue.replace(numericMatch[0], "");

        const startDate = new Date(startDateStr).getTime();
        const currentDate = new Date().getTime();

        if (isNaN(startDate) || currentDate <= startDate) return originalValue;

        const hoursPassed = (currentDate - startDate) / (1000 * 60 * 60);
        const increments = Math.floor(hoursPassed / 2);

        return `${baseNumber + increments}${suffix}`;
    };

    return (
        <>
            <section className="count-section">
                <span className="count-bg-decor" aria-hidden="true"></span>

                <div className="container"> 
                    <div className="row justify-content-center">
                        
                        {loading ? (
                            [1, 2, 3, 4].map((index) => (
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 count-column" key={`skeleton-${index}`}>
                                    <div className={`count-card count-card-${index} skeleton-card`}>
                                        <div className="count-icon skeleton-icon"></div>
                                        <div className="count-content">
                                            <div className="skeleton-text skeleton-val"></div>
                                            <div className="skeleton-text skeleton-title"></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            totalcounts.map((item, index) => {
                                const colorIndex = (index % 4) + 1;

                                const nameStr = item.name?.trim().toLowerCase();
                                const isDynamic =
                                    nameStr === "happy students" ||
                                    nameStr === "enquiries";

                                const displayValue = isDynamic
                                    ? calculateDynamicCount(item.altTag, item.parentDate)
                                    : item.altTag;

                                const match = displayValue ? displayValue.match(/\d+/) : null;
                                const numericValue = match ? match[0] : null;
                                const suffixValue = match ? displayValue.replace(match[0], "") : displayValue;

                                return (
                                    <div
                                        className="col-xl-3 col-lg-3 col-md-6 col-sm-6 count-column"
                                        key={`count-${item.id ?? index}`}
                                    >
                                        <div className={`count-card count-card-${colorIndex}`}>
                                            <div className="count-icon">
                                                <i className="fa fa-graduation-cap"></i>
                                            </div>

                                            <div className="count-content">
                                                {displayValue && (
                                                    <div className="count-short-name">
                                                        {numericValue ? (
                                                            <CountUp end={numericValue} suffix={suffixValue} />
                                                        ) : (
                                                            displayValue
                                                        )}
                                                    </div>
                                                )}
                                                {item.name && <h2>{item.name}</h2>}
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
                            })
                        )}
                    </div>
                </div>
            </section>

            <style>
                {`
             .count-section {
    --stats-position: 5px;
    position: relative;
    margin-top: var(--stats-position);
    z-index: 50;
    padding: 0 0 0px;
    background: linear-gradient(135deg, #fff7f0 0%, #ffffff 45%, #fff4e8 100%);
}

/* ✅ YAHAN FIX KIYA HAI: top, height aur z-index change kiya hai */
.count-section::before {
    content: "";
    position: absolute;
    top: -5px; /* Hamesha 5px upar rahega */
    left: 0;
    width: 100%;
    height: 5px; /* Fix height 5px kar di taaki negative me break na ho */
    background-color: #FFD700; /* Golden color */
    z-index: 1; /* Piche jane se rokne ke liye 1 kiya */
}

                .count-bg-decor {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                    pointer-events: none;
                    z-index: 0;
                    border-radius: inherit;
                }

                .count-bg-decor::before {
                    content: "";
                    position: absolute;
                    width: 300px; height: 300px;
                    border-radius: 50%;
                    background: rgba(255, 102, 0, 0.05);
                    top: -120px; left: -100px;
                }

                .count-bg-decor::after {
                    content: "";
                    position: absolute;
                    width: 350px; height: 350px;
                    border-radius: 50%;
                    background: rgba(255, 102, 0, 0.04);
                    right: -150px; bottom: -150px;
                }

                .count-section .container {
                    position: relative;
                    z-index: 5;
                    max-width: 1340px;
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
                    min-height: 190px; 
                    padding: 70px 25px 25px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 0;
                    overflow: visible;
                    color: #fff;
                    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.15);
                    border-right: 3px solid rgba(255, 255, 255, 0.95);
                }

                .count-card-1 { background: linear-gradient(135deg, #8561a9 0%, #79559d 100%); }
                .count-card-2 { background: linear-gradient(135deg, #f19a1b 0%, #ed8b12 100%); }
                .count-card-3 { background: linear-gradient(135deg, #2cb2da 0%, #20a8d0 100%); }
                .count-card-4 { background: linear-gradient(135deg, #ef4c20 0%, #e84419 100%); border-right: none; }

                .count-card::after {
                    content: "";
                    position: absolute;
                    right: -29px; top: 55%;
                    transform: translateY(-50%);
                    width: 0; height: 0;
                    border-top: 29px solid transparent;
                    border-bottom: 29px solid transparent;
                    border-left: 29px solid #8561a9;
                    z-index: 4;
                }
                .count-card-2::after { border-left-color: #f19a1b; }
                .count-card-3::after { border-left-color: #2cb2da; }
                .count-card-4::after { display: none; }

                .count-icon {
                    position: absolute;
                    top: -39px; left: 50%;
                    transform: translateX(-50%) !important;
                    width: 78px; height: 78px; min-width: 78px;
                    display: flex; align-items: center; justify-content: center;
                    border-radius: 50%;
                    background: #fff; color: #273b66;
                    border: 6px solid #ffb400;
                    font-size: 28px;
                    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
                    z-index: 10;
                }

                .count-icon i { display: block; color: #273b66; font-size: 28px; line-height: 1; }

                .count-content {
                    position: relative; z-index: 5;
                    width: 100%; text-align: center;
                    display: flex; flex-direction: column; gap: 6px;
                }

                .count-short-name {
                    color: #fff; font-size: 32px; font-weight: 800;
                    line-height: 1.1; text-align: center; text-transform: uppercase;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
                    font-variant-numeric: tabular-nums; /* Number jump rokne ke liye */
                }

                .count-content h2 {
                    margin: 0; color: #fff; font-size: 14px;
                    font-weight: 600; line-height: 1.5; text-align: center;
                    text-transform: uppercase; letter-spacing: 0.8px;
                }

                .count-number {
                    position: absolute; right: 8px; bottom: -10px;
                    font-size: 75px; line-height: 1; font-weight: 900;
                    color: rgba(255, 255, 255, 0.13);
                    pointer-events: none; user-select: none; z-index: 1;
                }

                .count-arrow {
                    position: absolute; right: 15px; top: 15px;
                    width: 30px; height: 30px;
                    display: flex; align-items: center; justify-content: center;
                    border-radius: 50%; background: rgba(255, 255, 255, 0.2);
                    color: #fff; font-size: 12px; opacity: 0;
                    transition: opacity 0.2s ease;
                }
                .count-card:hover .count-arrow { opacity: 1; }

                /* ================= SKELETON LOADER CSS ================= */
                .skeleton-card {
                    background: #f0f0f0 !important;
                    border-right: 3px solid #fff;
                    box-shadow: none;
                }
                .skeleton-card::after { border-left-color: #f0f0f0 !important; }
                .skeleton-icon {
                    background: #e0e0e0 !important;
                    border-color: #e0e0e0 !important;
                    box-shadow: none;
                }
                .skeleton-text {
                    background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
                    background-size: 200% 100%;
                    animation: shimmer 1.5s infinite;
                    border-radius: 4px;
                    margin: 0 auto;
                }
                .skeleton-val { width: 70%; height: 32px; margin-bottom: 6px; }
                .skeleton-title { width: 90%; height: 14px; }
                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }

                @media (max-width: 1199px) {
                    .count-section { --stats-position: 5px; }
                    .count-card { min-height: 180px; padding: 65px 20px 20px; }
                    .count-short-name { font-size: 26px; }
                    .count-content h2 { font-size: 13px; }
                    .count-icon { width: 74px; height: 74px; min-width: 74px; top: -37px; }
                    .count-icon i { font-size: 26px; }
                }

                @media (max-width: 767px) {
                    .count-section { --stats-position: 5px; padding-bottom: 15px; }
                    .count-section .row { row-gap: 40px; }
                    .count-column { padding-left: 12px !important; padding-right: 12px !important; }
                    .count-card { min-height: 160px; padding: 55px 20px 20px; border-radius: 8px; border-right: none; }
                    .count-card::after { display: none; }
                    .count-icon { width: 68px; height: 68px; min-width: 68px; top: -34px; border-width: 5px; }
                    .count-icon i { font-size: 23px; }
                    .count-short-name { font-size: 24px; }
                    .count-content h2 { font-size: 12px; line-height: 1.4; }
                    .count-number { font-size: 65px; }
                    .count-arrow { display: none; }
                }

                @media (max-width: 480px) {
                    .count-section { --stats-position: 25px; }
                    .count-card { min-height: 150px; padding: 50px 15px 15px; }
                    .count-icon { width: 62px; height: 62px; min-width: 62px; top: -31px; border-width: 5px; }
                    .count-icon i { font-size: 21px; }
                    .count-short-name { font-size: 22px; }
                    .count-content h2 { font-size: 11px; }
                    .count-number { font-size: 58px; }
                }
                `}
            </style>
        </>
    );
}

export default EducationalStatistics;