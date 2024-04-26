"use client";

import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
  name: string;
  imageUrl: string;
  price: number;
  currency: string;
  image: any;
}

export default function AddToBag({
  name,
  imageUrl,
  price,
  currency,
}: ProductCart) {

  const { addItem, handleCartClick } = useShoppingCart();
  const product = {
    name: name,
    image: imageUrl,
    price: price,
    id: "string",
    currency: currency,
  };


  return (
    <Button
      className=" shadow-xl my-4"
      onClick={() => {
        addItem(product)
        , handleCartClick();
      }}
    >
      Add to Cart
    </Button>
  );
}
