import { IStatus } from "../types";
export declare class VideosStoreImpl {
    private _data;
    private _status;
    constructor();
    get data(): any[] | [];
    get status(): IStatus;
    get isExists(): boolean | undefined;
    getVideosByWellIdAction: (wellId: any) => Promise<void>;
}
export declare const VideosStore: VideosStoreImpl;
//# sourceMappingURL=VideosStore.d.ts.map