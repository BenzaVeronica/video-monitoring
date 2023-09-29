import * as React from "react";
import { IAutocompleteFieldProps, IAutocompleteFieldState } from "./AutocompleteField.Interfaces";
import "./AutocompleteField.scss";
export default class AutocompleteField extends React.PureComponent<IAutocompleteFieldProps, IAutocompleteFieldState> {
    selectorRef: React.RefObject<any>;
    constructor(props: IAutocompleteFieldProps);
    onChangeHandler: (event: any, newValue: any) => void;
    private onInputChangeHandler;
    render(): JSX.Element;
}
//# sourceMappingURL=AutocompleteField.d.ts.map