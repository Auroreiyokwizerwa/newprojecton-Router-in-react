import React from 'react'
import React, { useEffect } from 'react';
import  CartItems from './CartItems'

const Carts = () => {
    useEffect(() => {
        console.log(CartItems);
    }, []);

    return (
        <div className='cart-table'>
            <h1>Cart Items:</h1>

            {CartItems && CartItems.map((item, index) =>
                <div key={index}>
                    <p>{item.productName}</p>
                    <p>{item.storeName}</p>
                    <p>{item.price}</p>
                    <p>{item.category}</p>
                    <p>{item.status}</p>
                </div>
            )}

        </div>
    )
}
export default Carts