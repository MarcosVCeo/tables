import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {

    const [fontePrimaria, setFontePrimaria] = useState('Nunito')

    const valores = {
        fontePrimaria,
        setFontePrimaria
    }

    return <ThemeContext.Provider value={valores}>{children}</ThemeContext.Provider>
}