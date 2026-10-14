import api from "../api";

export const getMenu = async (menuId) => {
    const response = await api.get(
        `/website-menu?parent=${menuId}`
    );

    return response.data.results;
};