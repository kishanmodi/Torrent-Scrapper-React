import React from 'react';
import { Card } from './Card';
export const CardContainer = (props) => {
    return (
        <div className='row d-flex m-0 p-0 mt-3 gx-4 justify-content-center'>
            {props.items.map((item) => {
                return (
                    <div className='col-xl-3 col-lg-4 col-md-6 mb-4 col-sm-12 col-12'>
                        <Card item={item} key={item.date} />
                    </div>
                );
            })}
        </div>
    );
};
