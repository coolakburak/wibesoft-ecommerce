import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  linkHref: string;
}

export default function CategoryCard({
  title,
  imageUrl,
  linkHref,
}: CategoryCardProps) {
  return (
    <Link
      href={linkHref}
      className="block relative h-48 sm:h-64 rounded-xl overflow-hidden group"
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 flex items-end p-4">
        <h3 className="text-xl font-bold text-white z-10">{title}</h3>
      </div>
    </Link>
  );
}
