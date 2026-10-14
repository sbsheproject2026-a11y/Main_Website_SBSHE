
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWebsiteContent } from "../WebsitePage/HomeService";
import { getMenu } from "./HeaderService";

function Header() {
    const [notes, setNotes] = useState([]);
    const [about, setAbout] = useState([]);
    const [campus, setCampus] = useState([]);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [campusOpen, setCampusOpen] = useState(false);

    useEffect(() => {
        loadPageData();
        loadMenu();
    }, []);

    // ============================================================
    // LOAD NOTICE DATA
    // ============================================================

    const loadPageData = async () => {
        try {
            const notesData = await getWebsiteContent(21);

            setNotes(
                (notesData || []).filter(
                    (item) => item.is_active === true
                )
            );
        } catch (error) {
            console.log("Page data error:", error);
            setNotes([]);
        }
    };

    // ============================================================
    // LOAD MENU DATA
    // ============================================================

    const loadMenu = async () => {
        try {
            const [aboutData, campusData] = await Promise.all([
                getMenu(10),
                getMenu(27),
            ]);

            // ✅ Serial number sort:
            // - Jo items me serial_number set hai → pehle (ascending)
            // - Jo items me serial_number null hai → baad me (original API order)
            const sortBySerial = (list) => {
                return [...(list || [])]
                    .filter((item) => item.is_active === true)
                    .sort((a, b) => {
                        const sa = a.serial_number;
                        const sb = b.serial_number;

                        const aIsNull = sa === null || sa === undefined;
                        const bIsNull = sb === null || sb === undefined;

                        // Dono null → original order (stable)
                        if (aIsNull && bIsNull) return 0;

                        // Sirf a null → a last me
                        if (aIsNull) return 1;

                        // Sirf b null → b last me
                        if (bIsNull) return -1;

                        // Dono ke paas value → ascending
                        return Number(sa) - Number(sb);
                    });
            };

            setAbout(sortBySerial(aboutData));
            setCampus(sortBySerial(campusData));
        } catch (error) {
            console.log("Menu data error:", error);

            setAbout([]);
            setCampus([]);
        }
    };

    // ============================================================
    // NOTICE ITEMS
    // ============================================================

    const noticeItems =
        notes.length > 0
            ? [...notes, ...notes]
            : [];

    // ============================================================
    // CLOSE MOBILE MENU
    // ============================================================

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setAboutOpen(false);
        setCampusOpen(false);
    };

    // ============================================================
    // CLEAN DESCRIPTION
    // ============================================================

    const cleanDescription = (html) => {
        if (!html) return "";

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;

        tempDiv.querySelectorAll("br").forEach((br) => {
            br.replaceWith("\n");
        });

        tempDiv.querySelectorAll("p, div").forEach((element) => {
            element.insertAdjacentText("afterend", "\n");
        });

        return (tempDiv.textContent || "")
            .replace(/\u00a0/g, " ")
            .replace(/\*\*/g, "")
            .replace(/[ \t]+/g, " ")
            .replace(/\n[ \t]+/g, "\n")
            .replace(/[ \t]+\n/g, "\n")
            .replace(/\n{3,}/g, "\n\n")
            .trim();
    };

    return (
        <>
            {/* =========================================================
                MAIN HEADER MENU
                SAME MENU FOR DESKTOP + MOBILE
            ========================================================== */}

            <div className="site-header-menu">

                {/* =====================================================
                    NAVIGATION BAR
                ====================================================== */}

                <div className="navigation-wrapper">

                    <div className="header-container">

                        <nav className="main-navigation">

                            {/* =================================================
                                MOBILE MENU BUTTON
                            ================================================== */}

                            <button
                                type="button"
                                className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""
                                    }`}
                                onClick={() =>
                                    setMobileMenuOpen(!mobileMenuOpen)
                                }
                                aria-label="Toggle navigation"
                                aria-expanded={mobileMenuOpen}
                            >
                                <i
                                    className={`fas ${mobileMenuOpen
                                        ? "fa-times"
                                        : "fa-bars"
                                        }`}
                                ></i>


                            </button>


                            {/* =================================================
                                HOME
                            ================================================== */}

                            <Link
                                to="/"
                                className="main-nav-link activities-link"
                                onClick={closeMobileMenu}
                            >
                                <i className="fas fa-home"></i>
                                <span>Home</span>
                            </Link>


                            {/* =================================================
                                ABOUT US
                            ================================================== */}

                            <div
                                className={`main-nav-dropdown ${aboutOpen ? "mobile-open" : ""
                                    }`}
                            >

                                <button
                                    type="button"
                                    className="main-nav-link dropdown-button activities-link"
                                    onClick={() => {
                                        if (
                                            window.innerWidth <= 991
                                        ) {
                                            setAboutOpen(!aboutOpen);
                                            setCampusOpen(false);
                                        }
                                    }}
                                >
                                    <i className="fas fa-info-circle"></i>

                                    <span>About Us</span>

                                    <i
                                        className={`fas ${aboutOpen
                                            ? "fa-chevron-up"
                                            : "fa-chevron-down"
                                            } dropdown-arrow`}
                                    ></i>
                                </button>


                                <div className="main-dropdown-menu">

                                    {about.length > 0 ? (
                                        about.map((item) => (
                                            <Link
                                                key={item.id}
                                                to={`/about/${item.slug}`}
                                                className="main-dropdown-item"
                                                onClick={closeMobileMenu}
                                            >
                                                {item.name}
                                            </Link>
                                        ))
                                    ) : (
                                        <span className="main-dropdown-item text-muted">
                                            No menu available
                                        </span>
                                    )}

                                </div>

                            </div>


                            {/* =================================================
                                APPROVALS / ACHIEVEMENTS
                            ================================================== */}

                            <Link
                                to="/approvals-achievements"
                                className="main-nav-link activities-link"
                                onClick={closeMobileMenu}
                            >
                                <i className="fas fa-award"></i>

                                <span>
                                    Approvals/Achievements
                                </span>
                            </Link>


                            {/* =================================================
                                PROGRAMME
                            ================================================== */}

                            <Link
                                to="/programmes"
                                className="main-nav-link activities-link"
                                onClick={closeMobileMenu}
                            >
                                <i className="fas fa-book-open"></i>

                                <span>
                                    Programme
                                </span>
                            </Link>
                            <Link
                                to="/online-programmes"
                                className="main-nav-link activities-link"
                                onClick={closeMobileMenu}
                            >
                                <i className="fas fa-book-open"></i>

                                <span>
                                    Online Programme
                                </span>
                            </Link>


                            {/* =================================================
                                DEPARTMENT
                            ================================================== */}

                            <div
                                className={`main-nav-dropdown ${campusOpen ? "mobile-open" : ""
                                    }`}
                            >

                                <button
                                    type="button"
                                    className="main-nav-link dropdown-button activities-link"
                                    onClick={() => {
                                        if (
                                            window.innerWidth <= 991
                                        ) {
                                            setCampusOpen(!campusOpen);
                                            setAboutOpen(false);
                                        }
                                    }}
                                >
                                    <i className="fas fa-university"></i>

                                    <span>
                                        Department
                                    </span>

                                    <i
                                        className={`fas ${campusOpen
                                            ? "fa-chevron-up"
                                            : "fa-chevron-down"
                                            } dropdown-arrow`}
                                    ></i>
                                </button>


                                <div className="main-dropdown-menu">

                                    {campus.length > 0 ? (
                                        campus.map((item) => (
                                            <Link
                                                key={item.id}
                                                to={`/department/${item.slug}`}
                                                className="main-dropdown-item"
                                                onClick={closeMobileMenu}
                                            >
                                                {item.name}
                                            </Link>
                                        ))
                                    ) : (
                                        <span className="main-dropdown-item text-muted">
                                            No menu available
                                        </span>
                                    )}

                                </div>

                            </div>


                            {/* =================================================
                                ACCREDITED INSTITUTE
                            ================================================== */}

                            <Link
                                to="/study-centres"
                                className="main-nav-link activities-link"
                                onClick={closeMobileMenu}
                            >
                                <i className="fas fa-building"></i>

                                <span>
                                    Accredited Institute
                                </span>
                            </Link>


                            {/* =================================================
                                STUDENT SUPPORT
                            ================================================== */}

                            <Link
                                to="https://student.shaheedbhagatsinghhealthandeducation.com"
                                className="main-nav-link activities-link"
                                onClick={closeMobileMenu}
                            >
                                <i className="fas fa-user-graduate"></i>

                                <span>
                                    Student Support
                                </span>
                            </Link>


                            {/* =================================================
                                ANNOUNCEMENTS
                            ================================================== */}

                            <Link
                                to="/announcements"
                                className="main-nav-link activities-link"
                                onClick={closeMobileMenu}
                            >
                                <i className="fas fa-bullhorn"></i>

                                <span>
                                    Announcements
                                </span>
                            </Link>


                            {/* =================================================
                                ACTIVITIES
                            ================================================== */}

                            {/* <Link
                                to="/activities"
                                className="main-nav-link activities-link"
                                onClick={closeMobileMenu}
                            >
                                <i className="fas fa-running"></i>

                                <span>
                                    Activities
                                </span>
                            </Link> */}

                        </nav>

                    </div>

                </div>


                {/* =====================================================
                    MOBILE FULL MENU
                ====================================================== */}

                <div
                    className={`mobile-full-menu ${mobileMenuOpen ? "show" : ""
                        }`}
                >

                    <div className="mobile-menu-inner">

                        {/* =================================================
                            HOME
                        ================================================== */}

                        <Link
                            to="/"
                            className="mobile-menu-item"
                            onClick={closeMobileMenu}
                        >
                            <span className="mobile-menu-icon">
                                <i className="fas fa-home"></i>
                            </span>

                            <span className="mobile-menu-name">
                                Home
                            </span>

                            <i className="fas fa-chevron-right mobile-menu-arrow"></i>
                        </Link>


                        {/* =================================================
                            ABOUT US
                        ================================================== */}

                        <div className="mobile-menu-dropdown">

                            <button
                                type="button"
                                className={`mobile-menu-item ${aboutOpen ? "active" : ""
                                    }`}
                                onClick={() => {
                                    setAboutOpen(!aboutOpen);
                                    setCampusOpen(false);
                                }}
                            >
                                <span className="mobile-menu-icon">
                                    <i className="fas fa-info-circle"></i>
                                </span>

                                <span className="mobile-menu-name">
                                    About Us
                                </span>

                                <i
                                    className={`fas ${aboutOpen
                                        ? "fa-chevron-up"
                                        : "fa-chevron-down"
                                        } mobile-menu-arrow`}
                                ></i>
                            </button>


                            <div
                                className={`mobile-submenu ${aboutOpen ? "show" : ""
                                    }`}
                            >

                                {about.length > 0 ? (
                                    about.map((item) => (
                                        <Link
                                            key={item.id}
                                            to={`/about/${item.slug}`}
                                            className="mobile-submenu-item"
                                            onClick={closeMobileMenu}
                                        >
                                            <i className="fas fa-angle-right"></i>

                                            <span>
                                                {item.name}
                                            </span>
                                        </Link>
                                    ))
                                ) : (
                                    <span className="mobile-submenu-empty">
                                        No menu available
                                    </span>
                                )}

                            </div>

                        </div>


                        {/* =================================================
                            APPROVALS / ACHIEVEMENTS
                        ================================================== */}

                        <Link
                            to="/approvals-achievements"
                            className="mobile-menu-item"
                            onClick={closeMobileMenu}
                        >
                            <span className="mobile-menu-icon">
                                <i className="fas fa-award"></i>
                            </span>

                            <span className="mobile-menu-name">
                                Approvals/Achievements
                            </span>

                            <i className="fas fa-chevron-right mobile-menu-arrow"></i>
                        </Link>


                        {/* =================================================
                            PROGRAMME
                        ================================================== */}

                        <Link
                            to="/programmes"
                            className="mobile-menu-item"
                            onClick={closeMobileMenu}
                        >
                            <span className="mobile-menu-icon">
                                <i className="fas fa-book-open"></i>
                            </span>

                            <span className="mobile-menu-name">
                                Programme
                            </span>

                            <i className="fas fa-chevron-right mobile-menu-arrow"></i>
                        </Link>

                        <Link
                            to="/online-programmes"
                            className="mobile-menu-item"
                            onClick={closeMobileMenu}
                        >
                            <span className="mobile-menu-icon">
                                <i className="fas fa-book-open"></i>
                            </span>

                            <span className="mobile-menu-name">
                                Online Programme
                            </span>

                            <i className="fas fa-chevron-right mobile-menu-arrow"></i>
                        </Link>


                        {/* =================================================
                            DEPARTMENT
                        ================================================== */}

                        <div className="mobile-menu-dropdown">

                            <button
                                type="button"
                                className={`mobile-menu-item ${campusOpen ? "active" : ""
                                    }`}
                                onClick={() => {
                                    setCampusOpen(!campusOpen);
                                    setAboutOpen(false);
                                }}
                            >
                                <span className="mobile-menu-icon">
                                    <i className="fas fa-university"></i>
                                </span>

                                <span className="mobile-menu-name">
                                    Department
                                </span>

                                <i
                                    className={`fas ${campusOpen
                                        ? "fa-chevron-up"
                                        : "fa-chevron-down"
                                        } mobile-menu-arrow`}
                                ></i>
                            </button>


                            <div
                                className={`mobile-submenu ${campusOpen ? "show" : ""
                                    }`}
                            >

                                {campus.length > 0 ? (
                                    campus.map((item) => (
                                        <Link
                                            key={item.id}
                                            to={`/department/${item.slug}`}
                                            className="mobile-submenu-item"
                                            onClick={closeMobileMenu}
                                        >
                                            <i className="fas fa-angle-right"></i>

                                            <span>
                                                {item.name}
                                            </span>
                                        </Link>
                                    ))
                                ) : (
                                    <span className="mobile-submenu-empty">
                                        No menu available
                                    </span>
                                )}

                            </div>

                        </div>


                        {/* =================================================
                            ACCREDITED INSTITUTE
                        ================================================== */}

                        <Link
                            to="/study-centres"
                            className="mobile-menu-item"
                            onClick={closeMobileMenu}
                        >
                            <span className="mobile-menu-icon">
                                <i className="fas fa-building"></i>
                            </span>

                            <span className="mobile-menu-name">
                                Accredited Institute
                            </span>

                            <i className="fas fa-chevron-right mobile-menu-arrow"></i>
                        </Link>


                        {/* =================================================
                            STUDENT SUPPORT
                        ================================================== */}

                        <Link
                            to="https://student.shaheedbhagatsinghhealthandeducation.com"
                            className="mobile-menu-item"
                            onClick={closeMobileMenu}
                        >
                            <span className="mobile-menu-icon">
                                <i className="fas fa-user-graduate"></i>
                            </span>

                            <span className="mobile-menu-name">
                                Student Support
                            </span>

                            <i className="fas fa-chevron-right mobile-menu-arrow"></i>
                        </Link>


                        {/* =================================================
                            ANNOUNCEMENTS
                        ================================================== */}

                        <Link
                            to="/announcements"
                            className="mobile-menu-item"
                            onClick={closeMobileMenu}
                        >
                            <span className="mobile-menu-icon">
                                <i className="fas fa-bullhorn"></i>
                            </span>

                            <span className="mobile-menu-name">
                                Announcements
                            </span>

                            <i className="fas fa-chevron-right mobile-menu-arrow"></i>
                        </Link>


                        {/* =================================================
                            ACTIVITIES
                        ================================================== */}

                        {/* <Link
                            to="/activities"
                            className="mobile-menu-item activities-mobile-item"
                            onClick={closeMobileMenu}
                        >
                            <span className="mobile-menu-icon">
                                <i className="fas fa-running"></i>
                            </span>

                            <span className="mobile-menu-name">
                                Activities
                            </span>

                            <i className="fas fa-chevron-right mobile-menu-arrow"></i>
                        </Link> */}

                    </div>

                </div>

            </div>


            {/* =========================================================
                NOTICE BAR
            ========================================================== */}

            {notes.length > 0 && (
                <div className="common-notice-bar">




                    <div className="common-notice-content">

                        <div className="common-notice-track">

                            {noticeItems.map((item, index) => (
                                <React.Fragment
                                    key={`notice-${item.id}-${index}`}
                                >

                                    <div className="common-notice-item">
                                        {cleanDescription(
                                            item.description
                                        )}
                                    </div>

                                    <span className="common-notice-separator">
                                        •
                                    </span>

                                </React.Fragment>
                            ))}

                        </div>

                    </div>

                </div>
            )}


            {/* =========================================================
                CSS
            ========================================================== */}

            <style>
                {`

                /* =====================================================
                   COMMON
                ====================================================== */

                .site-header-menu {
                    width: 100%;
                    position: relative;
                    z-index: 9999;
                }

                .header-container {
                    width: 100%;
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 12px;
                }


                /* =====================================================
                   NAVIGATION
                ====================================================== */

                .navigation-wrapper {
                    width: 100%;
                    background: #07567f;
                    border-bottom: 1px solid #dce3e8;
                }

                .main-navigation {
                    width: 100%;
                    min-height: 50px;

                    display: flex;
                    align-items: stretch;
                    justify-content: center;

                    background: #063d59;

                    border-radius: 0 0 6px 6px;

                     

                    scrollbar-width: thin;

                    -webkit-overflow-scrolling: touch;
                }


                /* =====================================================
                   NAV LINK
                ====================================================== */

                .main-nav-link {
                    flex: 0 0 auto;

                    min-height: 50px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    gap: 7px;

                    padding: 0 13px;

                    color: #ffffff;
                    background: transparent;

                    border: 0;

                    text-decoration: none;

                    font-size: 12px;
                    font-weight: 600;

                    white-space: nowrap;

                    cursor: pointer;

                    transition:
                        background 0.2s ease,
                        color 0.2s ease;
                }

                .main-nav-link:hover,
                .main-nav-link:focus,
                .main-nav-link.active {
                    color: #ffffff;
                    background: transparent;
                    text-decoration: none;
                }

                /* =========================================
   REMOVE BORDER FROM DROPDOWN MENU ITEMS
========================================= */

.main-nav-dropdown,
.main-nav-dropdown .main-nav-link {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
}

/* Remove focus border */
.main-nav-dropdown .main-nav-link:focus,
.main-nav-dropdown .main-nav-link:active,
.main-nav-dropdown .main-nav-link:hover {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
}

/* Dropdown ke andar ke menu items ka border bhi remove */
.main-dropdown-menu {
    border: none;
}

/* Sirf dropdown item ke beech ki line bhi remove */
.main-dropdown-item {
    border-bottom: none !important;
}
                .main-nav-link i {
                    font-size: 11px;
                }

                .dropdown-button {
                    font-family: inherit;
                }

                .dropdown-arrow {
                    font-size: 8px !important;
                    margin-left: 1px;
                }


                /* =====================================================
                   DROPDOWN
                ====================================================== */

                .main-nav-dropdown {
                    position: relative;

                    flex: 0 0 auto;

                    display: flex;
                    align-items: stretch;
                }

                .main-dropdown-menu {
                    position: absolute;

                    top: 100%;
                    left: 0;

                    min-width: 230px;

                    background: #ffffff;

                    border: 1px solid #e3e7eb;

                    border-radius: 0 0 7px 7px;

                    box-shadow:
                        0 10px 25px rgba(0, 0, 0, 0.15);

                    padding: 6px 0;

                    opacity: 0;
                    visibility: hidden;

                    transform: translateY(7px);

                    transition:
                        opacity 0.2s ease,
                        transform 0.2s ease,
                        visibility 0.2s ease;

                    z-index: 10000;
                }

                .main-nav-dropdown:hover
                .main-dropdown-menu {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }

                .main-dropdown-item {
                    display: block;

                    padding: 11px 16px;

                    color: #333333;
                    background: #ffffff;

                    text-decoration: none;

                    font-size: 13px;
                    font-weight: 500;

                    border-bottom: 1px solid #f1f1f1;

                    transition: all 0.15s ease;
                }

                .main-dropdown-item:last-child {
                    border-bottom: 0;
                }

                .main-dropdown-item:hover {
                    color: #ffffff;
                    background: #07567f;

                    padding-left: 21px;

                    text-decoration: none;
                }


                /* =====================================================
                   ACTIVITIES
                ====================================================== */

                .activities-link {
                    position: relative;
                }

                .activities-link::after {
                    content: "";

                    position: absolute;

                    left: 8px;
                    right: 8px;
                    bottom: 3px;

                    height: 2px;

                    background: transparent;

                    border-radius: 10px;
                }

                .activities-link:hover::after {
                    background: #ffffff;
                }


                /* =====================================================
                   MOBILE TOGGLE
                ====================================================== */

                .mobile-menu-toggle {
                    display: none;

                    flex: 0 0 auto;

                    width: 48px;
                    min-height: 50px;

                    align-items: center;
                    justify-content: center;

                    border: 0;
                    outline: none;

                    color: #ffffff;
                    background: #07567f;

                    cursor: pointer;

                    font-size: 17px;
                }

                .mobile-menu-toggle:hover {
                    background: #08658f;
                }


                /* =====================================================
                   MOBILE FULL MENU
                ====================================================== */

                .mobile-full-menu {
                    display: none;
                }


                /* =====================================================
                   NOTICE BAR
                ====================================================== */

                .common-notice-bar {
                    width: 100%;
                    height: 38px;

                    display: flex;
                    align-items: center;

                    background: #e9f4fa;

                    border-bottom: 1px solid #d6e7ef;

                    overflow: hidden;

                    position: relative;
                    z-index: 100;
                }

                .common-notice-label {
                    flex: 0 0 auto;

                    height: 100%;

                    padding: 0 20px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    gap: 7px;

                    color: #ffffff;
                    background: #01507c;

                    font-size: 12px;
                    font-weight: 700;

                    white-space: nowrap;

                    position: relative;
                    z-index: 2;
                }

                .common-notice-label i {
                    font-size: 12px;
                }

                .common-notice-content {
                    flex: 1;

                    min-width: 0;
                    height: 100%;

                    display: flex;
                    align-items: center;

                    overflow: hidden;

                    color: #333333;
                    font-size: 12px;
                }

                .common-notice-track {
                    display: inline-flex;
                    align-items: center;

                    width: max-content;

                    white-space: nowrap;

                    padding-left: 100%;

                    animation:
                        commonNoticeScroll
                        30s
                        linear
                        infinite;

                    will-change: transform;
                }

                .common-notice-item {
                    display: inline-block;

                    flex-shrink: 0;

                    color: #333333;

                    font-size: 17px;
                    font-weight: 500;

                    line-height: 38px;
                }

                .common-notice-separator {
                    display: inline-block;

                    flex-shrink: 0;

                    color: #07567f;

                    margin: 0 30px;

                    font-weight: 700;
                }

                @keyframes commonNoticeScroll {

                    0% {
                        transform: translateX(0);
                    }

                    100% {
                        transform: translateX(-50%);
                    }

                }

                .common-notice-content:hover
                .common-notice-track {
                    animation-play-state: paused;
                }


                /* =====================================================
                   TABLET
                ====================================================== */

                @media (max-width: 1100px) {

                    .main-nav-link {
                        padding: 0 7px;
                        font-size: 11px;
                        gap: 5px;
                    }

                    .main-nav-link i {
                        font-size: 10px;
                    }

                }


                /* =====================================================
                   MOBILE
                ====================================================== */

                @media (max-width: 991px) {

                    .header-container {
                        padding: 0;
                    }

                    .navigation-wrapper {
                        background: #063d59;
                    }

                    .main-navigation {
                        min-height: 52px;

                        justify-content: flex-start;

                        overflow: hidden;

                        border-radius: 0;
                    }

                    .main-navigation > .main-nav-link,
                    .main-navigation > .main-nav-dropdown {
                        display: none;
                    }

                    .mobile-menu-toggle {
                        display: flex;
                    }


                    /* ================================================
                       MOBILE MENU PANEL
                    ================================================ */

                    .mobile-full-menu {
                        display: block;

                        width: 100%;

                        max-height: 0;

                        overflow: hidden;

                        opacity: 0;

                        background: #ffffff;

                        border-left: 1px solid #e2e8ec;
                        border-right: 1px solid #e2e8ec;

                        box-shadow:
                            0 8px 20px
                            rgba(0, 0, 0, 0.12);

                        transition:
                            max-height 0.4s ease,
                            opacity 0.25s ease;
                    }

                    .mobile-full-menu.show {
                        max-height: calc(100vh - 52px);

                        overflow-y: auto;

                        opacity: 1;
                    }

                    .mobile-menu-inner {
                        width: 100%;
                    }


                    /* ================================================
                       MOBILE MENU ITEM
                    ================================================ */

                    .mobile-menu-item {
                        width: 100%;

                        min-height: 54px;

                        display: flex;
                        align-items: center;

                        padding: 7px 14px;

                        color: #263238;
                        background: #ffffff;

                        border: 0;
                        border-bottom: 1px solid #edf0f2;

                        text-decoration: none;

                        font-family: inherit;

                        cursor: pointer;

                        text-align: left;

                        transition:
                            background 0.2s ease,
                            color 0.2s ease;
                    }

                    .mobile-menu-item:hover,
                    .mobile-menu-item:active,
                    .mobile-menu-item.active {
                        color: #07567f;
                        background: #f1f8fc;

                        text-decoration: none;
                    }

                    .mobile-menu-icon {
                        width: 38px;
                        height: 38px;

                        flex: 0 0 38px;

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        margin-right: 12px;

                        border-radius: 9px;

                        color: #07567f;
                        background: #eaf4f9;
                    }

                    .mobile-menu-icon i {
                        font-size: 14px;
                    }

                    .mobile-menu-name {
                        flex: 1;

                        text-align: left;

                        font-size: 13px;
                        font-weight: 600;

                        line-height: 1.35;
                    }

                    .mobile-menu-arrow {
                        flex: 0 0 auto;

                        margin-left: 8px;

                        color: #82909a;

                        font-size: 10px;
                    }

                    .mobile-menu-item.active
                    .mobile-menu-icon {
                        color: #ffffff;
                        background: #07567f;
                    }

                    .mobile-menu-item.active
                    .mobile-menu-arrow {
                        color: #07567f;
                    }


                    /* ================================================
                       MOBILE DROPDOWN
                    ================================================ */

                    .mobile-menu-dropdown {
                        width: 100%;
                    }

                    .mobile-menu-dropdown
                    .mobile-menu-item {
                        appearance: none;
                        -webkit-appearance: none;

                        outline: none;
                    }

                    .mobile-submenu {
                        max-height: 0;

                        overflow: hidden;

                        background: #f8fbfd;

                        border-bottom: 1px solid #edf0f2;

                        transition:
                            max-height 0.35s ease;
                    }

                    .mobile-submenu.show {
                        max-height: 600px;

                        overflow-y: auto;
                    }

                    .mobile-submenu-item {
                        min-height: 46px;

                        display: flex;
                        align-items: center;

                        padding: 0 16px 0 62px;

                        color: #4b5961;
                        background: #f8fbfd;

                        border-bottom: 1px solid #edf1f3;

                        text-decoration: none;

                        font-size: 12px;
                        font-weight: 500;
                    }

                    .mobile-submenu-item:last-child {
                        border-bottom: 0;
                    }

                    .mobile-submenu-item:hover,
                    .mobile-submenu-item:active {
                        color: #07567f;
                        background: #eaf5fa;

                        text-decoration: none;
                    }

                    .mobile-submenu-item i {
                        width: 20px;

                        margin-right: 5px;

                        color: #07567f;

                        font-size: 10px;
                    }

                    .mobile-submenu-empty {
                        display: block;

                        padding: 13px 15px 13px 62px;

                        color: #999999;

                        font-size: 11px;
                    }


                    /* ================================================
                       ACTIVITIES
                    ================================================ */

                    .activities-mobile-item
                    .mobile-menu-icon {
                        color: #ffffff;
                        background: #07567f;
                    }


                    /* ================================================
                       NOTICE
                    ================================================ */

                    .common-notice-bar {
                        height: 36px;
                    }

                    .common-notice-label {
                        padding: 0 12px;

                        gap: 5px;

                        font-size: 10px;
                    }

                    .common-notice-label i {
                        font-size: 10px;
                    }

                    .common-notice-item {
                        font-size: 12px;

                        line-height: 36px;
                    }

                    .common-notice-separator {
                        margin: 0 18px;
                    }

                }


                /* =====================================================
                   SMALL MOBILE
                ====================================================== */

                @media (max-width: 480px) {

                    .mobile-menu-toggle {
                        width: 46px;
                        min-height: 48px;
                    }

                    .mobile-full-menu.show {
                        max-height: calc(100vh - 48px);
                    }

                    .mobile-menu-item {
                        min-height: 51px;

                        padding: 6px 12px;
                    }

                    .mobile-menu-icon {
                        width: 35px;
                        height: 35px;

                        flex-basis: 35px;

                        margin-right: 10px;
                    }

                    .mobile-menu-icon i {
                        font-size: 13px;
                    }

                    .mobile-menu-name {
                        font-size: 12px;
                    }

                    .mobile-submenu-item {
                        min-height: 43px;

                        padding-left: 56px;

                        font-size: 11px;
                    }

                    .common-notice-bar {
                        height: 34px;
                    }

                    .common-notice-label {
                        padding: 0 9px;

                        font-size: 9px;
                    }

                    .common-notice-label i {
                        font-size: 9px;
                    }

                    .common-notice-item {
                        font-size: 10px;

                        line-height: 34px;
                    }

                    .common-notice-separator {
                        margin: 0 13px;
                    }

                }

                `}
            </style>
        </>
    );
}

export default Header;

