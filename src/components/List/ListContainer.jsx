import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import ListItem from './ListItem'
import "./styles.css"

export default function ListContainer({ item }) {
    const { items } = useContext(AppContext);

    return (
        <div className='list-containter'>
            <div className='wrapper'>
                <div className='list-header'>
                    <div>Name</div>
                    <div>Size</div>
                    <div>Seeders</div>
                    <div>Leechers</div>
                    <div>Uploader</div>
                </div>
                {items.map((item, index) => (
                    <ListItem item={item} key={index} index={index} />
                ))}
            </div>
        </div>
    )
}
