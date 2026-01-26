import { Facebook, Instagram } from "lucide-react";

function Footer() {
  const pStyle =
    "hidden md:block cursor-pointer text-xl font-semibold text-gray-500 hover:text-orange hover:scale-105 transition-all duration-300";
  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5 text-brown">
      <img src="/magic-logo2.png" className="w-24 grayscale" alt="Logo" />
      <p className={pStyle}>Home</p>
      <p className={pStyle}>About</p>
      <p className={pStyle}>Products</p>
      <p className={pStyle}>Contact</p>
      {/* <p className="text-sm">© 2023 Magic Cream. All rights reserved.</p> */}
      <div className="flex gap-4">
        <Facebook className="w-10 h-10 bg-gray-400 text-white p-2 rounded-3xl hover:bg-orange hover:scale-105 transition-all duration-300 cursor-pointer" />
        <Instagram className="w-10 h-10 bg-gray-400 text-white p-2 rounded-3xl hover:bg-orange hover:scale-105 transition-all duration-300 cursor-pointer" />
      </div>
    </div>
  );
}

export default Footer;
