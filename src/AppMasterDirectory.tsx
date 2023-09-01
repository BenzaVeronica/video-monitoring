import * as React from "react";
import "./styles/index.scss";
import VideoRow from "./components/VideoRow/VideoRow";
import Toolbar from "./components/Toolbar/Toolbar";

export default function AppMasterDirectory() {
	return (
		<div className="video-monitoring">
			<Toolbar />
			<VideoRow />
		</div>
	);
}
