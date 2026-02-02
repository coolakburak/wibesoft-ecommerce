"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FilterDrawer from "@/components/FilterDrawer"; // Mobil filtre bileşeni
import { SlidersHorizontal, ChevronRight } from "lucide-react";

export default function CategoryPage() {
  const { slug } = useParams();
  const { data: products, isLoading } = useProducts();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Filtre State'leri
  const [priceRange, setPriceRange] = useState(200);

  // Filtreleme Fonksiyonu (İstemci tarafında simüle ediyoruz)
  const filteredProducts = products?.filter((p) => p.price <= priceRange);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Mobil Filtre Menüsü */}
      <FilterDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-black/60 mb-8 border-t pt-4">
          <span className="hover:text-black cursor-pointer">Home</span>
          <ChevronRight size={14} />
          <span className="text-black font-medium capitalize">{slug}</span>
        </div>

        <div className="flex gap-8">
          {/* MASAÜSTÜ FİLTRE PANELİ */}
          <aside className="hidden lg:block w-72 border border-black/10 rounded-[20px] p-6 h-fit">
            <div className="flex justify-between items-center mb-6 pb-6 border-b">
              <h2 className="text-xl font-bold">Filters</h2>
              <SlidersHorizontal size={20} className="text-black/60" />
            </div>

            {/* Fiyat Filtresi */}
            <div className="mb-6 pb-6 border-b">
              <h3 className="font-bold mb-4">Price</h3>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-black"
              />
              <div className="flex justify-between mt-2 text-sm font-bold">
                <span>$0</span>
                <span>${priceRange}</span>
              </div>
            </div>

            {/* Renkler (Görseldeki gibi) */}
            <div className="mb-6 pb-6 border-b">
              <h3 className="font-bold mb-4">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "#00C12B",
                  "#F50606",
                  "#F5DD06",
                  "#F57906",
                  "#06CAF5",
                  "#063AF5",
                  "#7D06F5",
                ].map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border border-black/10"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-full font-medium text-sm">
              Apply Filter
            </button>
          </aside>

          {/* ÜRÜN LİSTESİ */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl lg:text-3xl font-bold capitalize">
                {slug}
              </h1>
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="lg:hidden p-2 bg-[#F0F0F0] rounded-full"
              >
                <SlidersHorizontal size={20} />
              </button>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-pulse">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="aspect-[3/4] bg-gray-100 rounded-2xl"
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
