 import React from "react";

function SocialAppLinks() {
  // =====================================================
  // ✅ SOCIAL MEDIA LINKS
  // =====================================================
  const socialLinks = [
    {
      name: "Facebook",
      subtitle: "Follow us on Facebook",
      url: "https://www.facebook.com/share/1Hb4vQDMov",
      icon: "facebook",
      gradient: "linear-gradient(135deg, #1877f2 0%, #0a5dc2 100%)",
      glow: "rgba(24, 119, 242, 0.35)",
    },
    {
      name: "Instagram",
      subtitle: "Follow us on Instagram",
      url: "https://www.instagram.com/sbsheofficial",
      icon: "instagram",
      gradient: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
      glow: "rgba(220, 39, 67, 0.35)",
    },
    {
      name: "YouTube",
      subtitle: "Subscribe on YouTube",
      url: "https://youtube.com/@sbshe-sm",
      icon: "youtube",
      gradient: "linear-gradient(135deg, #ff0000 0%, #cc0000 100%)",
      glow: "rgba(255, 0, 0, 0.35)",
    },
    {
      name: "LinkedIn",
      subtitle: "Connect on LinkedIn",
      url: "https://www.linkedin.com/company/sbshe",
      icon: "linkedin",
      gradient: "linear-gradient(135deg, #0077b5 0%, #005885 100%)",
      glow: "rgba(0, 119, 181, 0.35)",
    },
  ];

  // =====================================================
  // ✅ APP LINKS
  // =====================================================
  const appLinks = [
    {
      name: "SBSHE SAATHI",
      url: "https://appweb.shaheedbhagatsinghhealthandeducation.com/download/app.apk",
      image: "/assets/img/Logo.png",
      gradient: "linear-gradient(135deg, #3ddc84 0%, #0d8f4e 100%)",
      glow: "rgba(61, 220, 132, 0.35)",
    },
    {
      name: "VIDYAMRIT",
      url: "https://vidyaamritapp.shaheedbhagatsinghhealthandeducation.com/download/Vidyaamrit.apk",
      image: "/assets/img/unnamed.png",
      gradient: "linear-gradient(135deg, #3ddc84 0%, #0d8f4e 100%)",
      glow: "rgba(61, 220, 132, 0.35)",
    },
  ];

  // =====================================================
  // ✅ ICONS
  // =====================================================
  const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );

  const YouTubeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  const AndroidIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="45" height="45">
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
    </svg>
  );

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case "facebook": return <FacebookIcon />;
      case "instagram": return <InstagramIcon />;
      case "youtube": return <YouTubeIcon />;
      case "linkedin": return <LinkedInIcon />;
      default: return null;
    }
  };

  const handleOpen = (url) => {
    if (url === "#") return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="sa-links-section">

        <div className="sa-container">

          <div className="sa-heading">
            <span className="sa-heading-line"></span>
            <h2>Download Our Apps</h2>
            <span className="sa-heading-line"></span>
          </div>


          


          {/* APPS — Sirf Image + Name */}
          <div className="sa-section-block">

            <div className="sa-block-title">
              <span> </span>
            </div>

            <div className="sa-cards-grid sa-app-grid">
              {appLinks.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  className="sa-card sa-card-vertical"
                  onClick={() => handleOpen(item.url)}
                  style={{
                    "--sa-gradient": item.gradient,
                    "--sa-glow": item.glow,
                  }}
                >
                  {/* IMAGE UPAR */}
                  <div className="sa-card-image-box">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="sa-card-image"
                      />
                    ) : (
                      <div className="sa-card-image-placeholder">
                        <AndroidIcon />
                      </div>
                    )}
                  </div>

                  {/* NAME NEECHE */}
                  <span className="sa-card-app-name">{item.name}</span>

                </button>
              ))}
            </div>

          </div>

        </div>

      </section>
      <section className="sa-links-section">

        <div className="sa-container">

          <div className="sa-heading">
            <span className="sa-heading-line"></span>
            <h2>Connect With Us</h2>
            <span className="sa-heading-line"></span>
          </div>


          {/* SOCIAL MEDIA */}
          <div className="sa-section-block">

            <div className="sa-block-title">
              <span>Social Media</span>
            </div>

            <div className="sa-cards-grid sa-social-grid">
              {socialLinks.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  className="sa-card sa-card-horizontal"
                  onClick={() => handleOpen(item.url)}
                  style={{
                    "--sa-gradient": item.gradient,
                    "--sa-glow": item.glow,
                  }}
                >
                  <div className="sa-card-icon">
                    {getSocialIcon(item.icon)}
                  </div>

                  <div className="sa-card-info">
                    <span className="sa-card-name">{item.name}</span>
                    <span className="sa-card-subtitle">{item.subtitle}</span>
                  </div>

                  <div className="sa-card-arrow">
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </button>
              ))}
            </div>

          </div>


        

        </div>

      </section>


      <style>
        {`
          /* =====================================================
             SECTION
          ====================================================== */

          .sa-links-section {
            position: relative;
            padding: 60px 0;
            background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #fff8f2 100%);
            overflow: hidden;
          }

          .sa-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          /* HEADING */
          .sa-heading {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            margin-bottom: 40px;
          }

          .sa-heading-line {
            width: 55px;
            height: 3px;
            border-radius: 10px;
            background: linear-gradient(90deg, #07567f, #ff6600);
          }

          .sa-heading h2 {
            margin: 0;
            color: #063d59;
            font-size: 32px;
            font-weight: 800;
            letter-spacing: -0.5px;
            font-family: "Baskerville", "Times New Roman", Georgia, serif;
          }

          /* BLOCK TITLE */
          .sa-section-block {
            margin-bottom: 40px;
          }

          .sa-section-block:last-child {
            margin-bottom: 0;
          }

          .sa-block-title {
            margin-bottom: 16px;
            padding-bottom: 10px;
            border-bottom: 2px solid #edf0f5;
          }

          .sa-block-title span {
            color: #063d59;
            font-size: 17px;
            font-weight: 800;
            letter-spacing: 0.3px;
            text-transform: uppercase;
          }

          /* GRID */
          .sa-cards-grid {
            display: grid;
            gap: 16px;
          }

          .sa-social-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .sa-app-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 700px;
            margin: 0 auto;
            gap: 24px;
          }

          /* BASE CARD */
          .sa-card {
            position: relative;
            background: #ffffff;
            border: 1px solid #edf0f5;
            border-radius: 16px;
            cursor: pointer;
            text-align: left;
            font-family: inherit;
            overflow: hidden;
            box-shadow:
              0 4px 14px rgba(15, 23, 42, 0.06),
              0 1px 2px rgba(15, 23, 42, 0.04);
            transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .sa-card:hover {
            transform: translateY(-4px);
            border-color: transparent;
            box-shadow:
              0 12px 30px var(--sa-glow),
              0 4px 10px rgba(15, 23, 42, 0.08);
          }

          /* HORIZONTAL (SOCIAL) */
          .sa-card-horizontal {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 18px;
          }

          .sa-card-icon {
            width: 52px;
            height: 52px;
            min-width: 52px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            background: var(--sa-gradient);
            box-shadow: 0 4px 12px var(--sa-glow);
            transition: transform 0.28s ease;
          }

          .sa-card-icon svg {
            fill: currentColor;
          }

          .sa-card:hover .sa-card-icon {
            transform: scale(1.08) rotate(-5deg);
          }

          .sa-card-info {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 3px;
            min-width: 0;
          }

          .sa-card-name {
            color: #1c2430;
            font-size: 15px;
            font-weight: 800;
          }

          .sa-card-subtitle {
            color: #7a8794;
            font-size: 12px;
            font-weight: 500;
            line-height: 1.35;
          }

          .sa-card-arrow {
            width: 32px;
            height: 32px;
            min-width: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f1f5f9;
            color: #64748b;
            transition: all 0.28s ease;
          }

          .sa-card-arrow i {
            font-size: 14px;
          }

          .sa-card:hover .sa-card-arrow {
            background: var(--sa-gradient);
            color: #ffffff;
            transform: translateX(3px);
          }

          /* VERTICAL (APPS) — SIRF IMAGE + NAME */
          .sa-card-vertical {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 24px 20px;
            text-align: center;
            gap: 16px;
          }

          /* Image box */
          .sa-card-image-box {
            width: 100%;
            height: 140px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f8fafc;
            border-radius: 14px;
            border: 1px solid #edf0f5;
            padding: 12px;
            overflow: hidden;
            transition: all 0.3s ease;
          }

          .sa-card-vertical:hover .sa-card-image-box {
            background: #ffffff;
            transform: scale(1.02);
          }

          .sa-card-image {
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: auto;
            object-fit: contain;
            display: block;
            transition: transform 0.4s ease;
          }

          .sa-card-vertical:hover .sa-card-image {
            transform: scale(1.06);
          }

          .sa-card-image-placeholder {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--sa-gradient);
            color: #ffffff;
            box-shadow: 0 6px 18px var(--sa-glow);
            transition: transform 0.3s ease;
          }

          .sa-card-vertical:hover .sa-card-image-placeholder {
            transform: scale(1.08) rotate(-5deg);
          }

          /* Name neeche */
          .sa-card-app-name {
            color: #1c2430;
            font-size: 17px;
            font-weight: 800;
            letter-spacing: -0.2px;
          }

          /* RESPONSIVE */
          @media (max-width: 991px) {
            .sa-social-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .sa-heading h2 {
              font-size: 26px;
            }
          }

          @media (max-width: 767px) {
            .sa-links-section {
              padding: 40px 0;
            }

            .sa-container {
              padding: 0 16px;
            }

            .sa-social-grid {
              grid-template-columns: 1fr;
            }

            .sa-app-grid {
              gap: 16px;
              max-width: 100%;
            }

            .sa-heading h2 {
              font-size: 22px;
            }

            .sa-heading-line {
              width: 40px;
            }

            .sa-block-title span {
              font-size: 15px;
            }

            .sa-card-horizontal {
              padding: 15px 16px;
              gap: 12px;
            }

            .sa-card-icon {
              width: 46px;
              height: 46px;
              min-width: 46px;
            }

            .sa-card-vertical {
              padding: 20px 16px;
            }

            .sa-card-image-box {
              height: 120px;
            }

            .sa-card-app-name {
              font-size: 15px;
            }
          }

          @media (max-width: 480px) {
            .sa-heading h2 {
              font-size: 19px;
            }

            .sa-heading-line {
              width: 30px;
            }

            .sa-card-horizontal {
              padding: 13px 14px;
              gap: 11px;
            }

            .sa-card-icon {
              width: 42px;
              height: 42px;
              min-width: 42px;
            }

            .sa-card-arrow {
              width: 28px;
              height: 28px;
              min-width: 28px;
            }

            .sa-card-image-box {
              height: 100px;
              padding: 8px;
            }

            .sa-card-app-name {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  );
}

export default SocialAppLinks;