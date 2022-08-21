import React from 'react';

export const GetDataButton = (props) => {
    return (
        <h2 className='accordion-header text-center mb-3'>
            <button
                id='tDataBtn'
                className='btn btn-sm btn-primary text-center'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target={`#acc${props.index}`}
                aria-expanded='false'
                onClick={() => {
                    props.getTorrentData(props.item.url);
                }}
            >
                Get Torrent Data
            </button>
        </h2>
    );
};
