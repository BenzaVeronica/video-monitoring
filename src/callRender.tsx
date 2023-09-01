import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppMasterDirectory from "./AppMasterDirectory";
// import i18n from "./i18n";
import "./i18n";

export const renderMasterDirectory = () => {
	const view = document.getElementById("videoMonitoring-view");
	if (view) {
		const root = ReactDOM.createRoot(view);
		root.render(
			// <I18nextProvider i18n={i18n}>
				<AppMasterDirectory />
			// </I18nextProvider>
		);
	}
};
