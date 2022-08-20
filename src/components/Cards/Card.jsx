import React from 'react';

export const Card = (props) => {
    const { item } = props;
    return (
        <div class='card bg-dark text-light '>
            <div class='card-body w-100'>
                <h6 class='card-subtitle mb-2 text-warning text-end'>{item.date}</h6>
                <h5 class='card-title'>{item.name.substring(0, 58)}</h5>
                <div>
                    <div className='row d-flex justify-content-start align-items-center w-75 mb-3'>
                        <div className='col d-flex justify-content-between align-items-center'>
                            <span className='text-success'>{item.size}</span>
                            <span className='text-primary'>{item.uploader}</span>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-start align-items-center w-75 mb-3'>
                        <div className='col d-flex justify-content-between align-items-center'>
                            <span className='text-success'>[S] {item.seeders}</span>
                            <span className='text-primary'>[L] {item.leechers}</span>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-sm btn-primary card-button justify-self-center'>Get Torrent Data</button>
                </div>
            </div>
        </div>
    );
};
