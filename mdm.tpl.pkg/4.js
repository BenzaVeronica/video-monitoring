import axios from "axios";

export const API = "http://localhost:3000";

export const axiosInstance = axios.create({
	baseURL: API,
});

export default {
	getVideos: (wellId) => axiosInstance.get(`/videos/`),
};

import { renderListOfVideo } from "./callRender";
const d = [{ src: 'video.mp4', name: "Камера 1", description: 'Камера установлена на ......', poster: 'forV1.jpg' },
        { src: 'video1.mp4', name: "Камера 2", description: 'Камера установлена на ......', poster: 'forV2.jpg' },
        { src: 'video2.mp4', name: "Камера 3", description: 'Камера установлена на ......', poster: 'forV3.jpg' }
    ];
renderListOfVideo(d);
// debugger
console.log("PACKAGE");
export {renderListOfVideo}//# sourceMappingURL=4.js.map