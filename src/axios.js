import axios from "axios";

const instance  = axios.create({
    // The API (cloud function) URL
    baseURL: 'http://localhost:5001/clone-c1802/us-central1/api'
});

export default instance;