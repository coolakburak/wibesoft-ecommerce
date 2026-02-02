import { Check, Star, MoreHorizontal } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Samantha D.",
    date: "August 14, 2023",
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
  },
  {
    id: 2,
    name: "Alex M.",
    date: "August 16, 2023",
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
  },
  // Daha fazla yorum eklenebilir...
];

export default function Reviews() {
  return (
    <section className="container mx-auto px-4 py-10">
      {/* Sekme Başlıkları */}
      <div className="flex justify-around border-b mb-10">
        <button className="pb-4 text-gray-500">Product Details</button>
        <button className="pb-4 border-b-2 border-black font-bold">
          Rating & Reviews
        </button>
        <button className="pb-4 text-gray-500">FAQs</button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl lg:text-2xl font-bold">
          All Reviews{" "}
          <span className="text-gray-400 font-normal text-sm">(451)</span>
        </h2>
        <div className="flex gap-2">
          <button className="bg-[#F0F0F0] p-3 rounded-full">
            <MoreHorizontal size={20} />
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium">
            Write a Review
          </button>
        </div>
      </div>

      {/* Yorum Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="border rounded-2xl p-6 flex flex-col gap-3"
          >
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} fill="currentColor" />
              ))}
            </div>
            <div className="flex items-center gap-1 font-bold">
              {rev.name}{" "}
              <div className="bg-green-500 text-white rounded-full p-0.5">
                <Check size={10} />
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed italic">
              "{rev.text}"
            </p>
            <p className="text-gray-400 text-sm mt-2">Posted on {rev.date}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="border px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-50">
          Load More Reviews
        </button>
      </div>
    </section>
  );
}
