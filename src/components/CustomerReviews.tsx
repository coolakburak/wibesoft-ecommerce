"use client";

import { useRef } from "react";
import { Star, Check, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes.",
  },
  {
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Mooen X.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
];

export default function CustomerReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8 lg:mb-10">
          <h2 className="text-[32px] lg:text-[48px] font-black uppercase leading-tight max-w-[280px] lg:max-w-none">
            OUR HAPPY CUSTOMERS
          </h2>

          <div className="flex gap-3 mb-2 lg:mb-4">
            <button
              onClick={() => scroll("left")}
              className="p-2 lg:p-3 text-black hover:bg-black/5 transition-colors"
              aria-label="Previous review"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 lg:p-3 text-black hover:bg-black/5 transition-colors"
              aria-label="Next review"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-full md:min-w-[400px] border border-black/10 p-6 lg:p-8 rounded-[20px] flex flex-col gap-3 snap-start"
            >
              <div className="flex text-yellow-400 gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={18} fill="currentColor" />
                ))}
              </div>
              <div className="flex items-center gap-1 font-bold text-lg lg:text-xl">
                {t.name}
                <div className="bg-[#01AB31] text-white rounded-full p-0.5 flex items-center justify-center">
                  <Check size={12} strokeWidth={4} />
                </div>
              </div>
              <p className="text-black/60 text-sm lg:text-base leading-relaxed">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
