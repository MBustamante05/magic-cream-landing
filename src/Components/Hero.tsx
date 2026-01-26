import { ArrowRight } from "lucide-react";
import NavBar from "./NavBar";
import { useState } from "react";

function Hero() {
  const [isBtnLearnMoreHover, setIsBtnLearnMoreHover] = useState(false);
  return (
    <div className="min-h-screen overflow-hidden">
      <NavBar />
      <section className="relative mt-25 md:mt-1 bg-blue min-h-[85vh] rounded-3xl flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[13rem] font-bold text-white mb-10 leading-none ">
            Magic Cream
          </h1>
          <div className="flex justify-between">
            <p className="text-white text-lg mb-8 max-w-lg text-left">
              Experience the enchanting taste of Magic Cream, the ice cream that
              brings joy and wonder to every scoop. Made with the finest
              ingredients and a touch of magic, it's more than just a
              dessert—it's an adventure for your taste buds!
            </p>
            <div className="flex items-center gap-3">
              <button className="border border-white text-white font-bold px-6 py-4 rounded-full hover:bg-white hover:text-blue hover:scale-105 transition-all duration-300 cursor-pointer">
                Explore Products
              </button>
              <button
                className="flex items-center bg-white text-blue font-bold px-6 py-4 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setIsBtnLearnMoreHover(true)}
                onMouseLeave={() => setIsBtnLearnMoreHover(false)}
              >
                Learn More
                <ArrowRight
                  className={`inline-block ml-2  ${isBtnLearnMoreHover ? "translate-x-2" : ""} transition-all duration-300`}
                />
              </button>
            </div>
          </div>
        </div>
        <img
          src="/main-cream2.png"
          className="absolute bottom-0 w-1/3"
          alt=""
        />
      </section>
    </div>
  );
}

export default Hero;
