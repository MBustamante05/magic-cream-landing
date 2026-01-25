import Footer from "./Footer";

function Contact() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="bg-[url(/bgContact2.png)] bg-cover relative mt-20 min-h-[85vh] rounded-3xl flex justify-end items-center px-14">
        <div>
          <h1 className="text-[6rem] font-bold text-white mb-10 leading-none">
            Contact Us
          </h1>
          <div className="flex flex-col gap-6 max-w-lg">
            <p className="text-white text-lg mb-8 text-left">
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
              <button className="border border-white text-white font-bold px-6 py-4 rounded-full hover:bg-white hover:text-orange hover:scale-105 transition-all duration-300 cursor-pointer">
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
