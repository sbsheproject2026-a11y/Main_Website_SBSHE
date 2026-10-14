 import React, { useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import PageHeader from "./PageHeader";
import WebsiteStyles from "./WebsiteStyles";
import Topbar from "./Topbar";
import FloatingContactButtons from "./FloatingContactButtons";


function Layout() {

    // =====================================================
    // GOOGLE TRANSLATE LOAD
    // =====================================================

    useEffect(() => {

        /*
         * Google Translate script already loaded?
         */

        if (
            document.getElementById(
                "google-translate-script"
            )
        ) {
            return;
        }


        /*
         * Google Translate initialization
         */

        window.googleTranslateElementInit =
            () => {

                if (
                    window.google &&
                    window.google.translate
                ) {

                    new window.google.translate.TranslateElement(
                        {
                            pageLanguage: "en",

                            includedLanguages:
                                "en,hi",

                            autoDisplay: false
                        },

                        "google_translate_element"
                    );

                }

            };


        /*
         * Google Translate script
         */

        const script =
            document.createElement("script");


        script.id =
            "google-translate-script";


        script.src =
            "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";


        script.async = true;


        document.body.appendChild(script);


    }, []);


    // =====================================================
    // GOOGLE TRANSLATE BANNER HIDE
    // =====================================================

    useEffect(() => {

        const hideGoogleTranslateUI = () => {

            /*
             * Google Translate top banner
             */

            const banner =
                document.querySelector(
                    ".goog-te-banner-frame"
                );


            if (banner) {

                banner.style.display =
                    "none";

                banner.style.visibility =
                    "hidden";

                banner.style.opacity =
                    "0";

                banner.style.height =
                    "0px";

                banner.style.width =
                    "0px";

                banner.style.top =
                    "-9999px";

            }


            /*
             * Google Translate iframe
             */

            const iframe =
                document.querySelector(
                    "iframe.goog-te-banner-frame"
                );


            if (iframe) {

                iframe.style.display =
                    "none";

                iframe.style.visibility =
                    "hidden";

                iframe.style.opacity =
                    "0";

                iframe.style.height =
                    "0px";

                iframe.style.width =
                    "0px";

                iframe.style.top =
                    "-9999px";

            }


            /*
             * Google Translate skiptranslate
             */

            const skipTranslate =
                document.querySelectorAll(
                    "body > .skiptranslate"
                );


            skipTranslate.forEach(
                (element) => {

                    element.style.display =
                        "none";

                    element.style.visibility =
                        "hidden";

                    element.style.height =
                        "0px";

                    element.style.width =
                        "0px";

                }
            );


            /*
             * Google Translate body offset
             */

            document.body.style.top =
                "0px";

            document.body.style.marginTop =
                "0px";


            document.documentElement.style.marginTop =
                "0px";

        };


        /*
         * Immediately run
         */

        hideGoogleTranslateUI();


        /*
         * Google Translate dynamically
         * DOM change karta hai.
         */

        const observer =
            new MutationObserver(() => {

                hideGoogleTranslateUI();

            });


        observer.observe(
            document.body,
            {
                childList: true,

                subtree: true,

                attributes: true
            }
        );


        /*
         * Re-check after page load
         */

        const timer1 =
            setTimeout(
                hideGoogleTranslateUI,
                500
            );


        const timer2 =
            setTimeout(
                hideGoogleTranslateUI,
                1000
            );


        const timer3 =
            setTimeout(
                hideGoogleTranslateUI,
                2000
            );


        return () => {

            observer.disconnect();

            clearTimeout(timer1);

            clearTimeout(timer2);

            clearTimeout(timer3);

        };

    }, []);


    // =====================================================
    // RETURN
    // =====================================================

    return (
        <>

            <WebsiteStyles />


            {/* =================================================
                GOOGLE TRANSLATE
                HIDDEN CONTAINER
            ================================================== */}

            <div
                id="google_translate_element"
                style={{
                    display: "none",

                    visibility: "hidden",

                    width: "0",

                    height: "0",

                    overflow: "hidden"
                }}
            ></div>


            {/* =================================================
                TOPBAR
            ================================================== */}

            <Topbar />


            {/* =================================================
                HEADER
            ================================================== */}

            <Header />


            {/* =================================================
                PAGE HEADER
            ================================================== */}

            <PageHeader />


            {/* =================================================
                PAGE CONTENT
            ================================================== */}

            <Outlet />


            {/* =================================================
                FOOTER
            ================================================== */}

            <Footer />

            {/* =================================================
    FLOATING CONTACT BUTTONS (WhatsApp + Call + Top)
================================================== */}

<FloatingContactButtons />

        </>
    );

}


export default Layout;