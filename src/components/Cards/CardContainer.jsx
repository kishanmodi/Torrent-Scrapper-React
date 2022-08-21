import React, { useContext } from 'react';
import { Card } from './Card';
import { AppContext } from '../../Context/AppContext';
export const CardContainer = (props) => {
    const { items } = useContext(AppContext);
    return (
        <div className='row d-flex m-0 p-0 mt-3 gx-4 justify-content-center mb-5'>
            {items.map((item, index) => {
                return <Card item={item} key={index} index={index} />;
            })}
        </div>
    );
};
