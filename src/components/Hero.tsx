// import React from "react";

// export default function Hero() {
//   return (
//     <section className="bg-[#F2F0F1] overflow-hidden">
//       <div className="container mx-auto px-4 pt-10 lg:pt-20 flex flex-col lg:flex-row items-center">
//         {/* Metin İçeriği */}
//         <div className="flex-1 text-center lg:text-left z-10">
//           <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-4 lg:mb-8">
//             FIND CLOTHES THAT MATCHES YOUR STYLE
//           </h1>
//           <p className="text-gray-600 text-sm lg:text-base mb-6 lg:mb-10 max-w-lg">
//             Browse through our diverse range of meticulously crafted garments,
//             designed to bring out your individuality and cater to your sense of
//             style.
//           </p>
//           <button className="w-full lg:w-auto bg-black text-white px-14 py-4 rounded-full font-medium hover:bg-black/80 transition-all mb-10">
//             Shop Now
//           </button>

//           {/* İstatistikler */}
//           <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
//             <div>
//               <h3 className="text-2xl font-bold">200+</h3>
//               <p className="text-xs text-gray-500">International Brands</p>
//             </div>
//             <div className="border-x border-gray-300 px-8">
//               <h3 className="text-2xl font-bold">2,000+</h3>
//               <p className="text-xs text-gray-500">High-Quality Products</p>
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold">30,000+</h3>
//               <p className="text-xs text-gray-500">Happy Customers</p>
//             </div>
//           </div>
//         </div>

//         {/* Görsel Alanı */}
//         <div className="flex-1 relative w-full h-[400px] lg:h-[600px] mt-8 lg:mt-0">
//           <div className="absolute inset-0 bg-[url('/categories/hero-img.jpg')] bg-cover lg:bg-contain bg-top lg:bg-bottom bg-no-repeat"></div>

//           {/* Tasarımdaki siyah yıldız ikonlarını mobilde de göstermek için (Opsiyonel) */}
//           <div className="absolute top-10 right-4 lg:right-0 w-8 h-8 lg:w-14 lg:h-14 bg-[url('/star-icon.png')] bg-contain bg-no-repeat"></div>
//           <div className="absolute top-40 left-4 lg:left-[-40px] w-6 h-6 lg:w-10 lg:h-10 bg-[url('/star-icon.png')] bg-contain bg-no-repeat opacity-50"></div>
//         </div>
//       </div>

//       {/* Markalar Bandı */}
//       <div className="bg-black py-6 lg:py-10">
//         <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 lg:gap-20 opacity-50 grayscale invert">
//           <span className="text-white text-xl font-bold tracking-widest">
//             VERSACE
//           </span>
//           <span className="text-white text-xl font-bold tracking-widest">
//             ZARA
//           </span>
//           <span className="text-white text-xl font-bold tracking-widest">
//             GUCCI
//           </span>
//           <span className="text-white text-xl font-bold tracking-widest">
//             PRADA
//           </span>
//           <span className="text-white text-xl font-bold tracking-widest">
//             Calvin Klein
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

export default function Hero() {
  return (
    <section className="bg-[#F2F0F1] overflow-hidden relative">
      <div className="container mx-auto px-4 pt-10 lg:pt-20 flex flex-col lg:flex-row items-center">
        {/* Metin İçeriği */}
        <div className="flex-1 text-center lg:text-left z-20">
          <h1 className="text-[40px] lg:text-[64px] font-black leading-tight mb-4 lg:mb-8 text-black">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-black/60 text-[14px] lg:text-base mb-6 lg:mb-10 max-w-lg mx-auto lg:mx-0">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="w-full lg:w-auto bg-black text-white px-14 py-4 rounded-full font-medium hover:bg-black/80 transition-all mb-10">
            Shop Now
          </button>

          {/* İstatistikler */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-12">
            <div>
              <h3 className="text-2xl lg:text-4xl font-bold">200+</h3>
              <p className="text-xs lg:text-sm text-black/60">
                International Brands
              </p>
            </div>
            <div className="border-x border-black/10 px-8">
              <h3 className="text-2xl lg:text-4xl font-bold">2,000+</h3>
              <p className="text-xs lg:text-sm text-black/60">
                High-Quality Products
              </p>
            </div>
            <div>
              <h3 className="text-2xl lg:text-4xl font-bold">30,000+</h3>
              <p className="text-xs lg:text-sm text-black/60">
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        {/* Görsel ve Yıldızlar Alanı */}
        <div className="flex-1 relative w-full h-[448px] lg:h-[663px]">
          {/* Ana Görsel */}
          <img
            src="/categories/hero-img.jpg" 
            alt="Hero models"
            className="absolute inset-0 w-full h-full object-cover lg:object-contain object-top lg:object-bottom"
          />

          {/* Büyük Yıldız (Sağ Üst) */}
          <div className="absolute top-10 right-4 lg:right-0 w-12 h-12 lg:w-24 lg:h-24 z-30">
            <svg viewBox="0 0 100 100" fill="black">
              <path d="M50 0L54 46L100 50L54 54L50 100L46 54L0 50L46 46L50 0Z" />
            </svg>
          </div>

          {/* Küçük Yıldız (Sol Orta) */}
          <div className="absolute top-32 left-4 lg:left-0 w-8 h-8 lg:w-14 lg:h-14 z-30">
            <svg viewBox="0 0 100 100" fill="black" opacity="0.6">
              <path d="M50 0L54 46L100 50L54 54L50 100L46 54L0 50L46 46L50 0Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Markalar Bandı */}
      <div className="bg-black py-8">
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-8 lg:gap-20 invert grayscale">
          <span className="text-white text-xl lg:text-3xl font-bold italic tracking-tighter">
            VERSACE
          </span>
          <span className="text-white text-xl lg:text-3xl font-bold tracking-tighter">
            ZARA
          </span>
          <span className="text-white text-xl lg:text-3xl font-bold tracking-tighter">
            GUCCI
          </span>
          <span className="text-white text-xl lg:text-3xl font-bold tracking-tighter">
            PRADA
          </span>
          <span className="text-white text-xl lg:text-3xl font-bold tracking-tighter">
            Calvin Klein
          </span>
        </div>
      </div>
    </section>
  );
}
