import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Casual",
    slug: "men's clothing",
    img: "/categories/casual.jpg",
    className: "md:col-span-1",
  },
  {
    title: "Formal",
    slug: "women's clothing",
    img: "/categories/formal.jpg",
    className: "md:col-span-2",
  },
  {
    title: "Party",
    slug: "jewelery",
    img: "/categories/party.jpg",
    className: "md:col-span-2",
  },
  {
    title: "Gym",
    slug: "electronics",
    img: "/categories/gym.jpg",
    className: "md:col-span-1",
  },
];

export default function DressStyle() {
  return (
    <section className="container mx-auto px-4 py-10">
      {/* Gri Arka Planlı Ana Kutu */}
      <div className="bg-[#F0F0F0] rounded-[20px] lg:rounded-[40px] p-6 lg:p-16">
        <h2 className="text-[32px] lg:text-[48px] font-black text-center mb-8 lg:mb-14 uppercase">
          BROWSE BY DRESS STYLE
        </h2>

        {/* Grid Yapısı: Masaüstünde 3 sütun üzerinden hesaplıyoruz */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={`/category/${encodeURIComponent(cat.slug)}?title=${cat.title}`}
              className={`relative h-[190px] lg:h-[289px] bg-white rounded-[20px] overflow-hidden group ${cat.className}`}
            >
              {/* Kategori İsmi */}
              <span className="absolute top-6 left-6 lg:top-8 lg:left-8 text-2xl lg:text-[32px] font-bold z-10 text-black">
                {cat.title}
              </span>

              {/* Arka Plan Görseli */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  className="object-cover object-right-top lg:object-right transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
