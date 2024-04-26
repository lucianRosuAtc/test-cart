import ProductCard from "@/components/ProductCart";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <ProductCard name="Adidas" price={20} imageUrl="/image/adidas2.webp"/>
   </main>
  );
}
