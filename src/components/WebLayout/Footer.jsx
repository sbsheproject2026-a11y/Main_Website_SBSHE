 import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getWebsiteContentdata } from '../WebsitePage/HomeService';

function Footer() {
    const [contacts, setContacts] = useState([]);
    
    // ✅ 1. Scroll button dikhane/chhipane ke liye state
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        loadContactData();

        // ✅ 2. Scroll event listener
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const loadContactData = async () => {
        try {
            const [contactsData] =
                await Promise.all([
                    getWebsiteContentdata(134),
                ]);

            setContacts(contactsData.filter(
                (item) => item.isActive === 1));

        } catch (error) {
            console.log("Page data error:", error);
        }
    };

    // ✅ 3. Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>

            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style={{ marginTop: "90px" }}>
                <div className="row pt-5">
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-md-7 mb-5">
                                <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Get In Touch</h5>
                                <div style={{ fontSize: "11px" }}
                                    dangerouslySetInnerHTML={{
                                        __html: contacts?.[0]?.descrption || ""
                                    }}
                                />

                                <div className="d-flex justify-content-start mt-4">
                                    {/* ✅ External Links ko <a> banaya aur aria-label add kiya */}
                                    <a 
                                        className="btn btn-outline-light btn-square mr-2" 
                                        href="https://youtube.com/@sbshe-sm?si=tDUXjazfu4CpAfPe" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label="Subscribe to our YouTube channel"
                                    >
                                        <i className="fab fa-youtube" aria-hidden="true"></i>
                                    </a>
                                    
                                    <a 
                                        className="btn btn-outline-light btn-square mr-2" 
                                        href="https://www.facebook.com/share/1Hb4vQDMov/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label="Follow us on Facebook"
                                    >
                                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                    </a>
                                    
                                    <a 
                                        className="btn btn-outline-light btn-square mr-2" 
                                        href="https://www.linkedin.com/company/sbshe/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label="Connect with us on LinkedIn"
                                    >
                                        <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                                    </a>
                                    
                                    <a 
                                        className="btn btn-outline-light btn-square" 
                                        href="https://www.instagram.com/sbsheofficial?utm_source=qr&stkn=Nmw0ZXNkOGwzMjlm" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label="Follow us on Instagram"
                                    >
                                        <i className="fab fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-5 mb-5">
                                <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Information Links</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <Link className="text-white mb-2" to="/approvals-achievements">
                                        <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>Approvals/Achievements
                                    </Link>
                                    <Link className="text-white mb-2" to="/programmes">
                                        <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>Programme
                                    </Link>
                                    <Link className="text-white mb-2" to="/admission-consultant-partner">
                                        <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>Admission Consultant
                                    </Link>
                                    
                                    {/* ✅ External Link ko <a> banaya */}
                                    <a className="text-white mb-2" href="https://student.shaheedbhagatsinghhealthandeducation.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>Student Support
                                    </a>
                                    <a className="text-white mb-2" href="https://sbshe.in/Rollno-Verification.aspx" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>Result
                                    </a>
                                    
                                    <Link className="text-white mb-2" to="/contact-us">
                                        <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Usefull Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            {/* ✅ Saare external links ko <a> banaya */}
                            <a className="text-white mb-2" href="https://soft.shaheedbhagatsinghhealthandeducation.com/acc-apply" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>Admission Consultant Registration
                            </a>
                            <a className="text-white mb-2" href="https://soft.shaheedbhagatsinghhealthandeducation.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>Admission Consultant Login
                            </a>

                            <a className="text-white mb-2" href="https://soft.shaheedbhagatsinghhealthandeducation.com/study-centre-apply" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>Study Centre Registration
                            </a>
                            <a className="text-white mb-2" href="https://soft.shaheedbhagatsinghhealthandeducation.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>Study Centre Login
                            </a>

                            <a className="text-white mb-2" href="https://soft.shaheedbhagatsinghhealthandeducation.com/new-student-apply" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>Student Registration
                            </a>
                            <a className="text-white mb-2" href="https://soft.shaheedbhagatsinghhealthandeducation.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>Student Login
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}>
                <div className="row">
                    <div className="col-lg-12 text-center mb-3 mb-md-0">
                        <p className="m-0 text-white">
                            &copy; <Link to="/" className="text-white text-decoration-none">2025 Shaheed Bhagat Singh Health and Education</Link>. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>

            {/* ✅ 4. Back to top button updated with React logic & inline CSS */}
            <button 
                onClick={scrollToTop}
                className="btn btn-lg btn-primary btn-lg-square back-to-top" 
                aria-label="Scroll back to top"
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    zIndex: 999,
                    display: showBackToTop ? 'flex' : 'none', // State ke hisaab se dikhega/chhipega
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '50px',
                    height: '50px',
                    border: 'none',
                    cursor: 'pointer',
                     
                }}
            >
                <i className="fa fa-angle-double-up" aria-hidden="true" style={{ fontSize: '24px', color: '#fff' }}></i>
            </button>

        </>
    )
}

export default Footer