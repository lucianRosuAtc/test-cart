import ProductCard from "@/components/ProductCart";


export default function Home() {
  return (
   <main className="flex flex-col flex-wrap items-center justify-center">
    <ProductCard name="Adidas" price={60} imageUrl="/image/adidas.webp" currency={""} image={undefined} />
   </main>
  );
}

