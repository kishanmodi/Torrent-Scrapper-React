import React from 'react'
import { useState } from 'react'
import { getTorrentData } from '../../core';
import { Loading } from '../Loading';
import Torrent from './Torrent';

export default function ListItem({ item }) {
    const [expand, setExpand] = useState(false);
    const [dataLoading, setDataLoading] = useState(false);
    const [torrent, setTorrent] = useState({});
    // const [files, setFiles] = useState([]);


    const getData = async (link) => {
        try {
            setDataLoading(true);

            const torrentData = await getTorrentData(link);
            if (!torrentData.status)
                throw new Error(torrentData.err)

            setTorrent(torrentData.data);
            setDataLoading(false);
            setExpand(true)
            console.log(torrentData.data)
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <>
            <div className='list-item' onClick={() => !dataLoading && !expand ? getData(item.url) : null}>
                <div className='name'>{item.name}</div>
                <div className='size'>{item.size}</div>
                <div className='seeders'>{item.seeds}</div>
                <div className='leechers'>{item.leeches}</div>
                <div className='uploader'>{item.uploader}</div>
            </div>
            {dataLoading && <Loading />}
            {expand && <Torrent files={torrent.files} magnet={torrent.magnet} />}
        </>
    )
}
