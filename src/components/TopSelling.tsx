"use client";

import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";

export default function TopSelling() {
  // En çok satanları simüle etmek için 4 ürün çekiyoruz
  const { data: products, isLoading } = useProducts(4);

  return (
    <section className="container mx-auto px-4 py-12 lg:py-20 border-t border-black/10">
      <h2 className="text-[32px] lg:text-[48px] font-black text-center mb-8 lg:mb-14 uppercase">
        TOP SELLING
      </h2>

      {isLoading ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="animate-pulse bg-gray-100 aspect-[3/4] rounded-[20px]"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <div className="mt-8 lg:mt-12 text-center">
        <button className="w-full lg:w-[218px] px-14 py-4 border border-black/10 rounded-full font-medium hover:bg-black hover:text-white transition-all">
          View All
        </button>
      </div>
    </section>
  );
}
