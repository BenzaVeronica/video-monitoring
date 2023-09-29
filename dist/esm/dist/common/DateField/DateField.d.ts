import * as React from "react";
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
    constructor(props: IDateFieldProps);
    render(): JSX.Element;
}
//# sourceMappingURL=DateField.d.ts.map