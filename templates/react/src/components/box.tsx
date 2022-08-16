import { FC } from "react";

type BoxType = {
	width?: number | string;
	height?: number | string;
	background?: number | string;
	color?: string;
	justifyContent?:
		| "center"
		| "flex-start"
		| "space-between"
		| "space-evenly"
		| "space-around";
	alignItems?: "center" | "flex-start";
	display?: "flex" | "none";
	children?: React.ReactNode;
};

export const Box: FC<BoxType> = (props) => {
	const {
		width,
		height,
		background,
		color,
		children,
		justifyContent,
		alignItems,
		display,
	} = props;

	return (
		<div
			style={{
				width: width,
				height: height,
				background: background,
				color: color,
				justifyContent: justifyContent,
				alignItems: alignItems,
				display: display,
			}}
		>
			{children}
		</div>
	);
};
