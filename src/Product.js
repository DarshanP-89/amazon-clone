import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
import useStateValue from './Stateprovider';
// import StarBorderIcon from '@mui/icons-material/StarBorder';

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    });
  };

  return (
    <div className='product'>
      <div className='product_info'>
        {/* <img src={image} alt='the_lean_start-up' /> */}
        <p>{title}</p>
        <p className='product_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {
            Array(rating).fill().map(() => (
              <p>
                <StarIcon />
              </p>
            ))
          }
        </div>
      </div>

      <img src={image} alt='' />


      <button onClick={addToBasket}>Add to Cart</button>


    </div>
  );
}

export default Product