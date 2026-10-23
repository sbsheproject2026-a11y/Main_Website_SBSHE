import{r as e}from"./rolldown-runtime-hePW80VL.js";import{t}from"./api-C6mtWg-S.js";import{_ as n,d as r,l as i,u as a}from"./index-Dlx9wpcq.js";var o=e(n(),1),s=a();function c(){let[e,n]=(0,o.useState)([]);(0,o.useEffect)(()=>{a()},[]);let a=async()=>{try{let[e,t]=await Promise.all([i(1145),i(1151)]),r=[...e||[],...t||[]].filter(e=>e.isActive===1);n(r)}catch(e){console.log(`Page data error:`,e),n([])}},c=(e,t=100)=>{if(!e||typeof document>`u`)return{html:e||``,isTruncated:!1};try{let n=new DOMParser().parseFromString(e,`text/html`),r=0,i=!1,a=e=>{if(i)return null;if(e.nodeType===Node.TEXT_NODE){let n=e.textContent.split(/(\s+)/),a=``;for(let e of n)if(e.trim()===``)(a.length>0||r>0)&&(a+=e);else if(r<t)a+=e,r++;else{i=!0;break}return a?document.createTextNode(a):null}if(e.nodeType===Node.ELEMENT_NODE){if([`SCRIPT`,`STYLE`,`NOSCRIPT`].includes(e.tagName))return null;let t=e.cloneNode(!1),n=!1;for(let r of e.childNodes){let e=a(r);if(e&&(t.appendChild(e),n=!0),i&&!e)break}return n||[`BR`,`IMG`,`HR`].includes(e.tagName)?t:null}return null},o=document.createElement(`div`);for(let e of n.body.childNodes){let t=a(e);if(t&&o.appendChild(t),i)break}let s=e=>{let t=Array.from(e.children);for(let e of t)s(e),e.children.length===0&&e.textContent.trim()===``&&![`BR`,`IMG`,`HR`].includes(e.tagName)&&e.remove()};return s(o),{html:o.innerHTML,isTruncated:i}}catch(t){return console.error(`Error truncating HTML`,t),{html:e,isTruncated:!1}}},l=e=>e.productTypeId===1145?`/about/chairman-message`:e.productTypeId===1151?`/about/intro-shaheed-bhagat-singh`:`/about/${e.slug||e.menu_slug||``}`;return!e||e.length===0?null:(0,s.jsxs)(s.Fragment,{children:[e.map((e,n)=>{let i=e.productCategoryDocuments?.[0]?.fileupload||``,a=i?i.startsWith(`http`)?i:`${t}${i.startsWith(`/`)?``:`/`}${i}`:``,o=a&&/\.(jpeg|jpg|gif|png|webp|svg)(\?.*)?$/i.test(a),u=l(e),{html:d,isTruncated:f}=c(e.descrption,100);return(0,s.jsxs)(`section`,{className:`why-choose-section`,children:[(0,s.jsx)(`div`,{className:`why-bg-circle why-bg-circle-one`}),(0,s.jsx)(`div`,{className:`why-bg-circle why-bg-circle-two`}),(0,s.jsx)(`div`,{className:`why-choose-container`,children:(0,s.jsxs)(`div`,{className:o?`why-choose-row`:`why-choose-row why-choose-row-no-image`,children:[o&&(0,s.jsx)(`div`,{className:`why-choose-image-col`,children:(0,s.jsxs)(`div`,{className:`why-choose-image-wrapper`,children:[(0,s.jsx)(`span`,{className:`image-decoration decoration-one`}),(0,s.jsx)(`span`,{className:`image-decoration decoration-two`}),(0,s.jsx)(`span`,{className:`image-dots image-dots-one`}),(0,s.jsx)(`span`,{className:`image-dots image-dots-two`}),(0,s.jsx)(`img`,{src:a,alt:e.name||`Shaheed Bhagat Singh Health and Education`,className:`why-choose-image`,loading:`lazy`,width:`480`,height:`430`,onError:e=>{e.currentTarget.style.display=`none`}})]})}),(0,s.jsx)(`div`,{className:`why-choose-content-col`,children:(0,s.jsxs)(`div`,{className:`why-choose-content`,children:[(0,s.jsxs)(`div`,{className:`section-label`,children:[(0,s.jsx)(`span`,{className:`label-line`}),(0,s.jsx)(`span`,{className:`label-text`,children:e.productType||``})]}),(0,s.jsx)(`h2`,{className:`why-choose-title`,children:e.name}),(0,s.jsxs)(`div`,{className:`heading-decoration`,children:[(0,s.jsx)(`span`,{className:`heading-dot`}),(0,s.jsx)(`span`,{className:`heading-line`}),(0,s.jsx)(`span`,{className:`heading-dot`})]}),(0,s.jsx)(`div`,{className:`about-description`,dangerouslySetInnerHTML:{__html:d}}),f&&(0,s.jsxs)(r,{to:u,state:{id:e.productTypeId},className:`read-more-btn`,"aria-label":`Read more about ${e.name}`,children:[(0,s.jsx)(`span`,{children:`Read More`}),(0,s.jsx)(`i`,{className:`fas fa-arrow-right`})]}),(0,s.jsxs)(`div`,{className:`why-choose-footer`,children:[(0,s.jsx)(`span`,{className:`footer-line`}),(0,s.jsx)(`span`,{className:`footer-dot`}),(0,s.jsx)(`span`,{className:`footer-small-line`})]})]})})]})})]},e.id??n)}),(0,s.jsx)(`style`,{children:`
                /* =====================================================
                   MAIN SECTION
                ====================================================== */
                .why-choose-section {
                    width: 100%;
                    padding: 75px 0;
                    background: #ffffff;
                    position: relative;
                    overflow: hidden;
                }

                /* =====================================================
                   BACKGROUND CIRCLES
                ====================================================== */
                .why-bg-circle {
                    position: absolute;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 0;
                }

                .why-bg-circle-one {
                    width: 400px;
                    height: 400px;
                    right: -230px;
                    top: -200px;
                    background: rgba(7, 86, 127, 0.035);
                }

                .why-bg-circle-two {
                    width: 300px;
                    height: 300px;
                    left: -190px;
                    bottom: -170px;
                    background: rgba(255, 211, 61, 0.045);
                }

                /* =====================================================
                   CONTAINER
                ====================================================== */
                .why-choose-container {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding-left: 15px;
                    padding-right: 15px;
                    box-sizing: border-box;
                    position: relative;
                    z-index: 2;
                }

                /* =====================================================
                   ROW — 2 Columns (image + content)
                ====================================================== */
                .why-choose-row {
                    width: 100%;
                    display: grid;
                    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
                    align-items: center;
                    gap: 70px;
                }

                .why-choose-row-no-image {
                    grid-template-columns: 1fr;
                    gap: 0;
                    justify-items: start;
                }

                .why-choose-row-no-image .why-choose-content-col {
                    max-width: 100%;
                    width: 100%;
                    text-align: left;
                }

                .why-choose-row-no-image .why-choose-content {
                    max-width: 100%;
                    text-align: left;
                }

                .why-choose-row-no-image .section-label,
                .why-choose-row-no-image .heading-decoration,
                .why-choose-row-no-image .why-choose-footer {
                    justify-content: flex-start;
                }

                /* =====================================================
                   IMAGE COLUMN
                ====================================================== */
                .why-choose-image-col {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .why-choose-image-wrapper {
                    position: relative;
                    width: 100%;
                    max-width: 500px;
                    min-height: 400px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 15px;
                    box-sizing: border-box;
                }

                .why-choose-image {
                    position: relative;
                    width: 100%;
                    max-width: 480px;
                    height: auto;
                    max-height: 430px;
                    display: block;
                    object-fit: contain;
                    object-position: center;
                    background: transparent;
                    border: none;
                    border-radius: 0;
                    box-shadow: none;
                    z-index: 3;
                    transition: transform 0.4s ease;
                }

                /* =====================================================
                   DECORATIONS
                ====================================================== */
                .image-decoration {
                    position: absolute;
                    pointer-events: none;
                    z-index: 1;
                }

                .decoration-one {
                    width: 95px;
                    height: 95px;
                    left: 0;
                    bottom: 10px;
                    background: #ffd33d;
                    border-radius: 50%;
                    opacity: 0.18;
                }

                .decoration-two {
                    width: 75px;
                    height: 75px;
                    right: 0;
                    top: 10px;
                    background: #07567f;
                    border-radius: 50%;
                    opacity: 0.12;
                }

                .image-dots {
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #07567f;
                    z-index: 1;
                    opacity: 0.35;
                    box-shadow: 18px 0 0 #07567f, 36px 0 0 #07567f, 0 18px 0 #07567f, 18px 18px 0 #07567f, 36px 18px 0 #07567f, 0 36px 0 #07567f, 18px 36px 0 #07567f, 36px 36px 0 #07567f;
                }

                .image-dots-one { left: 5px; top: 35px; }
                
                .image-dots-two {
                    right: 8px;
                    bottom: 45px;
                    background: #ffd33d;
                    box-shadow: 18px 0 0 #ffd33d, 36px 0 0 #ffd33d, 0 18px 0 #ffd33d, 18px 18px 0 #ffd33d, 36px 18px 0 #ffd33d, 0 36px 0 #ffd33d, 18px 36px 0 #ffd33d, 36px 36px 0 #ffd33d;
                }

                /* =====================================================
                   CONTENT COLUMN
                ====================================================== */
                .why-choose-content-col { width: 100%; }
                .why-choose-content { width: 100%; max-width: 650px; }

                /* =====================================================
                   LABELS & TITLE
                ====================================================== */
                .section-label {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 13px;
                }

                .label-line {
                    width: 35px;
                    height: 3px;
                    flex-shrink: 0;
                    background: #ffd33d;
                    border-radius: 20px;
                }

                .label-text {
                    color: #07567f;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 2.5px;
                    line-height: 1.4;
                    text-transform: uppercase;
                }

                .why-choose-title {
                    margin: 0;
                    color: #063d59;
                    font-size: 35px;
                    line-height: 1.25;
                    font-weight: 800;
                    letter-spacing: -0.3px;
                }

                .heading-decoration {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    margin: 15px 0 22px;
                }

                .heading-dot {
                    width: 6px;
                    height: 6px;
                    flex-shrink: 0;
                    background: #ffd33d;
                    border-radius: 50%;
                }

                .heading-line {
                    width: 65px;
                    height: 3px;
                    background: #07567f;
                    border-radius: 10px;
                }

                /* =====================================================
                   ✅ DESCRIPTION (DYNAMIC TYPOGRAPHY FIX)
                ====================================================== */
                .about-description {
                    color: #555d63;
                    font-size: 15px;
                    line-height: 1.85;
                    font-weight: 400;
                    overflow-wrap: break-word;
                }

                .about-description h1,
                .about-description h2,
                .about-description h3,
                .about-description h4,
                .about-description h5,
                .about-description h6 {
                    color: #063d59 !important;
                    font-weight: 700 !important;
                    line-height: 1.3 !important;
                    margin-top: 20px !important;
                    margin-bottom: 12px !important;
                    text-transform: none !important;
                }

                .about-description h1 { font-size: 24px !important; }
                .about-description h2 { font-size: 22px !important; }
                .about-description h3 { font-size: 20px !important; }
                .about-description h4,
                .about-description h5,
                .about-description h6 { font-size: 18px !important; }
                
                .about-description h1:first-child,
                .about-description h2:first-child,
                .about-description h3:first-child {
                    margin-top: 0 !important;
                }

                .about-description p {
                    margin-top: 0 !important;
                    margin-bottom: 16px !important;
                    text-align: justify !important; 
                    font-size: inherit !important; 
                    line-height: inherit !important;
                    color: inherit !important;
                }

                .about-description p:last-child {
                    margin-bottom: 0 !important;
                }

                .about-description ul,
                .about-description ol {
                    margin-top: 10px !important;
                    margin-bottom: 16px !important;
                    padding-left: 25px !important;
                }

                .about-description ul { list-style-type: disc !important; }
                .about-description ol { list-style-type: decimal !important; }

                .about-description li {
                    margin-bottom: 8px !important;
                    display: list-item !important; 
                    text-align: left !important;
                    font-size: inherit !important;
                    line-height: inherit !important;
                    color: inherit !important;
                }

                .about-description strong, 
                .about-description b {
                    color: #063d59 !important;
                    font-weight: 700 !important;
                }

                .about-description a {
                    color: #07567f !important;
                    font-weight: 600 !important;
                    text-decoration: underline !important;
                    transition: color 0.2s ease;
                }
                .about-description a:hover {
                    color: #ff6600 !important;
                }

                .about-description img {
                    max-width: 100% !important;
                    height: auto !important;
                    border-radius: 8px !important;
                    margin: 10px 0 !important;
                }

                /* =====================================================
                   READ MORE BUTTON
                ====================================================== */
                .read-more-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    margin-top: 22px;
                    padding: 9px 20px;
                    background: #07567f;
                    color: #ffffff;
                    border-radius: 30px;
                    font-size: 13px;
                    font-weight: 700;
                    letter-spacing: 0.3px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(7, 86, 127, 0.25);
                }

                .read-more-btn i {
                    font-size: 11px;
                    transition: transform 0.3s ease;
                }

                .read-more-btn:hover {
                    background: #ff6600;
                    color: #ffffff;
                    text-decoration: none;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(255, 102, 0, 0.35);
                }

                .read-more-btn:hover i {
                    transform: translateX(4px);
                }

                /* =====================================================
                   FOOTER DECORATION
                ====================================================== */
                .why-choose-footer {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    margin-top: 27px;
                }

                .footer-line {
                    width: 35px;
                    height: 4px;
                    background: #07567f;
                    border-radius: 10px;
                }

                .footer-dot {
                    width: 12px;
                    height: 4px;
                    background: #ffd33d;
                    border-radius: 10px;
                }

                .footer-small-line {
                    width: 5px;
                    height: 4px;
                    background: #07567f;
                    border-radius: 10px;
                }

                /* =====================================================
                   RESPONSIVE
                ====================================================== */
                @media (max-width: 1200px) {
                    .why-choose-section { padding: 65px 0; }
                    .why-choose-row { gap: 45px; }
                    .why-choose-image-wrapper { max-width: 460px; min-height: 350px; }
                    .why-choose-image { max-width: 440px; max-height: 390px; }
                    .why-choose-title { font-size: 31px; }
                    .about-description { font-size: 14px; line-height: 1.8; }
                }

                @media (max-width: 991px) {
                    .why-choose-section { padding: 55px 0; }
                    .why-choose-row { grid-template-columns: 1fr; gap: 40px; }
                    .why-choose-row-no-image .why-choose-content-col { max-width: 100%; }
                    .why-choose-image-wrapper { max-width: 620px; min-height: auto; padding: 10px; }
                    .why-choose-image { max-width: 560px; max-height: 400px; }
                    .decoration-one { width: 75px; height: 75px; left: 5px; bottom: 5px; }
                    .decoration-two { width: 65px; height: 65px; right: 5px; top: 5px; }
                    .why-choose-content { max-width: 100%; }
                    .why-choose-title { font-size: 30px; }
                }

                @media (max-width: 767px) {
                    .why-choose-section { padding: 42px 0; }
                    .why-choose-container { padding-left: 14px; padding-right: 14px; }
                    .why-choose-row { gap: 30px; }
                    
                    .why-choose-image-wrapper { width: 100%; max-width: 100%; min-height: auto; padding: 5px; }
                    .why-choose-image { width: 100%; max-width: 100%; max-height: 300px; object-fit: contain; }
                    
                    .decoration-one { width: 55px; height: 55px; left: 0; bottom: 5px; }
                    .decoration-two { width: 48px; height: 48px; right: 0; top: 5px; }
                    
                    .image-dots {
                        width: 4px; height: 4px;
                        box-shadow: 13px 0 0 #07567f, 26px 0 0 #07567f, 0 13px 0 #07567f, 13px 13px 0 #07567f, 26px 13px 0 #07567f, 0 26px 0 #07567f, 13px 26px 0 #07567f, 26px 26px 0 #07567f;
                    }
                    .image-dots-one { left: 2px; top: 25px; }
                    .image-dots-two {
                        right: 3px; bottom: 30px;
                        box-shadow: 13px 0 0 #ffd33d, 26px 0 0 #ffd33d, 0 13px 0 #ffd33d, 13px 13px 0 #ffd33d, 26px 13px 0 #ffd33d, 0 26px 0 #ffd33d, 13px 26px 0 #ffd33d, 26px 26px 0 #ffd33d;
                    }

                    .section-label { gap: 8px; margin-bottom: 10px; }
                    .label-line { width: 25px; height: 2px; }
                    .label-text { font-size: 10px; letter-spacing: 1.8px; }
                    .why-choose-title { font-size: 25px; line-height: 1.3; }
                    .heading-decoration { margin: 12px 0 17px; }
                    
                    .about-description { font-size: 14px; line-height: 1.75; }
                    .about-description p { margin-bottom: 13px !important; text-align: left !important; }
                    .about-description h1 { font-size: 20px !important; }
                    .about-description h2 { font-size: 18px !important; }
                    .about-description h3 { font-size: 16px !important; }
                    .about-description h4, .about-description h5, .about-description h6 { font-size: 15px !important; }
                    .about-description ul, .about-description ol { padding-left: 20px !important; }

                    .why-choose-footer { margin-top: 20px; }
                    .read-more-btn { font-size: 12px; padding: 8px 16px; }
                }

                @media (max-width: 480px) {
                    .why-choose-section { padding: 35px 0; }
                    .why-choose-image-wrapper { padding: 0; }
                    .why-choose-image { width: 100%; max-height: 250px; }
                    .decoration-one { width: 45px; height: 45px; left: -3px; bottom: 2px; }
                    .decoration-two { width: 40px; height: 40px; right: -3px; top: 2px; }
                    .why-choose-title { font-size: 22px; }
                    .about-description { font-size: 13px; line-height: 1.7; }
                    .image-dots { display: none; }
                }
                `})]})}export{c as default};