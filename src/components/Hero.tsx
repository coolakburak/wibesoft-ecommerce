import React from "react";

export default function Hero() {
  return (
    <section className="bg-[#F2F0F1] overflow-hidden">
      <div className="container mx-auto px-4 pt-10 lg:pt-20 flex flex-col lg:flex-row items-center">
        {/* Metin İçeriği */}
        <div className="flex-1 text-center lg:text-left z-10">
          <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-4 lg:mb-8">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-gray-600 text-sm lg:text-base mb-6 lg:mb-10 max-w-lg">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="w-full lg:w-auto bg-black text-white px-14 py-4 rounded-full font-medium hover:bg-black/80 transition-all mb-10">
            Shop Now
          </button>

          {/* İstatistikler */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
            <div>
              <h3 className="text-2xl font-bold">200+</h3>
              <p className="text-xs text-gray-500">International Brands</p>
            </div>
            <div className="border-x border-gray-300 px-8">
              <h3 className="text-2xl font-bold">2,000+</h3>
              <p className="text-xs text-gray-500">High-Quality Products</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">30,000+</h3>
              <p className="text-xs text-gray-500">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Görsel Alanı */}
        <div className="flex-1 relative w-full h-[400px] lg:h-[600px]">
          {/* Not: Buraya Image bileşeniyle tasarımı destekleyen bir görsel ekleyebilirsin */}
          <div className="absolute inset-0 bg-[url('/hero-image.png')] bg-contain bg-no-repeat bg-bottom"></div>
        </div>
      </div>

      {/* Markalar Bandı */}
      <div className="bg-black py-6 lg:py-10">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 lg:gap-20 opacity-50 grayscale invert">
          <span className="text-white text-xl font-bold tracking-widest">
            VERSACE
          </span>
          <span className="text-white text-xl font-bold tracking-widest">
            ZARA
          </span>
          <span className="text-white text-xl font-bold tracking-widest">
            GUCCI
          </span>
          <span className="text-white text-xl font-bold tracking-widest">
            PRADA
          </span>
          <span className="text-white text-xl font-bold tracking-widest">
            Calvin Klein
          </span>
        </div>
      </div>
    </section>
  );
}
