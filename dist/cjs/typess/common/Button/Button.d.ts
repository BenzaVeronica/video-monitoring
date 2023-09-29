import * as React from "react";
import { ButtonProps, iconType } from "./Button.Interfaces";
import "./Button.scss";
export default class Button extends React.PureComponent<ButtonProps> {
    constructor(props: ButtonProps);
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    chooseIcon: (icon: iconType) => JSX.Element;
    render(): JSX.Element;
}
//# sourceMappingURL=Button.d.ts.map