import { Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  const items = ["Home", "About", "Products", "Contact"];

  const pStyle =
    "hidden md:block cursor-pointer text-xl font-semibold text-gray-500 hover:text-orange hover:scale-105 transition-all duration-300";
  return (
    <motion.div 
    initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5 text-brown">
      <img src="/magic-logo2.png" className="w-24 grayscale" alt="Logo" />
      {items.map((item, index) => (
        <motion.p 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: index * 0.2 }}
        key={item} className={pStyle}>
          {item}
        </motion.p>
      ))}
      {/* <p className="text-sm">© 2023 Magic Cream. All rights reserved.</p> */}
      <div className="flex gap-4">
        <Facebook className="w-10 h-10 bg-gray-400 text-white p-2 rounded-3xl hover:bg-orange hover:scale-105 transition-all duration-300 cursor-pointer" />
        <Instagram className="w-10 h-10 bg-gray-400 text-white p-2 rounded-3xl hover:bg-orange hover:scale-105 transition-all duration-300 cursor-pointer" />
      </div>
    </motion.div>
  );
}

export default Footer;
