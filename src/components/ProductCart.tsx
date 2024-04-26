
"use client";
import PropTypes from "prop-types";
import AddToBag from "./AddToBag";
import Image from "next/image";

type ProductCardProps = {
  name: string;
  imageUrl: string;
  price: number;
  currency: string;
  image:any
};

const ProductCard: React.FC<ProductCardProps> = ({ name, imageUrl, price, currency, image }) => {


  return (
    <div className="product-card">
      <Image src={imageUrl} alt={name} className="product-image" width={100} height={100}/>
      <h2 className="product-name">{name}</h2>
      <p className="product-price">${price}</p>

      <AddToBag name={name} imageUrl={imageUrl} price={price} currency={currency} image={image}/>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
