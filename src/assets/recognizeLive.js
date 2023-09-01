export const recognizeLive = (url) => {
	if (url) return false;
	const isLive = url.split(".").pop() === "m3u8" ? true : false;
	return isLive;
};
