import { motion } from "framer-motion";
function About() {
  return (
    <div className="relative mb-10 xl:mt-5 overflow-hidden">
      <div className="max-w-7xl mx-auto grid xl:grid-cols-2 grid-cols-1 gap-20">
        <motion.div 
        initial={{ opacity: 0, x: -300, rotate: -10 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative rounded-3xl xl:rounded-none col-span-1 px-7 md:px-10 xl:px-24 py-10 xl:py-0 flex flex-col justify-center">
          <div className="z-20">
            <motion.h2 
            initial={{ x: -200 }}
            whileInView={{ x: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
            className="text-6xl font-bold mb-7 text-primary text-center">
              About <span className="text-brown italic font-semibold">Us</span>
            </motion.h2>
            <p className="text-lg mb-5 font-medium">
              Magic Cream is not just an ice cream; it's an experience that
              transports you to a world of wonder and delight.
            </p>
            <p className="font-light text-lg">
              Our commitment to quality and innovation ensures that every bite
              of Magic Cream is a journey into the extraordinary. Whether you're
              indulging in a classic flavor or exploring our seasonal specials,
              <span className="font-normal italic">
                {" "}
                Magic Cream is designed to bring joy and enchantment to your
                day.
              </span>
            </p>
          </div>
          <img
            src="/bg-decor.png"
            className="hidden xl:block absolute top-0 left-0 w-full h-full object-cover"
            alt=""
          />
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x: 300, rotate: 10 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
         className="col-span-1 flex justify-center items-center px-10">
          <img src="/aboutUs3.png" alt="About Magic Cream" className="" />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
