
import api2 from "../api";

 
// ✅ Helper function for Caching
const fetchWithCache = async (url, cacheKey) => {
    const cachedData = localStorage.getItem(cacheKey);
    try {
        const response = await api2.get(url);
        // Naya data aane par cache update karein
        localStorage.setItem(cacheKey, JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        // Agar API fail ho jaye aur cache mein data ho, toh wahi dikhayein
        if (cachedData) {
            console.log("API failed, using cached data for:", cacheKey);
            return JSON.parse(cachedData);
        }
        throw error;
    }
};

export const getProgramme = async (id) => {
    return fetchWithCache(`/Website/website-content/${id}`, `prog_${id}`);
};

export const getCourses = async (id) => {
    return fetchWithCache(`/Website/website-course/${id}`, `course_${id}`);
};

export const getMenu = async (menuId, submenuId) => {
    return fetchWithCache(
        `/Website/website-menu?id=${menuId}&pid=${submenuId}`, 
        `menu_${menuId}_${submenuId}`
    );
};

export const getWebsiteContentdata = async (id) => {
    return fetchWithCache(`/Website/all-website-content/${id}`, `content_${id}`);
};



export const EnqueryDataSubmit = async (data) => {
    const response = await api.post(
        "https://api.shaheedbhagatsinghhealthandeducation.com/api/Enquiries/student-Enquiries",
        data
    );
    return response.data;
};
export const EnqueryDataFranchiseSubmit = async (data) => {
    const response = await api.post(
        "https://api.shaheedbhagatsinghhealthandeducation.com/api/Enquiries/franchise-Enquiries",
        data
    );
    return response.data;
};

export const creatertidata= async (formData) => {
  const data = new FormData();

  data.append("code", formData.centreReg);
  data.append("name", formData.fullName);
  data.append("applicantTypeId", formData.userTypeId);
   
  data.append("mobileNo", formData.mobile);
  data.append("whatsAppNo", formData.whatsAppNo);
  data.append("email", formData.email);
  data.append("subject", formData.subject);
  data.append("infoRequired", formData.infoRequired);

  // Image
  if (formData.allDocuments) {
    data.append("path", formData.allDocuments);
  }
  // Image
  if (formData.letterHead) {
    data.append("path1", formData.letterHead);
  }
   data.append("address", formData.address);
 

  const response = await api.post(
    "https://api.shaheedbhagatsinghhealthandeducation.com/api/Enquiries/rti-apply",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const getStudentData = async (id) => {
    const response = await api.get(
        `https://api.shaheedbhagatsinghhealthandeducation.com/api/DropDownEmployee/dropdown-emp-getmastertypes/${id}`
    );

    return response.data;
};
export const getCheckStatus = async (id) => {
  const response = await api.get(
    `https://api.shaheedbhagatsinghhealthandeducation.com/api/Enquiries/rtidata-get?id=${encodeURIComponent(id)}`
  );
  return response.data;
};

