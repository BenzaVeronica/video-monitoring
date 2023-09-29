import axios from "axios";

export const API = "http://localhost:3000";

export const axiosInstance = axios.create({
	baseURL: API,
});

export default {
	getVideos: (wellId) => axiosInstance.get(`/videos/`),
};
