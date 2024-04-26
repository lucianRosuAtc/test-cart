// "use client";
// import React from "react";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet";
// import { useShoppingCart } from "use-shopping-cart";
// import Image from "next/image";
// import { Trash2 } from "lucide-react";

// export default function ShopingCartModal() {
//   const {
//     cartCount,
//     shouldDisplayCart,
//     handleCartClick,
//     cartDetails,
//     removeItem,
//     totalPrice,
//   } = useShoppingCart();

//   return (
//     <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
//       <SheetContent className="sm:max-w-lg w-[90vw]">
//         <SheetHeader>
//           <SheetTitle>Shoping Cart</SheetTitle>
//         </SheetHeader>
//         <div className="h-full flex flex-col justify-between">
//           <div className="mt-8 flex-1 overflow-y-auto">
//             <ul className="-my-6 divide-y divide-gray-200">
//               {cartCount === 0 ? (
//                 <h1 className="py-6">No items in the cart</h1>
//               ) : (
//                 <>
//                   {Object.values(cartDetails ?? {}).map((entry) => (
//                     <li className="flex py-6" key={entry.id}>
//                       <div className="flex items-center justify-center h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                         <Image
//                           src={entry.image as string}
//                           alt="Product image"
//                           width={100}
//                           height={100}
//                         />
//                       </div>
//                       <div className="ml-4 flex flex-1 flex-col">
//                         <div className="">
//                           <div className="flex justify-between text-base font-medium text-gray-900">
//                             <h3 className="">{entry.name}</h3>
//                             <p className="">£{totalPrice}</p>
//                           </div>
//                           <div className="flex flex-1 items-end justify-between text-xs">
//                             <p className="text-gray-500">
//                               QTY:{entry.quantity}
//                             </p>
//                             <div className="flex">
//                               <button
//                                 className="font -medium text-primary hober:text-primary/80"
//                                 onClick={() => removeItem(entry.id)}
//                               >
//                                 <Trash2 />
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </>
//               )}
//             </ul>
//           </div>
//           <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
//             <div className="flex justify-between text-base font-medium text-gray-900">
//               <p>Subtotal: </p>
//               <p>£{totalPrice}</p>
//             </div>
//             <p className="mt-0.5 text-sm text-gray-500">
//               Shipping and taxes calculated at checkout.
//             </p>
//           </div>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// }

"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";

export default function ShopingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
  } = useShoppingCart();

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle className="mt-1">Shoping Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6">No items in the cart</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li
                      className="flex flex-col items-center py-6"
                      key={entry.id}
                    >
                      <div className="flex items-center justify-center h-60 w-60 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 shadow-xl">
                        <Image
                          src={entry.image as string}
                          alt="Product image"
                          width={210}
                          height={220}
                          className="rounded-md shadow-xl"
                        />
                      </div>
                      <div className="my-8 flex flex-1 flex-col border">
                        <div className="">
                          <div className="flex justify-between text-base font-medium text-gray-500">
                            <h3 className="">
                              product:{" "}
                              <span className="font-semibold text-gray-900 mr-8">
                                {entry.name}
                              </span>
                            </h3>
                            <p className="">
                              {" "}
                              price:{" "}
                              <span className="font-semibold text-gray-900">
                                £{entry.price}
                              </span>
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm mt-3">
                            <p className="text-gray-500">
                              QTY:
                              <span className="font-semibold text-gray-900">
                                {entry.quantity}
                              </span>
                            </p>
                            <p className="">
                              total:{" "}
                              <span className="font-semibold text-gray-900">
                                £{totalPrice}
                              </span>
                            </p>
                          </div>
                          <div className="flex items-center justify-center mt-6">
                            <Button
                              className="font-medium text-secondary group"
                              onClick={() => removeItem(entry.id)}
                            >
                              <Trash2 className="group-hover:text-red-500 mr-4" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal: </p>
              <p>£{totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
