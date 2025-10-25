import React, { createContext, useContext } from "react";

export const Themecontext = React.createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},

});


export const ThemeProvider = Themecontext.Provider;


export default function useTheme(){
    return useContext(Themecontext);
}