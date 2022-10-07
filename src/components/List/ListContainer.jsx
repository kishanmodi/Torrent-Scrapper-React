import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import ListItem from './ListItem'
import "./styles.css"

export default function ListContainer({ item }) {
    const { items } = useContext(AppContext);

    return items.length === 0 ? null : (
        <div className='list-containter'>
            <div className='wrapper'>
                <div className='list-header'>
                    <div>Name</div>
                    <div>Size</div>
                    <div className='nonMob'>Seeders</div>
                    <div className='nonMob'>Leechers</div>
                    <div className='mob'>[S]</div>
                    <div className='mob'>[L]</div>
                    <div>Uploader</div>
                </div>
                {items.map((item, index) => (
                    <ListItem item={item} key={index} index={index} />
                ))}
            </div>
        </div>
    )
}
