import * as React from "react";
import "./styles/index.scss";
import VideoRow from "./components/VideoRow/VideoRow";
import changeData, { newDataEl } from "./utils/changeData";
// import Toolbar from "./components/Toolbar/Toolbar";
// import { useQuery } from "react-query";
// import api from "./api";
// import { VideosStore } from "./store/VideosStore";
// import WithLoading from "./common/WithLoading/WithLoading";
// import { observer } from "mobx-react";
// import { dataEl } from "./utils/changeData";

export default function AppMasterDirectory(data) {
	// const {data, wellId} = props;

	// const { data, isLoading, isError } = useQuery("operations", fetchVideos);
	
	const [isAllVideo, setIsAllVideo] = React.useState(false);
	const [videos, setVideos] = React.useState<newDataEl[]>([]);

	React.useEffect(() => {
		console.log("REACT VIDEO PLAYLIST CREATE");
		const newData = changeData(data);
		newData && setVideos(newData);
		console.log(data);
	}, []);

	// const viewVideosList = () => {
		// setIsAllVideo(null);
	// };
	

	return (
		<div className="video-monitoring">
			{videos.length!==0 && <VideoRow videos={videos} curVideo={isAllVideo} />}
		</div>
	);
};
