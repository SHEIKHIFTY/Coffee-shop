import { useState } from "react";
import { useCart } from '../contexts/CartContext';// <-- Import useCart
import menu from "../assets/newone.jpg";
import milk from "../assets/milkcoffe.jpg";

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

  return (
    <div className="bg-[#f7f1e9] text-[#2f2a25] font-serif pt-28">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-items-end gap-6">
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
      </div>

      {/* Browse Section */}
      <div className="container mx-auto px-6 md:px-8 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
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
        </div>

        {/* Filter Info Bar */}
        <div className="border-y border-gray-300 py-3 flex justify-between text-sm mb-6">
          <span>2 filters</span>
          <button className="underline" onClick={clearAllFilters}>Clear all</button>
          <span>22 items</span>
        </div>

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
          <div className="w-full md:w-3/4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => {
              const product = {
                id: index + 1,
                name: "Iced Latte Vertical",
                price: 5, // Example Price
                image: milk
              };
              return (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border"
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
                    onClick={() => handleAddToCart(product)} // <-- Add to Cart click
                    className="bg-yellow-700 text-white px-4 py-2 rounded text-sm w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#f7f1e9] mt-20 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Want to hear coffee news from us?</h2>
          <div className="flex justify-center items-center mb-4">
            <input
              type="email"
              placeholder="Your E-mail Address"
              className="px-4 py-2 rounded-l border border-gray-300 w-64"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-yellow-700 text-white px-4 py-2 rounded-r hover:bg-yellow-800">
              Subscribe
            </button>
          </div>
          <div className="flex justify-center items-start text-sm text-[#5f574f]">
            <input
              type="checkbox"
              className="mt-1 mr-2"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            <p>
              Please read the Coffee Address Personal data processing policy{" "}
              <a href="#" className="underline">here.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
