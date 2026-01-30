import { ArrowRight } from "lucide-react";
import NavBar from "./NavBar";
import { useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [isBtnLearnMoreHover, setIsBtnLearnMoreHover] = useState(false);
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className="max-h-screen lg:min-h-screen overflow-hidden">
      <NavBar />
      <section className="relative mt-25 md:mt-1 bg-blue py-20 lg:py-0 lg:min-h-[85vh] rounded-3xl flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto z-20 lg:z-10">
          <motion.h1
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={`text-[clamp(2rem,13vw,13rem)] font-bold text-white mb-10 leading-none`}
          >
            Magic Cream
          </motion.h1>
          <div className="lg:flex justify-between px-3 sm:px-7 md:px-13 lg:px-0">
            <motion.p 
              initial={{ opacity: 0, x: -1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            className="text-white xl:text-lg mb-8 w-full lg:max-w-sm xl:max-w-lg text-left font-medium md:font-normal mx-auto lg:mx-0">
              Experience the enchanting taste of Magic Cream, the ice cream that
              brings joy and wonder to every scoop. Made with the finest
              ingredients and a touch of magic, it's more than just a
              dessert—it's an adventure for your taste buds!
            </motion.p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto justify-center lg:justify-start mx-auto lg:mx-0">
              <motion.button 
              initial={{ opacity: 0, x: 1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              className="border border-white text-white font-bold px-4 py-3 sm:px-6 sm:py-4 rounded-full hover:bg-white hover:text-blue hover:scale-105 transition-all duration-300 cursor-pointer">
                Explore Products
              </motion.button>
              <motion.button
              initial={{ opacity: 0, x: 1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
                className="flex items-center justify-center gap-2
                bg-white text-blue font-bold
                px-4 py-3 sm:px-6 sm:py-4
                rounded-full hover:scale-105
                transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setIsBtnLearnMoreHover(true)}
                onMouseLeave={() => setIsBtnLearnMoreHover(false)}
              >
                <span className="text-center">Learn More</span>
                <ArrowRight
                  className={`${isBtnLearnMoreHover ? "translate-x-2" : ""} transition-all duration-300`}
                />
              </motion.button>
            </div>
          </div>
        </div>
        <motion.img
          initial={{ opacity: 0, y: 1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          src="/main-cream2.png"
          className="absolute bottom-0 lg:z-20 z-10 md:h-full lg:h-auto xl:w-1/3 object-contain"
          alt=""
        />
      </section>
    </motion.div>
  );
}

export default Hero;
