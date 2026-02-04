import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="relative aspect-square bg-[#F0EEED] rounded-[20px] overflow-hidden mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-6 group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <h3 className="font-bold text-sm lg:text-base mb-1 truncate">
        {product.title}
      </h3>

      <div className="flex items-center gap-1 mb-1">
        <div className="flex text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              fill={
                i < Math.round(product.rating.rate) ? "currentColor" : "none"
              }
            />
          ))}
        </div>
        <span className="text-xs text-black/60">{product.rating.rate}/5</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-lg lg:text-xl font-bold">${product.price}</span>

        <span className="text-lg lg:text-xl font-bold text-black/30 line-through">
          ${(product.price * 1.2).toFixed(2)}
        </span>
        <span className="bg-red-100 text-red-500 text-[10px] lg:text-xs font-bold px-2 py-1 rounded-full">
          -20%
        </span>
      </div>
    </Link>
  );
}
