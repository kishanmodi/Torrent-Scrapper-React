import axios from 'axios';

import React, { useState } from 'react';

import { CardDetails } from './CardDetails';

export const Card = (props) => {
    const [dataLoading, setDataLoading] = useState(false);
    const [torrent, setTorrent] = useState({});
    const [files, setFiles] = useState([]);
    const [showButton, setButton] = useState(true);
    const [buttonText, setButtonText] = useState('Copy to Clipboard');
    const { item } = props;

    const getTorrentData = async (link) => {
        setDataLoading(true);
        setButton(false);
        const torrentData = await axios.get(`https://tscrap.herokuapp.com/magnet?link=${link}`);
        setTorrent(torrentData.data);
        if (torrentData.data) {
            setDataLoading(false);
            const { files } = torrentData.data;
            setFiles(files);
        }
    };
    return (
        <div className='col-xl-3 col-lg-4 col-md-6 mb-4 col-sm-12 col-12'>
            <div className='card bg-dark text-light '>
                <div className='card-body row'>
                    <CardDetails item={item} />
                    <div className='col-12 accordion mt-2 justify-content-center align-items-center'>
                        <div className='accordion-item border-0 bg-dark'>
                            {showButton ? (
                                <h2 className='accordion-header text-center mb-3'>
                                    <button
                                        id='tDataBtn'
                                        className='btn btn-sm btn-primary text-center'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target={`#acc${props.index}`}
                                        aria-expanded='false'
                                        onClick={() => {
                                            getTorrentData(item.url);
                                        }}
                                    >
                                        Get Torrent Data
                                    </button>
                                </h2>
                            ) : null}

                            <div id={`acc${props.index}`} className={`accordion-collapse rounded border bg-dark collapse`}>
                                <div className='accordion-body mt-2'>
                                    {dataLoading ? (
                                        <div>
                                            <div className='progress '>
                                                <div
                                                    className='progress-bar progress-bar-striped progress-bar-animated bg-secondary'
                                                    role='progressbar'
                                                    style={{ width: '100%  ' }}
                                                ></div>
                                            </div>
                                            <div className='text-center text-warning'>Loading Torrent Data</div>
                                        </div>
                                    ) : (
                                        <div className='col-12'>
                                            <table className='table text-light table-bordereless table-striped' style={{ tableLayout: 'fixed' }}>
                                                <tbody>
                                                    <tr>
                                                        <td className='text-warning p-0 m-0 border-0'>Item Name:</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='p-0 border-0'>{item.name.substring(0, 58)}</td>
                                                    </tr>
                                                    <tr className='text-warning'>Files:</tr>
                                                    <tr>
                                                        <td className='p-0 border-0'>{files[0]}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                                <div className='row w-100 align-items-center justify-content-around m-0 p-0 mb-2'>
                                    <button
                                        className='col-5 btn btn btn-sm btn-warning px-0 py-1'
                                        onClick={(e) => {
                                            setButtonText('Copied to Clipboard');
                                            navigator.clipboard.writeText(torrent.magnet);
                                        }}
                                    >
                                        {buttonText}
                                    </button>
                                    <button
                                        className='col-5 btn btn-sm btn-outline-warning'
                                        onClick={() => {
                                            window.open(torrent.magnet, '_blank');
                                        }}
                                    >
                                        Open
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
