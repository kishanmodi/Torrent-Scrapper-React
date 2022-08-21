import React, { useState } from 'react';
import './App.css';
import './styles/bootstrap.min.css';
import { Loading } from './components/Loading/Loading';
import { NavBar } from './components/NavBar/NavBar';
import { SearchContainer } from './components/SearchContainer/SearchContainer';
import { CardContainer } from './components/Cards/CardContainer';
// import { Footer } from './components/Footer/Footer';
const App = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(false);
    return (
        <div className={`min-vh-100 position-relative ${darkMode ? ' bg-secondary' : ' bg-light'}`}>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className={`container-fluid p-3 h-100 ${darkMode ? ' bg-secondary' : ' bg-light'}`}>
                <SearchContainer darkMode={darkMode} items={items} setItems={setItems} loading={isLoading} setLoading={setLoading} />
                {isLoading ? <Loading /> : null}
                <CardContainer items={items} loading={isLoading} />
            </div>
        </div>
    );
};

export default App;
