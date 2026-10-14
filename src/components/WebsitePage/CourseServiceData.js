import api, { api2 }  from "../api";

 
export const getProgramme  = async (id) => {
  const response = await api2.get(`/Website/website-content/${id}`);
  return response.data;
};
 
export const getCourses = async (id) => {
    const response = await api2.get(`/Website/website-course/${id}`);
    return response.data;
};

export const getSubjects = async (slug) => {
    const response = await api.get(`/materials/subjects/?course=${slug}`);

    return response.data.results;
};

export const createUser = async (data) => {
    const response = await api.post("/student-forms/", data);
    return response.data;
};

