export type dataEl = {
    src: string;
    name: string;
    description: string;
    poster: string;
};
export type newDataEl = {
    Id: number;
    sources: [{
        src: string;
        type: string;
    }];
    name: string;
    description: string;
    poster: string;
    imgAlt: string;
};
export default function changeData(data: dataEl[]): newDataEl[] | undefined;
//# sourceMappingURL=changeData.d.ts.map