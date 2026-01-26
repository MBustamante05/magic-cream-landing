import Footer from "./Footer";

function Contact() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="bg-[url(/bgContact2.png)] bg-cover relative mt-30 min-h-[85vh] rounded-3xl flex justify-end items-center px-4 sm:px-7 md:px-14">
        <div className="bg-brown px-7 md:px-10 py-7 md:py-10 rounded-3xl max-w-2xl">
          <h1 className="text-[2rem] sm:text-[4rem] md:text-[6rem] text-white font-bold mb-10 leading-none">
            Contact <span className="text-orange italic font-semibold">Us</span>
          </h1>
          <div className="flex flex-col gap-6 max-w-lg">
            <p className="text-peach sm:text-lg mb-8 text-left">
              We'd love to hear from you! Whether you have questions about our
              products, feedback, or just want to say hello, feel free to reach
              out to us.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 rounded-full focus:outline-none bg-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 rounded-full focus:outline-none bg-white"
              />
              <textarea
                placeholder="Your Message"
                className="px-4 py-3 rounded-3xl focus:outline-none bg-white h-32 resize-none"
              />
              <button className="bg-orange text-white font-bold px-6 py-4 rounded-full hover:bg-white hover:text-brown hover:scale-105 transition-all duration-300 cursor-pointer">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
}

export default Contact;
