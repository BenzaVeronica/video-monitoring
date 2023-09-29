import * as React from "react";
import cn from "classnames";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { ButtonProps, iconType } from "./Button.Interfaces";
import "./Button.scss";

export default class Button extends React.PureComponent<ButtonProps> {
	constructor(props: ButtonProps) {
		super(props);
	}

	public onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		this.props.onClick(e);
	};

	public chooseIcon = (icon: iconType) => {
		switch (icon) {
			case "add":
				return <AddIcon className="btn-icon" sx={{ fontSize: "20px" }} />;
			case "edit":
				return <EditIcon className="btn-icon" sx={{ fontSize: "20px" }} />;
			case "back":
				return <KeyboardBackspaceIcon className="btn-icon" sx={{ fontSize: "20px" }} />;
		}
	};

	public render(): JSX.Element {
		const { variant, children, disabled, icon, className } = this.props;
		return (
			<button
				className={cn("btn", {
					[`${variant}`]: variant,
					disabled: disabled,
					[`${className}`]: className,
				})}
				disabled={disabled}
				onClick={(e) => this.onClick(e)}>
				{icon && this.chooseIcon(icon)}
				{children && <span className="btn-text">{children}</span>}
			</button>
		);
	}
}
