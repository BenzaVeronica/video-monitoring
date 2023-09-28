import getTypeVideoBySrc from "./getType";

export type dataEl = {
	src: string,
	name: string,
	description: string,
	poster: string
}
export type newDataEl = {
	Id: number,
	sources:[{src: string, type:string}],
	name: string,
	description: string,
	poster: string,
	imgAlt: string,
}

export default function changeData(data:dataEl[]){
	if(!data) return;
	var data = [{ src: 'video.mp4', name: "Камера 1", description: 'Камера установлена на ......', poster: 'forV1.jpg' },
        { src: 'video1.mp4', name: "Камера 2", description: 'Камера установлена на ......', poster: 'forV2.jpg' },
        { src: 'video2.mp4', name: "Камера 3", description: 'Камера установлена на ......', poster: 'forV3.jpg' }
    ];
	var wellId = 1;
	
	let newArr:newDataEl[]=[];
	data.map( el => {
		newArr.push({Id: wellId, name: el.name, description:el.description,poster: el.poster, imgAlt:"1", sources: [{
			src: el.src,
			type: getTypeVideoBySrc(el.src),
		}]})
	});
	return newArr;
}