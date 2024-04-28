'use client'
import { ShoppingCart, X } from "lucide-react";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";


interface NavbarProps { 
  cartCount: number;
  handleCartClick: () => void;
}



function Navbar() {
  const {
    cartCount
  } = useShoppingCart();
  const { handleCartClick } = useShoppingCart();
  return (
    <div className="flex items-center justify-end h-20 pr-4 mb-10 bg-primary">
      <Button variant='default'
        onClick={() => handleCartClick()}
      >
        <ShoppingCart className="text-orange-500" />
        {(cartCount ?? 0) > 0 && <span className="absolute text-white mb-4 ml-8">{cartCount}</span>}
      </Button>
    </div>
  );
}

export default Navbar;
