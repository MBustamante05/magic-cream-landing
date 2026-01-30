import { Plus } from "lucide-react";
import { motion } from "framer-motion";

type ProductItemProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  delay?: number;
};
const ProductItem = (props: ProductItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: props.delay }}
      className="relative border text-white px-10 pt-35 pb-7 rounded-3xl flex flex-col items-center gap-4 hover:scale-105 transition-all duration-300">
      <div className="absolute bg-peach shadow-peach shadow-sm rounded-3xl p-4 -top-20">
        <img src={props.image} alt={props.name} className="w-40 h-40 object-contain" />
      </div>
      <h1 className="text-2xl text-white font-bold">{props.name}</h1>
      <p className="text-peach/70">{props.description}</p>
      <span className="text-peach/70 underline font-medium italic mt-2 cursor-pointer">More info</span>
      <div className="flex justify-between items-center w-full mt-3">
        <span className="font-bold text-2xl text-peach">${props.price.toFixed(2)}</span>
        <button className="bg-blue p-3 rounded-full cursor-pointer hover:bg-white hover:text-blue transition-all duration-300"><Plus className="w-5 h-5"/></button>
      </div>
    </motion.div>
  )
}

function Products() {
  const products: ProductItemProps[] = [
    {
      id: "1",
      name: "Vanilla Dream",
      price: 4.99,
      image: "/products/paleta1.png",
      description: "Classic vanilla ice cream made with real vanilla beans.",
    },
    {
      id: "2",
      name: "Chocolate Bliss",
      price: 5.49,
      image: "/products/paleta2.png",
      description: "Rich and creamy chocolate ice cream for chocolate lovers.",
    },
    {
      id: "3",
      name: "Strawberry Swirl",
      price: 5.29,
      image: "/products/paleta3.png",
      description: "Fresh strawberry ice cream with a delightful swirl of real strawberries.",
    },
  ];
  return (
    <div className="bg-brown text-white mt-30 pt-20 pb-3 px-7 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-30">
        <h2 className="text-6xl font-bold mb-5 text-blue">
          Our <span className="text-white">Products</span>
        </h2>
        <p className="text-lg font-medium">
          Discover our delightful range of Magic Cream ice creams, crafted to
          bring joy and enchantment to every scoop.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 space-y-20 lg:space-y-0 lg:grid-cols-3 text-center justify-center gap-5 xl:gap-10 xl:px-4 mb-20">
        {products.map((product, index) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  )
}

export default Products