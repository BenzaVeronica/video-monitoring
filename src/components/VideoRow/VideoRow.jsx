import * as React from "react";
import cn from "classnames";
import videojs from "video.js";

import "./VideoRow.scss";
import VideoJS from "../../lib/VideoJS/VideoJS";
// import { VIDEOS } from "../../assets/data";
import { VideosStore } from "../../store/VideosStore";

export default function VideoRow({ videos, curVideo }) {
	const [currentVideo, setCurrentVideo] = React.useState(curVideo ? curVideo : null);
	const playerRef = React.useRef(null);

	const videoJsOptions = {
		width: 720,
		height: 420,
		autoplay: true,
		controls: true,
		responsive: true,
	};

	const onClickHandler = (videoEl, index) => {
		setCurrentVideo(index);
		if (playerRef && playerRef.current) playerRef.current.playlist.currentItem(index);
	};

	const handlePlayerReady = (player) => {
		playerRef.current = player;
		player.on("waiting", () => {
			// videojs.log("player is waiting");
		});

		player.on("dispose", () => {
			// videojs.log("player will dispose");
		});
	};

	return (
		<div className="VideosBox">
			{currentVideo != null && (
				<VideoJS playlist={videos} options={videoJsOptions} onReady={handlePlayerReady} />
			)}
			<div
				className={cn("VideoRow", {
					long: currentVideo === null,
				})}>
				{videos.map((el, index) => {
					const isLive = el.sources[0].type === "application/x-mpegURL";
					return (
						<div
							className={cn("VideoEl", {
								isCurrent: index === currentVideo,
							})}
							key={`VideoEl_${el.name}`}
							onClick={() => onClickHandler(el, index)}>
							<div className="VideoEl_Imgbox">
								<img src={el.poster} alt={el.imgAlt} />
							</div>
							<div className="VideoEl_Textbox">
								<div className="VideoEl_Text_Title">{el.name}</div>
								<span
									className={cn("VideoEl_Text_Span", {
										isLive: isLive,
									})}>
									{isLive ? "LIVE" : "10:00"}
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
