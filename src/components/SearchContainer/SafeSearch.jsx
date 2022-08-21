import React from 'react';

export const SafeSearch = (props) => {
    const { darkMode, safeSearch, setSafeSearch } = props;
    return (
        <div className='input-group mb-3 justify-content-center'>
            <div className={`input-group-text${darkMode ? ' bg-secondary text-light' : ' bg-light border border-dark'}`}>
                <input className='form-check-input mt-0' type='checkbox' value={safeSearch} onChange={(e) => setSafeSearch(e.target.checked)} />
            </div>
            <div className={`input-group-text${darkMode ? ' bg-secondary text-light' : ' bg-light border border-dark'}`}>Safe Search (Beta)</div>
        </div>
    );
};
