"use client";
import React from "react";
import PropTypes from "prop-types";
import { Button } from "./ui/button";

type ProductCardProps = {
  name: string;
  imageUrl: string;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, imageUrl, price }) => {
  const onAdd = () => {
    // Add your logic here
    console.log("Add to Cart clicked");
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">${price}</p>

      <Button onClick={onAdd} variant="default">
        Add to Cart
      </Button>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
