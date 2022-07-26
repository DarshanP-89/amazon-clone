import React from 'react';
import './Payment.css';
import useStateValue from './Stateprovider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();


    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    Checkout(<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>


                {/* Address */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>300 Regina Street North </p>
                        <p>Waterloo ,ON.</p>
                        <p>Canada</p>
                    </div>
                </div>

                {/* Products */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating} />))}

                    </div>
                </div>

                {/* Payment Method */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment