import * as React from "react";
import * as ReactDOM from "react-dom/client";
import AppMasterDirectory from "./AppMasterDirectory";

export const renderListOfVideo = (data) => {
	const view = document.getElementById("videoMonitoring-view");
	if (view) {
		const root = ReactDOM.createRoot(view);
		root.render(
				<AppMasterDirectory data={data}/>
		);
	}
};
