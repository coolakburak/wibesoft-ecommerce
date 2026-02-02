"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, Minus, Plus, ArrowRight, Tag } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  // Hesaplamalar
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const discount = subtotal * 0.2; // Sabit %20 indirim (Tasarım uyumu için)
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-black mb-6 uppercase">
            Your Cart is Empty
          </h1>
          <p className="text-black/60 mb-8 text-lg">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            href="/"
            className="bg-black text-white px-12 py-4 rounded-full font-bold hover:bg-black/80 transition-all"
          >
            Go to Shop
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8 lg:py-12">
        <h1 className="text-3xl lg:text-4xl font-black mb-8 lg:mb-12 uppercase">
          Your Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
          {/* SOL: ÜRÜN LİSTESİ */}
          <div className="flex-[1.5] border border-black/10 rounded-[20px] p-4 lg:p-6 space-y-6">
            {cart.map((item, index) => (
              <div
                key={item.id}
                className={`flex gap-4 pb-6 ${index !== cart.length - 1 ? "border-b" : ""}`}
              >
                <div className="relative w-24 h-24 lg:w-32 lg:h-32 bg-[#F0EEED] rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <div className="flex flex-col justify-between flex-1 py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-sm lg:text-xl line-clamp-1 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs lg:text-sm text-black/60">
                        Size: <span className="text-black">Large</span>
                      </p>
                      <p className="text-xs lg:text-sm text-black/60">
                        Color: <span className="text-black">White</span>
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:scale-110 transition-transform"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xl lg:text-2xl font-bold">
                      ${item.price}
                    </span>
                    <div className="flex items-center bg-[#F0F0F0] rounded-full px-4 py-2 gap-4 lg:gap-6">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="hover:scale-125 transition-transform"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-bold text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="hover:scale-125 transition-transform"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SAĞ: SİPARİŞ ÖZETİ */}
          <div className="flex-1 border border-black/10 rounded-[20px] p-6 h-fit sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-black/60 lg:text-lg">
                <span>Subtotal</span>
                <span className="font-bold text-black">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-black/60 lg:text-lg">
                <span>Discount (-20%)</span>
                <span className="font-bold text-red-500">
                  -${discount.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-black/60 lg:text-lg">
                <span>Delivery Fee</span>
                <span className="font-bold text-black">${deliveryFee}</span>
              </div>
              <hr />
              <div className="flex justify-between text-lg lg:text-xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* PROMO KODU GİRİŞİ */}
            <div className="flex gap-3 mb-6">
              <div className="relative flex-1">
                <Tag
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="w-full bg-[#F0F0F0] py-3 pl-12 pr-4 rounded-full outline-none text-sm lg:text-base"
                />
              </div>
              <button className="bg-black text-white px-6 lg:px-8 py-3 rounded-full font-medium hover:bg-black/80 transition-all">
                Apply
              </button>
            </div>

            <button className="w-full bg-black text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-black/80 transition-all active:scale-95 text-sm lg:text-base uppercase tracking-wider">
              Go to Checkout <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
