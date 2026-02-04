"use client";

import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "@/types";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FilterDrawer from "@/components/FilterDrawer";
import { SlidersHorizontal, ChevronRight } from "lucide-react";

const getProductColors = (productId: number): string[] => {
  const colorPalette = [
    "#00C12B",
    "#F50606",
    "#F5DD06",
    "#F57906",
    "#06CAF5",
    "#063AF5",
    "#7D06F5",
    "#F506A4",
  ];

  const numColors = (productId % 3) + 1;
  const startIdx = productId % colorPalette.length;
  return Array.from(
    { length: numColors },
    (_, i) => colorPalette[(startIdx + i) % colorPalette.length],
  );
};

export default function CategoryPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const slug = decodeURIComponent(params.slug as string);
  const displayTitle = searchParams.get("title") || slug;

  const { data: products, isLoading } = useQuery({
    queryKey: ["category", slug],
    queryFn: async () => {
      const { data } = await axios.get<Product[]>(
        `https://fakestoreapi.com/products/category/${slug}`,
      );
      return data;
    },
  });

  const [priceRange, setPriceRange] = useState(1000);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    );
  };

  const filteredProducts = products?.filter((product) => {
    if (product.price > priceRange) return false;

    if (selectedColors.length > 0) {
      const productColors = getProductColors(product.id);
      const hasMatchingColor = productColors.some((color) =>
        selectedColors.includes(color),
      );
      if (!hasMatchingColor) return false;
    }

    return true;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <FilterDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        selectedColors={selectedColors}
        toggleColor={toggleColor}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-black/60 mb-8 border-t pt-4">
          <span className="hover:text-black cursor-pointer">Home</span>
          <ChevronRight size={14} />
          <span className="text-black font-medium capitalize">
            {displayTitle}
          </span>
        </div>

        <div className="flex gap-8">
          <aside className="hidden lg:block w-72 border border-black/10 rounded-[20px] p-6 h-fit">
            <div className="flex justify-between items-center mb-6 pb-6 border-b">
              <h2 className="text-xl font-bold">Filters</h2>
              <SlidersHorizontal size={20} className="text-black/60" />
            </div>

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
                  "#F506A4",
                ].map((color) => (
                  <button
                    key={color}
                    onClick={() => toggleColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColors.includes(color)
                        ? "border-black scale-110"
                        : "border-black/10"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-full font-medium text-sm hover:bg-black/80 transition">
              Apply Filter
            </button>
          </aside>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl lg:text-3xl font-bold capitalize">
                {displayTitle}
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
