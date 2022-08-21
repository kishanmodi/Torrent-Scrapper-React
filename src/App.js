import React, { useContext } from 'react';
import './App.css';
import { Loading } from './components/Loading/';
import { NavBar } from './components/NavBar';
import { SearchContainer } from './components/SearchContainer';
import { CardContainer } from './components/Cards';
import { AppContext } from './Context/AppContext';
const App = () => {
    const { darkMode, isLoading } = useContext(AppContext);

    return (
        <div className={`min-vh-100 position-relative ${darkMode ? ' bg-secondary' : ' bg-light'}`}>
            <NavBar />
            <div className={`container-fluid p-3 h-100 ${darkMode ? ' bg-secondary' : ' bg-light'}`}>
                <SearchContainer />
                {isLoading ? <Loading /> : null}
                <CardContainer loading={isLoading} />
            </div>
        </div>
    );
};

export default App;
