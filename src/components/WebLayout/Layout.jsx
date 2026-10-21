 import React, { useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import PageHeader from "./PageHeader";
import WebsiteStyles from "./WebsiteStyles";
import Topbar from "./Topbar";
import FloatingContactButtons from "./FloatingContactButtons";
import ModelPage from "../WebsitePage/ModelPage";
// ✅ 1. ModelPage ko import karein
 

function Layout() {
    // ✅ 2. Enquiry Modal ki state manage karein
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [enquiryTab, setEnquiryTab] = useState("student");

    // ✅ 3. Jab floating button se click aaye
    const handleEnquiryClick = (type) => {
        setEnquiryTab(type); // "student" ya "franchise"
        setIsModalOpen(true); // Modal open karein
    };

    // =====================================================
    // GOOGLE TRANSLATE LOAD
    // =====================================================
    useEffect(() => {
        if (document.getElementById("google-translate-script")) {
            return;
        }

        window.googleTranslateElementInit = () => {
            if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: "en",
                        includedLanguages: "en,hi",
                        autoDisplay: false,
                    },
                    "google_translate_element"
                );
            }
        };

        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    // =====================================================
    // GOOGLE TRANSLATE BANNER HIDE
    // =====================================================
    useEffect(() => {
        const hideGoogleTranslateUI = () => {
            const banner = document.querySelector(".goog-te-banner-frame");
            if (banner) {
                banner.style.display = "none";
                banner.style.visibility = "hidden";
                banner.style.opacity = "0";
                banner.style.height = "0px";
                banner.style.width = "0px";
                banner.style.top = "-9999px";
            }

            const iframe = document.querySelector("iframe.goog-te-banner-frame");
            if (iframe) {
                iframe.style.display = "none";
                iframe.style.visibility = "hidden";
                iframe.style.opacity = "0";
                iframe.style.height = "0px";
                iframe.style.width = "0px";
                iframe.style.top = "-9999px";
            }

            const skipTranslate = document.querySelectorAll("body > .skiptranslate");
            skipTranslate.forEach((element) => {
                element.style.display = "none";
                element.style.visibility = "hidden";
                element.style.height = "0px";
                element.style.width = "0px";
            });

            document.body.style.top = "0px";
            document.body.style.marginTop = "0px";
            document.documentElement.style.marginTop = "0px";
        };

        hideGoogleTranslateUI();

        const observer = new MutationObserver(() => {
            hideGoogleTranslateUI();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
        });

        const timer1 = setTimeout(hideGoogleTranslateUI, 500);
        const timer2 = setTimeout(hideGoogleTranslateUI, 1000);
        const timer3 = setTimeout(hideGoogleTranslateUI, 2000);

        return () => {
            observer.disconnect();
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return (
        <>
            <WebsiteStyles />

            {/* GOOGLE TRANSLATE HIDDEN CONTAINER */}
            <div
                id="google_translate_element"
                style={{
                    display: "none",
                    visibility: "hidden",
                    width: "0",
                    height: "0",
                    overflow: "hidden",
                }}
            ></div>

            <Topbar />
            <Header />
            <PageHeader />

            {/* PAGE CONTENT */}
            <Outlet />

            <Footer />

            {/* =================================================
                FLOATING CONTACT BUTTONS
            ================================================== */}
            {/* ✅ 4. Prop pass karein handleEnquiryClick */}
            <FloatingContactButtons onEnquiryClick={handleEnquiryClick} />

            {/* =================================================
                ENQUIRY MODAL (ModelPage)
            ================================================== */}
            {/* ✅ 5. ModelPage ko yahan render karein */}
            <ModelPage
                isOpen={isModalOpen}
                initialTab={enquiryTab}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}

export default Layout;