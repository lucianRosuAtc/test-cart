'use client'
import React, { useContext, useState } from "react";
import { ShoppingCart, X } from "lucide-react";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";

function Navbar() {

const{handleCartClick} = useShoppingCart();
  return (
    <div className="navbar-content">
        <Button className="dropdown-icons" 
        onClick={() => handleCartClick()}
        >
          <ShoppingCart />
        </Button>
    </div>
  );
}

export default Navbar;