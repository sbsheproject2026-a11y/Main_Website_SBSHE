 import React, { useState, useEffect, lazy, Suspense } from "react";
import ExpertQueryForm from "../WebsiteForms/ExpertQueryForm";
import Announcement from "./Announcement";
import SliderPage from "./SliderPage";
import EducationalStatistics from "./EducationalStatistics";
import ProgrammeListing from "./ProgrammeListing";
import Testimonial from "./Testimonial";
import WhyChosseUs from "./WhyChosseUs";
import SocialAppLinks from "./SocialAppLinks";

const ModelPage = lazy(() => import("./ModelPage"));

function Home() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // ✅ TESTING KE LIYE: sessionStorage hata diya hai taaki baar-baar dikhe
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 8000); // 8 second baad popup aayega (Testing ke liye)

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <SliderPage />
            <EducationalStatistics />
            <Announcement />
            <WhyChosseUs />
            <ProgrammeListing />
            <ExpertQueryForm />
            <SocialAppLinks />
            <Testimonial />
            
            {/* ✅ Popup yahan render ho raha hai */}
            {showModal && (
                <Suspense fallback={<div>Loading Form...</div>}>
                    <ModelPage isOpen={showModal} onClose={() => setShowModal(false)} />
                </Suspense>
            )}
        </>
    );
}
export default Home;