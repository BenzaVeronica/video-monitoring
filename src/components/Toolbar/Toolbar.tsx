import React, { Component, createRef, useState } from "react";

import "./Toolbar.scss";
import Button from "../../common/Button";
import AutocompleteField from "../../common/AutocompleteField";
import { wells } from "../../assets/data";
import DateField from "../../common/DateField";

export default function Toolbar() {
	return (
		<div className="Toolbar">
			<div className="ToolbarItem">
				<div>Скважина</div>
				<AutocompleteField name="well" onChange={(e) => console.log(e)} arr={wells} />
			</div>
			<div className="ToolbarItem">
				<div>Период</div>
				<DateField name="interval" onChange={(e) => console.log(e)} value="10-10-2010" />
			</div>
			<Button
				variant="gray"
				onClick={(e) => console.log(e)}
				className="ToolbarItem Toolbar_btn">
				Список видео
			</Button>
		</div>
	);
}
