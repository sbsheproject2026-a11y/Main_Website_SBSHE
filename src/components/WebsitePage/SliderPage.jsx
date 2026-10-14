import React, { useEffect, useState } from "react";
import { getWebsiteContent } from "./HomeService";

function SliderPage() {
      const [activeSlide, setActiveSlide] = useState(0);
    const [sliders, setSliders] = useState([]);
    useEffect(() => {
        loadPageData();
    }, []);

    const loadPageData = async () => {
        try {
            const [
                slidersData,

            ] = await Promise.all([
                getWebsiteContent(1),

            ]);

            setSliders((slidersData || []).filter(item => item.is_active === true));

        } catch (error) {
            console.log("Page data error:", error);
        }
    };

    const slides = sliders
        .filter(item => item.is_active && item.file)
        .map(item => item.file);

    useEffect(() => {
        setActiveSlide(0);
    }, [sliders]);

    useEffect(() => {
        if (slides.length <= 1) return;

        const interval = setInterval(() => {
            setActiveSlide(prev => (prev + 1) % slides.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [slides]);

     
    return (
        <>

            <div id="header-carousel" className="carousel slide carousel-fade">
                <ol className="carousel-indicators">
                    {slides.slice().reverse().map((_, index) => (
                        <li
                            key={`slide-indicator-${index}`}
                            className={activeSlide === index ? "active" : ""}
                            onClick={() => setActiveSlide(index)}
                        />
                    ))}
                </ol>

                <div className="carousel-inner">
                    {slides.slice().reverse().map((image, index) => (
                        <div
                            key={`slide-${index}-${image}`}
                            className={`carousel-item ${activeSlide === index ? "active" : ""}`}
                        >
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="header-slide-image"
                            />
                        </div>
                    ))}
                </div>

                <style>
                    {`
.header-slide-image {
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: center;
    display: block;
}

@media (max-width: 991px) {
    .header-slide-image {
        height: 500px;
    }
}

@media (max-width: 767px) {
    .header-slide-image {
        height: 320px;
        object-fit: cover;
        object-position: center;
    }

    #header-carousel .carousel-indicators {
        bottom: 5px;
    }

    #header-carousel .carousel-indicators li {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: 0 4px;
    }
}

@media (max-width: 480px) {
    .header-slide-image {
        height: 250px;
    }
}
`}
                </style>
            </div>

        </>
    )
}

export default SliderPage