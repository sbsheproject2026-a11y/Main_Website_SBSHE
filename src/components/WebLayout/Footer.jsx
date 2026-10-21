import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getWebsiteContentdata } from '../WebsitePage/HomeService';

function Footer() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        loadContactData();
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
    return (
        <>


            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style={{ marginTop: "90px" }}>
                <div className="row pt-5">
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-md-7 mb-5">
                                <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Get In Touch</h5>
                                <div style={{ fontSize: "15px" }}
                                    dangerouslySetInnerHTML={{
                                        __html: contacts?.[0]?.descrption || ""
                                    }}
                                />

                                <div className="d-flex justify-content-start mt-4">
                                    <Link className="btn btn-outline-light btn-square mr-2" to="https://youtube.com/@sbshe-sm?si=tDUXjazfu4CpAfPe"><i className="fab fa-youtube"></i></Link>
                                    <Link className="btn btn-outline-light btn-square mr-2" to="https://www.facebook.com/share/1Hb4vQDMov/"><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-outline-light btn-square mr-2" to="https://www.linkedin.com/company/sbshe/"><i className="fab fa-linkedin-in"></i></Link>
                                    <Link className="btn btn-outline-light btn-square" to="https://www.instagram.com/sbsheofficial?utm_source=qr&stkn=Nmw0ZXNkOGwzMjlm"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                            <div className="col-md-5 mb-5">
                                <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Information Links</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <Link className="text-white mb-2" to="/approvals-achievements"><i className="fa fa-angle-right mr-2"></i>Approvals/Achievements</Link>
                                    <Link className="text-white mb-2" to="/programmes"><i className="fa fa-angle-right mr-2"></i>Programme</Link>

                                    <Link className="text-white mb-2" to="/study-centres"><i className="fa fa-angle-right mr-2"></i>Accredited Institute</Link>
                                    <Link className="text-white mb-2" to="https://student.shaheedbhagatsinghhealthandeducation.com"><i className="fa fa-angle-right mr-2"></i>Student Support</Link>
                                    <Link className="text-white mb-2" to="https://sbshe.in/Rollno-Verification.aspx"><i className="fa fa-angle-right mr-2"></i>Result</Link>
                                     
                                    <Link className="text-white mb-2" to="/contact-us"><i className="fa fa-angle-right mr-2"></i>Contact Us</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Usefull Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                             <Link className="text-white mb-2" to="https://soft.shaheedbhagatsinghhealthandeducation.com/acc-apply"><i className="fa fa-angle-right mr-2"></i>Admission Consultant Registration</Link>  
                            <Link className="text-white mb-2" to="https://soft.shaheedbhagatsinghhealthandeducation.com"><i className="fa fa-angle-right mr-2"></i> Admission Consultant Login</Link>

                            <Link className="text-white mb-2" to="https://soft.shaheedbhagatsinghhealthandeducation.com/study-centre-apply"><i className="fa fa-angle-right mr-2"></i>Study Centre Registration</Link>
                            <Link className="text-white mb-2" to="https://soft.shaheedbhagatsinghhealthandeducation.com"><i className="fa fa-angle-right mr-2"></i>Study Centre Login</Link>

                            <Link className="text-white mb-2" to="https://soft.shaheedbhagatsinghhealthandeducation.com/new-student-apply"><i className="fa fa-angle-right mr-2"></i>Student Registration</Link>
                            <Link className="text-white mb-2" to="https://soft.shaheedbhagatsinghhealthandeducation.com"><i className="fa fa-angle-right mr-2"></i>Student Login</Link>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}>
                <div className="row">
                    {/* <div className="col-lg-8 text-center text-md-left mb-3 mb-md-0"> */}
                    <div className="col-lg-12 text-center  mb-3 mb-md-0">
                        <p className="m-0 text-white">&copy; <a href="#"> 2025 Shaheed Bhagat Singh Health and Education</a>. All Rights Reserved.


                            <a href="#"> </a>
                        </p>
                    </div>
                    {/* <div className="col-lg-4 text-center text-md-right">
                        <ul className="nav d-inline-flex">
                            <li className="nav-item">
                                <Link className="nav-link text-white py-0" to="/">Privacy</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white py-0" to="/">Terms</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white py-0" to="/">FAQs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white py-0" to="/">Help</Link>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>

            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up"></i></a>



        </>
    )
}

export default Footer