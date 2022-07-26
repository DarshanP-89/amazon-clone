import React, { useEffect } from 'react';
import { useState } from 'react';
import { db } from './firebase';
import Order from './Order';
import './Orders.css';
import useStateValue from './Stateprovider';
import Header from './Header';

const Orders = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapShot => (
                    setOrders(
                        snapShot.docs.map(doc => ({
                            id: doc.id,
                            data: doc.data()
                        }))
                    )
                ))
        } else {
            setOrders([])
        }
    }, [user])

    return (
        <>
            <Header />
            <div className='orders'>
                <h1>Your Orders</h1>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </>
    )
}

export default Orders