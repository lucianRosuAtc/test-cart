'use client'
import React, { useContext, useState } from "react";
import { ShoppingCart, X } from "lucide-react";
import { Button } from "./ui/button";

function Navbar() {
//   const { cart, removeFromCart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="navbar-content">
        <Button className="dropdown-icons" >
          <ShoppingCart />
        </Button>
      {/* {!isCartOpen && (
        <Button className="dropdown-icons" onClick={openCart}>
          <ShoppingCart />
        </Button>
      )}
      {isCartOpen && (
        <div className="cart-dropdown border border-red-500">
          <Button className="dropdown-icons close-icon" onClick={closeCart}>
            <X />
          </Button>

          {cart.map((item: any, index: number) => {
              const quantity = item.quantity || 1;
            console.log(`Price: ${item.price}, Quantity: ${item.quantity}`);
            return (
              <div key={index}>
      <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
      <h2 className="product-name cart-item-name">
        {item.name} x {quantity}
      </h2>
      <p className="product-price">£{(item.price * quantity).toFixed(2)}</p>
      <Button className="">
        Remove from cart
      </Button>
    </div>
            );
          })}
        </div>
      )} */}
    </div>
  );
}

export default Navbar;