 import { Link } from "react-router-dom";

function TopBar() {
    return (
        <>
            {/* =====================================================
                DESKTOP
            ===================================================== */}

            <div className="topbar-desktop d-none d-lg-block">

                <div className="header-top-bar">

                    <div className="header-container">

                        {/* LEFT - Contact Info */}
                        <div className="top-left">

                            <div className="top-contact-item">
                                <div className="top-contact-icon">
                                    <i className="fas fa-phone-alt" aria-hidden="true"></i>
                                </div>
                                <div className="top-contact-text">
                                    <span className="top-contact-label">Student Support</span>
                                    <span className="top-contact-value">+91 7082013213</span>
                                </div>
                            </div>

                            <div className="top-contact-divider"></div>

                            <div className="top-contact-item">
                                <div className="top-contact-icon">
                                    <i className="fas fa-headset" aria-hidden="true"></i>
                                </div>
                                <div className="top-contact-text">
                                    <span className="top-contact-label">Associate Support</span>
                                    <span className="top-contact-value">+91 7082013211,<br /> +91 7082013215</span>
                                </div>
                            </div>

                            <div className="top-contact-divider"></div>

                            <div className="top-contact-item top-contact-email">
                                <div className="top-contact-icon">
                                    <i className="fas fa-envelope" aria-hidden="true"></i>
                                </div>
                                <div className="top-contact-text">
                                    <span className="top-contact-label">Email</span>
                                    <a
                                        href="mailto:contact@shaheedbhagatsinghhealthandeducation.com"
                                        className="top-contact-value top-contact-link"
                                        title="contact@shaheedbhagatsinghhealthandeducation.com"
                                    >
                                        contact@shaheedbhagatsinghhealthandeducation.com
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/* RIGHT - Buttons & Dropdown */}
                        <div className="top-right">

                            {/* Quick Links Dropdown */}
                            <div className="top-dropdown">
                                <button className="top-nav-btn dropdown-toggle-btn" aria-label="Quick Links">
                                    <i className="fas fa-th-large" aria-hidden="true"></i>
                                    <span>Quick Links</span>
                                    <i className="fas fa-chevron-down dropdown-arrow" aria-hidden="true"></i>
                                </button>
                                
                                <div className="top-dropdown-menu">
                                    <Link
                                        to="/admission-consultant-partner"
                                        className="top-dropdown-item"
                                    >
                                        <i className="fas fa-user-tie" aria-hidden="true"></i>
                                        <span>Admission Consultant</span>
                                    </Link>
                                    <Link
                                        to="https://sbshe.in/Rollno-Verification.aspx"
                                        className="top-dropdown-item"
                                    >
                                        <i className="fas fa-poll" aria-hidden="true"></i>
                                        <span>Result Verification</span>
                                    </Link>
                                    <Link
                                        to="/contact-us"
                                        className="top-dropdown-item"
                                    >
                                        <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
                                        <span>Contact Us</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Login - Kept as Primary Action */}
                            <Link
                                to="https://soft.shaheedbhagatsinghhealthandeducation.com"
                                className="top-nav-btn top-nav-btn-login"
                                aria-label="Login"
                                title="Login"
                            >
                                <i className="fas fa-sign-in-alt" aria-hidden="true"></i>
                                <span>Login</span>
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="header-main">

                    <div className="header-container">

                        <div className="row header-main-row">

                            <div className="col-md-2 header-logo-col">

                                <div className="header-logo">

                                    <Link to="/">

                                        {/* ✅ FIX: Added width, height & fetchPriority */}
                                        <img
                                            src="/assets/img/Logo.webp"
                                            alt="Shaheed Bhagat Singh Health and Education"
                                            width="140"
                                            height="145"
                                            fetchPriority="high"
                                        />

                                    </Link>

                                </div>

                            </div>

                            <div className="col-md-8 header-title-col">

                                <div className="header-title">

                                    <h1>
                                        शहीद भगत सिंह स्वास्थ्य एवं शिक्षा
                                    </h1>

                                    <h2>
                                        Shaheed Bhagat Singh Health and Education
                                    </h2>

                                    <div className="header-subtitle">
                                        An autonomous Institute established under act 1882
                                    </div>

                                </div>
                                <Link
                                    to="https://soft.shaheedbhagatsinghhealthandeducation.com/new-student-apply"
                                    className="admission-open-badge"
                                    aria-label="Admission Open 15 Oct 2026"
                                    title="Admission Open 15 Oct 2026"
                                >
                                    <i className="fas fa-bullhorn" aria-hidden="true"></i>
                                    <span className="admission-open-text">
                                        <span>Admission Open</span>
                                        <span>Stream 2</span>
                                        <span>15 Oct 2026</span>
                                    </span>
                                </Link>
                            </div>

                            <div className="col-md-2 header-approved-col">

                                <div className="header-approved">

                                    {/* ✅ FIX: Added width & height */}
                                    <img
                                        src="/assets/img/APORVED.webp"
                                        alt="Approved"
                                        width="175"
                                        height="90"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* =====================================================
                MOBILE
            ===================================================== */}

            <div className="topbar-mobile d-lg-none">

                {/* MOBILE TOOLS */}
                <div className="mobile-tools">
                    <div className="mobile-social">
                        
                        {/* Mobile Quick Links Dropdown */}
                        <div className="top-dropdown mobile-dropdown">
                            <button className="top-nav-btn dropdown-toggle-btn" aria-label="Quick Links">
                                <i className="fas fa-th-large" aria-hidden="true"></i>
                                <span>Links</span>
                                <i className="fas fa-chevron-down dropdown-arrow" style={{fontSize: '8px'}} aria-hidden="true"></i>
                            </button>
                            
                            <div className="top-dropdown-menu">
                                <Link
                                    to="/admission-consultant-partner"
                                    className="top-dropdown-item"
                                >
                                    <i className="fas fa-user-tie" aria-hidden="true"></i>
                                    <span>Admission Consultant</span>
                                </Link>
                                <Link
                                    to="https://sbshe.in/Rollno-Verification.aspx"
                                    className="top-dropdown-item"
                                >
                                    <i className="fas fa-poll" aria-hidden="true"></i>
                                    <span>Result</span>
                                </Link>
                                <Link
                                    to="/contact-us"
                                    className="top-dropdown-item"
                                >
                                    <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
                                    <span>Contact Us</span>
                                </Link>
                            </div>
                        </div>

                        <Link
                            to="https://soft.shaheedbhagatsinghhealthandeducation.com"
                            className="top-nav-btn"
                            aria-label="Login"
                            title="Login"
                        >
                            <i className="fas fa-sign-in-alt" aria-hidden="true"></i>
                            <span>Login</span>
                        </Link>

                    </div>
                </div>

                {/* MOBILE LOGO + TITLE */}
                <div className="mobile-logo-area">
                    <Link to="/" className="mobile-logo-link">
                        {/* ✅ FIX: Added width, height & fetchPriority */}
                        <img
                            src="/assets/img/Logo.webp"
                            alt="Shaheed Bhagat Singh Health and Education"
                            width="90"
                            height="90"
                            fetchPriority="high"
                        />
                    </Link>

                    <div className="mobile-title">
                        <h1>
                            शहीद भगत सिंह स्वास्थ्य एवं शिक्षा
                        </h1>

                        <div className="mobile-title-line"></div>

                        <h2>
                            Shaheed Bhagat Singh Health <br/> and Education
                        </h2>

                        <div className="mobile-subtitle">
                            An autonomous Institute established under act 1882
                        </div>
                        <Link
                            to="https://soft.shaheedbhagatsinghhealthandeducation.com/student-apply"
                            className="admission-open-badge"
                            aria-label="Admission Open 15 Oct 2026"
                            title="Admission Open 15 Oct 2026"
                        >
                            <i className="fas fa-bullhorn" aria-hidden="true"></i>
                            <span className="admission-open-text">
                                <span>Admission Open</span>
                                <span>Stream 2</span>
                                <span>15 Oct 2026</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>


            {/* =====================================================
                CSS
            ===================================================== */}
            <style>
                {`
                /* ✅ FIX: Removed @import font to prevent render-blocking */

                * {
                    box-sizing: border-box;
                }

                .header-container {
                    width: 100%;
                    max-width: 1440px;
                    margin: 0 auto;
                    padding-left: 18px;
                    padding-right: 18px;
                }

                /* ... (Baaki saara CSS bilkul same rahega, maine isme koi change nahi kiya hai) ... */
                .header-top-bar { min-height: 64px; background: linear-gradient(90deg, #062a3c 0%, #083e59 100%); color: #ffffff; border-bottom: 1px solid rgba(255, 255, 255, 0.06); display: flex; align-items: center; }
                .header-top-bar .header-container { display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%; min-width: 0; }
                .top-left { display: flex; align-items: center; gap: 12px; flex: 1 1 auto; min-width: 0; overflow: hidden; }
                .top-contact-item { display: flex; align-items: center; gap: 8px; white-space: nowrap; flex-shrink: 0; }
                .top-contact-email { flex-shrink: 1; min-width: 0; overflow: hidden; }
                .top-contact-email .top-contact-text { min-width: 0; overflow: hidden; }
                .top-contact-icon { width: 28px; height: 28px; border-radius: 7px; background: rgba(255, 211, 61, 0.12); color: #ffd33d; display: flex; align-items: center; justify-content: center; font-size: 11px; flex-shrink: 0; }
                .top-contact-text { display: flex; flex-direction: column; gap: 1px; line-height: 1.15; }
                .top-contact-label { color: #9bb8cb; font-size: 9.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.4px; }
                .top-contact-value { color: #ffffff; font-size: 11.5px; font-weight: 600; letter-spacing: 0.1px; white-space: nowrap; }
                .top-contact-link { color: #ffffff; text-decoration: none; overflow: hidden; max-width: 360px; display: inline-block; transition: color 0.2s ease; }
                .top-contact-link:hover { color: #ffd33d; text-decoration: none; }
                .top-contact-divider { width: 1px; height: 26px; background: rgba(255, 255, 255, 0.12); flex-shrink: 0; }
                .top-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
                .top-nav-btn { display: inline-flex; align-items: center; justify-content: center; gap: 6px; min-height: 34px; padding: 6px 14px; border: 1px solid rgba(255, 255, 255, 0.18); border-radius: 7px; background: rgba(255, 255, 255, 0.06); color: #ffffff; text-decoration: none; font-size: 11.5px; font-weight: 600; letter-spacing: 0.2px; white-space: nowrap; transition: all 0.25s ease; cursor: pointer; }
                .top-nav-btn i { font-size: 11px; color: #ffd33d; transition: color 0.25s ease; }
                .top-nav-btn:hover { background: #ff6600; border-color: #ff6600; color: #ffffff; text-decoration: none; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(255, 102, 0, 0.35); }
                .top-nav-btn:hover i { color: #ffffff; }
                .top-nav-btn-login { background: #0a6a9c; border-color: #0a6a9c; }
                .top-nav-btn-login:hover { background: #ffd33d; border-color: #ffd33d; color: #062a3c; }
                .top-nav-btn-login:hover i { color: #062a3c; }
                .top-dropdown { position: relative; display: inline-block; }
                .dropdown-toggle-btn { padding-right: 10px; }
                .dropdown-arrow { font-size: 8px !important; margin-left: 2px; transition: transform 0.3s ease; }
                .top-dropdown:hover .dropdown-arrow { transform: rotate(180deg); }
                .top-dropdown-menu { position: absolute; top: 100%; right: 0; margin-top: 10px; background: #062a3c; border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 8px; min-width: 220px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4); opacity: 0; visibility: hidden; transform: translateY(10px); transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); z-index: 1050; padding: 6px 0; }
                .top-dropdown:hover .top-dropdown-menu { opacity: 1; visibility: visible; transform: translateY(0); }
                .top-dropdown-item { display: flex; align-items: center; gap: 10px; padding: 10px 18px; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 500; transition: all 0.2s ease; }
                .top-dropdown-item:hover { background: rgba(255, 255, 255, 0.1); color: #ffd33d; padding-left: 22px; text-decoration: none; }
                .top-dropdown-item i { color: #ffd33d; width: 16px; text-align: center; }
                .header-main { width: 100%; min-height: 126px; background: linear-gradient(135deg, #07567f 0%, #0a6a9c 100%); overflow: hidden; position: relative; }
                .header-main::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent); }
                .header-main-row { min-height: 126px; align-items: center; margin-left: 0; margin-right: 0; margin: 5px; }
                .header-logo-col { display: flex; align-items: center; justify-content: flex-start; }
                .header-logo { width: 100%; height: 105px; display: flex; align-items: center; justify-content: flex-start; }
                .header-logo a { width: 100%; height: 100%; display: flex; align-items: center; justify-content: flex-start; }
                .header-logo img { width: 140px; height: 145px; object-fit: contain; object-position: center; display: block; padding: 8px 12px; transition: transform 0.3s ease; }
                .header-title-col { display: flex; align-items: center; justify-content: center; min-width: 0; }
                .header-title { width: 100%; text-align: center; color: #ffffff; min-width: 0; overflow: hidden; }
                .header-title h1 { margin-top: 12px; margin-bottom: 0; color: #ffffff; font-size: 43px; line-height: 0.90; font-weight: 700; font-family: "Noto Sans Devanagari", "Mangal", Arial, sans-serif; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15); white-space: nowrap; }
                .header-title h2 { margin: 5px 0 0; color: #ffffff; font-size: 26px; line-height: 0.90; font-family: "Baskerville", "Times New Roman", Georgia, serif; font-weight: 750; letter-spacing: 0.2px; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15); white-space: nowrap; }
                .header-subtitle { margin-top: 5px; color: #000000; font-size: clamp(11px, 1.15vw, 15px); line-height: 1.2; font-weight: 800; white-space: nowrap; }
                .header-approved-col { display: flex; align-items: center; justify-content: flex-end; }
                .header-approved { width: 180px; height: 90px; display: flex; align-items: center; justify-content: center; background: #ffffff; border-radius: 8px; padding: 6px 10px; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12); overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; }
                .header-approved:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18); }
                .header-approved img { width: 100%; height: 100%; max-width: 175px; object-fit: contain; object-position: center; display: block; }
                .topbar-mobile { width: 100%; background: linear-gradient(135deg, #07567f 0%, #0a6a9c 100%); }
                .mobile-tools { width: 100%; min-height: 48px; background: linear-gradient(90deg, #062a3c 0%, #083e59 100%); display: flex; align-items: center; justify-content: center; gap: 8px; padding: 6px 8px; }
                .mobile-social { display: flex; flex-direction: row; flex-wrap: nowrap; align-items: center; justify-content: center; gap: 6px; width: 100%; }
                .mobile-logo-area { width: 100%; min-height: 125px; padding: 12px 14px; background: transparent; display: flex; align-items: center; justify-content: center; gap: 12px; }
                .mobile-logo-area > a, .mobile-logo-link { width: 90px; height: 90px; flex: 0 0 90px; display: flex; align-items: center; justify-content: center; }
                .mobile-logo-area > a img, .mobile-logo-link img { width: 100%; height: 100%; object-fit: contain; display: block; }
                .mobile-title { flex: 1; min-width: 0; text-align: left; color: #ffffff; overflow: visible; }
                .mobile-title h1 { margin: 0; color: #ffffff; font-family: "Noto Sans Devanagari", "Mangal", Arial, sans-serif; font-size: 17px; font-weight: 700; line-height: 1.25; white-space: normal; overflow-wrap: break-word; }
                .mobile-title-line { width: 45px; height: 2px; margin: 5px 0; background: #ffd33d; border-radius: 5px; }
                .mobile-title h2 { margin: 0; color: #ffffff; font-family: "Baskerville", "Times New Roman", Georgia, serif; font-size: 13px; font-weight: 700; line-height: 1.2; white-space: nowrap; letter-spacing: -0.15px; }
                .mobile-subtitle { margin-top: 4px; color: #000000; font-size: 9px; font-weight: 700; line-height: 1.25; white-space: normal; overflow-wrap: break-word; }
                @media (max-width: 767px) { .mobile-dropdown .top-dropdown-menu { right: auto; left: 0; min-width: 200px; } }
                @media (min-width: 992px) and (max-width: 1199px) { .header-container { padding-left: 12px; padding-right: 12px; } .top-contact-item { gap: 6px; } .top-contact-icon { width: 24px; height: 24px; font-size: 10px; } .top-contact-label { font-size: 8.5px; } .top-contact-value { font-size: 10px; } .top-contact-link { max-width: 170px; } .top-left { gap: 8px; } .top-contact-divider { height: 22px; } .top-nav-btn { padding: 5px 10px; font-size: 10px; gap: 4px; } .top-nav-btn i { font-size: 9.5px; } }
                @media (min-width: 768px) and (max-width: 991px) { .mobile-logo-area { min-height: 145px; padding: 15px 25px; gap: 22px; } .mobile-logo-area > a, .mobile-logo-link { width: 125px; height: 115px; flex-basis: 125px; } .mobile-title h1 { font-size: 23px; line-height: 1.25; } .mobile-title h2 { font-size: 20px; white-space: nowrap; } .mobile-subtitle { font-size: 12px; line-height: 1.3; } }
                @media (max-width: 767px) { .mobile-tools { min-height: 50px; gap: 6px; padding: 8px 8px; } .mobile-social { flex-direction: row; flex-wrap: nowrap; align-items: center; justify-content: center; gap: 6px; width: 100%; } .top-nav-btn { flex: 1 1 auto; min-width: 0; min-height: 40px; padding: 8px 10px; font-size: 11.5px; gap: 5px; border-radius: 8px; justify-content: center; } .top-nav-btn i { font-size: 12px; flex-shrink: 0; } .top-nav-btn span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0; } .top-nav-btn:hover { transform: none; box-shadow: none; background: rgba(255, 255, 255, 0.06); border-color: rgba(255, 255, 255, 0.18); color: #ffffff; } .top-nav-btn:hover i { color: #ffd33d; } .top-nav-btn:active { background: #ff6600; border-color: #ff6600; transform: scale(0.97); } .top-nav-btn:active i { color: #ffffff; } .mobile-logo-area { min-height: 125px; padding: 10px 12px; gap: 10px; } .mobile-logo-area > a, .mobile-logo-link { width: 90px; height: 90px; flex-basis: 90px; } .mobile-title h1 { font-size: 17px; line-height: 1.25; } .mobile-title h2 { font-size: 13px; line-height: 1.2; white-space: nowrap; } .mobile-subtitle { font-size: 9px; line-height: 1.25; } }
                @media (max-width: 480px) { .mobile-tools { min-height: 46px; gap: 5px; padding: 7px 6px; } .mobile-social { flex-direction: row; flex-wrap: nowrap; align-items: center; justify-content: center; gap: 5px; width: 100%; } .top-nav-btn { flex: 1 1 auto; min-width: 0; min-height: 38px; padding: 7px 5px; font-size: 10px; gap: 4px; border-radius: 8px; justify-content: center; } .top-nav-btn i { font-size: 11px; flex-shrink: 0; } .top-nav-btn span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0; } .mobile-logo-area { min-height: 120px; padding: 8px 8px; gap: 8px; } .mobile-logo-area > a, .mobile-logo-link { width: 78px; height: 78px; flex-basis: 78px; } .mobile-title h1 { font-size: 20px; line-height: 1.25; } .mobile-title h2 { font-size: 18px; line-height: 1.2; white-space: nowrap; letter-spacing: -0.25px; } .mobile-subtitle { margin-top: 3px; font-size: 10px; line-height: 1.25; } .mobile-title-line { width: 35px; height: 2px; margin: 4px 0; } }
                @media (max-width: 360px) { .mobile-tools { min-height: 42px; padding: 6px 4px; gap: 4px; } .mobile-social { flex-direction: row; flex-wrap: nowrap; align-items: center; justify-content: center; gap: 4px; width: 100%; } .top-nav-btn { flex: 1 1 auto; min-width: 0; min-height: 36px; padding: 6px 4px; font-size: 9px; gap: 3px; border-radius: 7px; justify-content: center; } .top-nav-btn i { font-size: 10px; flex-shrink: 0; } .top-nav-btn span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0; } }
                @media (min-width: 1400px) { .header-container { max-width: 1520px; } .header-title h1 { font-size: 43px; } .header-title h2 { font-size: 26px; } .header-subtitle { font-size: 15px; } }
                .admission-open-badge { display: inline-flex; align-items: center; justify-content: center; gap: 12px; padding: 12px 28px; border-radius: 14px; background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%); color: #ffffff; text-decoration: none; white-space: nowrap; border: 1px solid rgba(255, 255, 255, 0.35); box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35), 0 0 0 0 rgba(16, 185, 129, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.15); animation: admissionPulse 2s ease-in-out infinite; transition: all 0.3s ease; position: relative; overflow: hidden; }
                .admission-open-badge::before { content: ""; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent); animation: admissionShine 3s ease-in-out infinite; pointer-events: none; }
                .admission-open-badge i { font-size: 24px; color: #fef3c7; flex-shrink: 0; filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.25)); position: relative; z-index: 2; animation: admissionRing 2s ease-in-out infinite; }
                .admission-open-text { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; line-height: 1.2; text-align: center; position: relative; z-index: 2; }
                .admission-open-text span { display: block; white-space: nowrap; text-align: center; }
                .admission-open-text span:first-child { font-size: 13px; font-weight: 800; letter-spacing: 0.4px; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15); }
                .admission-open-text span:nth-child(2) { font-size: 10.5px; font-weight: 600; opacity: 0.9; letter-spacing: 0.3px; text-transform: uppercase; }
                .admission-open-text span:last-child { font-size: 13px; font-weight: 900; color: #fef3c7; letter-spacing: 0.6px; text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25); }
                .admission-open-badge:hover { text-decoration: none; color: #ffffff; transform: translateY(-3px) scale(1.02); box-shadow: 0 10px 25px rgba(16, 185, 129, 0.5), 0 0 0 0 rgba(16, 185, 129, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.2); }
                .admission-open-badge:active { transform: translateY(-1px) scale(0.98); }
                @keyframes admissionPulse { 0% { box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35), 0 0 0 0 rgba(16, 185, 129, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.15); } 50% { box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35), 0 0 0 10px rgba(16, 185, 129, 0), inset 0 1px 0 rgba(255, 255, 255, 0.15); } 100% { box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35), 0 0 0 0 rgba(16, 185, 129, 0), inset 0 1px 0 rgba(255, 255, 255, 0.15); } }
                @keyframes admissionShine { 0% { left: -100%; } 50%, 100% { left: 100%; } }
                @keyframes admissionRing { 0%, 100% { transform: rotate(0deg); } 10%, 30% { transform: rotate(-12deg); } 20%, 40% { transform: rotate(12deg); } 50% { transform: rotate(0deg); } }
                @media (min-width: 768px) and (max-width: 991px) { .admission-open-badge { padding: 11px 24px; gap: 10px; border-radius: 12px; } .admission-open-badge i { font-size: 21px; } .admission-open-text span:first-child { font-size: 12px; } .admission-open-text span:nth-child(2) { font-size: 12px; } .admission-open-text span:last-child { font-size: 12px; } }
                @media (max-width: 767px) { .admission-open-badge { padding: 10px 20px; gap: 10px; border-radius: 12px; margin-top: 6px; } .admission-open-badge i { font-size: 19px; } .admission-open-text span:first-child { font-size: 11px; } .admission-open-text span:nth-child(2) { font-size: 9px; } .admission-open-text span:last-child { font-size: 11px; } .admission-open-badge:hover { transform: none; color: #ffffff; } .admission-open-badge:active { transform: scale(0.97); } }
                @media (max-width: 480px) { .admission-open-badge { padding: 8px 16px; gap: 8px; border-radius: 10px; margin-left: 120px; } .admission-open-badge i { font-size: 17px; } .admission-open-text span:first-child { font-size: 10px; } .admission-open-text span:nth-child(2) { font-size: 8.5px; } .admission-open-text span:last-child { font-size: 10px; } }
                @media (max-width: 360px) { .admission-open-badge { padding: 7px 14px; gap: 7px; border-radius: 10px; } .admission-open-badge i { font-size: 15px; } .admission-open-text span:first-child { font-size: 9.5px; } .admission-open-text span:nth-child(2) { font-size: 8px; } .admission-open-text span:last-child { font-size: 9.5px; } }
                `}
            </style>
        </>
    );
}

export default TopBar;