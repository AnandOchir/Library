import { createContext, useState, ReactNode, FC } from "react";
import type { Dispatch, SetStateAction } from "react";

interface ExampleContextInterface {
	example?: string;
	setExample: Dispatch<SetStateAction<string>>;
}

const ExampleContext = createContext<ExampleContextInterface>(
	{} as ExampleContextInterface
);
interface ExampleProviderProps {
	children: ReactNode;
}
export const ExampleProvider: FC<ExampleProviderProps> = ({ children }) => {
	const [example, setExample] = useState("");

	return (
		<ExampleContext.Provider value={{ example, setExample }}>
			{children}
		</ExampleContext.Provider>
	);
};
