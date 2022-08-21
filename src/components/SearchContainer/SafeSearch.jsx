import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
export const SafeSearch = () => {
    const { darkMode, safeSearch, setSafeSearch } = useContext(AppContext);
    return (
        <div className='input-group mb-3 justify-content-center'>
            <div className={`input-group-text${darkMode ? ' bg-secondary text-light' : ' bg-light border border-dark'}`}>
                <input
                    className='form-check-input mt-0'
                    type='checkbox'
                    value={safeSearch}
                    onChange={(e) => setSafeSearch(e.target.checked)}
                />
            </div>
            <div className={`input-group-text${darkMode ? ' bg-secondary text-light' : ' bg-light border border-dark'}`}>
                Safe Search (Beta)
            </div>
        </div>
    );
};
