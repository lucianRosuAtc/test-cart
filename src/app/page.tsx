import ProductCard from "@/components/ProductCart";


export default function Home() {
  return (
   <main className="flex flex-col sm:flex-row flex-wrap items-center justify-center">
    <ProductCard name="Adidas" price={60} imageUrl="/image/adidas.webp" currency={""} image={undefined} />
    {/* <ProductCard name="Adidas2" price={73} imageUrl="/image/adidas2.webp" currency={""} image={undefined} /> */}
   </main>
  );
}

