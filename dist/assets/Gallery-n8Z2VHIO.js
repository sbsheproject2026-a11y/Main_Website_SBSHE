import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t,l as n,p as r,u as i}from"./index-Dlx9wpcq.js";var a=e(t(),1),o=i(),s=()=>{let[e,t]=(0,a.useState)([]),[i,s]=(0,a.useState)(null),[c,l]=(0,a.useState)(!0);r(),(0,a.useEffect)(()=>{u()},[]);let u=async()=>{try{l(!0);let e=(await n(0)||[]).filter(e=>e.is_active===!0);t(e)}catch(e){console.log(`Gallery data error:`,e),t([])}finally{l(!1)}},d=e=>e?.file||null,f=e=>{s(e)},p=()=>{s(null)};if((0,a.useEffect)(()=>{let e=e=>{e.key===`Escape`&&s(null)};return document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`keydown`,e)}},[]),c)return(0,o.jsx)(`section`,{className:`sbshe-gallery-section`,children:(0,o.jsx)(`div`,{className:`container`,children:(0,o.jsx)(`div`,{className:`sbshe-gallery-loading`,children:(0,o.jsx)(`div`,{className:`spinner-border text-primary`})})})});if(!e.length)return null;let m=e.slice(0,6);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`style`,{children:`

/* =====================================================
   SBSHE GALLERY SECTION
===================================================== */

.sbshe-gallery-section {

    padding: 80px 0;

    background: #ffffff;

    overflow: hidden;

}


/* =====================================================
   HEADING
===================================================== */

.sbshe-gallery-heading {

    text-align: center;

    margin-bottom: 45px;

}


.sbshe-gallery-label {

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 12px;

    color: #0d6efd;

    font-size: 13px;

    font-weight: 700;

    letter-spacing: 1.5px;

    margin-bottom: 10px;

}


.sbshe-gallery-label span {

    width: 35px;

    height: 2px;

    background: #0d6efd;

    display: inline-block;

}


.sbshe-gallery-title {

    margin: 0;

    color: #0f172a;

    font-size: 36px;

    font-weight: 700;

}


.sbshe-gallery-subtitle {

    max-width: 650px;

    margin: 12px auto 0;

    color: #64748b;

    font-size: 15px;

    line-height: 1.6;

}


/* =====================================================
   GALLERY GRID
===================================================== */

.sbshe-gallery-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;

    max-width: 1150px;

    margin: 0 auto;

}


/* =====================================================
   GALLERY ITEM
===================================================== */

.sbshe-gallery-item {

    position: relative;

    width: 100%;

    height: 270px;

    overflow: hidden;

    border-radius: 16px;

    cursor: pointer;

    background: #ffffff;

    border: 1px solid #e2e8f0;

    box-shadow:
        0 8px 25px rgba(15, 23, 42, 0.08);

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

}


/* =====================================================
   CARD HOVER
===================================================== */

.sbshe-gallery-item:hover {

    transform: translateY(-5px);

    box-shadow:
        0 15px 35px rgba(15, 23, 42, 0.14);

}


/* =====================================================
   IMAGE AREA
===================================================== */

.sbshe-gallery-image {

    position: relative;

    width: 100%;

    height: 100%;

    display: flex;

    align-items: center;

    justify-content: center;

    background: #ffffff;

    overflow: hidden;

}


/* =====================================================
   IMAGE
   COMPLETE IMAGE - NO CROP
===================================================== */

.sbshe-gallery-image img {

    width: 100%;

    height: 100%;

    max-width: 100%;

    max-height: 100%;

    object-fit: contain;

    object-position: center center;

    display: block;

}


/* =====================================================
   IMPORTANT
   NO ZOOM / NO CROP
===================================================== */

.sbshe-gallery-item:hover
.sbshe-gallery-image img {

    transform: none;

}


/* =====================================================
   OVERLAY
===================================================== */

.sbshe-gallery-overlay {

    position: absolute;

    inset: 0;

    display: flex;

    align-items: flex-end;

    padding: 20px;

    background:
        linear-gradient(
            to top,
            rgba(15, 23, 42, 0.85),
            rgba(15, 23, 42, 0.05) 75%
        );

    opacity: 0;

    transition:
        opacity 0.3s ease;

}


.sbshe-gallery-item:hover
.sbshe-gallery-overlay {

    opacity: 1;

}


/* =====================================================
   OVERLAY CONTENT
===================================================== */

.sbshe-gallery-overlay-content {

    width: 100%;

    color: #ffffff;

    transform: translateY(10px);

    transition:
        transform 0.3s ease;

}


.sbshe-gallery-item:hover
.sbshe-gallery-overlay-content {

    transform: translateY(0);

}


.sbshe-gallery-overlay h5 {

    margin: 10px 0 4px;

    font-size: 17px;

    font-weight: 700;

}


.sbshe-gallery-overlay p {

    margin: 0;

    color:
        rgba(255, 255, 255, 0.8);

    font-size: 12px;

    line-height: 1.5;

    display: -webkit-box;

    -webkit-line-clamp: 2;

    -webkit-box-orient: vertical;

    overflow: hidden;

}


/* =====================================================
   ZOOM ICON
===================================================== */

.sbshe-gallery-zoom {

    width: 44px;

    height: 44px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 50%;

    background:
        rgba(255, 255, 255, 0.95);

    color: #0d6efd;

    font-size: 18px;

    box-shadow:
        0 5px 20px rgba(0, 0, 0, 0.2);

}


/* =====================================================
   LIGHTBOX
===================================================== */

.sbshe-gallery-lightbox {

    position: fixed;

    inset: 0;

    z-index: 9999;

    background:
        rgba(15, 23, 42, 0.94);

    display: flex;

    align-items: center;

    justify-content: center;

    padding: 30px;

    animation:
        galleryLightboxFade
        0.25s ease;

}


@keyframes galleryLightboxFade {

    from {

        opacity: 0;

    }

    to {

        opacity: 1;

    }

}


/* =====================================================
   LIGHTBOX CONTENT
===================================================== */

.sbshe-gallery-lightbox-content {

    position: relative;

    width: 100%;

    max-width: 1100px;

    max-height: 90vh;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

}


/* =====================================================
   LIGHTBOX IMAGE
   COMPLETE IMAGE
===================================================== */

.sbshe-gallery-lightbox-content img {

    width: auto;

    height: auto;

    max-width: 95vw;

    max-height: 78vh;

    object-fit: contain;

    object-position: center;

    display: block;

    border-radius: 10px;

    box-shadow:
        0 20px 60px rgba(0, 0, 0, 0.4);

}


/* =====================================================
   LIGHTBOX CAPTION
===================================================== */

.sbshe-gallery-lightbox-caption {

    text-align: center;

    color: #ffffff;

    margin-top: 18px;

    max-width: 800px;

}


.sbshe-gallery-lightbox-caption h5 {

    margin: 0 0 5px;

    font-size: 18px;

    font-weight: 700;

}


.sbshe-gallery-lightbox-caption p {

    margin: 0;

    color:
        rgba(255, 255, 255, 0.75);

    font-size: 13px;

}


/* =====================================================
   CLOSE BUTTON
===================================================== */

.sbshe-gallery-close {

    position: fixed;

    top: 25px;

    right: 30px;

    width: 45px;

    height: 45px;

    border: none;

    border-radius: 50%;

    background:
        rgba(255, 255, 255, 0.12);

    color: #ffffff;

    font-size: 18px;

    display: flex;

    align-items: center;

    justify-content: center;

    transition:
        all 0.3s ease;

    z-index: 10000;

}


.sbshe-gallery-close:hover {

    background: #ffffff;

    color: #0f172a;

    transform: rotate(90deg);

}


/* =====================================================
   LOADING
===================================================== */

.sbshe-gallery-loading {

    min-height: 250px;

    display: flex;

    align-items: center;

    justify-content: center;

}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 991px) {

    .sbshe-gallery-section {

        padding: 70px 0;

    }


    .sbshe-gallery-grid {

        grid-template-columns:
            repeat(2, 1fr);

        gap: 18px;

    }


    .sbshe-gallery-item {

        height: 250px;

    }


    .sbshe-gallery-title {

        font-size: 32px;

    }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 767px) {

    .sbshe-gallery-section {

        padding: 60px 0;

    }


    .sbshe-gallery-heading {

        margin-bottom: 30px;

    }


    .sbshe-gallery-title {

        font-size: 28px;

    }


    .sbshe-gallery-subtitle {

        padding: 0 15px;

        font-size: 14px;

    }


    .sbshe-gallery-grid {

        grid-template-columns: 1fr;

        gap: 15px;

    }


    .sbshe-gallery-item {

        height: 250px;

    }


    /*
       Mobile par overlay always visible
    */

    .sbshe-gallery-overlay {

        opacity: 1;

        padding: 15px;

        background:
            linear-gradient(
                to top,
                rgba(15, 23, 42, 0.8),
                transparent 75%
            );

    }


    .sbshe-gallery-overlay-content {

        transform: translateY(0);

    }


    .sbshe-gallery-overlay h5 {

        font-size: 14px;

    }


    .sbshe-gallery-overlay p {

        display: none;

    }


    .sbshe-gallery-zoom {

        width: 36px;

        height: 36px;

        font-size: 15px;

    }


    .sbshe-gallery-lightbox {

        padding: 15px;

    }


    .sbshe-gallery-lightbox-content img {

        max-width: 100%;

        max-height: 70vh;

    }


    .sbshe-gallery-close {

        top: 15px;

        right: 15px;

        width: 40px;

        height: 40px;

    }

}


/* =====================================================
   SMALL MOBILE
===================================================== */

@media (max-width: 480px) {

    .sbshe-gallery-title {

        font-size: 25px;

    }


    .sbshe-gallery-item {

        height: 220px;

    }


    .sbshe-gallery-section {

        padding: 50px 0;

    }

}

            `}),(0,o.jsx)(`section`,{className:`sbshe-gallery-section`,children:(0,o.jsxs)(`div`,{className:`container`,children:[(0,o.jsxs)(`div`,{className:`sbshe-gallery-heading`,children:[(0,o.jsxs)(`div`,{className:`sbshe-gallery-label`,children:[(0,o.jsx)(`span`,{}),`OUR GALLERY`,(0,o.jsx)(`span`,{})]}),(0,o.jsx)(`h2`,{className:`sbshe-gallery-title`,children:`Campus Memories`}),(0,o.jsx)(`p`,{className:`sbshe-gallery-subtitle`,children:`Explore the memorable moments, events and activities of SBSHE.`})]}),(0,o.jsx)(`div`,{className:`sbshe-gallery-grid`,children:m.map((e,t)=>{let n=d(e);return n?(0,o.jsx)(`div`,{className:`sbshe-gallery-item`,onClick:()=>f(e),children:(0,o.jsxs)(`div`,{className:`sbshe-gallery-image`,children:[(0,o.jsx)(`img`,{src:n,alt:e.name||`Gallery`}),(0,o.jsx)(`div`,{className:`sbshe-gallery-overlay`,children:(0,o.jsxs)(`div`,{className:`sbshe-gallery-overlay-content`,children:[(0,o.jsx)(`div`,{className:`sbshe-gallery-zoom`,children:(0,o.jsx)(`i`,{className:`bi bi-zoom-in`})}),(0,o.jsx)(`h5`,{children:e.name||` Campus`}),e.description&&(0,o.jsx)(`p`,{children:e.description})]})})]})},e.id||t):null})})]})}),i&&(0,o.jsxs)(`div`,{className:`sbshe-gallery-lightbox`,onClick:p,children:[(0,o.jsx)(`button`,{type:`button`,className:`sbshe-gallery-close`,onClick:p,children:(0,o.jsx)(`i`,{className:`bi bi-x-lg`})}),(0,o.jsxs)(`div`,{className:`sbshe-gallery-lightbox-content`,onClick:e=>e.stopPropagation(),children:[(0,o.jsx)(`img`,{src:d(i),alt:i.name||`Gallery`}),i.name&&(0,o.jsxs)(`div`,{className:`sbshe-gallery-lightbox-caption`,children:[(0,o.jsx)(`h5`,{children:i.name}),i.description&&(0,o.jsx)(`p`,{children:i.description})]})]})]})]})};export{s as default};