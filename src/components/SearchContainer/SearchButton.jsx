import React from 'react';

export const SearchButton = (props) => {
    const { query, prevQuery, buttonName, submitHandler, darkMode } = props;
    return (
        <button
            type='button'
            name='2'
            className={`btn btn-secondary  border border-white${darkMode ? ' bg-secondary text-light' : ' bg-primary border border-dark'}`}
            onClick={(e) => {
                if (query !== prevQuery) {
                    submitHandler(e.target.name);
                }
            }}
        >
            {buttonName}
        </button>
    );
};
