import getExtensionOfFile from "./getExtensionOfFile";

export default function getTypeVideoBySrc(src: string): string {
	const ext = getExtensionOfFile(src);
	switch (ext) {
		case "mp4":
			return "video/mp4";
		case "m3u8":
			return "application/x-mpegURL";  
		default:
			return "video/mp4";
	}
}