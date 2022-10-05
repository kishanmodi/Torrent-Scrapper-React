import React from 'react'
import { useState } from 'react';

export default function Torrent({ files = [], magnet = "" }) {
    const [buttonText, setButtonText] = useState('Copy to Clipboard');

    // utility function that copies the magnet link to clipboard
    const copyToClipboardHandler = () => {
        setButtonText('Copied to Clipboard');
        navigator.clipboard.writeText(magnet);
    };
    // onCLick open a new Window for magnet Link
    const openInNewWindow = () => {
        window.open(magnet, '_blank');
    };


    return (
        <div className='list-item-torrent'>
            <div className='action-group'>
                <div className='header'>Actions:</div>
                <button onClick={() => copyToClipboardHandler()}>{buttonText}</button>
                <button onClick={() => openInNewWindow()}>Open</button>
            </div>
            <div className='files-group'>
                <div className='header'>Files:</div>
                <div className='files'>
                    {files.map(item => (
                        <div className='file'>{item}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
