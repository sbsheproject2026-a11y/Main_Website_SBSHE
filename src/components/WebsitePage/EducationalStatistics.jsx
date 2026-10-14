import React, { useEffect, useState } from "react";
import { getWebsiteContent } from "./HomeService";

function EducationalStatistics() {
    const [totalcounts, setTotalcounts] = useState([]);

    useEffect(() => {
        loadPageData();
    }, []);

    const loadPageData = async () => {
        try {
            const totalcountsData = await getWebsiteContent(3);

            setTotalcounts(
                (totalcountsData || []).filter(
                    (item) => item.is_active === true
                )
            );
        } catch (error) {
            console.log("Page data error:", error);
            setTotalcounts([]);
        }
    };

    return (
        <>
            <section className="count-section">
                <div className=" ">
                    <div className="row justify-content-center">
                        {totalcounts
                            .slice()
                            .reverse()
                            .map((item, index) => {
                                const colorIndex = (index % 4) + 1;

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

                                                {item.short_name && (
                                                    <div className="count-short-name">
                                                        {item.short_name}
                                                    </div>
                                                )}

                                                {item.name && (
                                                    <h2>{item.name}</h2>
                                                )}

                                                {item.description && (
                                                    <div
                                                        className="about-description"
                                                        dangerouslySetInnerHTML={{
                                                            __html: item.description || ""
                                                        }}
                                                    />
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
    min-height: 180px;
    padding: 52px 25px 25px;
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

.count-card::after {
    content: "";
    position: absolute;
    right: -29px;
    top: 50%;
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
    border: 8px solid #ffb400;
    font-size: 28px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 10;
    transition: none !important;
}

.count-card:hover .count-icon {
    transform: translateX(-50%) !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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
    padding-top: 8px;
    text-align: center;
}

.count-short-name {
    color: #fff;
    font-size: 24px;
    font-weight: 800;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 7px;
    text-transform: uppercase;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
}

.count-content h2 {
    margin: 0;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
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
        min-height: 175px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .count-short-name {
        font-size: 21px;
    }

    .count-content h2 {
        font-size: 14px;
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
        min-height: 155px;
        padding: 45px 20px 25px;
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
        border-width: 7px;
    }

    .count-icon i {
        font-size: 23px;
    }

    .count-short-name {
        font-size: 20px;
        margin-bottom: 6px;
    }

    .count-content h2 {
        font-size: 13px;
        line-height: 1.5;
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
        min-height: 145px;
        padding: 42px 15px 20px;
    }

    .count-icon {
        width: 62px;
        height: 62px;
        min-width: 62px;
        top: -31px;
        border-width: 6px;
    }

    .count-icon i {
        font-size: 21px;
    }

    .count-short-name {
        font-size: 18px;
    }

    .count-content h2 {
        font-size: 12px;
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