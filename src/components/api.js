 import axios from "axios";

 
  const api2 = axios.create({
  //baseURL: "http://localhost:5188/api",
   baseURL: "https://api.shaheedbhagatsinghhealthandeducation.com/api",
  headers: { "Content-Type": "application/json" },
});

 
 export const FILE_URL = "https://api.shaheedbhagatsinghhealthandeducation.com/Uploads/";

// export const FILE_URL = "http://localhost:5188";
export default api2;
