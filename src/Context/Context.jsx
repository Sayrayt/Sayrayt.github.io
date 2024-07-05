import { createContext, useState } from 'react';

export const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [lightTheme, setLightTheme] = useState(true);
    return (
        <MyContext.Provider value={{lightTheme, setLightTheme }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
