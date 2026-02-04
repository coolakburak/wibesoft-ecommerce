import { navigate } from "next/dist/client/components/segment-cache/navigation";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#F2F0F1] overflow-hidden">
      <div className="container mx-auto px-4 pt-10 lg:pt-20 flex flex-col lg:flex-row items-center">
        <div className="flex-1 text-center lg:text-left z-20">
          <h1 className="text-[36px] lg:text-[64px] font-black leading-tight mb-4 lg:mb-8 text-black">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-black/60 text-[14px] lg:text-base mb-6 lg:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="w-full lg:w-auto bg-black text-white px-14 py-4 rounded-full font-medium hover:bg-black/80 transition-all mb-8 lg:mb-12">
            Shop Now
          </button>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 mb-12">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-4xl font-bold">200+</h3>
              <p className="text-[12px] lg:text-sm text-black/60">
                International Brands
              </p>
            </div>
            <div className="border-x border-black/10 px-6 lg:px-8 text-center lg:text-left">
              <h3 className="text-2xl lg:text-4xl font-bold">2,000+</h3>
              <p className="text-[12px] lg:text-sm text-black/60">
                High-Quality Products
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-4xl font-bold">30,000+</h3>
              <p className="text-[12px] lg:text-sm text-black/60">
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 relative w-full h-[400px] sm:h-[500px] lg:h-[660px] min-h-[400px]">
          <Image
            src="/categories/hero-img.jpg"
            alt="Hero models"
            fill
            priority
            className="object-cover lg:object-contain object-top lg:object-bottom"
            sizes="100vw"
          />

          <div className="absolute top-12 right-4 lg:top-10 lg:right-0 w-12 h-12 lg:w-24 lg:h-24 z-30">
            <svg viewBox="0 0 100 100" fill="black">
              <path d="M50 0L54 46L100 50L54 54L50 100L46 54L0 50L46 46L50 0Z" />
            </svg>
          </div>

          <div className="absolute top-40 left-6 lg:top-32 lg:left-0 w-8 h-8 lg:w-14 lg:h-14 z-30">
            <svg viewBox="0 0 100 100" fill="black" opacity="0.6">
              <path d="M50 0L54 46L100 50L54 54L50 100L46 54L0 50L46 46L50 0Z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-black py-8 lg:py-10">
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-20">
          <span className="text-white text-xl lg:text-3xl font-bold italic">
            VERSACE
          </span>
          <span className="text-white text-xl lg:text-3xl font-bold">ZARA</span>
          <span className="text-white text-xl lg:text-3xl font-bold">
            GUCCI
          </span>
          <span className="text-white text-xl lg:text-3xl font-bold">
            PRADA
          </span>
          <span className="text-white text-xl lg:text-3xl font-bold">
            Calvin Klein
          </span>
        </div>
      </div>
    </section>
  );
}
