import "../styles/globals.css";
import { FC } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { ExampleProvider } from "../providers";
import { theme } from "../theme";
import MainLayout from "../layouts/MainLayout";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<ExampleProvider>
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</ExampleProvider>
		</ThemeProvider>
	);
};

export default MyApp;
