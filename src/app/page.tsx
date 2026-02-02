"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import CategoryCard from "@/components/CategoryCard";

export default function HomePage() {
  // Tasarımdaki "New Arrivals" için ilk 4 ürünü çekiyoruz
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
    <>
      <Navbar />
      <Hero />

      <main className="container mx-auto px-4 py-12">
        {/* NEW ARRIVALS SECTION */}
        <section>
          <h2 className="text-3xl lg:text-5xl font-black text-center mb-8 lg:mb-14 uppercase">
            New Arrivals
          </h2>

          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-100 animate-pulse rounded-2xl"
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

          <div className="mt-8 flex justify-center">
            <button className="px-12 py-3 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all w-full md:w-auto">
              View All
            </button>
          </div>
        </section>

        <hr className="my-16 border-gray-100" />

        {/* BROWSE BY DRESS STYLE SECTION */}
        <section className="mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-center mb-8 lg:mb-14 uppercase">
            Browse by Dress Style
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.title}
                title={cat.title}
                imageUrl={cat.imageUrl}
                linkHref={`/category/${encodeURIComponent(cat.slug)}?title=${cat.title}`}
              />
            ))}
          </div>
        </section>

        <hr className="my-16 border-gray-100" />

        {/* TOP SELLING SECTION (İkinci bir liste olarak eklenebilir) */}
        <section className="mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-center mb-8 lg:mb-14 uppercase">
            Top Selling
          </h2>
          <div className="text-center text-gray-400">
            {/* Buraya da benzer bir grid yapısı gelecek */}
            Gelecek ürünler...
          </div>
        </section>
      </main>
    </>
  );
}
