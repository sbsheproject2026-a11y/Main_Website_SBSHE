import React from "react";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";

function PageHeader() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
 
  const type = searchParams.get("type");

   
  
const { slug } = useParams();
 const pageNames = {
  "/about": "About Us",
  "/rti": "Right to Information",
  "/programmes": "Programme",
  "/online-programmes": "Online Programmes",
  "/news-events": "...",
  "/contact-us": "Contact Us",
  "/department": "Career",
  "/activities": "Activities",
  "/announcements": "Announcements",
  "/course-details": "Course Details",
  "/online-course-details": "Online Course Details",
  "/study-centres": "Study Centres",
  "/approvals-achievements": <>...</>,
  "/admission-consultant-partner": "Admission Consultant Registration",
};

let currentPath = location.pathname;

// ✅ About / Department / Course-details / Online Course-details — sab handle karo
if (currentPath.startsWith("/about/")) {
  const aboutSlug = slug || currentPath.split("/")[2];
  // pageName alag variable me rakho
} else if (currentPath.startsWith("/department/")) {
  const departmentSlug = slug || currentPath.split("/")[2];
  // pageName alag variable me rakho
} else if (currentPath.startsWith("/course-details/")) {
  currentPath = "/course-details";
} else if (currentPath.startsWith("/online-course-details/")) {
  currentPath = "/online-course-details";        // 👈 ye add karo
} else if (currentPath.startsWith("/subject-details/")) {
  currentPath = "/subject-details";
}

// ✅ Final pageName — department bhi handle karo
const pageName = currentPath.startsWith("/about/")
  ? (slug || currentPath.split("/")[2] || "About Us").replace(/-/g, " ")
  : currentPath.startsWith("/department/")
    ? (slug || currentPath.split("/")[2] || "Career").replace(/-/g, " ")
    : pageNames[currentPath] || "Home";

if (location.pathname === "/") {
  return null;
}

 


  return (
    <>
      {/* Header Start */}

      <div
        className="container-fluid page-header"
        style={{ marginBottom: "90px" }}
      >
        <div className="container">
          <div
            className="d-flex flex-column justify-content-center"
            style={{ minHeight: "300px" }}
          >

            <h3 className="display-4 text-white text-uppercase">
              {pageName}
            </h3>

            <div className="d-inline-flex text-white">

              <p className="m-0 text-uppercase">
                <Link className="text-white" to="/">
                  Home
                </Link>
              </p>

              <i className="fa fa-angle-double-right pt-1 px-3 mx-1"></i>

              <p className="m-0 text-uppercase">
                {pageName}
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* Header End */}
    </>
  );
}

export default PageHeader;