import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      {/* Görsel Kutusu */}
      <div className="relative aspect-[3/4] w-full bg-[#F0EEED] rounded-[20px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Ürün Bilgileri */}
      <div className="mt-4 flex flex-col gap-1">
        <h3 className="text-sm lg:text-base font-bold text-black line-clamp-1">
          {product.title}
        </h3>

        {/* Rating (Yıldızlar) */}
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400 text-xs lg:text-sm">
            {"★".repeat(Math.round(product.rating.rate))}
            <span className="text-gray-300">
              {"★".repeat(5 - Math.round(product.rating.rate))}
            </span>
          </div>
          <span className="text-xs text-gray-500">{product.rating.rate}/5</span>
        </div>

        {/* Fiyat */}
        <div className="flex items-center gap-3">
          <span className="text-lg lg:text-2xl font-bold">
            ${product.price}
          </span>
          {/* İndirimli fiyat tasarımı gerekirse buraya eklenebilir */}
        </div>
      </div>
    </Link>
  );
}
