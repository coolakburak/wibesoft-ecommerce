"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import Footer from "@/components/Footer";
import TopSelling from "@/components/TopSelling";
import CustomerReviews from "@/components/CustomerReviews";
import DressStyle from "@/components/DressStyle";

export default function HomePage() {
  const { data: newArrivals, isLoading } = useProducts(4);

  const categories = [
    {
      title: "Men's Clothing",
      slug: "men's clothing",
      imageUrl: "/categories/mens-clothing.jpg",
    },
    {
      title: "Women's Clothing",
      slug: "women's clothing",
      imageUrl: "/categories/womens-clothing.jpg",
    },
    {
      title: "Jewelery",
      slug: "jewelery",
      imageUrl: "/categories/jewelery.jpg",
    },
    {
      title: "Electronics",
      slug: "electronics",
      imageUrl: "/categories/electronics.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />

      <main className="flex-grow">
        {/* NEW ARRIVALS */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl lg:text-5xl font-black text-center mb-8 lg:mb-14 uppercase">
            New Arrivals
          </h2>
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-100 rounded-2xl"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
              {newArrivals?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          <div className="mt-8 flex justify-center border-b pb-16">
            <button className="px-12 py-3 border border-gray-200 rounded-full font-medium hover:bg-black hover:text-white transition-all w-full md:w-auto">
              View All
            </button>
          </div>
        </section>

        {/* TOP SELLING */}
        <TopSelling />

        {/* DRESS STYLE */}
        <section className="container mx-auto px-4 py-12">
          <DressStyle />
        </section>

        {/* REVIEWS */}
        <CustomerReviews />
      </main>

      {/* FOOTER - Mutlaka main dışına almalısın */}
      <Footer />
    </div>
  );
}
