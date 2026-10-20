 import axios from "axios";


const api = axios.create({
    baseURL: "https://api.employeesbshe.tech/api",
    //baseURL: "http://192.168.1.21:8000/api",
    headers: {
        "Content-Type": "application/json"
    }
});

export const api2 = axios.create({
  baseURL: "http://localhost:5188/api",
   //baseURL: "https://api.shaheedbhagatsinghhealthandeducation.com/api",
  headers: { "Content-Type": "application/json" },
});

 
 export const FILE_URL = "https://api.shaheedbhagatsinghhealthandeducation.com/Uploads/";

// export const FILE_URL = "http://localhost:5188";
export default api;
