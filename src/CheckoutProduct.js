import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@mui/icons-material/Star';
import useStateValue from './Stateprovider';;

function CheckoutProduct({ id, image, price, title, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct_image' src={image} alt='' />
      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct_rating'>
          {
            Array(rating).fill()
              .map(() =>
                (<p><StarIcon /></p>))
          }
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Add to Cart</button>
        )}
      </div>
    </div>
  )
}

export default CheckoutProduct