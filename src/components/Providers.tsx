"use client";
import { CartProvider } from "use-shopping-cart";

export default function MyCartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      currency="GBP"
      stripe={ process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string}
      successUrl="eca"
      cancelUrl="efwqef"
      shouldPersist={true}
      billingAddressCollection={false}
    >
      {children}
    </CartProvider>
  );
}
