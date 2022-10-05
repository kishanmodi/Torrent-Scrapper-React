import axios from 'axios';
import React, { useState } from 'react';
import { CardDetails } from './CardDetails';
import { Loading } from '../Loading/Loading';
import { GetDataButton } from './GetDataButton';
import { MagnetButton } from './MagnetButton';
import { TorrentData } from './TorrentData';
import { getTorrentData } from '../../core';

export const Card = (props) => {
    const [dataLoading, setDataLoading] = useState(false);
    const [torrent, setTorrent] = useState({});
    const [files, setFiles] = useState([]);
    const [showTorrentDataButton, settorrentDataButton] = useState(true);
    const [buttonText, setButtonText] = useState('Copy to Clipboard');
    const { item } = props;

    // onClick handler that makes api call to fetch magnet data for seperated link and set the state of files
    // it starts the loading spinner and stops when data is fetched
    // disables the TorrentDataButton when clicked
    const getData = async (link) => {
        try {
            setDataLoading(true);
            settorrentDataButton(false);

            const torrentData = await getTorrentData(link);
            if (!torrentData.status)
                throw new Error(torrentData.err)

            setTorrent(torrentData.data);
            setDataLoading(false);
            setFiles(torrentData.data.files);
        } catch (err) {
            console.log(err);
        }
    };

    // utility function that copies the magnet link to clipboard
    const copyToClipboardHandler = () => {
        setButtonText('Copied to Clipboard');
        navigator.clipboard.writeText(torrent.magnet);
    };
    // onCLick open a new Window for magnet Link
    const openInNewWindow = () => {
        window.open(torrent.magnet, '_blank');
    };
    return (
        <div className='col-xl-3 col-lg-4 col-md-6 mb-4 col-sm-12 col-12'>
            <div className='card bg-dark text-light '>
                <div className='card-body row'>
                    <CardDetails item={item} />
                    <div className='col-12 accordion mt-2 justify-content-center align-items-center'>
                        <div className='accordion-item border-0 bg-dark'>
                            {showTorrentDataButton ? (
                                <GetDataButton item={item} getTorrentData={getData} index={props.index} />
                            ) : null}

                            <div id={`acc${props.index}`} className={`accordion-collapse rounded border bg-dark collapse`}>
                                <div className='accordion-body mt-2'>
                                    {dataLoading ? (
                                        <Loading />
                                    ) : (
                                        !dataLoading &&
                                        (Object.keys(item).length ? (
                                            <div>
                                                <TorrentData item={item} files={files} />
                                                <div className='row w-100 align-items-center justify-content-around m-0 p-0 mb-1'>
                                                    <MagnetButton
                                                        buttonText={buttonText}
                                                        clickHandler={copyToClipboardHandler}
                                                        btnStyle='btn-warning'
                                                    />
                                                    <MagnetButton
                                                        buttonText='Open'
                                                        clickHandler={openInNewWindow}
                                                        btnStyle='btn-outline-warning'
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className='text-center mt-2 fw-bold'>Magnet Data Unavailable</div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
