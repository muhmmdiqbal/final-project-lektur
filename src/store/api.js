import axios from 'axios';

const instance = axios.create({
    baseURL: "https://lektur.kuyrek.com",
});

export default instance;