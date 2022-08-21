import React, { useContext } from 'react';
import './App.css';
import './styles/bootstrap.min.css';
import { Loading } from './components/Loading/Loading';
import { NavBar } from './components/NavBar/NavBar';
import { SearchContainer } from './components/SearchContainer/SearchContainer';
import { CardContainer } from './components/Cards/CardContainer';
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
