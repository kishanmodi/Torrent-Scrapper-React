import React, { useEffect } from 'react';
import { Card } from './Card';
export const CardContainer = (props) => {
    useEffect(() => {}, [props.items]);
    return (
        <div className='row d-flex m-0 p-0 mt-3 gx-4 justify-content-center mb-5'>
            {props.items.map((item, index) => {
                return <Card item={item} key={index} index={index} Loading={props.loading} />;
            })}
        </div>
    );
};
