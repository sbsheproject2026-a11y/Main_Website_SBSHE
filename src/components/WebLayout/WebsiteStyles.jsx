 import "@fortawesome/fontawesome-free/css/all.min.css";

function WebsiteStyles() {
    return (
        <>
            <style>
                {`

                /* =====================================================
                   GOOGLE TRANSLATE - COMPLETELY HIDDEN UI
                   Translation background me working rahegi.
                ====================================================== */


                /* Google Translate main widget */
                #google_translate_element {
                    display: none !important;
                    visibility: hidden !important;
                    width: 0 !important;
                    height: 0 !important;
                    overflow: hidden !important;
                }


                /* Google Translate gadget */
                .goog-te-gadget {
                    display: none !important;
                    visibility: hidden !important;
                }


                .goog-te-gadget-simple {
                    display: none !important;
                    visibility: hidden !important;
                }


                /* Google logo */
                .goog-logo-link {
                    display: none !important;
                    visibility: hidden !important;
                }


                .goog-te-gadget-icon {
                    display: none !important;
                    visibility: hidden !important;
                }


                /* =====================================================
                   GOOGLE TRANSLATE TOP BANNER
                ====================================================== */

                .goog-te-banner-frame,
                .goog-te-banner-frame.skiptranslate {

                    display: none !important;

                    visibility: hidden !important;

                    opacity: 0 !important;

                    width: 0 !important;

                    height: 0 !important;

                    border: 0 !important;

                    position: absolute !important;

                    top: -9999px !important;

                    left: -9999px !important;
                }


                /* Google Translate iframe */

                iframe.goog-te-banner-frame {

                    display: none !important;

                    visibility: hidden !important;

                    opacity: 0 !important;

                    width: 0 !important;

                    height: 0 !important;

                    position: absolute !important;

                    top: -9999px !important;

                    left: -9999px !important;
                }


                /* =====================================================
                   GOOGLE TRANSLATE BALLOON
                ====================================================== */

                .goog-te-balloon-frame {

                    display: none !important;

                    visibility: hidden !important;

                    opacity: 0 !important;
                }


                /* =====================================================
                   GOOGLE TRANSLATE MENU
                ====================================================== */

                .goog-te-menu-frame {

                    visibility: hidden !important;
                }


                /* =====================================================
                   REMOVE GOOGLE BODY OFFSET
                ====================================================== */

                html {

                    margin-top: 0 !important;

                    padding-top: 0 !important;
                }


                body {

                    top: 0 !important;

                    margin-top: 0 !important;

                    padding-top: 0 !important;
                }


                body.translated-ltr {

                    top: 0 !important;

                    margin-top: 0 !important;
                }


                body.translated-rtl {

                    top: 0 !important;

                    margin-top: 0 !important;
                }


                /* =====================================================
                   GOOGLE TRANSLATE TOOLBAR BODY OFFSET
                ====================================================== */

                body > .skiptranslate {

                    display: none !important;

                    visibility: hidden !important;
                }


                body > iframe.skiptranslate {

                    display: none !important;

                    visibility: hidden !important;

                    height: 0 !important;

                    width: 0 !important;
                }


                /* =====================================================
                   PREVENT GOOGLE TRANSLATE FROM ADDING TOP SPACE
                ====================================================== */

                .skiptranslate {

                    margin-top: 0 !important;
                }


                `
                }
            </style>
        </>
    );
}

export default WebsiteStyles;
