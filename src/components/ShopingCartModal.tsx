'use client'
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";

export default function ShopingCartModal() {
    const {cartCount} = useShoppingCart();
  return (
    <Sheet defaultOpen>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shoping Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
<ul className="-my-6 divide-y divide-gray-200">
{cartCount === 0 ? (
<h1 className="">No items in the cart</h1>
):(
<h1>You have items in the cart</h1>
)}
</ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
