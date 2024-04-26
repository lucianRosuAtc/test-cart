"use client";
import PropTypes from "prop-types";
import AddToBag from "./AddToBag";
import Image from "next/image";

type ProductCardProps = {
  name: string;
  imageUrl: string;
  price: number;
  currency: string;
  image: any;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  imageUrl,
  price,
  currency,
  image,
}) => {
  return (
    <div className="border border-[#ccc] w-72 rounded-md text-center m-4 p-4 shadow-xl">
      <Image
        src={imageUrl}
        alt={name}
        className="rounded-md shadow-xl"
        width={300}
        height={300}
      />
      <h2 className="font-semibold mt-4 mb-2.5">{name}</h2>
      <p className="text-gray-500">£{price}</p>

      <AddToBag
        name={name}
        imageUrl={imageUrl}
        price={price}
        currency={currency}
        image={image}
      />
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
