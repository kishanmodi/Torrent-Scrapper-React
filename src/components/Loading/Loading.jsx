import React from 'react';

export const Loading = () => {
    return (
        <div className='my-3'>
            <div className='progress '>
                <div
                    className='progress-bar progress-bar-striped progress-bar-animated bg-secondary'
                    role='progressbar'
                    style={{ width: '100%  ' }}
                ></div>
            </div>
            <div className='text-center text-light'>Searching for Torrent</div>
        </div>
    );
};
