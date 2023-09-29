import React, { Component, createRef, useState } from "react";

import "./Toolbar.scss";
import Button from "../../common/Button";
import AutocompleteField from "../../common/AutocompleteField";
import { wells } from "../../assets/data";
import DateField from "../../common/DateField";
import { VideosStore } from "../../store/VideosStore";

export default function Toolbar({ onClickHandler }) {
	const [toolbarForm, setToolbarForm] = useState({ well: undefined, date: "" });
	const [well, setWell] = useState();
	const [dateField, setDateField] = useState("");

	const AutocompleteChangeHandler = async (e, value, name) => {
		// setWell(value);
		if (value) {
			setToolbarForm((prevState) => ({ ...prevState, well: value }));
			await VideosStore.getVideosByWellIdAction(value.Id);
		}
	};

	return (
		<div className="Toolbar">
			<div className="ToolbarItem ToolbarWell">
				<div className="ToolbarItem_Title">Скважина</div>
				<AutocompleteField
					name="well"
					onChange={AutocompleteChangeHandler}
					arr={wells}
					value={toolbarForm.well}
				/>
			</div>
			{/* <div className="ToolbarItem">
        <div>Период</div>
        <DateField name="interval" onChange={(e) => console.log(e)} value="10-10-2010" />
      </div> */}
			<div className="ToolbarBtn">
				<Button variant="gray" onClick={onClickHandler} className="ToolbarItem Toolbar_btn">
					Список видео
				</Button>
			</div>
		</div>
	);
}
