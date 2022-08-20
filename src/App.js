import React, { useState } from 'react';
import './App.css';
import { CardContainer } from './components/Cards/CardContainer';

import NavBar from './components/NavBar/NavBar';
import { SearchContainer } from './components/SearchContainer/SearchContainer';

const App = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    return (
        <>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className={`container-fluid p-3 min-vh-100 ${darkMode ? ' bg-secondary' : ' bg-light'}`}>
                <SearchContainer
                    darkMode={darkMode}
                    items={items}
                    setItems={setItems}
                    loading={loading}
                    setLoading={setLoading}
                />
                {loading ? (
                    <div className='my-3'>
                        <div className='progress '>
                            <div
                                className='progress-bar progress-bar-striped progress-bar-animated bg-primary'
                                role='progressbar'
                                style={{ width: '100%  ' }}
                            ></div>
                        </div>
                        <div className='text-center text-light'>Searching for Torrent</div>
                    </div>
                ) : null}

                <CardContainer items={items} />
            </div>
        </>
    );
};

export default App;
