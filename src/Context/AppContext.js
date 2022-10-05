import { createContext, useState } from 'react';

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);
    const [listMode, setListMode] = useState(false);
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [prevQuery, setPrevQuery] = useState(query);
    const [safeSearch, setSafeSearch] = useState(false);
    const [dataAvail, setDataAvail] = useState(true);
    return (
        <AppContext.Provider
            value={{
                darkMode,
                setDarkMode,
                items,
                setItems,
                isLoading,
                setLoading,
                query,
                setQuery,
                prevQuery,
                setPrevQuery,
                safeSearch,
                setSafeSearch,
                dataAvail,
                setDataAvail,
                listMode,
                setListMode
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
