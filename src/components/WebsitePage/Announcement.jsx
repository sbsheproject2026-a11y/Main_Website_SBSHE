
import React, { useEffect, useState } from "react";
import { getWebsiteContent } from "./HomeService";



function Announcement() {
    const [announcements, setAnnouncements] = useState([]);
    useEffect(() => {
        loadPageData();
    }, []);

    const loadPageData = async () => {
        try {
            const [

                announcementsData,

            ] = await Promise.all([

                getWebsiteContent(2),

            ]);


            setAnnouncements((announcementsData || []).filter(item => item.is_active === true));

        } catch (error) {
            console.log("Page data error:", error);
        }
    };
    return (

        <>
       

            {announcements.length > 0 && (
                <div className="announcement-wrapper">
                    <div className="announcement-bar">
                        <div className="announcement-title">
                            <div className="announcement-icon">
                                <i className="fa fa-bullhorn"></i>
                            </div>
                            <span>Announcements</span>
                        </div>

                        <div className="announcement-content">
                            <div className="announcement-track">
                                <div className="announcement-items">
                                    {announcements.map((item, index) => (
                                        <React.Fragment
                                            key={`announcement-${item.id ?? index}`}
                                        >
                                            {item.url_link ? (
                                                <a
                                                    href={item.url_link}
                                                    className="announcement-item"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {item.name}
                                                </a>
                                            ) : (
                                                <span className="announcement-item">
                                                    {item.name}
                                                </span>
                                            )}

                                            {index < announcements.length - 1 && (
                                                <span className="announcement-separator">
                                                    •
                                                </span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div className="announcement-items">
                                    {announcements.map((item, index) => (
                                        <React.Fragment
                                            key={`duplicate-announcement-${item.id ?? index}`}
                                        >
                                            <span className="announcement-item">
                                                {item.name}
                                            </span>

                                            {index < announcements.length - 1 && (
                                                <span className="announcement-separator">
                                                    •
                                                </span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <style>
                        {`
.announcement-wrapper {
    width: 100%;
    padding: 0;
    background: #01507c;
}

.announcement-bar {
    width: 100%;
    min-height: 48px;
    display: flex;
    align-items: center;
    background: linear-gradient(90deg, #01507c 0%, #01507c 50%, #01507c 100%);
    color: #ffffff;
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.18);
    overflow: hidden;
}

.announcement-title {
    position: relative;
    z-index: 5;
    height: 48px;
    min-width: 180px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #01507c;
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.12);
}

.announcement-title::after {
    content: "";
    position: absolute;
    right: -12px;
    top: 0;
    width: 25px;
    height: 100%;
    background: #01507c;
    transform: skewX(-15deg);
    z-index: -1;
}

.announcement-icon {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.18);
    color: #ffffff;
    font-size: 13px;
    animation: announcementBell 1.8s ease-in-out infinite;
}

@keyframes announcementBell {
    0%, 70%, 100% {
        transform: rotate(0deg);
    }

    75% {
        transform: rotate(12deg);
    }

    80% {
        transform: rotate(-12deg);
    }

    85% {
        transform: rotate(8deg);
    }

    90% {
        transform: rotate(-5deg);
    }
}

.announcement-content {
    position: relative;
    flex: 1;
    min-width: 0;
    height: 48px;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.announcement-content::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 35px;
    height: 100%;
    z-index: 2;
    background: linear-gradient(to right, #01507c, transparent);
    pointer-events: none;
}

.announcement-content::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 35px;
    height: 100%;
    z-index: 2;
    background: linear-gradient(to left, #01507c, transparent);
    pointer-events: none;
}

.announcement-track {
    display: flex;
    width: max-content;
    align-items: center;
    animation: announcementScroll 28s linear infinite;
}

.announcement-track:hover {
    animation-play-state: paused;
}

@keyframes announcementScroll {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

.announcement-items {
    display: flex;
    align-items: center;
    white-space: nowrap;
}

.announcement-item {
    display: inline-flex;
    align-items: center;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    padding: 0 12px;
    cursor: default;
}

.announcement-separator {
    color: #ffd166;
    font-size: 18px;
    font-weight: 700;
    margin: 0 3px;
}

@media (max-width: 767px) {
    .announcement-bar {
        min-height: 42px;
    }

    .announcement-title {
        min-width: 125px;
        height: 42px;
        padding: 0 10px;
        gap: 7px;
        font-size: 11px;
    }

    .announcement-icon {
        width: 24px;
        height: 24px;
        min-width: 24px;
        font-size: 11px;
    }

    .announcement-content {
        height: 42px;
    }

    .announcement-item {
        font-size: 12px;
        padding: 0 9px;
    }

    .announcement-separator {
        font-size: 15px;
    }

    .announcement-track {
        animation-duration: 22s;
    }
}

@media (max-width: 480px) {
    .announcement-title {
        min-width: 105px;
        padding: 0 7px;
        font-size: 10px;
        gap: 5px;
    }

    .announcement-icon {
        width: 21px;
        height: 21px;
        min-width: 21px;
        font-size: 9px;
    }

    .announcement-item {
        font-size: 11px;
        padding: 0 7px;
    }

    .announcement-separator {
        font-size: 13px;
    }

    .announcement-track {
        animation-duration: 18s;
    }
}

@media (prefers-reduced-motion: reduce) {
    .announcement-track {
        animation: none;
    }

    .announcement-icon {
        animation: none;
    }
}
`}
                    </style>
                </div>
            )}
        
        </>
    )
}

export default Announcement