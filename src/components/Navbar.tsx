"use client";
import Link from "next/link";
import { ShoppingCart, User, Menu, Search } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

export default function Navbar() {
  const cart = useCartStore((state) => state.cart);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="w-full">
      <div className="bg-black text-white text-xs py-2 text-center px-4">
        Sign up and get 20% off to your first order.{" "}
        <span className="underline font-bold cursor-pointer">Sign Up Now</span>
      </div>

      <nav className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Menu className="block lg:hidden w-6 h-6" />
          <Link href="/" className="text-2xl font-black tracking-tighter">
            SHOP.CO
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-6 text-sm">
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/">On Sale</Link>
          </li>
          <li>
            <Link href="/">New Arrivals</Link>
          </li>
          <li>
            <Link href="/">Brands</Link>
          </li>
        </ul>

        <div className="hidden md:flex flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-[#F0F0F0] rounded-full py-2 pl-10 pr-4 outline-none text-sm"
          />
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <Search className="md:hidden w-6 h-6" />
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
          <User className="w-6 h-6" />
        </div>
      </nav>
    </header>
  );
}
