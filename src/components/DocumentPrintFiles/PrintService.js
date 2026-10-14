import api from "../api";

export const printAuthorityLetterApi = async (id) => {
    const response = await api.get(
        `https://api.shaheedbhagatsinghhealthandeducation.com/api/DocumentProfile/admin-authority-letter-print/${id}`
    );

    return response.data;
};

export const getStudyCentres = async (id) => {
    const response = await api.get(
        `https://api.shaheedbhagatsinghhealthandeducation.com/api/Website/frenchise-list/${id}`
       // `http://localhost:5188/api/Website/frenchise-list/${id}`
    );

    return response.data;
};