'use client'
import { ShoppingCart, X } from "lucide-react";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";

function Navbar() {

const{handleCartClick} = useShoppingCart();
  return (
    <div className="flex items-center justify-end h-20 pr-4 mb-10 bg-primary">
        <Button className="dropdown-icons" variant='default' 
        onClick={() => handleCartClick()}
        >
          <ShoppingCart className="text-orange-500"/>
        </Button>
    </div>
  );
}

export default Navbar;