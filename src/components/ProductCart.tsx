'use client'
import React from 'react';
import PropTypes from 'prop-types';

type ProductCardProps = {
  name: string;
  imageUrl: string;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, imageUrl, price }) => {
  const onAdd = () => {
    // Add your logic here
    console.log('Add to Cart clicked');
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
      <button onClick={onAdd}>Add to Cart</button>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
