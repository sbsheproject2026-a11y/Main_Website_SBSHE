import api, { api2 } from "../api";

export const getMenu = async (menuId,submenuId) => {
    const response = await api2.get(
       // `/website-menu?parent=${menuId}`
        `/Website/website-menu?id=${menuId}&pid=${submenuId}`
    );

    return response.data; 
};