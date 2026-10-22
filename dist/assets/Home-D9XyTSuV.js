const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CTUkKMAp.js","assets/rolldown-runtime-hePW80VL.js","assets/api-C6mtWg-S.js","assets/index-BSLjRWIi.css"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-hePW80VL.js";import{t}from"./api-C6mtWg-S.js";import{c as n,g as r,h as i,l as a,o,u as s}from"./index-CTUkKMAp.js";import c from"./ExpertQueryForm-B3x1RuXN.js";var l=e(r(),1),u=a();function d(){let[e,t]=(0,l.useState)([]);(0,l.useEffect)(()=>{r()},[]);let r=async()=>{try{let[e]=await Promise.all([n(131)]);t((e||[]).filter(e=>e.isActive===1))}catch(e){console.log(`Page data error:`,e)}};return(0,u.jsx)(u.Fragment,{children:e.length>0&&(0,u.jsxs)(`div`,{className:`announcement-wrapper`,children:[(0,u.jsxs)(`div`,{className:`announcement-bar`,children:[(0,u.jsxs)(`div`,{className:`announcement-title`,children:[(0,u.jsx)(`div`,{className:`announcement-icon`,children:(0,u.jsx)(`i`,{className:`fa fa-bullhorn`})}),(0,u.jsx)(`span`,{children:`Announcements`})]}),(0,u.jsx)(`div`,{className:`announcement-content`,children:(0,u.jsxs)(`div`,{className:`announcement-track`,children:[(0,u.jsx)(`div`,{className:`announcement-items`,children:e.map((t,n)=>(0,u.jsxs)(l.Fragment,{children:[t.url_link?(0,u.jsx)(`a`,{href:t.url_link,className:`announcement-item`,target:`_blank`,rel:`noopener noreferrer`,children:t.name}):(0,u.jsx)(`a`,{href:`/announcements`,className:`announcement-item`,children:t.name}),n<e.length-1&&(0,u.jsx)(`span`,{className:`announcement-separator`,children:`•`})]},`announcement-${t.id??n}`))}),(0,u.jsx)(`div`,{className:`announcement-items`,children:e.map((t,n)=>(0,u.jsxs)(l.Fragment,{children:[(0,u.jsx)(`span`,{className:`announcement-item`,children:t.name}),n<e.length-1&&(0,u.jsx)(`span`,{className:`announcement-separator`,children:`•`})]},`duplicate-announcement-${t.id??n}`))})]})})]}),(0,u.jsx)(`style`,{children:`
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
`})]})})}function f(){let[e,t]=(0,l.useState)(0),[r,i]=(0,l.useState)([]);(0,l.useEffect)(()=>{a()},[]);let a=async()=>{try{let[e]=await Promise.all([n(119)]);i((e||[]).filter(e=>e.isActive===1))}catch(e){console.log(`Page data error:`,e)}},o=r.flatMap(e=>e.productCategoryDocuments?.map(e=>({image:`https://api.shaheedbhagatsinghhealthandeducation.com/Uploads/`+e.fileupload,text:e.altTag||``}))||[]);(0,l.useEffect)(()=>{t(0)},[r]),(0,l.useEffect)(()=>{if(o.length<=1)return;let e=setInterval(()=>{t(e=>(e+1)%o.length)},8e3);return()=>clearInterval(e)},[o]);let s=e=>{if(!e)return{topText:``,mainText:``,bottomText:``,plainText:``};if(e.includes(`|`)){let t=e.split(`|`);return{topText:t[0]?.trim()||``,mainText:t[1]?.trim()||(t.length===1?t[0]?.trim():``),bottomText:t[2]?.trim()||``,plainText:e.replace(/\|/g,` `).replace(/<[^>]+>/g,``)}}let t=e.replace(/<br\s*\/?>/gi,`
`),n=new DOMParser().parseFromString(t,`text/html`).body.textContent||``,r=n.split(`
`).map(e=>e.trim()).filter(e=>e.length>0),i=``,a=``,o=``;return r.length===1?a=r[0]:r.length===2?(i=r[0],a=r[1]):r.length>=3&&(i=r[0],a=r[1],o=r.slice(2).join(` `)),{topText:i,mainText:a,bottomText:o,plainText:n.replace(/\n/g,` `)}};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`div`,{className:`hero-slider-section`,children:(0,u.jsx)(`div`,{className:`hero-slider-box`,children:(0,u.jsxs)(`div`,{id:`header-carousel`,className:`carousel slide carousel-fade`,children:[(0,u.jsx)(`div`,{className:`carousel-indicators`,children:o.slice().reverse().map((n,r)=>(0,u.jsx)(`button`,{type:`button`,className:e===r?`active`:``,onClick:()=>t(r),"aria-label":`Go to slide ${r+1}`},`slide-indicator-${r}`))}),(0,u.jsx)(`div`,{className:`carousel-inner`,children:o.slice().reverse().map((t,n)=>{let{topText:r,mainText:i,bottomText:a,plainText:o}=s(t.text),c=n===0,l=`https://wsrv.nl/?url=${encodeURIComponent(t.image)}&w=1400&output=webp&q=80`;return(0,u.jsxs)(`div`,{className:`carousel-item ${e===n?`active`:``}`,children:[(0,u.jsx)(`img`,{src:l,alt:o||`Slide ${n+1}`,className:`header-slide-image`,loading:c?`eager`:`lazy`,fetchPriority:c?`high`:`auto`,width:`1400`,height:`580`}),t.text&&(0,u.jsx)(`div`,{className:`slider-overlay`,children:(0,u.jsxs)(`div`,{className:`slider-content`,children:[r&&(0,u.jsx)(`span`,{className:`slider-top-text`,children:r}),i&&(0,u.jsx)(`h2`,{className:`slider-main-text`,children:i}),a&&(0,u.jsx)(`p`,{className:`slider-bottom-text`,children:a})]})})]},`slide-${n}`)})})]})})}),(0,u.jsx)(`style`,{children:`
                /* Aapka original CSS yahan aayega, maine isme koi change nahi kiya hai */
                .hero-slider-section { width: 100%; padding: 0; box-sizing: border-box; display: flex; justify-content: center; }
                .hero-slider-box { width: 100%; max-width: 1400px; margin: 0 auto; position: relative; height: 580px; overflow: hidden; box-shadow: 0 15px 40px rgba(15, 23, 42, 0.15); border-radius: 12px; }
                .hero-slider-box .carousel, .hero-slider-box .carousel-inner, .hero-slider-box .carousel-item { height: 100%; width: 100%; position: relative; }
                .header-slide-image { width: 100%; height: 100%; object-fit: cover; object-position: center; display: block; background-color: #e2e8f0; }
                .slider-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%); display: flex; align-items: center; z-index: 2; }
                .slider-content { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 50px; display: flex; flex-direction: column; align-items: flex-start; gap: 12px; }
                .slider-top-text { display: inline-block; background: #ff6600; color: #ffffff; font-size: 14px; font-weight: 700; padding: 6px 16px; border-radius: 4px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; box-shadow: 0 4px 10px rgba(255, 102, 0, 0.4); animation: slideUpFade 0.8s ease forwards; }
                .slider-main-text { color: #ffffff; font-size: 52px; font-weight: 800; line-height: 1.2; font-family: "Baskerville", "Times New Roman", Georgia, serif; text-shadow: 2px 4px 10px rgba(0, 0, 0, 0.6); max-width: 750px; margin: 0; animation: slideUpFade 0.8s ease 0.2s forwards; opacity: 0; }
                .slider-bottom-text { color: #e2e8f0; font-size: 18px; font-weight: 500; max-width: 600px; margin: 0; line-height: 1.5; text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5); animation: slideUpFade 0.8s ease 0.4s forwards; opacity: 0; }
                @keyframes slideUpFade { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                .hero-slider-box .carousel-indicators { bottom: 20px; margin-bottom: 0; z-index: 5; display: flex; justify-content: center; gap: 6px; }
                .hero-slider-box .carousel-indicators button { width: 12px; height: 12px; border-radius: 50%; background: rgba(255, 255, 255, 0.55); border: none; padding: 0; cursor: pointer; transition: 0.25s ease; }
                .hero-slider-box .carousel-indicators button.active { background: #ff6600; width: 12px; height: 12px; border-radius: 50%; }
                @media (max-width: 1199px) { .hero-slider-box { height: 500px; } .slider-main-text { font-size: 44px; } .slider-bottom-text { font-size: 16px; } }
                @media (max-width: 991px) { .hero-slider-section { padding: 0 14px; } .hero-slider-box { height: 400px; } .slider-content { padding: 0 30px; } .slider-main-text { font-size: 36px; } .slider-top-text { font-size: 12px; padding: 5px 12px; } .slider-bottom-text { font-size: 15px; } }
                @media (max-width: 767px) { .hero-slider-box { height: 340px; border-radius: 8px; } .slider-overlay { background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 100%); } .slider-content { padding: 0 20px; gap: 8px; align-items: center; } .slider-main-text { font-size: 28px; text-align: center; max-width: 100%; } .slider-top-text { font-size: 10px; padding: 4px 10px; margin: 0 auto 5px auto; } .slider-bottom-text { font-size: 12px; max-width: 100%; text-align: center; } .hero-slider-box .carousel-indicators button { width: 8px; height: 8px; } .hero-slider-box .carousel-indicators button.active { width: 20px; } }
                @media (max-width: 480px) { .hero-slider-section { padding: 0 10px; } .hero-slider-box { height: 280px; } .slider-main-text { font-size: 22px; } .slider-top-text { font-size: 9px; } .slider-bottom-text { font-size: 11px; } }
            `})]})}function p(){let[e,t]=(0,l.useState)([]),[,r]=(0,l.useState)(0);(0,l.useEffect)(()=>{i();let e=setInterval(()=>{r(e=>e+1)},6e4);return()=>clearInterval(e)},[]);let i=async()=>{try{let e=await n(1162),r=[];(e||[]).forEach(e=>{e.isActive===1&&e.productCategoryDocuments&&e.productCategoryDocuments.forEach(t=>{r.push({...t,parentDate:e.date})})}),r.sort((e,t)=>(e.srNo||0)-(t.srNo||0)),t(r)}catch(e){console.log(`Page data error:`,e),t([])}},a=(e,t)=>{if(!e)return`0`;let n=e.match(/\d+/);if(!n)return e;let r=parseInt(n[0],10),i=e.replace(n[0],``),a=new Date(t).getTime(),o=new Date().getTime();if(isNaN(a)||o<=a)return e;let s=(o-a)/36e5;return`${r+Math.floor(s/2)}${i}`};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`section`,{className:`count-section`,children:(0,u.jsx)(`div`,{className:``,children:(0,u.jsx)(`div`,{className:`row justify-content-center`,children:e.map((e,t)=>{let n=t%4+1,r=e.name?.trim().toLowerCase(),i=r===`happy students`||r===`enquiries`?a(e.altTag,e.parentDate):e.altTag;return(0,u.jsx)(`div`,{className:`col-xl-3 col-lg-3 col-md-6 col-sm-6 count-column`,children:(0,u.jsxs)(`div`,{className:`count-card count-card-${n}`,children:[(0,u.jsx)(`div`,{className:`count-icon`,children:(0,u.jsx)(`i`,{className:`fa fa-graduation-cap`})}),(0,u.jsxs)(`div`,{className:`count-content`,children:[i&&(0,u.jsx)(`div`,{className:`count-short-name`,children:i}),e.name&&(0,u.jsx)(`h2`,{children:e.name})]}),(0,u.jsx)(`span`,{className:`count-number`,children:String(t+1).padStart(2,`0`)}),(0,u.jsx)(`div`,{className:`count-arrow`,children:(0,u.jsx)(`i`,{className:`fa fa-arrow-right`})})]})},`count-${e.id??t}`)})})})}),(0,u.jsx)(`style`,{children:`
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
                `})]})}function m(){let[e,n]=(0,l.useState)([]);(0,l.useEffect)(()=>{r()},[]);let r=async()=>{try{let e=(await o(13)||[]).filter(e=>e.isActive===1||e.isActive===!0);n(e)}catch(e){console.log(`Programme Error:`,e),n([])}},i=e=>e?e.startsWith(`http`)?e:`${t}${e.startsWith(`/`)?``:`/`}${e}`:null,a=e.length>0?[...e,...e]:[];return(0,u.jsxs)(u.Fragment,{children:[e.length>0&&(0,u.jsxs)(`section`,{className:`programme-section`,children:[(0,u.jsxs)(`div`,{className:`programme-section-header`,children:[(0,u.jsxs)(`div`,{className:`programme-section-label`,children:[(0,u.jsx)(`span`,{className:`programme-label-line`}),(0,u.jsx)(`span`,{children:`Schools of Studies`})]}),(0,u.jsx)(`h2`,{className:`programme-section-title`,children:`Explore Our Programmes`}),(0,u.jsx)(`p`,{className:`programme-section-subtitle`,children:`Discover professional programmes designed to build practical knowledge and support your career goals.`})]}),(0,u.jsx)(`div`,{className:`programme-slider`,children:(0,u.jsx)(`div`,{className:`programme-track`,children:a.map((e,t)=>{let n=i(e.filePath),r=n?`https://wsrv.nl/?url=${encodeURIComponent(n)}&w=600&output=webp&q=80`:null;return(0,u.jsx)(`div`,{className:`programme-slide`,children:(0,u.jsxs)(`div`,{className:`programme-card`,children:[(0,u.jsxs)(`div`,{className:`programme-image`,children:[e.filePath?(0,u.jsx)(`img`,{src:r,alt:e.name||`Programme`,loading:`lazy`,width:`400`,height:`220`}):(0,u.jsx)(`div`,{className:`programme-placeholder`}),(0,u.jsx)(`div`,{className:`programme-image-overlay`})]}),(0,u.jsxs)(`div`,{className:`programme-content`,children:[(0,u.jsx)(`div`,{className:`programme-card-line`,children:(0,u.jsx)(`span`,{})}),(0,u.jsx)(s,{to:`/course-details/${e.slug}`,state:{id:e.id},className:`programme-name`,children:e.name}),(0,u.jsx)(`p`,{className:`programme-description`,children:e.description||`Explore professional courses and develop practical skills for your career.`}),(0,u.jsx)(`div`,{className:`programme-card-footer`,children:(0,u.jsxs)(s,{to:`/course-details/${e.slug}`,state:{id:e.id},className:`programme-link`,"aria-label":`Explore courses for ${e.name}`,children:[(0,u.jsx)(`span`,{children:`Explore Courses`}),(0,u.jsx)(`span`,{className:`programme-link-icon`,children:(0,u.jsx)(`i`,{className:`fas fa-arrow-right`,"aria-hidden":`true`})})]})})]})]})},`${e.id}-${t}`)})})})]}),(0,u.jsx)(`style`,{children:`
                /* Aapka original CSS yahan aayega, isme koi change nahi kiya gaya hai */
                .programme-section { width: 100%; padding: 70px 0 75px; background: linear-gradient(180deg, #ffffff 0%, #f7fbfd 100%); position: relative; overflow: hidden; }
                .programme-section::before { content: ""; position: absolute; width: 400px; height: 400px; top: -220px; right: -150px; border-radius: 50%; background: rgba(1, 80, 124, 0.045); pointer-events: none; }
                .programme-section::after { content: ""; position: absolute; width: 300px; height: 300px; bottom: -180px; left: -140px; border-radius: 50%; background: rgba(255, 211, 61, 0.07); pointer-events: none; }
                .programme-section-header { width: 100%; max-width: 800px; margin: 0 auto 38px; padding: 0 15px; text-align: center; position: relative; z-index: 2; box-sizing: border-box; }
                .programme-section-label { display: flex; align-items: center; justify-content: center; gap: 9px; margin-bottom: 10px; color: #07567f; font-size: 11px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase; }
                .programme-label-line { width: 30px; height: 3px; border-radius: 20px; background: #ffd33d; }
                .programme-section-title { margin: 0; color: #063d59; font-size: 34px; line-height: 1.25; font-weight: 800; letter-spacing: -0.4px; }
                .programme-section-subtitle { max-width: 650px; margin: 12px auto 0; color: #687780; font-size: 14px; line-height: 1.75; font-weight: 400; }
                .programme-slider { width: 100%; overflow: hidden; position: relative; padding: 10px 0 25px; z-index: 2; }
                .programme-track { display: flex; width: max-content; align-items: stretch; animation: programmeSlide 45s linear infinite; will-change: transform; }
                .programme-slider:hover .programme-track { animation-play-state: paused; }
                @keyframes programmeSlide { from { transform: translateX(0); } to { transform: translateX(-50%); } }
                .programme-slide { width: 33.333vw; max-width: 400px; min-width: 320px; padding: 0 10px; box-sizing: border-box; flex-shrink: 0; }
                .programme-card { width: 100%; height: 100%; min-height: 445px; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(1, 80, 124, 0.09); box-shadow: 0 8px 28px rgba(6, 42, 60, 0.08); transition: transform 0.35s ease, box-shadow 0.35s ease; display: flex; flex-direction: column; position: relative; }
                .programme-card:hover { transform: translateY(-8px); box-shadow: 0 18px 42px rgba(1, 80, 124, 0.16); }
                .programme-image { width: 100%; height: 220px; flex-shrink: 0; position: relative; overflow: hidden; background: linear-gradient(135deg, #eaf4f8, #f8fafb); }
                .programme-image img { width: 100%; height: 100%; display: block; object-fit: cover; object-position: center; transition: transform 0.6s ease; }
                .programme-card:hover .programme-image img { transform: scale(1.07); }
                .programme-placeholder { width: 100%; height: 100%; background: linear-gradient(135deg, #eaf4f8 0%, #f7fbfd 50%, #e4f0f5 100%); }
                .programme-image-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(6,42,60,0.48) 100%); pointer-events: none; }
                .programme-content { flex: 1; display: flex; flex-direction: column; padding: 20px 21px 21px; position: relative; box-sizing: border-box; }
                .programme-card-line { width: 100%; height: 3px; margin-bottom: 13px; overflow: hidden; }
                .programme-card-line span { display: block; width: 42px; height: 3px; background: #ffd33d; border-radius: 20px; transition: width 0.35s ease; }
                .programme-card:hover .programme-card-line span { width: 70px; }
                .programme-name { display: block; color: #063d59; text-decoration: none; font-size: 19px; line-height: 1.4; font-weight: 800; margin: 0 0 10px; min-height: 53px; transition: color 0.25s ease; }
                .programme-name:hover { color: #07567f; text-decoration: none; }
                .programme-description { color: #68747b; font-size: 13px; line-height: 1.7; margin: 0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; min-height: 66px; }
                .programme-card-footer { margin-top: auto; padding-top: 20px; border-top: 1px solid #edf1f3; }
                .programme-link { display: inline-flex; align-items: center; gap: 9px; color: #07567f; text-decoration: none; font-size: 12px; font-weight: 800; transition: color 0.25s ease; }
                .programme-link:hover { color: #e2a900; text-decoration: none; }
                .programme-link-icon { width: 27px; height: 27px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: #eaf4f8; color: #07567f; transition: all 0.25s ease; }
                .programme-link:hover .programme-link-icon { background: #07567f; color: #ffffff; transform: translateX(4px); }
                .programme-link-icon i { font-size: 10px; }
                @media (max-width: 1199px) { .programme-section { padding: 60px 0 65px; } .programme-section-title { font-size: 31px; } .programme-track { animation-duration: 48s; } .programme-slide { width: 45vw; min-width: 45vw; max-width: none; } .programme-image { height: 210px; } }
                @media (max-width: 991px) { .programme-section { padding: 55px 0 60px; } .programme-section-header { margin-bottom: 30px; } .programme-section-title { font-size: 29px; } .programme-section-subtitle { font-size: 13px; } .programme-track { animation-duration: 45s; } .programme-slide { width: 50vw; min-width: 50vw; padding: 0 8px; } .programme-card { min-height: 430px; border-radius: 15px; } .programme-image { height: 205px; } .programme-name { font-size: 18px; } }
                @media (max-width: 767px) { .programme-section { padding: 42px 0 48px; } .programme-section-header { padding: 0 18px; margin-bottom: 25px; } .programme-section-label { font-size: 9px; letter-spacing: 2px; } .programme-label-line { width: 24px; height: 2px; } .programme-section-title { font-size: 25px; line-height: 1.3; } .programme-section-subtitle { margin-top: 9px; font-size: 12px; line-height: 1.7; } .programme-slider { padding: 5px 0 20px; } .programme-track { animation-duration: 42s; } .programme-slide { width: 85vw; min-width: 85vw; padding: 0 7px; } .programme-card { min-height: 415px; border-radius: 15px; } .programme-image { height: 195px; } .programme-content { padding: 18px; } .programme-card-line { margin-bottom: 11px; } .programme-name { font-size: 17px; line-height: 1.4; min-height: 48px; margin-bottom: 8px; } .programme-description { font-size: 12.5px; line-height: 1.65; min-height: 62px; } .programme-card-footer { padding-top: 17px; } .programme-link { font-size: 11px; } .programme-link-icon { width: 25px; height: 25px; } }
                @media (max-width: 480px) { .programme-section { padding: 35px 0 42px; } .programme-section-title { font-size: 22px; } .programme-section-subtitle { font-size: 11.5px; } .programme-slide { width: 90vw; min-width: 90vw; padding: 0 6px; } .programme-card { min-height: 400px; border-radius: 14px; } .programme-image { height: 180px; } .programme-content { padding: 17px; } .programme-name { font-size: 16px; min-height: 45px; } .programme-description { font-size: 12px; line-height: 1.65; -webkit-line-clamp: 3; } }
                `})]})}function h(){let[e,r]=(0,l.useState)([]),[i,a]=(0,l.useState)(0),[o,s]=(0,l.useState)(!1);(0,l.useEffect)(()=>{d()},[]);let c=e=>e&&new DOMParser().parseFromString(e,`text/html`).body.textContent||``,d=async()=>{try{let e=await n(133),i=[];(e||[]).forEach(e=>{e.isActive===1&&e.productCategoryDocuments&&e.productCategoryDocuments.forEach(n=>{let r=n.fileupload||``,a=r?r.startsWith(`http`)?r:`${t}${r.startsWith(`/`)?``:`/`}${r}`:``,o=a?`https://wsrv.nl/?url=${encodeURIComponent(a)}&w=150&output=webp&q=80`:``;i.push({id:n.id,name:n.name||`Student`,role:e.name||`Student`,review:c(e.descrption),image:o})})}),r(i)}catch(e){console.log(`Page data error:`,e),r([])}},f=e.slice().reverse(),p=[...f,...f];(0,l.useEffect)(()=>{if(f.length<=1)return;let e=setInterval(()=>{!o&&i!==f.length&&a(e=>e+1)},5e3);return()=>clearInterval(e)},[f.length,o,i]),(0,l.useEffect)(()=>{if(f.length>1&&i===f.length){let e=setTimeout(()=>{s(!0),a(0),setTimeout(()=>{s(!1)},50)},650);return()=>clearTimeout(e)}},[i,f.length]);let m=i>=f.length?0:i;return!f||f.length===0?null:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`div`,{className:`testimonial-section`,children:(0,u.jsxs)(`div`,{className:`container py-4`,children:[(0,u.jsxs)(`div`,{className:`testimonial-heading text-center mb-4`,children:[(0,u.jsxs)(`div`,{className:`testimonial-label`,children:[(0,u.jsx)(`span`,{}),`TESTIMONIAL`,(0,u.jsx)(`span`,{})]}),(0,u.jsx)(`h1`,{children:`What Our Students Say`})]}),(0,u.jsxs)(`div`,{className:`testimonial-slider`,children:[(0,u.jsx)(`div`,{className:`testimonial-overflow`,children:(0,u.jsx)(`div`,{className:`testimonial-track ${o?`testimonial-reset`:``}`,style:{transform:`translateX(-${i*100}%)`},children:p.map((e,t)=>(0,u.jsx)(`div`,{className:`testimonial-slide`,children:(0,u.jsx)(`div`,{className:`row justify-content-center`,children:(0,u.jsx)(`div`,{className:`col-xl-10 col-lg-11`,children:(0,u.jsxs)(`div`,{className:`testimonial-card`,children:[(0,u.jsx)(`div`,{className:`testimonial-left`,children:(0,u.jsxs)(`div`,{className:`testimonial-image-wrapper`,children:[(0,u.jsx)(`div`,{className:`testimonial-image-ring`,children:e.image?(0,u.jsx)(`img`,{src:e.image,alt:e.name||`Student`,className:`testimonial-image`,width:`102`,height:`102`,loading:`lazy`,onError:e=>{e.currentTarget.src=`https://via.placeholder.com/100?text=User`}}):(0,u.jsx)(`div`,{className:`testimonial-placeholder`,children:(0,u.jsx)(`i`,{className:`fa fa-user`,"aria-hidden":`true`})})}),(0,u.jsx)(`div`,{className:`verified-badge`,children:(0,u.jsx)(`i`,{className:`fa fa-check`,"aria-hidden":`true`})})]})}),(0,u.jsxs)(`div`,{className:`testimonial-right`,children:[(0,u.jsxs)(`div`,{className:`testimonial-head`,children:[(0,u.jsxs)(`div`,{className:`testimonial-head-info`,children:[(0,u.jsx)(`h3`,{children:e.name}),(0,u.jsx)(`p`,{children:e.role})]}),(0,u.jsxs)(`div`,{className:`testimonial-stars`,children:[(0,u.jsx)(`i`,{className:`fa fa-star`,"aria-hidden":`true`}),(0,u.jsx)(`i`,{className:`fa fa-star`,"aria-hidden":`true`}),(0,u.jsx)(`i`,{className:`fa fa-star`,"aria-hidden":`true`}),(0,u.jsx)(`i`,{className:`fa fa-star`,"aria-hidden":`true`}),(0,u.jsx)(`i`,{className:`fa fa-star`,"aria-hidden":`true`})]})]}),(0,u.jsxs)(`div`,{className:`testimonial-review`,children:[(0,u.jsx)(`div`,{className:`quote-icon`,children:(0,u.jsx)(`i`,{className:`fa fa-quote-left`,"aria-hidden":`true`})}),(0,u.jsx)(`p`,{children:e.review})]})]})]})})})},`testimonial-${e.id??t}-${t}`))})}),f.length>1&&(0,u.jsxs)(`div`,{className:`testimonial-controls`,children:[(0,u.jsx)(`button`,{type:`button`,className:`testimonial-arrow`,onClick:()=>{o||(i===0?(s(!0),a(f.length),setTimeout(()=>{s(!1),a(f.length-1)},50)):a(e=>e-1))},disabled:o,"aria-label":`Previous testimonial`,children:(0,u.jsx)(`i`,{className:`fa fa-arrow-left`,"aria-hidden":`true`})}),(0,u.jsx)(`div`,{className:`testimonial-dots`,children:f.map((e,t)=>(0,u.jsx)(`button`,{type:`button`,className:`testimonial-dot ${m===t?`active`:``}`,onClick:()=>{o||a(t)},"aria-label":`Go to testimonial ${t+1}`},`testimonial-dot-${e.id??t}`))}),(0,u.jsx)(`button`,{type:`button`,className:`testimonial-arrow`,onClick:()=>{o||i===f.length||a(e=>e+1)},disabled:o,"aria-label":`Next testimonial`,children:(0,u.jsx)(`i`,{className:`fa fa-arrow-right`,"aria-hidden":`true`})})]})]})]})}),(0,u.jsx)(`style`,{children:`
                /* Aapka original CSS yahan aayega, maine isme koi change nahi kiya hai */
                .testimonial-section { position: relative; padding: 45px 0 35px; background: radial-gradient(circle at 10% 20%, rgba(255,102,0,0.06), transparent 30%), radial-gradient(circle at 90% 80%, rgba(255,102,0,0.05), transparent 30%), #f8f9fc; overflow: hidden; }
                .testimonial-heading { position: relative; z-index: 2; }
                .testimonial-label { display: flex; justify-content: center; align-items: center; gap: 10px; color: #01507c; font-size: 11px; font-weight: 800; letter-spacing: 3px; margin-bottom: 6px; }
                .testimonial-label span { width: 26px; height: 2px; background: #01507c; display: inline-block; border-radius: 5px; }
                .testimonial-heading h1 { margin: 0; color: #20242a; font-size: 26px; font-weight: 800; letter-spacing: -0.5px; }
                .testimonial-slider { position: relative; z-index: 2; max-width: 950px; margin: auto; }
                .testimonial-overflow { overflow: hidden; padding: 10px 8px 15px; }
                .testimonial-track { display: flex; width: 100%; transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1); will-change: transform; }
                .testimonial-reset { transition: none !important; }
                .testimonial-slide { min-width: 100%; width: 100%; flex: 0 0 100%; }
                .testimonial-card { position: relative; background: #ffffff; border-radius: 18px; padding: 24px 30px; border: 1px solid #edf0f5; box-shadow: 0 10px 30px rgba(20, 30, 50, 0.07); overflow: hidden; display: flex; align-items: center; gap: 25px; transition: all 0.3s ease; }
                .testimonial-card:hover { box-shadow: 0 15px 40px rgba(255,102,0,0.12); }
                .testimonial-card::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, #01507c, #ff8c42); }
                .testimonial-left { flex-shrink: 0; }
                .testimonial-image-wrapper { position: relative; width: 110px; height: 110px; }
                .testimonial-image-ring { width: 110px; height: 110px; padding: 4px; border-radius: 50%; background: linear-gradient(135deg, #01507c, #ffb37a, #01507c); display: flex; align-items: center; justify-content: center; }
                .testimonial-image { width: 102px; height: 102px; object-fit: cover; border-radius: 50%; border: 4px solid #fff; display: block; }
                .testimonial-placeholder { width: 102px; height: 102px; border-radius: 50%; background: #fff; color: #01507c; display: flex; align-items: center; justify-content: center; font-size: 38px; }
                .verified-badge { position: absolute; right: 0px; bottom: 4px; width: 26px; height: 26px; border-radius: 50%; background: #28a745; color: white; border: 3px solid white; display: flex; align-items: center; justify-content: center; font-size: 10px; }
                .testimonial-right { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 12px; }
                .testimonial-head { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding-bottom: 10px; border-bottom: 1px solid #eef1f5; }
                .testimonial-head-info h3 { margin: 0 0 3px; color: #1c2430; font-size: 18px; font-weight: 800; line-height: 1.2; }
                .testimonial-head-info p { margin: 0; color: #7a8794; font-size: 12px; font-weight: 600; letter-spacing: 0.3px; text-transform: uppercase; }
                .testimonial-stars { display: flex; gap: 3px; flex-shrink: 0; }
                .testimonial-stars i { color: #ffb400; font-size: 14px; }
                .testimonial-review { position: relative; padding-left: 26px; }
                .testimonial-review p { margin: 0; color: #4b5563; font-size: 14px; line-height: 1.75; font-weight: 400; font-style: italic; }
                .quote-icon { position: absolute; left: 0; top: 0; color: #01507c; font-size: 18px; opacity: 0.85; }
                .testimonial-controls { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 10px; }
                .testimonial-arrow { width: 36px; height: 36px; border-radius: 50%; border: 1px solid #e4e7ec; background: #fff; color: #01507c; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0,0,0,0.05); font-size: 12px; }
                .testimonial-arrow:hover:not(:disabled) { background: #01507c; color: #fff; border-color: #01507c; transform: translateY(-2px); }
                .testimonial-arrow:disabled { opacity: 0.5; cursor: not-allowed; }
                .testimonial-dots { display: flex; align-items: center; gap: 6px; }
                .testimonial-dot { width: 8px; height: 8px; padding: 0; border: none; border-radius: 50%; background: #d7dbe1; cursor: pointer; transition: all 0.3s ease; }
                .testimonial-dot.active { width: 24px; border-radius: 10px; background: #01507c; }
                @media (max-width: 991px) { .testimonial-heading h1 { font-size: 22px; } .testimonial-card { padding: 22px 24px; gap: 20px; } .testimonial-image-wrapper, .testimonial-image-ring { width: 95px; height: 95px; } .testimonial-image, .testimonial-placeholder { width: 87px; height: 87px; } .testimonial-placeholder { font-size: 32px; } .testimonial-head-info h3 { font-size: 16px; } .testimonial-review p { font-size: 13px; } }
                @media (max-width: 767px) { .testimonial-section { padding: 30px 0 25px; } .testimonial-heading h1 { font-size: 20px; } .testimonial-card { padding: 18px 18px; gap: 15px; border-radius: 14px; } .testimonial-image-wrapper, .testimonial-image-ring { width: 80px; height: 80px; } .testimonial-image, .testimonial-placeholder { width: 72px; height: 72px; } .testimonial-placeholder { font-size: 26px; } .verified-badge { width: 22px; height: 22px; font-size: 9px; } .testimonial-head { flex-direction: column; align-items: flex-start; gap: 6px; } .testimonial-head-info h3 { font-size: 15px; } .testimonial-head-info p { font-size: 11px; } .testimonial-stars i { font-size: 12px; } .testimonial-review { padding-left: 22px; } .testimonial-review p { font-size: 12.5px; line-height: 1.65; } .quote-icon { font-size: 15px; } }
                @media (max-width: 480px) { .testimonial-heading h1 { font-size: 17px; } .testimonial-label { font-size: 9.5px; letter-spacing: 2px; } .testimonial-card { padding: 14px 14px; gap: 12px; flex-direction: column; text-align: center; } .testimonial-left { display: flex; justify-content: center; } .testimonial-image-wrapper, .testimonial-image-ring { width: 75px; height: 75px; } .testimonial-image, .testimonial-placeholder { width: 67px; height: 67px; } .testimonial-placeholder { font-size: 22px; } .testimonial-head { align-items: center; text-align: center; } .testimonial-head-info { text-align: center; width: 100%; } .testimonial-stars { justify-content: center; } .testimonial-review { padding: 0 16px; text-align: center; } .testimonial-review p { font-size: 12px; } .quote-icon { left: 0; top: -2px; font-size: 14px; } .testimonial-arrow { width: 32px; height: 32px; font-size: 11px; } }
                `})]})}function g(){let[e,t]=(0,l.useState)([]);(0,l.useEffect)(()=>{r()},[]);let r=async()=>{try{let[e,r]=await Promise.all([n(1145),n(1151)]),i=[...e||[],...r||[]].filter(e=>e.isActive===1);t(i)}catch(e){console.log(`Page data error:`,e),t([])}},i=(e,t=100)=>{if(!e||typeof document>`u`)return{html:e||``,isTruncated:!1};try{let n=new DOMParser().parseFromString(e,`text/html`),r=0,i=!1,a=e=>{if(i)return null;if(e.nodeType===Node.TEXT_NODE){let n=e.textContent.split(/(\s+)/),a=``;for(let e of n)if(e.trim()===``)(a.length>0||r>0)&&(a+=e);else if(r<t)a+=e,r++;else{i=!0;break}return a?document.createTextNode(a):null}if(e.nodeType===Node.ELEMENT_NODE){if([`SCRIPT`,`STYLE`,`NOSCRIPT`].includes(e.tagName))return null;let t=e.cloneNode(!1),n=!1;for(let r of e.childNodes){let e=a(r);if(e&&(t.appendChild(e),n=!0),i&&!e)break}return n||[`BR`,`IMG`,`HR`].includes(e.tagName)?t:null}return null},o=document.createElement(`div`);for(let e of n.body.childNodes){let t=a(e);if(t&&o.appendChild(t),i)break}let s=e=>{let t=Array.from(e.children);for(let e of t)s(e),e.children.length===0&&e.textContent.trim()===``&&![`BR`,`IMG`,`HR`].includes(e.tagName)&&e.remove()};return s(o),{html:o.innerHTML,isTruncated:i}}catch(t){return console.error(`Error truncating HTML`,t),{html:e,isTruncated:!1}}},a=e=>e.productTypeId===1145?`/about/chairman-message`:e.productTypeId===1151?`/about/intro-shaheed-bhagat-singh`:`/about/${e.slug||e.menu_slug||``}`;return!e||e.length===0?null:(0,u.jsxs)(u.Fragment,{children:[e.map((e,t)=>{let n=e.productCategoryDocuments?.[0]?.fileupload||``,r=n&&/\.(jpeg|jpg|gif|png|webp|svg)$/i.test(n),o=a(e),{html:c,isTruncated:l}=i(e.descrption,100);return(0,u.jsxs)(`section`,{className:`why-choose-section`,children:[(0,u.jsx)(`div`,{className:`why-bg-circle why-bg-circle-one`}),(0,u.jsx)(`div`,{className:`why-bg-circle why-bg-circle-two`}),(0,u.jsx)(`div`,{className:`why-choose-container`,children:(0,u.jsxs)(`div`,{className:r?`why-choose-row`:`why-choose-row why-choose-row-no-image`,children:[r&&(0,u.jsx)(`div`,{className:`why-choose-image-col`,children:(0,u.jsxs)(`div`,{className:`why-choose-image-wrapper`,children:[(0,u.jsx)(`span`,{className:`image-decoration decoration-one`}),(0,u.jsx)(`span`,{className:`image-decoration decoration-two`}),(0,u.jsx)(`span`,{className:`image-dots image-dots-one`}),(0,u.jsx)(`span`,{className:`image-dots image-dots-two`}),(0,u.jsx)(`img`,{src:n,alt:e.name||`Shaheed Bhagat Singh Health and Education`,className:`why-choose-image`,loading:`lazy`,width:`480`,height:`430`,onError:e=>{e.currentTarget.style.display=`none`}})]})}),(0,u.jsx)(`div`,{className:`why-choose-content-col`,children:(0,u.jsxs)(`div`,{className:`why-choose-content`,children:[(0,u.jsxs)(`div`,{className:`section-label`,children:[(0,u.jsx)(`span`,{className:`label-line`}),(0,u.jsx)(`span`,{className:`label-text`,children:e.productType||``})]}),(0,u.jsx)(`h2`,{className:`why-choose-title`,children:e.name}),(0,u.jsxs)(`div`,{className:`heading-decoration`,children:[(0,u.jsx)(`span`,{className:`heading-dot`}),(0,u.jsx)(`span`,{className:`heading-line`}),(0,u.jsx)(`span`,{className:`heading-dot`})]}),(0,u.jsx)(`div`,{className:`about-description`,dangerouslySetInnerHTML:{__html:c}}),l&&(0,u.jsxs)(s,{to:o,state:{id:e.productTypeId},className:`read-more-btn`,"aria-label":`Read more about ${e.name}`,children:[(0,u.jsx)(`span`,{children:`Read More`}),(0,u.jsx)(`i`,{className:`fas fa-arrow-right`})]}),(0,u.jsxs)(`div`,{className:`why-choose-footer`,children:[(0,u.jsx)(`span`,{className:`footer-line`}),(0,u.jsx)(`span`,{className:`footer-dot`}),(0,u.jsx)(`span`,{className:`footer-small-line`})]})]})})]})})]},e.id??t)}),(0,u.jsx)(`style`,{children:`
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
                `})]})}function _(){let e=[{name:`Facebook`,subtitle:`Follow us on Facebook`,url:`https://www.facebook.com/share/1Hb4vQDMov`,icon:`facebook`,gradient:`linear-gradient(135deg, #1877f2 0%, #0a5dc2 100%)`,glow:`rgba(24, 119, 242, 0.35)`},{name:`Instagram`,subtitle:`Follow us on Instagram`,url:`https://www.instagram.com/sbsheofficial`,icon:`instagram`,gradient:`linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)`,glow:`rgba(220, 39, 67, 0.35)`},{name:`YouTube`,subtitle:`Subscribe on YouTube`,url:`https://youtube.com/@sbshe-sm`,icon:`youtube`,gradient:`linear-gradient(135deg, #ff0000 0%, #cc0000 100%)`,glow:`rgba(255, 0, 0, 0.35)`},{name:`LinkedIn`,subtitle:`Connect on LinkedIn`,url:`https://www.linkedin.com/company/sbshe`,icon:`linkedin`,gradient:`linear-gradient(135deg, #0077b5 0%, #005885 100%)`,glow:`rgba(0, 119, 181, 0.35)`}],t=[{name:`SBSHE SAATHI`,url:`https://appweb.shaheedbhagatsinghhealthandeducation.com/download/app.apk`,image:`/assets/img/Logo.webp`,gradient:`linear-gradient(135deg, #3ddc84 0%, #0d8f4e 100%)`,glow:`rgba(61, 220, 132, 0.35)`},{name:`VIDYAMRIT`,url:`https://vidyaamritapp.shaheedbhagatsinghhealthandeducation.com/download/Vidyaamrit.apk`,image:`/assets/img/unnamed.webp`,gradient:`linear-gradient(135deg, #3ddc84 0%, #0d8f4e 100%)`,glow:`rgba(61, 220, 132, 0.35)`}],n=()=>(0,u.jsx)(`svg`,{"aria-hidden":`true`,focusable:`false`,viewBox:`0 0 24 24`,fill:`currentColor`,width:`20`,height:`20`,children:(0,u.jsx)(`path`,{d:`M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z`})}),r=()=>(0,u.jsx)(`svg`,{"aria-hidden":`true`,focusable:`false`,viewBox:`0 0 24 24`,fill:`currentColor`,width:`20`,height:`20`,children:(0,u.jsx)(`path`,{d:`M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z`})}),i=()=>(0,u.jsx)(`svg`,{"aria-hidden":`true`,focusable:`false`,viewBox:`0 0 24 24`,fill:`currentColor`,width:`20`,height:`20`,children:(0,u.jsx)(`path`,{d:`M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z`})}),a=()=>(0,u.jsx)(`svg`,{"aria-hidden":`true`,focusable:`false`,viewBox:`0 0 24 24`,fill:`currentColor`,width:`20`,height:`20`,children:(0,u.jsx)(`path`,{d:`M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z`})}),o=()=>(0,u.jsx)(`svg`,{"aria-hidden":`true`,focusable:`false`,viewBox:`0 0 24 24`,fill:`currentColor`,width:`45`,height:`45`,children:(0,u.jsx)(`path`,{d:`M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396`})}),s=e=>{switch(e){case`facebook`:return(0,u.jsx)(n,{});case`instagram`:return(0,u.jsx)(r,{});case`youtube`:return(0,u.jsx)(i,{});case`linkedin`:return(0,u.jsx)(a,{});default:return null}},c=e=>{e!==`#`&&window.open(e,`_blank`,`noopener,noreferrer`)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`section`,{className:`sa-links-section`,children:(0,u.jsxs)(`div`,{className:`sa-container`,children:[(0,u.jsxs)(`div`,{className:`sa-heading`,children:[(0,u.jsx)(`span`,{className:`sa-heading-line`}),(0,u.jsx)(`h2`,{children:`Download Our Apps`}),(0,u.jsx)(`span`,{className:`sa-heading-line`})]}),(0,u.jsxs)(`div`,{className:`sa-section-block`,children:[(0,u.jsx)(`div`,{className:`sa-block-title`,children:(0,u.jsx)(`span`,{children:` `})}),(0,u.jsx)(`div`,{className:`sa-cards-grid sa-app-grid`,children:t.map(e=>(0,u.jsxs)(`button`,{type:`button`,className:`sa-card sa-card-vertical`,onClick:()=>c(e.url),"aria-label":`Download ${e.name} app`,style:{"--sa-gradient":e.gradient,"--sa-glow":e.glow},children:[(0,u.jsx)(`div`,{className:`sa-card-image-box`,children:e.image?(0,u.jsx)(`img`,{src:e.image,alt:e.name,className:`sa-card-image`,loading:`lazy`,width:`200`,height:`140`}):(0,u.jsx)(`div`,{className:`sa-card-image-placeholder`,children:(0,u.jsx)(o,{})})}),(0,u.jsx)(`span`,{className:`sa-card-app-name`,children:e.name})]},e.name))})]})]})}),(0,u.jsx)(`section`,{className:`sa-links-section`,children:(0,u.jsxs)(`div`,{className:`sa-container`,children:[(0,u.jsxs)(`div`,{className:`sa-heading`,children:[(0,u.jsx)(`span`,{className:`sa-heading-line`}),(0,u.jsx)(`h2`,{children:`Connect With Us`}),(0,u.jsx)(`span`,{className:`sa-heading-line`})]}),(0,u.jsxs)(`div`,{className:`sa-section-block`,children:[(0,u.jsx)(`div`,{className:`sa-block-title`,children:(0,u.jsx)(`span`,{children:`Social Media`})}),(0,u.jsx)(`div`,{className:`sa-cards-grid sa-social-grid`,children:e.map(e=>(0,u.jsxs)(`button`,{type:`button`,className:`sa-card sa-card-horizontal`,onClick:()=>c(e.url),"aria-label":e.subtitle,style:{"--sa-gradient":e.gradient,"--sa-glow":e.glow},children:[(0,u.jsx)(`div`,{className:`sa-card-icon`,children:s(e.icon)}),(0,u.jsxs)(`div`,{className:`sa-card-info`,children:[(0,u.jsx)(`span`,{className:`sa-card-name`,children:e.name}),(0,u.jsx)(`span`,{className:`sa-card-subtitle`,children:e.subtitle})]}),(0,u.jsx)(`div`,{className:`sa-card-arrow`,children:(0,u.jsx)(`i`,{className:`bi bi-arrow-right`,"aria-hidden":`true`})})]},e.name))})]})]})}),(0,u.jsx)(`style`,{children:`
          /* Aapka saara original CSS yahan aayega, maine isme koi change nahi kiya hai */
          .sa-links-section { position: relative; padding: 60px 0; background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #fff8f2 100%); overflow: hidden; }
          .sa-container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 20px; }
          .sa-heading { display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 40px; }
          .sa-heading-line { width: 55px; height: 3px; border-radius: 10px; background: linear-gradient(90deg, #07567f, #ff6600); }
          .sa-heading h2 { margin: 0; color: #063d59; font-size: 32px; font-weight: 800; letter-spacing: -0.5px; font-family: "Baskerville", "Times New Roman", Georgia, serif; }
          .sa-section-block { margin-bottom: 40px; }
          .sa-section-block:last-child { margin-bottom: 0; }
          .sa-block-title { margin-bottom: 16px; padding-bottom: 10px; border-bottom: 2px solid #edf0f5; }
          .sa-block-title span { color: #063d59; font-size: 17px; font-weight: 800; letter-spacing: 0.3px; text-transform: uppercase; }
          .sa-cards-grid { display: grid; gap: 16px; }
          .sa-social-grid { grid-template-columns: repeat(4, 1fr); }
          .sa-app-grid { grid-template-columns: repeat(2, 1fr); max-width: 700px; margin: 0 auto; gap: 24px; }
          .sa-card { position: relative; background: #ffffff; border: 1px solid #edf0f5; border-radius: 16px; cursor: pointer; text-align: left; font-family: inherit; overflow: hidden; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04); transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1); }
          .sa-card:hover { transform: translateY(-4px); border-color: transparent; box-shadow: 0 12px 30px var(--sa-glow), 0 4px 10px rgba(15, 23, 42, 0.08); }
          .sa-card-horizontal { display: flex; align-items: center; gap: 16px; padding: 18px 20px; }
          .sa-card-icon { width: 48px; height: 48px; min-width: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #ffffff; background: var(--sa-gradient); box-shadow: 0 4px 12px var(--sa-glow); transition: transform 0.28s ease; }
          .sa-card-icon svg { fill: currentColor; }
          .sa-card:hover .sa-card-icon { transform: scale(1.08) rotate(-5deg); }
          .sa-card-info { flex: 1; display: flex; flex-direction: column; gap: 4px; min-width: 0; }
          .sa-card-name { color: #1c2430; font-size: 16px; font-weight: 800; }
          .sa-card-subtitle { color: #7a8794; font-size: 13px; font-weight: 500; line-height: 1.35; }
          .sa-card-arrow { width: 32px; height: 32px; min-width: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #f1f5f9; color: #64748b; transition: all 0.28s ease; }
          .sa-card-arrow i { font-size: 14px; }
          .sa-card:hover .sa-card-arrow { background: var(--sa-gradient); color: #ffffff; transform: translateX(3px); }
          .sa-card-vertical { display: flex; flex-direction: column; align-items: center; padding: 24px 20px; text-align: center; gap: 16px; }
          .sa-card-image-box { width: 100%; height: 140px; display: flex; align-items: center; justify-content: center; background: #f8fafc; border-radius: 14px; border: 1px solid #edf0f5; padding: 12px; overflow: hidden; transition: all 0.3s ease; }
          .sa-card-vertical:hover .sa-card-image-box { background: #ffffff; transform: scale(1.02); }
          .sa-card-image { max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; display: block; transition: transform 0.4s ease; }
          .sa-card-vertical:hover .sa-card-image { transform: scale(1.06); }
          .sa-card-image-placeholder { width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--sa-gradient); color: #ffffff; box-shadow: 0 6px 18px var(--sa-glow); transition: transform 0.3s ease; }
          .sa-card-vertical:hover .sa-card-image-placeholder { transform: scale(1.08) rotate(-5deg); }
          .sa-card-app-name { color: #1c2430; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
          @media (max-width: 991px) { .sa-social-grid { grid-template-columns: repeat(2, 1fr); } .sa-heading h2 { font-size: 26px; } }
          @media (max-width: 767px) { .sa-links-section { padding: 40px 0; } .sa-container { padding: 0 16px; } .sa-social-grid { grid-template-columns: 1fr; } .sa-app-grid { gap: 16px; max-width: 100%; } .sa-heading h2 { font-size: 22px; } .sa-heading-line { width: 40px; } .sa-block-title span { font-size: 15px; } .sa-card-horizontal { padding: 16px 18px; gap: 14px; } .sa-card-icon { width: 42px; height: 42px; min-width: 42px; } .sa-card-name { font-size: 15px; } .sa-card-subtitle { font-size: 12px; } .sa-card-vertical { padding: 20px 16px; } .sa-card-image-box { height: 120px; } .sa-card-app-name { font-size: 15px; } }
          @media (max-width: 480px) { .sa-heading h2 { font-size: 19px; } .sa-heading-line { width: 30px; } .sa-card-horizontal { padding: 14px 16px; gap: 12px; } .sa-card-icon { width: 38px; height: 38px; min-width: 38px; } .sa-card-arrow { width: 28px; height: 28px; min-width: 28px; } .sa-card-image-box { height: 100px; padding: 8px; } .sa-card-app-name { font-size: 14px; } }
        `})]})}var v=(0,l.lazy)(()=>i(()=>import(`./index-CTUkKMAp.js`).then(e=>e.t),__vite__mapDeps([0,1,2,3])));function y(){let[e,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=setTimeout(()=>{t(!0)},8e3);return()=>clearTimeout(e)},[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(f,{}),(0,u.jsx)(p,{}),(0,u.jsx)(d,{}),(0,u.jsx)(g,{}),(0,u.jsx)(m,{}),(0,u.jsx)(c,{}),(0,u.jsx)(_,{}),(0,u.jsx)(h,{}),e&&(0,u.jsx)(l.Suspense,{fallback:(0,u.jsx)(`div`,{children:`Loading Form...`}),children:(0,u.jsx)(v,{isOpen:e,onClose:()=>t(!1)})})]})}export{y as default};