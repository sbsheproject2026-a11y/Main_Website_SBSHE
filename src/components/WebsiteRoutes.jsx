 import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react"; // ✅ Suspense aur lazy import kiya

// ✅ Layout aur ScrollToTop ko direct rakha hai (taaki header/footer turant dikhe)
import Layout from "./WebLayout/Layout";
import ScrollToTop from "./WebLayout/ScrollToTop";

// ✅ Baaki saare pages ko Lazy Load kar diya hai
const Home = lazy(() => import("./WebsitePage/Home"));
const About = lazy(() => import("./WebsitePage/About"));
const Contact = lazy(() => import("./WebsitePage/Contact"));
const CourseDeails = lazy(() => import("./WebsitePage/CourseDeails"));
const News = lazy(() => import("./WebsitePage/News"));
const Result = lazy(() => import("./WebsitePage/Result"));
const Programme = lazy(() => import("./WebsitePage/Programme"));
const Gallery = lazy(() => import("./WebsitePage/Gallery"));
const StudyCentres = lazy(() => import("./WebsitePage/StudyCentres"));
const ExpertQueryForm = lazy(() => import("./WebsiteForms/ExpertQueryForm"));
const AuthorityLetterPrint = lazy(() => import("./DocumentPrintFiles/AuthorityLetterPrint"));
const AdmissionConsultantRegistration = lazy(() => import("./WebsitePage/AdmissionConsultantRegistration"));
const ApprovalsAchievements = lazy(() => import("./WebsitePage/ApprovalsAchievements"));
const Activities = lazy(() => import("./WebsitePage/Activities"));
const DepartmentRouter = lazy(() => import("./WebsitePage/DepartmentRouter"));
const OnlineProgramme = lazy(() => import("./WebsitePage/OnlineProgramme"));
const OnlineCourseDeails = lazy(() => import("./WebsitePage/OnlineCourseDeails"));
const AnnouncementPage = lazy(() => import("./WebsitePage/AnnouncementPage"));

function WebsiteRoutes() {
  return (
    <>
      <ScrollToTop />
      
      {/* ✅ Suspense Fallback: Jab tak page load ho raha hai, tab tak yeh dikhega */}
      <Suspense 
        fallback={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', gap: '15px' }}>
            <div style={{ width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid #01507c', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
            <h5 style={{ color: '#01507c', fontWeight: 'bold' }}>Loading Page...</h5>
            <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about/:slug" element={<About />} />
            <Route path="department/:slug" element={<DepartmentRouter />} />
            <Route path="programmes" element={<Programme />} />
            <Route path="course-details/:slug" element={<CourseDeails />} />
            <Route path="online-programmes" element={<OnlineProgramme />} />
            <Route path="online-course-details/:slug" element={<OnlineCourseDeails />} />
            <Route path="news-events" element={<News />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="activities" element={<Activities />} />
            <Route path="authority-letterPrint-print/:id" element={<AuthorityLetterPrint />} />
            <Route path="announcements" element={<AnnouncementPage />} />
            <Route path="approvals-achievements" element={<ApprovalsAchievements />} />
            <Route path="result" element={<Result />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="study-centres" element={<StudyCentres />} />
            <Route path="admission-consultant-partner" element={<AdmissionConsultantRegistration />} />
            <Route path="expert-query" element={<ExpertQueryForm />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default WebsiteRoutes;