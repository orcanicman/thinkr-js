import { createContext, ReactNode } from "react";

export const DialogContext = createContext<{
	dialog: ReactNode;
	setDialog: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
} | null>(null);
