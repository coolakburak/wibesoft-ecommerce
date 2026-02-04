import { Mail, Twitter, Facebook, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-40 bg-[#F0F0F0] pt-40 pb-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] lg:w-[1240px] bg-black rounded-[20px] p-8 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-8">
        <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight lg:max-w-xl text-center lg:text-left">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="flex flex-col gap-3 w-full lg:w-80">
          <div className="relative">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full py-3 pl-12 pr-4 rounded-full outline-none"
            />
          </div>
          <button className="bg-white text-black py-3 rounded-full font-bold hover:bg-gray-100 transition-all">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2">
            <h3 className="text-3xl font-black mb-6">SHOP.CO</h3>
            <p className="text-gray-500 text-sm mb-6 max-w-xs">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex gap-3">
              {[Twitter, Facebook, Instagram, Github].map((Icon, i) => (
                <div
                  key={i}
                  className="bg-white p-2 rounded-full border hover:bg-black hover:text-white cursor-pointer transition-all"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-widest">
              Company
            </h4>
            <ul className="text-gray-500 space-y-3 text-sm">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-widest">
              Help
            </h4>
            <ul className="text-gray-500 space-y-3 text-sm">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-widest">
              Resources
            </h4>
            <ul className="text-gray-500 space-y-3 text-sm">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex gap-2 bg-white p-1 rounded">
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
