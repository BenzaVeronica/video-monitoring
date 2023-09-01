import * as React from "react";
import cn from "classnames";

import "./DateField.scss";

export interface IDateFieldProps {
	placeholder?: string;
	className?: string;
	name: string;
	value: string | null;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	autofocus?: boolean;
}

export default class DateField extends React.PureComponent<IDateFieldProps> {
	constructor(props: IDateFieldProps) {
		super(props);
	}

	public render(): JSX.Element {
		const { name, value, className, onChange } = this.props;
		return (
			<input
				type="date"
				autoFocus={this.props.autofocus}
				name={name}
				id={name}
				value={value ? value : ""}
				onChange={onChange}
				onBlur={onChange}
				className={cn("DateField", {
					[`${className}`]: className,
				})}
			/>
		);
	}
}
