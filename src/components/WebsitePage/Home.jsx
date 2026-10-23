 import React, { useState, useEffect, lazy, Suspense } from "react";

// ✅ 1. Above the Fold Components (Turant load honge)
import SliderPage from "./SliderPage";
import EducationalStatistics from "./EducationalStatistics";
import Announcement from "./Announcement";

// ✅ 2. Below the Fold Components (Lazy Load - Sirf tab load honge jab zaroorat ho)
const WhyChosseUs = lazy(() => import("./WhyChosseUs"));
const ProgrammeListing = lazy(() => import("./ProgrammeListing"));
const ExpertQueryForm = lazy(() => import("../WebsiteForms/ExpertQueryForm"));
const SocialAppLinks = lazy(() => import("./SocialAppLinks"));
const Testimonial = lazy(() => import("./Testimonial"));
const ModelPage = lazy(() => import("./ModelPage"));

// ✅ 3. Global Loader (Jab lazy components load ho rahe honge)
const SectionLoader = () => (
    <div style={{ minHeight: "300px", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
);

function Home() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 8000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* ================= ABOVE THE FOLD ================= */}
            <SliderPage />
            <EducationalStatistics />
            <Announcement />

            {/* ================= BELOW THE FOLD (Lazy Loaded) ================= */}
            <Suspense fallback={<SectionLoader />}>
                <WhyChosseUs />
                <ProgrammeListing />
                <ExpertQueryForm />
                <SocialAppLinks />
                <Testimonial />
            </Suspense>
            
            {/* ✅ Popup Lazy Loaded */}
            {showModal && (
                <Suspense fallback={null}>
                    <ModelPage isOpen={showModal} onClose={() => setShowModal(false)} />
                </Suspense>
            )}
        </>
    );
}

export default Home;