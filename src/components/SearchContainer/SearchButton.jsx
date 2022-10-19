import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
export const SearchButton = (props) => {
    const { query, prevQuery, darkMode } = useContext(AppContext);
    return (
        <button
            type='button'
            name='2'
            className={`btn btn-secondary  border border-white${
                darkMode ? ' bg-secondary text-light' : ' bg-primary border border-dark'
            }`}
            onClick={(e) => {
                if (query !== prevQuery) {
                    props.submitHandler(e.target.name);
                }
                // remove outline from button after 1s
                setTimeout(() => {
                    e.target.blur();
                }
                , 1000);
            }}
        >
            {props.buttonName}
        </button>
    );
};
