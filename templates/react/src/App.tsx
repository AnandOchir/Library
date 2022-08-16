import HomeScreen from "./pages/home-screen";
import { ExampleProvider } from "./providers";

export const App = () => {
	return (
		<ExampleProvider>
			<HomeScreen />
		</ExampleProvider>
	);
};
