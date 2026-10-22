 import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { seoConfig } from "./seoConfig";

const DynamicSEO = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // 1. Check if we have state passed from Header (for dynamic pages)
  const stateTitle = location.state?.pageTitle;

  // 2. Check central config (for static pages)
  const configData = seoConfig[currentPath];

  // Determine Title
  let title = "Shaheed Bhagat Singh Health & Education"; // Default
  let description = "An autonomous Institute established under act 1882.";
  
  if (stateTitle) {
    title = `${stateTitle} | Shaheed Bhagat Singh Health & Education`;
  } else if (configData) {
    title = configData.title;
    description = configData.description;
  } else if (currentPath.includes("/about/") || currentPath.includes("/department/")) {
     // Fallback for dynamic paths if state is lost (e.g. page refresh)
     title = "Information | Shaheed Bhagat Singh Health & Education";
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://shaheedbhagatsinghhealthandeducation.com${currentPath}`} />
    </Helmet>
  );
};

// ✅ YEH LINE MISSING THI - Ab add kar dein
export default DynamicSEO;