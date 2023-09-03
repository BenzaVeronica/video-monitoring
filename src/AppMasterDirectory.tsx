import * as React from "react";
import "./styles/index.scss";
import VideoRow from "./components/VideoRow/VideoRow";
import Toolbar from "./components/Toolbar/Toolbar";
import { useQuery } from "react-query";
import api from "./api";
import { VideosStore } from "./store/VideosStore";
import WithLoading from "./common/WithLoading/WithLoading";
import { observer } from "mobx-react";

export default observer(function AppMasterDirectory() {
	// const { data, isLoading, isError } = useQuery("operations", fetchVideos);
	// useState()
	const [isAllVideo, setIsAllVideo] = React.useState(null);

	React.useEffect(() => {
		console.log(VideosStore.isExists);
	}, []);

	const viewVideosList = () => {
		setIsAllVideo(null);
	};

	return (
		<div className="video-monitoring">
			<Toolbar onClickHandler={viewVideosList} />
			{VideosStore.isExists && <VideoRow videos={VideosStore.data} curVideo={isAllVideo} />}
		</div>
	);
});
