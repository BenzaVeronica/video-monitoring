async function fetchVideos(well) {
	return (await api.getVideos(well.id)).data;
}
