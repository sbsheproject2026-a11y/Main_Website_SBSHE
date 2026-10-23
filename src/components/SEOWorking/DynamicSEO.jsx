 import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { seoConfig } from "./seoConfig";

const DynamicSEO = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const stateTitle = location.state?.pageTitle;
  const configData = seoConfig[currentPath];

  // ✅ Default values
  let title = "Shaheed Bhagat Singh Health & Education"; 
  let description = "An autonomous Institute established under act 1882. Explore 10+ career-focused courses with 100% placement support.";
  
  // ✅ FIX: Agar Home page (/) hai toh hamesha Default Title rakho (": Home" nahi aayega)
  if (currentPath === "/" || currentPath === "") {
      title = "Shaheed Bhagat Singh Health & Education";
  } 
  else if (stateTitle) {
      title = `${stateTitle} | Shaheed Bhagat Singh Health & Education`;
  } 
  else if (configData) {
      title = configData.title;
      description = configData.description || description;
  } 
  else if (currentPath.includes("/about/") || currentPath.includes("/department/")) {
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

export default DynamicSEO;