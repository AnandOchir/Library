import { FC } from "react";

type ButtonType = {
	width: number | string;
	height: number | string;
	background: number | string;
	color: string;
	children: React.ReactNode;
};

export const Button: FC<ButtonType> = (props) => {
	const { width, height, background, color, children } = props;

	return (
		<button
			style={{
				width: width,
				height: height,
				background: background,
				color: color,
			}}
		>
			{children}
		</button>
	);
};
