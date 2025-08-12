import { useState } from "react";
import { useCart } from '../contexts/CartContext';// <-- Import useCart
import menu from "../assets/newone.jpg";
import milk from "../assets/milkcoffe.jpg";
import { motion } from "framer-motion";

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState("Option One");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const { addToCart } = useCart(); // <-- Get addToCart from context

  const [filterGroups, setFilterGroups] = useState(
    Array(3).fill().map(() => ({
      regular: false,
      dark: false,
    }))
  );

  const toggleFilter = (groupIndex, type) => {
    setFilterGroups((prev) =>
      prev.map((group, index) =>
        index === groupIndex ? { ...group, [type]: !group[type] } : group
      )
    );
  };

  const clearAllFilters = () => {
    setFilterGroups(
      filterGroups.map(() => ({
        regular: false,
        dark: false,
      }))
    );
  };

  // Function to handle Add to Cart for products
  const handleAddToCart = (product) => {
    addToCart(product);
  };
 
  
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
  return (
    <div className="bg-[#f7f1e9] text-[#2f2a25] font-serif pt-28">
      {/* Hero Section */}
     <motion.div
  className="flex flex-col md:flex-row items-center justify-items-end gap-6"
  initial={{ x: 40, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}
>
  <div className="w-full md:w-1/2 px-6 md:px-12">
    <div className="max-w-2xl ml-auto">
      <h1 className="text-6xl font-bold mt-4">Art of Coffee</h1>
      <p className="text-lg text-[#5f574f] mt-4">
        All the taste, without the caffeine. We decaffeinate green coffee as soon as it lands so you can enjoy
        maximum freshness. Choose in a range of delicious options.
      </p>
    </div>
  </div>
  <div className="w-full md:w-1/2">
    <img src={menu} alt="Coffee" className="w-full h-full object-cover" />
  </div>
</motion.div>

      {/* Browse Section */}
      <div className="container mx-auto px-6 md:px-8 mt-12">
        <motion.div
  className="flex flex-col md:flex-row justify-between items-center mb-6"
  initial={{ x: -40, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}
>
  <h2 className="text-3xl font-bold">Browse Coffee & Drinks</h2>
  <div className="flex items-center gap-2 mt-4 md:mt-0">
    <label htmlFor="sort" className="text-sm">Sort by</label>
    <select
      id="sort"
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
      className="border border-black px-3 py-1 rounded text-sm"
    >
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </select>
  </div>
</motion.div>

        {/* Filter Info Bar */}
        <motion.div
  className="border-y border-gray-300 py-3 flex justify-between text-sm mb-6"
  initial={{ x: 40, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}
>
  <span>2 filters</span>
  <button className="underline" onClick={clearAllFilters}>Clear all</button>
  <span>22 items</span>
</motion.div>

        {/* Main Grid */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Filters Sidebar */}
          <div className="w-full md:w-1/4">
            {filterGroups.map((group, index) => (
              <div key={index} className="mb-6">
                <h3 className="font-bold text-lg mb-2">Coffee Type</h3>
                <div className="space-y-2 text-sm text-[#5f574f]">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={group.regular}
                      onChange={() => toggleFilter(index, "regular")}
                    />
                    Regular (0)
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={group.dark}
                      onChange={() => toggleFilter(index, "dark")}
                    />
                    Dark (0)
                  </label>
                </div>
              </div>
            ))}
          </div>

          {/* Product Cards */}
          <motion.div

  className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  variants={containerVariants}
>



  {[...Array(6)].map((_, index) => {
    const product = {
      id: index + 1,
      name: "Iced Latte Vertical",
      price: 5,
      image: milk,
    };
    return (
      <motion.div
        key={index}
        className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border"
        variants={cardVariants}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      >
        <img
          src={milk}
          alt="Latte"
          className="rounded mb-4 w-full h-40 object-cover"
        />
        <div className="mb-2 text-yellow-500 text-sm">★★★★★</div>
        <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
        <p className="text-sm text-[#5f574f] mb-2">
          Espresso, Milk, Ice and Choice of Flavor(s) - 20oz
        </p>
        <p className="text-xs text-[#a58b6f] mb-3">10% off for new customer.</p>
        <button
          onClick={() => handleAddToCart(product)}
          className="bg-yellow-700 text-white px-4 py-2 rounded text-sm w-full"
        >
          Add to Cart
        </button>
      </motion.div>
    );
  })}
</motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
        <div className="bg-[#f8f1e9] py-20 px-4 text-center">
            {/* 1. Heading with 1 spin animation */}
            <motion.h2
          className="text-3xl font-bold text-gray-800 mb-8"
          initial={{ rotateY: 0, opacity: 0 }}
          whileInView={{ rotateY: 360, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          style={{ transformStyle: "preserve-3d" }} // enable 3D perspective
>
               Want to hear coffee news from us?
             </motion.h2>
      
            {/* 2. Email + Subscribe with expand from middle animation */}
            <motion.div
              className="max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <input
                type="email"
                placeholder="Your E-mail Address"
                className="w-full sm:flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-700"
              />
              <button className="w-full sm:w-auto bg-yellow-700 text-white px-6 py-3 rounded hover:bg-yellow-800 transition duration-300">
                Subscribe
              </button>
            </motion.div>
      
            {/* 3. Checkbox + label slides in from top */}
            <motion.div
              className="mt-4 flex items-center justify-center text-sm text-gray-600"
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <input
                type="checkbox"
                id="privacyConsent"
                className="mr-2 sm:mr-2 md:mt-4 lg:mr-2 xl:mr-2 2xl:mr-2 mb-4"
              />
              <label htmlFor="privacyConsent">
                Please read the Coffee Address Personal data processing policy{" "}
                <a href="#" className="text-yellow-700 underline hover:text-yellow-800">
                  here
                </a>.
              </label>
            </motion.div>
          </div>
    </div>
  );
};

export default Menu;
