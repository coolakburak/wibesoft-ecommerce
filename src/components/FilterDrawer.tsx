"use client";
import { X, Check } from "lucide-react";

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  priceRange: number;
  setPriceRange: (value: number) => void;
  selectedColors: string[];
  toggleColor: (color: string) => void;
}

export default function FilterDrawer({
  isOpen,
  onClose,
  priceRange,
  setPriceRange,
  selectedColors,
  toggleColor,
}: FilterDrawerProps) {
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

        <div className="mb-8 border-b pb-8">
          <h3 className="font-bold mb-4">Price</h3>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full accent-black"
          />
          <div className="flex justify-between mt-4 font-bold text-sm">
            <span>$0</span>
            <span>${priceRange}</span>
          </div>
        </div>

        <div className="mb-8 border-b pb-8">
          <h3 className="font-bold mb-4">Colors</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "#00C12B",
              "#F50606",
              "#F5DD06",
              "#F57906",
              "#06CAF5",
              "#063AF5",
              "#7D06F5",
              "#F506A4",
            ].map((color) => (
              <button
                key={color}
                onClick={() => toggleColor(color)}
                className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedColors.includes(color)
                    ? "border-black scale-110"
                    : "border-black/10"
                }`}
                style={{ backgroundColor: color }}
              >
                {selectedColors.includes(color) && (
                  <Check size={16} color="white" strokeWidth={3} />
                )}
              </button>
            ))}
          </div>
        </div>

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
                className="px-5 py-2.5 rounded-full text-sm font-medium bg-[#F0F0F0] text-black/60"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-black text-white py-4 rounded-full font-bold text-lg mb-10 hover:bg-black/80 transition"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
}
