 import { useEffect } from "react"; // ✅ 1. useEffect import karein
import DynamicSEO from "./components/SEOWorking/DynamicSEO";
import WebsiteRoutes from "./components/WebsiteRoutes";

function App() {
  
  // ✅ 2. Loader ko hataane ka logic yahan add karein
  useEffect(() => {
    const loader = document.getElementById('initial-loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.remove();
      }, 300);
    }
  }, []);

  return (
    <>
      <DynamicSEO /> 
      <WebsiteRoutes />
    </>
  );
}

export default App;