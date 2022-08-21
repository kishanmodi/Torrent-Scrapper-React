import React from 'react';

export const SearchBox = (props) => {
    const { darkMode, query, setQuery } = props;
    return (
        <div className='col-xl-6 col-md-8 px-4'>
            <div className='input-group'>
                <span className={`input-group-text ${darkMode ? ' bg-secondary text-light' : 'bg-primary text-light border border-dark'}`}>
                    Search Query
                </span>
                <input
                    type='text'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className={`form-control ${darkMode ? ' bg-dark text-light' : ' bg-light border border-dark'}`}
                />
            </div>
        </div>
    );
};
