import React from 'react';

export const CardDetails = (props) => {
    const { item } = props;
    return (
        <>
            <h6 className='card-subtitle mb-2 text-warning text-end'>{item.date}</h6>
            <h5 className='card-title'>{item.name.substring(0, 58)}</h5>
            <div>
                <div className='row d-flex justify-content-start align-items-center mb-3'>
                    <div className='col d-flex justify-content-between align-items-center'>
                        <span className='text-warning'>{item.size}</span>
                        <span className='text-primary'>{item.uploader}</span>
                    </div>
                </div>
                <div className='row d-flex justify-content-start align-items-center mb-3'>
                    <div className='col d-flex justify-content-between align-items-center'>
                        <span className='text-success'>[S] {item.seeds}</span>
                        <span className='text-danger'>[L] {item.leeches}</span>
                    </div>
                </div>
            </div>
        </>
    );
};
