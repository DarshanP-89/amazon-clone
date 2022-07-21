import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import useStateValue from './Stateprovider';
import Subtotal from './Subtotal';

export const Checkout = () => {
    const [{basket,user}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/PDAYILM/v1/01.jpg' alt='' />

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className='checkout_title'>
                        {/* <CheckoutProduct/> */}
                    </h2>
                    {
                        basket.map(item => 
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            image={item.image}/>)
                    }
                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal/>
            </div>
        </div>
    )
}
