import axios from "axios";

export const API = "http://localhost:3000";

export const axiosInstance = axios.create({
	baseURL: API,
});

export default {
	getVideos: (wellId) => axiosInstance.get(`/videos/`),
};

    // "rollup": "2.66.1",
    // "rollup-plugin-commonjs": "10.1.0",
    // "rollup-plugin-node-resolve": "5.2.0",