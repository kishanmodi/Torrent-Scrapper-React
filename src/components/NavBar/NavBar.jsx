import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
export const NavBar = (props) => {
    const { darkMode, setDarkMode } = useContext(AppContext);
    return (
        <nav
            className={`navbar justify-content-between align-items-center p-3 ${
                darkMode ? 'navbar-dark bg-dark' : 'navbar-dark bg-primary text-light'
            }`}
        >
            <div className='ms-2 d-flex justify-items-between align-items-center'>
                <img
                    src='https://raw.githubusercontent.com/kishanmodi/Torrent-Scrapper-React/main/public/brand.png'
                    style={{ width: '50px', height: '50px' }}
                    alt='brand'
                />
                <h2 className='navbar-brand p-0 m-0 ps-3 fw-bold'>Magnet Scrapper</h2>
            </div>

            <button
                type='button'
                style={{ padding: '0', borderRadius: '50%', height: '30px', width: '30px', textAlign: 'center' }}
                className={`btn ${darkMode ? 'btn-light' : 'btn-dark'}`}
                data-toggle='button'
                onClick={() => (darkMode ? setDarkMode(false) : setDarkMode(true))}
            >
                {darkMode ? <i className='bi bi-brightness-high'></i> : <i class='fa-solid fa-moon'></i>}
            </button>
        </nav>
    );
};

export default NavBar;
