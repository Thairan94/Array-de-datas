import axios from 'axios'
const api = axios.create({
    baseURL: "https://619542f674c1bd00176c6ca2.mockapi.io/api/v1/Data",
});

export default api;