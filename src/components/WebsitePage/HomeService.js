import api, { api2 } from "../api";

export const getWebsiteContent = async (menuId) => {
    const response = await api.get(
        `/website-content/?menu=${menuId}`
    );

    return response.data.results;
};
export const getWebsiteContentdata1 = async (slug) => {
    const response = await api.get(
        `/website-content/?menu_slug=${slug}`
    );

    return response.data.results;
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


