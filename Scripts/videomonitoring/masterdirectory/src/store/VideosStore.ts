import { action, makeAutoObservable, observable, runInAction, toJS } from "mobx";
import api from "../api";
import { VIDEOS } from "../assets/data";
import { IStatus } from "../types";

export class VideosStoreImpl {
	private _data: any[] | [] = [];
	private _status: IStatus = "loading";

	constructor() {
		// makeAutoObservable(this);
		makeAutoObservable(this, {}, { deep: true });
	}
	get data() {
		return this._data;
	}
	get status() {
		return this._status;
	}
	get isExists() {
		if (this._data) return this._data.length !== 0;
	}

	getVideosByWellIdAction = async (wellId) => {
		// try {
		// 	this._status = "loading";
		// 	// const { data } = await api.getVideos(wellId);
		// 	const data = VIDEOS;
		// 	// runInAction(() => {
		// 	// 	this._data = data.filter((el) => el.Id === wellId);
		// 	// });
		// 	this._data = VIDEOS;
		// 	console.log(this._data);
		// 	this._status = "success";
		// 	// return result;
		// } catch (error) {
		// 	this._status = "error";
		// 	console.error(error);
		// }
	};
}
export const VideosStore = new VideosStoreImpl();
