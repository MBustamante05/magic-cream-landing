function About() {
  return (
    <div className="relative mb-10 mt-5 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20">
        <div className="relative col-span-1 px-24 flex flex-col justify-center">
          <div className="z-20">
            <h2 className="text-6xl font-bold mb-7 text-primary text-center">
              About <span className="text-brown">Us</span>
            </h2>
            <p className="text-lg mb-5 font-medium">
              Magic Cream is not just an ice cream; it's an experience that
              transports you to a world of wonder and delight.
            </p>
            <p className="font-light text-lg mb-4">
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
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="col-span-1">
          <img src="/aboutUs3.png" alt="About Magic Cream" className="" />
        </div>
      </div>
    </div>
  );
}

export default About;
