//  import videojs, {VideoJsPlayerOptions} from "video.js";
import Player from "video.js/dist/types/player";
export type VideoType = "application/x-mpegURL" | "video/mp4";
export interface VideoItem {
	poster: string;
	imgAlt: string;
	sources: [
		{
			src: string;
			type: VideoType;
		}
	];
	name: string;
}
// export interface VideoJSProps {
// 	playlist: VideoItem[];
// 	options: VideoJsPlayerOptions;
// 	onReady: () => void;
// }
