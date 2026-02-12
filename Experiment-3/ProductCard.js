import React from 'react';
import './ProductCard.css';

function ProductCard({ name, price, image, description, inStock }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p className={inStock ? 'green' : 'red'}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
}

export default ProductCard;