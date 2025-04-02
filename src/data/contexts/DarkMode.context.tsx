import { GlobalStyles } from "@mui/material";
import { createContext, ReactNode, useState } from "react";

export type DarkModeContextType = {
    darkMode:boolean,
    setDarkMode:any
}
export const DarkModeContext=createContext<DarkModeContextType>({
    darkMode:false,
    setDarkMode:()=>{}
})

export default function DarkModeProvider({children}:{children:ReactNode}){

    const [darkMode , setDarkMode] = useState(true)

    return(
        <DarkModeContext.Provider value={{darkMode,setDarkMode}}>
            <GlobalStyles styles={{
                body:{backgroundColor:darkMode?"#444":undefined}
            }} />
            {children}
        </DarkModeContext.Provider>
    );
}