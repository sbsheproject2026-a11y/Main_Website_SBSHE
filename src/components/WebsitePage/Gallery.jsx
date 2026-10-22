 import React, { useEffect, useState } from "react";
import {   getWebsiteContentdata } from "./HomeService";
import { useNavigate } from "react-router-dom";


const Gallery = () => {

    const [gallery, setGallery] = useState([]);
    const [activeImage, setActiveImage] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();


    // =====================================================
    // LOAD GALLERY
    // =====================================================

    useEffect(() => {
        loadGallery();
    }, []);


    const loadGallery = async () => {

        try {

            setLoading(true);

            const data = await getWebsiteContentdata(0);

            const activeData = (data || []).filter(
                (item) => item.is_active === true
            );

            setGallery(activeData);

        }
        catch (error) {

            console.log("Gallery data error:", error);

            setGallery([]);

        }
        finally {

            setLoading(false);

        }

    };


    // =====================================================
    // IMAGE URL
    // =====================================================

    const getImage = (item) => {

        return item?.file || null;

    };


    // =====================================================
    // OPEN IMAGE
    // =====================================================

    const openImage = (item) => {

        setActiveImage(item);

    };


    // =====================================================
    // CLOSE IMAGE
    // =====================================================

    const closeImage = () => {

        setActiveImage(null);

    };


    // =====================================================
    // ESC KEY
    // =====================================================

    useEffect(() => {

        const handleEscape = (event) => {

            if (event.key === "Escape") {

                setActiveImage(null);

            }

        };


        document.addEventListener(
            "keydown",
            handleEscape
        );


        return () => {

            document.removeEventListener(
                "keydown",
                handleEscape
            );

        };

    }, []);


    // =====================================================
    // LOADING
    // =====================================================

    if (loading) {

        return (

            <section className="sbshe-gallery-section">

                <div className="container">

                    <div className="sbshe-gallery-loading">

                        <div className="spinner-border text-primary"></div>

                    </div>

                </div>

            </section>

        );

    }


    // =====================================================
    // NO DATA
    // =====================================================

    if (!gallery.length) {

        return null;

    }


    // =====================================================
    // MAX 6 IMAGES
    // =====================================================

    const galleryItems = gallery.slice(0, 6);


    return (

        <>

            <style>{`

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

            `}</style>


            {/* =================================================
                GALLERY SECTION
            ================================================= */}

            <section className="sbshe-gallery-section">

                <div className="container">


                    {/* =========================================
                        HEADING
                    ========================================= */}

                    <div className="sbshe-gallery-heading">

                        <div className="sbshe-gallery-label">

                            <span></span>

                            OUR GALLERY

                            <span></span>

                        </div>


                        <h2 className="sbshe-gallery-title">

                            Campus Memories

                        </h2>


                        <p className="sbshe-gallery-subtitle">

                            Explore the memorable moments,
                            events and activities of SBSHE.

                        </p>

                    </div>


                    {/* =========================================
                        GALLERY GRID
                    ========================================= */}

                    <div className="sbshe-gallery-grid">

                        {galleryItems.map((item, index) => {

                            const image = getImage(item);

                            if (!image) {

                                return null;

                            }


                            return (

                                <div
                                    key={
                                        item.id ||
                                        index
                                    }
                                    className="sbshe-gallery-item"
                                    onClick={() =>
                                        openImage(item)
                                    }
                                >


                                    {/* =================================
                                        IMAGE AREA
                                    ================================= */}

                                    <div className="sbshe-gallery-image">

                                        <img
                                            src={image}
                                            alt={
                                                item.name ||
                                                "Gallery"
                                            }
                                        />


                                        {/* ================================
                                            OVERLAY
                                        ================================= */}

                                        <div className="sbshe-gallery-overlay">

                                            <div className="sbshe-gallery-overlay-content">


                                                <div className="sbshe-gallery-zoom">

                                                    <i className="bi bi-zoom-in"></i>

                                                </div>


                                                <h5>

                                                    {item.name ||
                                                        " Campus"}

                                                </h5>


                                                {item.description && (

                                                    <p>

                                                        {item.description}

                                                    </p>

                                                )}

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </section>


            {/* =================================================
                LIGHTBOX
            ================================================= */}

            {activeImage && (

                <div
                    className="sbshe-gallery-lightbox"
                    onClick={closeImage}
                >


                    {/* =========================================
                        CLOSE
                    ========================================= */}

                    <button
                        type="button"
                        className="sbshe-gallery-close"
                        onClick={closeImage}
                    >

                        <i className="bi bi-x-lg"></i>

                    </button>


                    {/* =========================================
                        LIGHTBOX CONTENT
                    ========================================= */}

                    <div
                        className="sbshe-gallery-lightbox-content"
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >


                        <img
                            src={getImage(activeImage)}
                            alt={
                                activeImage.name ||
                                "Gallery"
                            }
                        />


                        {activeImage.name && (

                            <div className="sbshe-gallery-lightbox-caption">

                                <h5>

                                    {activeImage.name}

                                </h5>


                                {activeImage.description && (

                                    <p>

                                        {activeImage.description}

                                    </p>

                                )}

                            </div>

                        )}

                    </div>

                </div>

            )}

        </>

    );

};


export default Gallery;