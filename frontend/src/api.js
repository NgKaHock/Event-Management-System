import axios from "axios";

const API = axios.create({

    baseURL:"https://event-management-system-0y0v.onrender.com/api"
});

export default API;