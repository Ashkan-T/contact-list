import { GlobalStyles } from "@mui/material";
import { createContext, ReactNode, useEffect, useState } from "react";

export type DarkModeContextType = {
  darkMode: boolean;
  setDarkMode: any;
};
export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

export default function DarkModeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [darkModeSiwtch, setDarkModeSwitch] = useState(false);
  const handleDarkModeSwitch = (mode: boolean) => {
    setDarkModeSwitch(mode);
    const modeStr = mode ? "dark" : "light";
    localStorage.setItem("darkMode", modeStr);
  };
  useEffect(() => {
    const modeStr = localStorage.getItem("darkMode");
    const mode = modeStr == "dark";
    handleDarkModeSwitch(mode);
  }, []);
  return (
    <DarkModeContext.Provider
      value={{ darkMode: darkModeSiwtch, setDarkMode: handleDarkModeSwitch }}
    >
      <GlobalStyles
        styles={{ body: darkModeSiwtch ? { backgroundColor: "#444" } : {} }}
      />
      {children}
    </DarkModeContext.Provider>
  );
}
