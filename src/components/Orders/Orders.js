import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { products, previousCart } = useLoaderData();
    const [cart, setCart] = useState(previousCart);
    // console.log(cart)

    const handleRemoveItem = (id) => {
        const restItem = cart.filter(product => id !== product.id)
        setCart(restItem)
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => 
                    <ReviewItem key={product.id} 
                    product= {product} 
                    handleRemoveItem={handleRemoveItem}/> )
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Orders;