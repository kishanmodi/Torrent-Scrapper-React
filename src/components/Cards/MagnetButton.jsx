import React from 'react';

export const MagnetButton = (props) => {
    return (
        <button className={`col-5 btn btn btn-sm px-0 py-1 ${props.btnStyle}`} onClick={props.clickHandler}>
            {props.buttonText}
        </button>
    );
};
