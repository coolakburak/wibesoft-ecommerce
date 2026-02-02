"use client";
import { X, ChevronRight, Check } from "lucide-react";

export default function FilterDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white lg:hidden overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Filters</h2>
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Fiyat Aralığı (Slider mantığı) */}
        <div className="mb-8 border-b pb-8">
          <h3 className="font-bold mb-4">Price</h3>
          <div className="h-1 bg-[#F0F0F0] relative rounded-full">
            <div className="absolute left-[10%] right-[30%] h-full bg-black rounded-full"></div>
            <div className="absolute left-[10%] -top-1.5 w-4 h-4 bg-black rounded-full"></div>
            <div className="absolute right-[30%] -top-1.5 w-4 h-4 bg-black rounded-full"></div>
          </div>
          <div className="flex justify-between mt-4 font-bold text-sm">
            <span>$50</span> <span>$200</span>
          </div>
        </div>

        {/* Renk Seçimi (Daireler) */}
        <div className="mb-8 border-b pb-8">
          <h3 className="font-bold mb-4">Colors</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "bg-green-500",
              "bg-red-500",
              "bg-yellow-400",
              "bg-orange-500",
              "bg-cyan-400",
              "bg-blue-700",
              "bg-purple-600",
              "bg-pink-500",
              "bg-white",
              "bg-black",
            ].map((color, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-full border border-black/10 ${color} flex items-center justify-center cursor-pointer`}
              >
                {i === 5 && <Check size={16} color="white" />}{" "}
                {/* Örnek seçili */}
              </div>
            ))}
          </div>
        </div>

        {/* Beden Seçimi (Rozetler) */}
        <div className="mb-8 border-b pb-8">
          <h3 className="font-bold mb-4">Size</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "XX-Small",
              "X-Small",
              "Small",
              "Medium",
              "Large",
              "X-Large",
              "XX-Large",
            ].map((size) => (
              <button
                key={size}
                className={`px-5 py-2.5 rounded-full text-sm font-medium ${size === "Large" ? "bg-black text-white" : "bg-[#F0F0F0] text-black/60"}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="w-full bg-black text-white py-4 rounded-full font-bold text-lg mb-10">
          Apply Filter
        </button>
      </div>
    </div>
  );
}
