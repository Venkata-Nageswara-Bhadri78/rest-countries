import React, { createContext, useState, useContext } from 'react'

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {

    const [darkmode, setDarkMode] = useState(false);
    
    const toggleDarkMode = () => setDarkMode(prev => !prev);
    
    return (
        <DarkModeContext.Provider value={{ darkmode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => useContext(DarkModeContext);

export default DarkModeContext;