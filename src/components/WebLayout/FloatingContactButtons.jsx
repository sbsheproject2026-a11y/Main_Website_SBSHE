 import React, { useState, useRef, useEffect } from "react";

function FloatingContactButtons({ onEnquiryClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const [showCallMenu, setShowCallMenu] = useState(false);
  const [showWhatsappMenu, setShowWhatsappMenu] = useState(false);
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const [showAppMenu, setShowAppMenu] = useState(false);
  const [showEnquiryMenu, setShowEnquiryMenu] = useState(false);

  const wrapperRef = useRef(null);
  const callMenuRef = useRef(null);
  const waMenuRef = useRef(null);
  const socialMenuRef = useRef(null);
  const appMenuRef = useRef(null);
  const enquiryMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
        setShowCallMenu(false);
        setShowWhatsappMenu(false);
        setShowSocialMenu(false);
        setShowAppMenu(false);
        setShowEnquiryMenu(false);
        return;
      }
      if (callMenuRef.current && !callMenuRef.current.contains(e.target)) setShowCallMenu(false);
      if (waMenuRef.current && !waMenuRef.current.contains(e.target)) setShowWhatsappMenu(false);
      if (socialMenuRef.current && !socialMenuRef.current.contains(e.target)) setShowSocialMenu(false);
      if (appMenuRef.current && !appMenuRef.current.contains(e.target)) setShowAppMenu(false);
      if (enquiryMenuRef.current && !enquiryMenuRef.current.contains(e.target)) setShowEnquiryMenu(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const callNumbers = [
    { label: "Associate Support", number: "+917082013211" },
    { label: "Associate Support", number: "+917082013215" },
    { label: "Student Support", number: "+917082013213" },
  ];

  const whatsappNumbers = [
    { label: "Associate Support", number: "917082013211" },
    { label: "Associate Support", number: "917082013215" },
    { label: "Student Support", number: "917082013213" },
  ];

  const socialLinks = [
    { label: "Facebook", subtitle: "Follow on Facebook", url: "https://www.facebook.com/share/1Hb4vQDMov", icon: "facebook" },
    { label: "Instagram", subtitle: "Follow on Instagram", url: "https://www.instagram.com/sbsheofficial?utm_source=qr&stkn=Nmw0ZXNkOGwzMjlm", icon: "instagram" },
    { label: "YouTube", subtitle: "Subscribe on YouTube", url: "https://youtube.com/@sbshe-sm?si=tDUXjazfu4CpAfPe", icon: "youtube" },
    { label: "LinkedIn", subtitle: "Connect on LinkedIn", url: "https://www.linkedin.com/company/sbshe", icon: "linkedin" },
  ];

  const appLinks = [
    { label: "SBSHE SAATHI", subtitle: "Android App", url: "https://appweb.shaheedbhagatsinghhealthandeducation.com/download/app.apk", icon: "playstore" },
    { label: "VIDYAMRIT", subtitle: "Android App", url: "https://vidyaamritapp.shaheedbhagatsinghhealthandeducation.com/download/Vidyaamrit.apk", icon: "playstore" },
  ];

  const whatsappMessage = encodeURIComponent("Hello! I would like to know more about your courses.");

  const handleCallNumber = (number) => { window.location.href = `tel:${number}`; setShowCallMenu(false); };
  const handleWhatsappNumber = (number) => { window.open(`https://wa.me/${number}?text=${whatsappMessage}`, "_blank", "noopener,noreferrer"); setShowWhatsappMenu(false); };
  const handleSocialClick = (url) => { window.open(url, "_blank", "noopener,noreferrer"); setShowSocialMenu(false); };
  const handleAppClick = (url) => { window.open(url, "_blank", "noopener,noreferrer"); setShowAppMenu(false); };

  // =====================================================
  // ✅ ICONS (Added aria-hidden="true" to all SVGs)
  // =====================================================
  const WhatsAppIcon = () => (<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>);
  const CallIcon = () => (<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.01l-2.2 2.21z"/></svg>);
  const SocialIcon = () => (<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>);
  const AppIcon = () => (<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>);
  
  const EnquiryIcon = () => (
    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>
    </svg>
  );

  const FacebookIcon = () => (<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>);
  const InstagramIcon = () => (<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>);
  const YouTubeIcon = () => (<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>);
  const LinkedInIcon = () => (<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>);
  const PlayStoreIcon = () => (<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.635z"/></svg>);

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case "facebook": return <FacebookIcon />;
      case "instagram": return <InstagramIcon />;
      case "youtube": return <YouTubeIcon />;
      case "linkedin": return <LinkedInIcon />;
      default: return null;
    }
  };

  return (
    <>
      <style>{`
        .fcb-wrapper { 
            position: fixed; 
            right: 20px; 
            bottom: 90px; 
            z-index: 999999; 
            display: flex; 
            flex-direction: column; 
            gap: 12px; 
            align-items: flex-end; 
            margin-bottom: 0; 
            pointer-events: none; 
        }
        .fcb-wrapper > * { pointer-events: auto; }
        
        /* MAIN TOGGLE (+) */
        .fcb-main-toggle { position: relative; width: 60px; height: 60px; border-radius: 50%; border: 0; cursor: pointer; color: #fff; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #0a7bb5, #01507c); box-shadow: 0 10px 25px rgba(1, 80, 124, 0.4); transition: all 0.3s ease; z-index: 10; }
        .fcb-main-toggle:hover { transform: translateY(-3px) scale(1.05); box-shadow: 0 15px 35px rgba(1, 80, 124, 0.5); }
        .fcb-main-toggle i { font-size: 24px; transition: transform 0.3s ease; }
        .fcb-main-toggle.open i { transform: rotate(135deg); }
        .fcb-main-toggle::before { content: ""; position: absolute; inset: 0; border-radius: 50%; background: #0a7bb5; animation: fcbPulse 2s infinite; opacity: 0.6; z-index: -1; }
        @keyframes fcbPulse { 0% { transform: scale(1); opacity: 0.7; } 70% { transform: scale(1.5); opacity: 0; } 100% { transform: scale(1.5); opacity: 0; } }
        
        /* SUB BUTTONS (+) Menu */
        .fcb-sub-buttons { display: flex; flex-direction: column; gap: 12px; align-items: flex-end; max-height: 0; opacity: 0; overflow: hidden; transition: max-height 0.4s ease, opacity 0.3s ease; pointer-events: none; }
        .fcb-sub-buttons.show { max-height: 500px; opacity: 1; pointer-events: auto; overflow: visible; }
        
        .fcb-menu-wrap { position: relative; }
        .fcb-btn { position: relative; width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; text-decoration: none; cursor: pointer; border: 0; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18); transition: all 0.25s ease; }
        .fcb-btn:hover { transform: translateY(-4px) scale(1.05); box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25); color: #fff; }
        .fcb-btn svg { width: 26px; height: 26px; fill: currentColor; }
        
        .fcb-whatsapp { background: linear-gradient(135deg, #25d366, #1da851); }
        .fcb-call { background: linear-gradient(135deg, #0a7bb5, #01507c); }
        .fcb-social { background: linear-gradient(135deg, #8b5cf6, #6d28d9); }
        .fcb-app { background: linear-gradient(135deg, #f59e0b, #d97706); }
        
        /* ✅ Standalone Enquiry Button */
        .fcb-enquiry-standalone { background: linear-gradient(135deg, #10b981, #059669); animation: fcbEnquiryPulse 2s infinite; }
        @keyframes fcbEnquiryPulse { 0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5); } 70% { box-shadow: 0 0 0 12px rgba(16, 185, 129, 0); } 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); } }

        /* Tooltips */
        .fcb-tooltip { position: absolute; right: 70px; top: 50%; transform: translateY(-50%); background: #1e293b; color: #fff; padding: 6px 12px; border-radius: 8px; font-size: 12px; font-weight: 600; white-space: nowrap; opacity: 0; pointer-events: none; transition: all 0.2s ease; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }
        .fcb-tooltip::after { content: ""; position: absolute; right: -5px; top: 50%; transform: translateY(-50%); border: 5px solid transparent; border-left-color: #1e293b; }
        .fcb-btn:hover .fcb-tooltip { opacity: 1; right: 68px; }
        
        /* Popup Menus */
        .fcb-menu { position: absolute; right: 70px; bottom: -40px; top: auto; background: #fff; border-radius: 14px; box-shadow: 0 12px 40px rgba(15, 23, 42, 0.22); padding: 12px; min-width: 280px; max-width: 320px; border: 1px solid #edf0f5; animation: fcbMenuIn 0.2s ease; z-index: 999999; max-height: calc(100vh - 180px); overflow-y: auto; }
        
        /* Enquiry popup position adjustment */
        .fcb-enquiry-menu { bottom: 0; }

        @keyframes fcbMenuIn { from { opacity: 0; transform: translateY(10px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        
        .fcb-menu-title { font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; padding: 4px 6px 10px; display: flex; align-items: center; gap: 7px; }
        .fcb-menu-title i { font-size: 13px; }
        .fcb-menu-title.wa i { color: #25d366; }
        .fcb-menu-title.call i { color: #0a7bb5; }
        .fcb-menu-title.social i { color: #8b5cf6; }
        .fcb-menu-title.app i { color: #f59e0b; }
        .fcb-menu-title.enquiry i { color: #10b981; }

        .fcb-number-btn { display: flex; align-items: center; gap: 11px; width: 100%; padding: 10px 12px; border-radius: 10px; background: #f8fafc; color: #1e293b; font-size: 13px; font-weight: 600; text-decoration: none; cursor: pointer; border: 0; text-align: left; transition: all 0.18s ease; margin-bottom: 6px; }
        .fcb-number-btn:last-child { margin-bottom: 0; }
        
        .fcb-number-btn.wa:hover { background: linear-gradient(135deg, #25d366, #1da851); color: #fff; transform: translateX(3px); }
        .fcb-number-btn.call:hover { background: linear-gradient(135deg, #0a7bb5, #01507c); color: #fff; transform: translateX(3px); }
        .fcb-number-btn.social:hover { background: linear-gradient(135deg, #8b5cf6, #6d28d9); color: #fff; transform: translateX(3px); }
        .fcb-number-btn.app:hover { background: linear-gradient(135deg, #f59e0b, #d97706); color: #fff; transform: translateX(3px); }
        .fcb-number-btn.enquiry:hover { background: linear-gradient(135deg, #10b981, #059669); color: #fff; transform: translateX(3px); }

        .fcb-number-btn-icon { width: 32px; height: 32px; min-width: 32px; display: flex; align-items: center; justify-content: center; border-radius: 8px; transition: all 0.18s ease; }
        
        .fcb-number-btn.wa .fcb-number-btn-icon { background: #dcfce7; color: #16a34a; }
        .fcb-number-btn.call .fcb-number-btn-icon { background: #e0f2fe; color: #0a7bb5; }
        .fcb-number-btn.social .fcb-number-btn-icon { background: #f3e8ff; color: #8b5cf6; }
        .fcb-number-btn.app .fcb-number-btn-icon { background: #fef3c7; color: #d97706; }
        .fcb-number-btn.enquiry .fcb-number-btn-icon { background: #d1fae5; color: #10b981; }

        .fcb-number-btn-icon svg { width: 16px; height: 16px; fill: currentColor; }
        .fcb-number-btn:hover .fcb-number-btn-icon { background: rgba(255, 255, 255, 0.2); color: #fff; }
        .fcb-number-info { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
        .fcb-number-label { font-size: 11px; color: #64748b; font-weight: 600; }
        .fcb-number-btn:hover .fcb-number-label { color: rgba(255, 255, 255, 0.85); }
        .fcb-number-value { font-size: 13px; font-weight: 700; color: #1e293b; }
        .fcb-number-btn:hover .fcb-number-value { color: #fff; }

        @media (max-width: 768px) {
          .fcb-wrapper { right: 14px; bottom: 80px; gap: 10px; }
          .fcb-main-toggle { width: 54px; height: 54px; }
          .fcb-main-toggle i { font-size: 20px; }
          .fcb-btn { width: 50px; height: 50px; }
          .fcb-btn svg { width: 22px; height: 22px; }
          .fcb-tooltip { display: none; }
          .fcb-main-toggle::before { animation: none; }
          .fcb-enquiry-standalone { animation: none; }
          .fcb-menu { right: 0; bottom: 65px; top: auto; min-width: 260px; max-width: 90vw; max-height: 70vh; }
        }
      `}</style>

      <div className="fcb-wrapper" ref={wrapperRef}>

        {/* 1. EXPANDABLE MENU (Only Call, WA, Social, App) */}
        <div className={`fcb-sub-buttons ${isOpen ? "show" : ""}`}>
          
          <div className="fcb-menu-wrap" ref={socialMenuRef}>
            <button type="button" className="fcb-btn fcb-social" onClick={() => { setShowSocialMenu((prev) => !prev); setShowAppMenu(false); setShowCallMenu(false); setShowWhatsappMenu(false); setShowEnquiryMenu(false); }} aria-label="Follow us on social media" title="Follow Us">
              <SocialIcon />
              <span className="fcb-tooltip">Follow Us</span>
            </button>
            {showSocialMenu && (
              <div className="fcb-menu">
                <div className="fcb-menu-title social"><i className="bi bi-share-fill" aria-hidden="true"></i> Follow Us</div>
                {socialLinks.map((item, index) => (
                  <button key={index} type="button" className="fcb-number-btn social" onClick={() => handleSocialClick(item.url)} aria-label={`${item.subtitle}`}>
                    <div className="fcb-number-btn-icon">{getSocialIcon(item.icon)}</div>
                    <div className="fcb-number-info">
                      <span className="fcb-number-label">{item.subtitle}</span>
                      <span className="fcb-number-value">{item.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="fcb-menu-wrap" ref={appMenuRef}>
            <button type="button" className="fcb-btn fcb-app" onClick={() => { setShowAppMenu((prev) => !prev); setShowSocialMenu(false); setShowCallMenu(false); setShowWhatsappMenu(false); setShowEnquiryMenu(false); }} aria-label="Download our mobile app" title="Download App">
              <AppIcon />
              <span className="fcb-tooltip">Download App</span>
            </button>
            {showAppMenu && (
              <div className="fcb-menu">
                <div className="fcb-menu-title app"><i className="bi bi-phone-fill" aria-hidden="true"></i> Download Our App</div>
                {appLinks.map((item, index) => (
                  <button key={index} type="button" className="fcb-number-btn app" onClick={() => handleAppClick(item.url)} aria-label={`Download ${item.label}`}>
                    <div className="fcb-number-btn-icon"><PlayStoreIcon /></div>
                    <div className="fcb-number-info">
                      <span className="fcb-number-label">{item.subtitle}</span>
                      <span className="fcb-number-value">{item.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="fcb-menu-wrap" ref={waMenuRef}>
            <button type="button" className="fcb-btn fcb-whatsapp" onClick={() => { setShowWhatsappMenu((prev) => !prev); setShowSocialMenu(false); setShowAppMenu(false); setShowCallMenu(false); setShowEnquiryMenu(false); }} aria-label="Chat with us on WhatsApp" title="Chat on WhatsApp">
              <WhatsAppIcon />
              <span className="fcb-tooltip">Chat on WhatsApp</span>
            </button>
            {showWhatsappMenu && (
              <div className="fcb-menu">
                <div className="fcb-menu-title wa"><i className="bi bi-whatsapp" aria-hidden="true"></i> WhatsApp Support</div>
                {whatsappNumbers.map((item, index) => (
                  <button key={index} type="button" className="fcb-number-btn wa" onClick={() => handleWhatsappNumber(item.number)} aria-label={`Chat on WhatsApp with ${item.label}`}>
                    <div className="fcb-number-btn-icon"><WhatsAppIcon /></div>
                    <div className="fcb-number-info">
                      <span className="fcb-number-label">{item.label}</span>
                      <span className="fcb-number-value">+{item.number}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="fcb-menu-wrap" ref={callMenuRef}>
            <button type="button" className="fcb-btn fcb-call" onClick={() => { setShowCallMenu((prev) => !prev); setShowSocialMenu(false); setShowAppMenu(false); setShowWhatsappMenu(false); setShowEnquiryMenu(false); }} aria-label="Call our support team" title="Call Us Now">
              <CallIcon />
              <span className="fcb-tooltip">Call Us Now</span>
            </button>
            {showCallMenu && (
              <div className="fcb-menu">
                <div className="fcb-menu-title call"><i className="bi bi-headset" aria-hidden="true"></i> Contact Support</div>
                {callNumbers.map((item, index) => (
                  <button key={index} type="button" className="fcb-number-btn call" onClick={() => handleCallNumber(item.number)} aria-label={`Call ${item.label}`}>
                    <div className="fcb-number-btn-icon"><CallIcon /></div>
                    <div className="fcb-number-info">
                      <span className="fcb-number-label">{item.label}</span>
                      <span className="fcb-number-value">{item.number}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* =======================================================
            2. STANDALONE ENQUIRY BUTTON (Hamesha bahar dikhega)
            ======================================================= */}
        <div className="fcb-menu-wrap" ref={enquiryMenuRef}>
          <button
            type="button"
            className="fcb-btn fcb-enquiry-standalone"
            onClick={() => {
              setShowEnquiryMenu((prev) => !prev);
              setIsOpen(false); 
              setShowSocialMenu(false);
              setShowAppMenu(false);
              setShowCallMenu(false);
              setShowWhatsappMenu(false);
            }}
            aria-label="Open enquiry form"
            title="Enquiry"
          >
            <EnquiryIcon />
            <span className="fcb-tooltip">Enquiry Now</span>
          </button>

          {showEnquiryMenu && (
            <div className="fcb-menu fcb-enquiry-menu">
              <div className="fcb-menu-title enquiry">
                <i className="bi bi-question-circle-fill" aria-hidden="true"></i>
                Select Enquiry Type
              </div>

              <button
                type="button"
                className="fcb-number-btn enquiry"
                onClick={() => {
                  onEnquiryClick("student");
                  setShowEnquiryMenu(false);
                }}
                aria-label="Student Enquiry"
              >
                <div className="fcb-number-btn-icon" aria-hidden="true">🎓</div>
                <div className="fcb-number-info">
                  <span className="fcb-number-value">Student Enquiry</span>
                </div>
              </button>

              <button
                type="button"
                className="fcb-number-btn enquiry"
                onClick={() => {
                  onEnquiryClick("franchise");
                  setShowEnquiryMenu(false);
                }}
                aria-label="Franchise Enquiry"
              >
                <div className="fcb-number-btn-icon" aria-hidden="true">🏢</div>
                <div className="fcb-number-info">
                  <span className="fcb-number-value">Franchise Enquiry</span>
                </div>
              </button>
            </div>
          )}
        </div>

        {/* 3. MAIN TOGGLE BUTTON (+) */}
        <button
          type="button"
          className={`fcb-main-toggle ${isOpen ? "open" : ""}`}
          onClick={() => {
            setIsOpen((prev) => !prev);
            setShowEnquiryMenu(false); 
            
            if (isOpen) {
              setShowCallMenu(false);
              setShowWhatsappMenu(false);
              setShowSocialMenu(false);
              setShowAppMenu(false);
            }
          }}
          aria-label="Open contact options"
          title="Contact Options"
        >
          <i className="fas fa-plus" aria-hidden="true"></i>
        </button>

      </div>
    </>
  );
}

export default FloatingContactButtons;