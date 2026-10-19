import { Route, Routes } from "react-router-dom";
import Layout from "./WebLayout/Layout";
import Home from "./WebsitePage/Home";
import About from "./WebsitePage/About";
 

import Contact from "./WebsitePage/Contact";
 
import CourseDeails from "./WebsitePage/CourseDeails";
import ScrollToTop from "./WebLayout/ScrollToTop";
import News from "./WebsitePage/News";
 
import Result from "./WebsitePage/Result";
 
 
import Programme from "./WebsitePage/Programme";
import Gallery from "./WebsitePage/Gallery";
import StudyCentres from "./WebsitePage/StudyCentres";
import ExpertQueryForm from "./WebsiteForms/ExpertQueryForm";
import AuthorityLetterPrint from "./DocumentPrintFiles/AuthorityLetterPrint";
import AdmissionConsultantRegistration from "./WebsitePage/AdmissionConsultantRegistration";
import ApprovalsAchievements from "./WebsitePage/ApprovalsAchievements";
import Activities from "./WebsitePage/Activities";
 
import DepartmentRouter from "./WebsitePage/DepartmentRouter";
import OnlineProgramme from "./WebsitePage/OnlineProgramme";
import OnlineCourseDeails from "./WebsitePage/OnlineCourseDeails";
import AnnouncementPage from "./WebsitePage/AnnouncementPage";
 
 




function WebsiteRoutes() {
 
  return (
    <>
      <ScrollToTop />
      <Routes>

           
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        <Route path="about/:slug" element={<About />} />
        <Route path="department/:slug" element={<DepartmentRouter />} />
        

          <Route path="programmes" element={<Programme />} />
           <Route  path="course-details/:slug" element={<CourseDeails />} />  
          <Route path="online-programmes" element={<OnlineProgramme />} />
            <Route  path="online-course-details/:slug" element={<OnlineCourseDeails />} />    
        
       
          <Route path="news-events" element={<News />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="activities" element={<Activities />} />
          <Route path="authority-letterPrint-print/:id" element={<AuthorityLetterPrint />} />
       
          <Route path="announcements" element={<AnnouncementPage/>} />
          <Route path="approvals-achievements" element={<ApprovalsAchievements/>} />
          <Route path="result" element={<Result />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="study-centres" element={<StudyCentres />} />
          <Route path="admission-consultant-partner" element={<AdmissionConsultantRegistration />} />
          
          <Route path="expert-query" element={<ExpertQueryForm />} />
   
        </Route>
      </Routes>
    </>
  );
}

export default WebsiteRoutes;