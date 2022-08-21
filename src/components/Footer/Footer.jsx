import React from 'react';

export const Footer = () => {
    return (
        <div className='position-absolute w-100 bg-secondary p-0 m-0 bottom-0'>
            <div className='row'>
                <i className='fa-brands fa-telegram col'></i>
                <i className='fa-brands fa-github col'></i>
                <i className='fa-brands fa-dev col'></i>
            </div>
            <div className='row text-center'>
                <small>
                    &copy; Copyright 2022,{' '}
                    <a href='https://www.github.com/kishanmodi' target='_blank' rel='noreferrer'>
                       Kishan Modi
                    </a>
                </small>
            </div>
        </div>
    );
};
