import React from "react";
import videojs from "video.js";
import videojsPlaylistPlugin from "videojs-playlist";
import "video.js/dist/video-js.css";
// registerPlugin('playlist', plugin);
videojs.registerPlugin('playlist', videojsPlaylistPlugin);

export const VideoJS = (props) => {
	const { playlist, options, onReady } = props;
	const videoRef = React.useRef(null);
	const playerRef = React.useRef(null);

	React.useEffect(() => {
		if (!playerRef.current) {
			const videoElement = document.createElement("video-js");
			videoElement.classList.add("vjs-big-play-centered");
			videoRef.current.appendChild(videoElement);
			console.log(options);
			const player = (playerRef.current = videojs(videoElement, options, () => {
				videojs.log("player is ready");
				onReady && onReady(player);
			}));

			player.playlist(playlist);
			player.playlist.autoadvance(0);
		} else {
			const player = playerRef.current;

			player.autoplay(options.autoplay);
			player.src(options.sources);
		}
	}, [options, videoRef]);

	React.useEffect(() => {
		const player = playerRef.current;
		return () => {
			if (player && !player.isDisposed()) {
				player.dispose();
				playerRef.current = null;
			}
		};
	}, [playerRef]);

	return (
		<div data-vjs-player ref={videoRef} className="VideoPlayer">
			<div className="vjs-playlist" />
		</div>
	);
};

export default VideoJS;
