import { Skeleton } from "@mui/material";
import * as React from "react";
import { IStatus } from "../../types";
import Spinner from "../Spinner";

interface WithLoadingProps {
	status: IStatus;
	errorText?: string;
	children: JSX.Element[] | JSX.Element | string | null;
	// variantLoading?: "text"|"spinner"|"rectangle";
}

class WithLoading extends React.PureComponent<WithLoadingProps> {
	render() {
		const { status, errorText, children } = this.props;
		switch (status) {
			case "loading":
				// return <Skeleton variant="rectangular" width="100%" height={118} />;
				// return<div>Loading</div>;
				return <Spinner />;
			case "error":
				return <div>{errorText}</div>;
			default:
				return children;
		}
	}
}
export default WithLoading;
