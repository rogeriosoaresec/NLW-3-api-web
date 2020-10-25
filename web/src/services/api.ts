import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333' //process.env.URL_SERVER
});

export default api;