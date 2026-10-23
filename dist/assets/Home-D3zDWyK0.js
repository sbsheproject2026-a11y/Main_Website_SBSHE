const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/WhyChosseUs-B8dr4cVR.js","assets/rolldown-runtime-hePW80VL.js","assets/api-C6mtWg-S.js","assets/index-Dlx9wpcq.js","assets/index-BSLjRWIi.css","assets/ProgrammeListing-jSoMe9eo.js","assets/ExpertQueryForm-CIsAmh5t.js","assets/SocialAppLinks-C_n7FWT7.js","assets/Testimonial-Bl4xNU--.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-hePW80VL.js";import{t}from"./api-C6mtWg-S.js";import{_ as n,g as r,l as i,u as a}from"./index-Dlx9wpcq.js";var o=e(n(),1),s=a();function c(){let[e,n]=(0,o.useState)(0),[r,a]=(0,o.useState)([]);(0,o.useEffect)(()=>{c()},[]);let c=async()=>{try{let[e]=await Promise.all([i(119)]);a((e||[]).filter(e=>e.isActive===1))}catch(e){console.log(`Page data error:`,e)}},l=e=>{let t=e?.srNo??e?.srno??e?.serialNo??e?.sortOrder??e?.order??0;return Number(t)||0},u=(0,o.useMemo)(()=>r.flatMap(e=>(e.productCategoryDocuments||[]).slice().sort((e,t)=>l(e)-l(t)).map(e=>({srNo:l(e),image:t+e.fileupload,text:e.altTag||``}))),[r]);(0,o.useEffect)(()=>{n(0)},[u]),(0,o.useEffect)(()=>{if(u.length<=1)return;let e=setInterval(()=>{n(e=>(e+1)%u.length)},8e3);return()=>clearInterval(e)},[u]);let d=e=>{if(!e)return{topText:``,mainText:``,bottomText:``,plainText:``};if(e.includes(`|`)){let t=e.split(`|`);return{topText:t[0]?.trim()||``,mainText:t[1]?.trim()||(t.length===1?t[0]?.trim():``),bottomText:t[2]?.trim()||``,plainText:e.replace(/\|/g,` `).replace(/<[^>]+>/g,``)}}let t=e.replace(/<br\s*\/?>/gi,`
`),n=new DOMParser().parseFromString(t,`text/html`).body.textContent||``,r=n.split(`
`).map(e=>e.trim()).filter(e=>e.length>0),i=``,a=``,o=``;return r.length===1?a=r[0]:r.length===2?(i=r[0],a=r[1]):r.length>=3&&(i=r[0],a=r[1],o=r.slice(2).join(` `)),{topText:i,mainText:a,bottomText:o,plainText:n.replace(/\n/g,` `)}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`div`,{className:`hero-slider-section`,children:(0,s.jsx)(`div`,{className:`hero-slider-box`,children:(0,s.jsxs)(`div`,{id:`header-carousel`,className:`carousel slide carousel-fade`,children:[(0,s.jsx)(`div`,{className:`carousel-indicators`,children:u.map((t,r)=>(0,s.jsx)(`button`,{type:`button`,className:e===r?`active`:``,onClick:()=>n(r),"aria-label":`Go to slide ${r+1}`},`slide-indicator-${r}`))}),(0,s.jsx)(`div`,{className:`carousel-inner`,children:u.map((t,n)=>{let{topText:r,mainText:i,bottomText:a,plainText:o}=d(t.text),c=n===0;return(0,s.jsxs)(`div`,{className:`carousel-item ${e===n?`active`:``}`,children:[(0,s.jsx)(`img`,{src:t.image,alt:o||`Slide ${n+1}`,className:`header-slide-image`,loading:c?`eager`:`lazy`,fetchPriority:c?`high`:`auto`,width:`1920`,height:`800`,onError:e=>{e.target.style.display=`none`}}),t.text&&(0,s.jsx)(`div`,{className:`slider-overlay`,children:(0,s.jsxs)(`div`,{className:`slider-content`,children:[r&&(0,s.jsx)(`span`,{className:`slider-top-text`,children:r}),i&&(0,s.jsx)(`h2`,{className:`slider-main-text`,children:i}),a&&(0,s.jsx)(`p`,{className:`slider-bottom-text`,children:a})]})})]},`slide-${t.srNo}-${n}`)})})]})})}),(0,s.jsx)(`style`,{children:`
                .hero-slider-section { width: 100%; padding: 0; box-sizing: border-box; display: flex; justify-content: center; }

                /* ✅ 1920x800 poster ke liye aspect-ratio — no crop, no stretch */
                .hero-slider-box {
                    width: 100%;
                    max-width: 1920px;
                    margin: 0 auto;
                    position: relative;
                    aspect-ratio: 1920 / 800;
                    overflow: hidden;
                    box-shadow: 0 15px 40px rgba(15, 23, 42, 0.15);
                    border-radius: 0px;
                    background: #0a6a9c;
                }

                .hero-slider-box .carousel,
                .hero-slider-box .carousel-inner,
                .hero-slider-box .carousel-item {
                    height: 100%;
                    width: 100%;
                    position: relative;
                }

                .header-slide-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    display: block;
                    background-color: #e2e8f0;
                }

                .slider-overlay {
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    background: linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%);
                    display: flex;
                    align-items: center;
                    z-index: 2;
                }

                .slider-content {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 50px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 12px;
                }

                .slider-top-text {
                    display: inline-block;
                    background: #ff6600;
                    color: #ffffff;
                    font-size: 14px;
                    font-weight: 700;
                    padding: 6px 16px;
                    border-radius: 4px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 5px;
                    box-shadow: 0 4px 10px rgba(255, 102, 0, 0.4);
                    animation: slideUpFade 0.8s ease forwards;
                }

                .slider-main-text {
                    color: #ffffff;
                    font-size: 52px;
                    font-weight: 800;
                    line-height: 1.2;
                    font-family: "Baskerville", "Times New Roman", Georgia, serif;
                    text-shadow: 2px 4px 10px rgba(0, 0, 0, 0.6);
                    max-width: 750px;
                    margin: 0;
                    animation: slideUpFade 0.8s ease 0.2s forwards;
                    opacity: 0;
                }

                .slider-bottom-text {
                    color: #e2e8f0;
                    font-size: 18px;
                    font-weight: 500;
                    max-width: 600px;
                    margin: 0;
                    line-height: 1.5;
                    text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
                    animation: slideUpFade 0.8s ease 0.4s forwards;
                    opacity: 0;
                }

                @keyframes slideUpFade {
                    from { opacity: 0; transform: translateY(30px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .hero-slider-box .carousel-indicators {
                    bottom: 20px;
                    margin-bottom: 0;
                    z-index: 5;
                    display: flex;
                    justify-content: center;
                    gap: 6px;
                }

                .hero-slider-box .carousel-indicators button {
                    width: 12px; height: 12px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.55);
                    border: none;
                    padding: 0;
                    cursor: pointer;
                    transition: 0.25s ease;
                }

                .hero-slider-box .carousel-indicators button.active {
                    background: #ff6600;
                }

                @media (max-width: 1199px) {
                    .slider-main-text { font-size: 44px; }
                    .slider-bottom-text { font-size: 16px; }
                }

                @media (max-width: 991px) {
                    .hero-slider-section { padding: 0 14px; }
                    .slider-content { padding: 0 30px; }
                    .slider-main-text { font-size: 36px; }
                    .slider-top-text { font-size: 12px; padding: 5px 12px; }
                    .slider-bottom-text { font-size: 15px; }
                }

                @media (max-width: 767px) {
                    /* ✅ FIX: Yahan se min-height hataya hai taaki image side se cut na ho */
                    .hero-slider-box { border-radius: 0px; }
                    .slider-overlay {
                        background: linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 100%);
                    }
                    .slider-content { padding: 0 20px; gap: 8px; align-items: center; }
                    .slider-main-text { font-size: 28px; text-align: center; max-width: 100%; }
                    .slider-top-text { font-size: 10px; padding: 4px 10px; margin: 0 auto 5px auto; }
                    .slider-bottom-text { font-size: 12px; max-width: 100%; text-align: center; }
                    .hero-slider-box .carousel-indicators button { width: 8px; height: 8px; }
                    .hero-slider-box .carousel-indicators button.active { width: 12px; }
                }

                @media (max-width: 480px) {
                    .hero-slider-section { padding: 0 10px; }
                
                    .slider-main-text { font-size: 22px; }
                    .slider-top-text { font-size: 9px; }
                    .slider-bottom-text { font-size: 11px; }
                }
            `})]})}var l=({end:e,suffix:t,duration:n=2e3})=>{let[r,i]=(0,o.useState)(0),a=(0,o.useRef)(0);return(0,o.useEffect)(()=>{let t=null,r=a.current,o=parseInt(e,10);if(isNaN(o))return;let s=e=>{t||=e;let c=Math.min((e-t)/n,1),l=c*(2-c),u=Math.floor(l*(o-r)+r);i(u),c<1?window.requestAnimationFrame(s):(i(o),a.current=o)};window.requestAnimationFrame(s)},[e,n]),(0,s.jsxs)(s.Fragment,{children:[r,t]})};function u(){let[e,t]=(0,o.useState)([]),[n,r]=(0,o.useState)(!0),[,a]=(0,o.useState)(0);(0,o.useEffect)(()=>{c();let e=setInterval(()=>{a(e=>e+1)},6e4);return()=>clearInterval(e)},[]);let c=async()=>{try{let e=await i(1162),n=[];(e||[]).forEach(e=>{e.isActive===1&&e.productCategoryDocuments&&e.productCategoryDocuments.forEach(t=>{n.push({...t,parentDate:e.date})})}),n.sort((e,t)=>(e.srNo||0)-(t.srNo||0)),t(n)}catch(e){console.log(`Page data error:`,e),t([])}finally{r(!1)}},u=(e,t)=>{if(!e)return`0`;let n=e.match(/\d+/);if(!n)return e;let r=parseInt(n[0],10),i=e.replace(n[0],``),a=new Date(t).getTime(),o=new Date().getTime();if(isNaN(a)||o<=a)return e;let s=(o-a)/36e5;return`${r+Math.floor(s/2)}${i}`};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(`section`,{className:`count-section`,children:[(0,s.jsx)(`span`,{className:`count-bg-decor`,"aria-hidden":`true`}),(0,s.jsx)(`div`,{className:`container`,children:(0,s.jsx)(`div`,{className:`row justify-content-center`,children:n?[1,2,3,4].map(e=>(0,s.jsx)(`div`,{className:`col-xl-3 col-lg-3 col-md-6 col-sm-6 count-column`,children:(0,s.jsxs)(`div`,{className:`count-card count-card-${e} skeleton-card`,children:[(0,s.jsx)(`div`,{className:`count-icon skeleton-icon`}),(0,s.jsxs)(`div`,{className:`count-content`,children:[(0,s.jsx)(`div`,{className:`skeleton-text skeleton-val`}),(0,s.jsx)(`div`,{className:`skeleton-text skeleton-title`})]})]})},`skeleton-${e}`)):e.map((e,t)=>{let n=t%4+1,r=e.name?.trim().toLowerCase(),i=r===`happy students`||r===`enquiries`?u(e.altTag,e.parentDate):e.altTag,a=i?i.match(/\d+/):null,o=a?a[0]:null,c=a?i.replace(a[0],``):i;return(0,s.jsx)(`div`,{className:`col-xl-3 col-lg-3 col-md-6 col-sm-6 count-column`,children:(0,s.jsxs)(`div`,{className:`count-card count-card-${n}`,children:[(0,s.jsx)(`div`,{className:`count-icon`,children:(0,s.jsx)(`i`,{className:`fa fa-graduation-cap`})}),(0,s.jsxs)(`div`,{className:`count-content`,children:[i&&(0,s.jsx)(`div`,{className:`count-short-name`,children:o?(0,s.jsx)(l,{end:o,suffix:c}):i}),e.name&&(0,s.jsx)(`h2`,{children:e.name})]}),(0,s.jsx)(`span`,{className:`count-number`,children:String(t+1).padStart(2,`0`)}),(0,s.jsx)(`div`,{className:`count-arrow`,children:(0,s.jsx)(`i`,{className:`fa fa-arrow-right`})})]})},`count-${e.id??t}`)})})})]}),(0,s.jsx)(`style`,{children:`
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
                `})]})}function d(){let[e,t]=(0,o.useState)([]);(0,o.useEffect)(()=>{n()},[]);let n=async()=>{try{let[e]=await Promise.all([i(131)]);t((e||[]).filter(e=>e.isActive===1))}catch(e){console.log(`Page data error:`,e)}};return(0,s.jsx)(s.Fragment,{children:e.length>0&&(0,s.jsxs)(`div`,{className:`announcement-wrapper`,children:[(0,s.jsxs)(`div`,{className:`announcement-bar`,children:[(0,s.jsxs)(`div`,{className:`announcement-title`,children:[(0,s.jsx)(`div`,{className:`announcement-icon`,children:(0,s.jsx)(`i`,{className:`fa fa-bullhorn`})}),(0,s.jsx)(`span`,{children:`Announcements`})]}),(0,s.jsx)(`div`,{className:`announcement-content`,children:(0,s.jsxs)(`div`,{className:`announcement-track`,children:[(0,s.jsx)(`div`,{className:`announcement-items`,children:e.map((t,n)=>(0,s.jsxs)(o.Fragment,{children:[t.url_link?(0,s.jsx)(`a`,{href:t.url_link,className:`announcement-item`,target:`_blank`,rel:`noopener noreferrer`,children:t.name}):(0,s.jsx)(`a`,{href:`/announcements`,className:`announcement-item`,children:t.name}),n<e.length-1&&(0,s.jsx)(`span`,{className:`announcement-separator`,children:`•`})]},`announcement-${t.id??n}`))}),(0,s.jsx)(`div`,{className:`announcement-items`,children:e.map((t,n)=>(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(`span`,{className:`announcement-item`,children:t.name}),n<e.length-1&&(0,s.jsx)(`span`,{className:`announcement-separator`,children:`•`})]},`duplicate-announcement-${t.id??n}`))})]})})]}),(0,s.jsx)(`style`,{children:`
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
`})]})})}var f=(0,o.lazy)(()=>r(()=>import(`./WhyChosseUs-B8dr4cVR.js`),__vite__mapDeps([0,1,2,3,4]))),p=(0,o.lazy)(()=>r(()=>import(`./ProgrammeListing-jSoMe9eo.js`),__vite__mapDeps([5,1,2,3,4]))),m=(0,o.lazy)(()=>r(()=>import(`./ExpertQueryForm-CIsAmh5t.js`),__vite__mapDeps([6,1,3,2,4]))),h=(0,o.lazy)(()=>r(()=>import(`./SocialAppLinks-C_n7FWT7.js`),__vite__mapDeps([7,1,3,2,4]))),g=(0,o.lazy)(()=>r(()=>import(`./Testimonial-Bl4xNU--.js`),__vite__mapDeps([8,1,2,3,4]))),_=(0,o.lazy)(()=>r(()=>import(`./index-Dlx9wpcq.js`).then(e=>e.t),__vite__mapDeps([3,1,2,4]))),v=()=>(0,s.jsx)(`div`,{style:{minHeight:`300px`,display:`flex`,justifyContent:`center`,alignItems:`center`,padding:`40px`},children:(0,s.jsx)(`div`,{className:`spinner-border text-primary`,role:`status`,style:{width:`3rem`,height:`3rem`},children:(0,s.jsx)(`span`,{className:`visually-hidden`,children:`Loading...`})})});function y(){let[e,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=setTimeout(()=>{t(!0)},8e3);return()=>clearTimeout(e)},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(u,{}),(0,s.jsx)(d,{}),(0,s.jsxs)(o.Suspense,{fallback:(0,s.jsx)(v,{}),children:[(0,s.jsx)(f,{}),(0,s.jsx)(p,{}),(0,s.jsx)(m,{}),(0,s.jsx)(h,{}),(0,s.jsx)(g,{})]}),e&&(0,s.jsx)(o.Suspense,{fallback:null,children:(0,s.jsx)(_,{isOpen:e,onClose:()=>t(!1)})})]})}export{y as default};