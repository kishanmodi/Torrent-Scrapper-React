import React from 'react';

export const TorrentData = (props) => {
    return (
        <div className='col-12'>
            <table className='table text-light table-bordereless table-striped' style={{ tableLayout: 'fixed' }}>
                <tbody>
                    <tr>
                        <td className='text-warning p-0 m-0 border-0'>Item Name:</td>
                    </tr>
                    <tr>
                        <td className='p-0 border-0'>{props.item.name.substring(0, 58)}</td>
                    </tr>
                    <tr className='text-warning'>Files:</tr>
                    <tr>
                        <td className='p-0 border-0'>{props.files[0]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
