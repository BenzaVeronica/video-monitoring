import * as React from "react";
import { IStatus } from "../../types";
interface WithLoadingProps {
    status: IStatus;
    errorText?: string;
    children: JSX.Element[] | JSX.Element | string | null;
}
declare class WithLoading extends React.PureComponent<WithLoadingProps> {
    render(): string | JSX.Element | JSX.Element[] | null;
}
export default WithLoading;
//# sourceMappingURL=WithLoading.d.ts.map