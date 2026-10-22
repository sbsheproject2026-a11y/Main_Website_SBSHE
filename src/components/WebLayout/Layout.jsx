 import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import PageHeader from "./PageHeader";
import Topbar from "./Topbar";
import FloatingContactButtons from "./FloatingContactButtons";
import ModelPage from "../WebsitePage/ModelPage";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Layout() {
    // ✅ Enquiry Modal ki state manage karein
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [enquiryTab, setEnquiryTab] = useState("student");

    // ✅ Jab floating button se click aaye
    const handleEnquiryClick = (type) => {
        setEnquiryTab(type); // "student" ya "franchise"
        setIsModalOpen(true); // Modal open karein
    };

    return (
        <>
            <Topbar />
            <Header />
            <PageHeader />

            {/* ✅ FIX: Page Content ko <main> tag mein wrap kiya */}
            <main>
                <Outlet />
            </main>

            <Footer />

            {/* =================================================
                FLOATING CONTACT BUTTONS
            ================================================== */}
            <FloatingContactButtons onEnquiryClick={handleEnquiryClick} />

            {/* =================================================
                ENQUIRY MODAL (ModelPage)
            ================================================== */}
            <ModelPage
                isOpen={isModalOpen}
                initialTab={enquiryTab}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}

export default Layout;