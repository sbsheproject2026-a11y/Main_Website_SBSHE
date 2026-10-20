
import api2 from "../api";

export const getMenu = async (menuId,submenuId) => {
    const response = await api2.get(
       // `/website-menu?parent=${menuId}`
        `/Website/website-menu?id=${menuId}&pid=${submenuId}`
    );

    return response.data; 
};
 
export const getWebsiteContentdata = async (id) => {
    const response = await api2.get(
       `/Website/all-website-content/${id}`
    );

    return response.data;
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


export const getProgramme  = async (id) => {
  const response = await api2.get(`/Website/website-content/${id}`);
  return response.data;
};
 
export const getCourses = async (id) => {
    const response = await api2.get(`/Website/website-course/${id}`);
    return response.data;
};