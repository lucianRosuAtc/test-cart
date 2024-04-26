"use client";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      currency="USD"
      stripe=""
      successUrl=""
      cancelUrl=""
      shouldPersist={true}
      billingAddressCollection={true}
    >
      {children}
    </USCProvider>
  );
}
