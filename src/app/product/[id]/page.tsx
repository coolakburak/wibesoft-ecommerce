"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { Star, Minus, Plus, Check } from "lucide-react";

// Proje içi bileşenler ve store
import { Product } from "@/types";
import { useCartStore } from "@/store/useCartStore";
import { useProducts } from "@/hooks/useProducts";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

// Yardımcı Fonksiyon: Tekil Ürün Getirme
const fetchProduct = async (id: string): Promise<Product> => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);

  // Yerel State'ler (Miktar, Renk, Beden)
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Large");

  // Mock Veriler (Tasarım uyumu için)
  const colors = ["#4F4631", "#314F4A", "#31344F"];
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  // TanStack Query: Ana Ürün Verisi
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id as string),
    enabled: !!id,
  });

  // TanStack Query: Önerilen Ürünler (Alttaki kısım için)
  const { data: relatedProducts } = useProducts(4);

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center font-bold text-2xl animate-bounce">
        SHOP.CO
      </div>
    );
  if (isError || !product)
    return (
      <div className="h-screen flex items-center justify-center">
        Ürün bulunamadı.
      </div>
    );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* 1. ÜRÜN BİLGİLERİ ALANI */}
        <section className="container mx-auto px-4 py-8 lg:py-12 border-b">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* SOL: Görsel Galerisi */}
            <div className="flex flex-col-reverse lg:flex-row gap-4 flex-1">
              <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="relative w-24 h-24 lg:w-32 lg:h-36 bg-[#F0EEED] rounded-2xl flex-shrink-0 border border-transparent hover:border-black transition-all cursor-pointer"
                  >
                    <Image
                      src={product.image}
                      alt="thumb"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                ))}
              </div>
              <div className="relative flex-1 aspect-[4/5] bg-[#F0EEED] rounded-2xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-10 lg:p-16"
                  priority
                />
              </div>
            </div>

            {/* SAĞ: Ürün Detayları */}
            <div className="flex-1 flex flex-col">
              <h1 className="text-3xl lg:text-5xl font-black uppercase mb-4 leading-none">
                {product.title}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill={
                        i < Math.round(product.rating.rate)
                          ? "currentColor"
                          : "none"
                      }
                      stroke={
                        i < Math.round(product.rating.rate)
                          ? "currentColor"
                          : "#CBD5E0"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">
                  {product.rating.rate}/5
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold">${product.price}</span>
                <span className="text-3xl font-bold text-black/30 line-through">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
                <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm font-bold">
                  -20%
                </span>
              </div>

              <p className="text-black/60 text-sm lg:text-base leading-relaxed mb-6 border-b pb-6">
                {product.description}
              </p>

              {/* Renk Seçimi */}
              <div className="mb-6 border-b pb-6">
                <p className="text-black/60 mb-4 font-medium">Select Colors</p>
                <div className="flex gap-3">
                  {colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(i)}
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-black/10 transition-transform active:scale-90"
                      style={{ backgroundColor: color }}
                    >
                      {selectedColor === i && <Check size={18} color="white" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Beden Seçimi */}
              <div className="mb-8 border-b pb-6">
                <p className="text-black/60 mb-4 font-medium">Choose Size</p>
                <div className="flex flex-wrap gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "bg-[#F0F0F0] text-black/60 hover:bg-gray-200"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Miktar ve Buton */}
              <div className="flex gap-4">
                <div className="flex items-center bg-[#F0F0F0] rounded-full px-6 py-4 gap-8">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="hover:scale-125 transition-transform"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="font-bold text-lg min-w-[20px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="hover:scale-125 transition-transform"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <button
                  onClick={() => {
                    for (let i = 0; i < quantity; i++) addToCart(product);
                  }}
                  className="flex-1 bg-black text-white rounded-full font-bold text-lg hover:bg-opacity-80 transition-all active:scale-95"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. YORUMLAR BÖLÜMÜ */}
        <Reviews />

        {/* 3. ÖNERİLEN ÜRÜNLER (You Might Also Like) */}
        <section className="container mx-auto px-4 py-16 lg:py-24">
          <h2 className="text-3xl lg:text-5xl font-black text-center mb-10 lg:mb-16 uppercase">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts?.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
