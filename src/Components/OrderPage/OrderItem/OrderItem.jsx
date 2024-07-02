import React from 'react';
import "./OrderItem.css"
export const OrderItem = ({item}) => {
    return (
        <div className='wrapperItem'>
           <div className='itemMain'>
                <img src={item.image} alt="" />
                <div className='itemTitle'>{item.title}</div>
           </div>
            <div>{item.price} $</div>
        </div>
       
    );
};
