import React, { Component, createRef, useState } from "react";

import "./VideoRow.scss";
import { VIDEOS } from "../../assets/data";
import { recognizeLive } from "../../assets/recognizeLive";
import cn from "classnames";
import VideoJS from "../../lib/VideoJS/VideoJS";
import videojs from "video.js";

function VideoRow() {
	const [videoList, setVideoList] = useState(VIDEOS);
	const [currentVideo, setCurrentVideo] = useState(VIDEOS[0]);

	const onClickHandler = (videoEl) => {
		setCurrentVideo(videoEl);
		console.log(videoEl);
	};
	const playerRef = React.useRef(null);

	const videoJsOptions = {
		width: 720,
		height: 420,
		autoplay: true,
		controls: true,
		responsive: true,
		// fluid: true,
		// techOrder: ["youtube", "html5"],
		// sources: [
		// 	{
		// 		src: "http://media.w3.org/2010/05/bunny/trailer.mp4",
		// 		type: "video/mp4",
		// 	},
		// ],
	};

	const click = () => {
		const player = playerRef.current;
		console.log(player);
		console.log(player.playlist);
		player.playlist.currentItem(2);
	};
	const handlePlayerReady = (player) => {
		playerRef.current = player;
		player.on("waiting", () => {
			videojs.log("player is waiting");
		});

		player.on("dispose", () => {
			videojs.log("player will dispose");
		});
	};

	return (
		<div className="VideosBox">
			<VideoJS playlist={VIDEOS} options={videoJsOptions} onReady={handlePlayerReady} />
			<div className="VideoRow">
				{VIDEOS.map((el) => {
					const isLive = el.sources[0].type === "application/x-mpegURL";
					return (
						<div
							className="VideoEl"
							key={`VideoEl_${el.name}`}
							onClick={() => onClickHandler(el)}>
							<img className="VideoEl_Img" src={el.thumbnail} alt={el.imgAlt} />
							<div className="VideoEl_Text">
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

export default VideoRow;
