// src/components/Home.jsx
import React from 'react'; // Make sure React is imported
import ProductCard from '../components/ProductCard';

import coffee from '../assets/cup.png';
import promoImage1 from '../assets/Frame1.jpg';
import promoImage2 from '../assets/Frame2.jpg';
import promoImage3 from '../assets/Frame3.jpg';
import beansBg from '../assets/beans.png'; // This will be used in ProductCard now
import coffeeCard1 from '../assets/cofe1.png'; // Example image for coffee
import coffeeCard2 from '../assets/cofe2.png'; // Example image for coffee
import coffeeCard3 from '../assets/cofe3.png'; // Example image for coffee
import food1 from '../assets/mix.png'; // Example image for food
import food2 from '../assets/pizza.png'; // Example image for food
import food3 from '../assets/burger.png'; // Example image for food
import group from '../assets/grp.png';
import latte from '../assets/latte.png';
import expresso from '../assets/expresso.png';
import capecino from '../assets/capecino.png';
import fries from '../assets/fries.png';
import french from '../assets/french.png';
import steck from '../assets/steck.png';
import juices from '../assets/juices.png';
import lemon from '../assets/lemon.png';
import strwaberry from '../assets/strwaberry.png';
import relax from '../assets/relax.jpg';
import shop from '../assets/anothercafe.jpg';

export default function Home() {
  // Define your product data
  const coffeeProducts = [
    { image: coffeeCard1, name: "Latte Macchiato", description: "A perfect blend of espresso, steamed milk, and foam.", price: 6, rating: 4, discount: "10% Off for new Customer" },
    { image: coffeeCard2, name: "Espresso Delight", description: "Bold and intense coffee shot for a quick boost.", price: 5, rating: 5, discount: "10% Off for new Customer" },
    { image: coffeeCard3, name: "Cappuccino", description: "A cappuccino is an espresso-based coffee drink that is traditionally...", price: 7, rating: 4, discount: "10% Off for new Customer" }, // Matches your image example
  ];

  const foodProducts = [
    { image: food1, name: "Mix Grill Platter", description: "Delicious assortment of grilled meats with sides.", price: 18, rating: 4, discount: "10% Off for new Customer" },
    { image: food2, name: "Pizza Prosciutto", description: "Classic Italian pizza with savory prosciutto and cheese.", price: 15, rating: 5, discount: "10% Off for new Customer" },
    { image: food3, name: "Gourmet Burger", description: "Juicy beef patty with fresh vegetables and special sauce.", price: 12, rating: 4, discount: "10% Off for new Customer" },
  ];

  const categoryCoffeeItems = [
    { image: expresso, name: "Espresso", description: "Rich, concentrated coffee for a strong start.", price: 4, rating: 3, discount: "10% Off for new Customer" },
    { image: latte, name: "Latte", description: "Smooth and creamy coffee, perfect for any time.", price: 6, rating: 4, discount: "10% Off for new Customer" },
    { image: capecino, name: "Cappuccino", description: "Classic foamy coffee with a delightful aroma.", price: 7, rating: 4, discount: "10% Off for new Customer" },
  ];

  const categoryFoodItems = [
    { image: steck, name: "Meat Lovers", description: "Hearty steak, grilled to perfection.", price: 20, rating: 5, discount: "10% Off for new Customer" },
    { image: fries, name: "Sides Platter", description: "Assorted sides to complement your meal.", price: 8, rating: 4, discount: "10% Off for new Customer" },
    { image: french, name: "French Fries", description: "Crispy golden fries, a perfect snack.", price: 5, rating: 3, discount: "10% Off for new Customer" },
  ];

  const categoryDrinkItems = [
    { image: juices, name: "Fresh Juices", description: "Naturally sweet and refreshing fruit juices.", price: 7, rating: 4, discount: "10% Off for new Customer" },
    { image: lemon, name: "Lemonade", description: "Tangy and sweet lemonade to quench your thirst.", price: 6, rating: 3, discount: "10% Off for new Customer" },
    { image: strwaberry, name: "Strawberry Shake", description: "Creamy strawberry shake, a delightful treat.", price: 8, rating: 5, discount: "10% Off for new Customer" },
  ];

  return (
    <>
      <div className="pt-24"> {/* Add padding-top equivalent to Navbar height */}
      {/* All your existing Hero, Quote, Promo, etc. sections */}
    </div>
      {/* Hero Section */}
      <div className="bg-[#f8f1e9] space-y-2">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6 py-0 md:px-10 h-full">
          {/* Text Left Side */}
          <div className="max-w-xl space-y-4 ">
            <p className="text-sm text-gray-700 mt-8">A Best Café House</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Start Your Day With <br /> Morning Coffee
            </h1>
            <p className="text-sm text-yellow-800 font-medium">
              Colombian Andean coffee &nbsp;•&nbsp; Ethiopian acidic coffee
            </p>
            <p className="text-gray-700 text-sm">
              We love the idea of indulging in your health, and every item on our menu is full of lush,
              organic ingredients, bright flavor and beautiful color.
            </p>
            <div className="flex gap-4 mt-4">
              <button className="bg-yellow-700 text-white px-5 py-2 rounded hover:bg-yellow-800">
                Get Yours Now
              </button>
              <button className="border border-gray-500 px-5 py-2 rounded hover:bg-gray-100">
                Reservation
              </button>
            </div>
          </div>

          {/* Right Side Coffee Image */}
         <div className="mt-10 md:mt-0 flex justify-center items-end w-full pt-10">
            <img
              src={coffee}
              alt="coffee cup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div
        className="py-24 px-4 text-center text-gray-800 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${beansBg})` }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold max-w-3xl mx-auto">
          “Coffee is a way of stealing time which should by rights belong to your older self”
        </h2>
      </div>

      {/* Promo Section (No changes here, as it's not a product card) */}
      <div className="py-16 px-4 bg-[#f8f1e9]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[promoImage1, promoImage2, promoImage3].map((img, i) => (
            <div key={i} className="relative rounded-md overflow-hidden shadow-lg group">
              <img src={img} alt={`Cafe promo ${i + 1}`} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-5 text-white text-center">
                <h3 className="text-xl font-semibold mb-1">
                  Drink coffee and keep writing.
                </h3>
                <p className="italic font-script text-lg mb-1">Welcome to our Cafe</p>
                <p className="text-sm">Get 10% Discount for Office Coffee</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gluten-Free Café Section (No changes here) */}
      <div className="bg-[#f8f1e9] py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Images */}
          <div className="grid grid-cols-1 w-full md:w-1/2">
            <img
              src={group}
              alt="Cafe view"
              className="rounded-md shadow-md h-72 object-cover w-full"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              We’re A Dedicated Gluten-Free Café.
            </h2>
            <p className="text-sm text-gray-700">
              But you’d never know if we didn’t mention it.
            </p>
            <p className="text-sm text-gray-700">
              You see, our creations redefine what gluten-free means. Impossibly moist layer cakes, decadent desserts,
              pillowy rolls, tender crumbs—everything we make is a reflection of our commitment to flavor, texture and
              artistry of the highest caliber. Informed by classical French pastry technique and inspired by California’s
              spirit of creativity, we bake because life’s too short for anyone to skip cake.
            </p>
            <button className="mt-4 bg-yellow-700 text-white px-5 py-2 rounded hover:bg-yellow-800">
              Read More
            </button>
          </div>

          {/* Drink Image */}
          <div className="hidden md:block md:w-1/4">
            <img src={coffeeCard1} alt="Iced coffee" className="h-48 object-contain mx-auto" />
          </div>
        </div>
      </div>

      {/* Popular Coffee Section - NOW USING ProductCard */}
      <div className="bg-[#f8f1e9] py-20 px-4 text-center space-y-24">
        <h2 className="text-2xl font-semibold mb-10">Our Most Popular Coffee</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"> {/* Increased gap */}
          {coffeeProducts.map((product, idx) => (
            <ProductCard
              key={idx}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              discount={product.discount}
              rating={product.rating}
            />
          ))}
        </div>
      </div>

      {/* Food Section - NOW USING ProductCard */}
      <div className="bg-[#f8f1e9] py-20 px-4 text-center ">
        <h2 className="text-2xl font-semibold mb-4">Our Foods for Foodies</h2>
        <p className="text-sm max-w-md mx-auto mb-32">
          We collect the best quality of ingredients from market. With this best execution we provide our guest fresh & very delicious food.
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"> {/* Increased gap */}
          {foodProducts.map((product, idx) => (
            <ProductCard
              key={idx}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              discount={product.discount}
              rating={product.rating}
            />
          ))}
        </div>
      </div>

      {/* Our Category Section - NOW USING ProductCard */}
      <div className="bg-[#f8f1e9] py-20 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6">Our Categories for You</h2>
        <p className="text-sm max-w-md mx-auto mb-16">
          Explore our diverse range of delicious offerings, from freshly brewed coffee to savory meals and refreshing drinks.
        </p>

        {/* Coffee Section (within Our Category) */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-32">Coffee</h3>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"> {/* Adjusted grid and increased gap */}
            {categoryCoffeeItems.map((item, i) => (
              <ProductCard
                key={i}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
                discount={item.discount}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Food Section (within Our Category) */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Food</h3>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-24"> {/* Adjusted grid and increased gap */}
            {categoryFoodItems.map((item, i) => (
              <ProductCard
                key={i}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
                discount={item.discount}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Drinks Section (within Our Category) */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Drinks</h3>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-24"> {/* Adjusted grid and increased gap */}
            {categoryDrinkItems.map((item, i) => (
              <ProductCard
                key={i}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
                discount={item.discount}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>

      {/* rest and relax section (No changes here) */}
      <div className="container mx-auto px-4 pt-16">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Left: Images Side-by-Side with Text Below */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Relax Image Card */}
            <div className="space-y-4">
              <img src={relax} alt="relax" className="rounded-md w-full h-48 object-cover" />
              <h3 className="text-xl font-semibold text-gray-800">Rest, Relax & Revive!</h3>
              <p className="text-sm text-gray-600">
                At Mr.Café people come from all around to rest, recharge with hot & fresh coffee, good company, and gourmet food.
              </p>
              <div className="text-center mt-2 text-gray-700">
                <i className="text-3xl">ᯤ</i>
                <p className="text-sm mt-1">Free WiFi Available</p>
              </div>
            </div>

            {/* Coffee Image Card */}
            <div className="space-y-4">
              <img src={shop} alt="anothershop" className="rounded-md w-full h-48 object-cover" />
              <h3 className="text-xl font-semibold text-gray-800">Did Someone Say "Coffee"</h3>
              <p className="text-sm text-gray-600">
                We offer some of the best locally roasted coffee using Starbucks Reserve beans: Single Origin, Blonde, Jamaican,
                Italian, and Decaf Roast. Also available are our specialty Lattes, Frappes, Mochas, Cappuccinos, Americanos & more.
              </p>
            </div>
          </div>

          {/* Right: Opening Hours */}
          <div className="w-full lg:w-1/3 bg-[#2e2a26] text-white rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold border-b border-white/20 pb-2">Opening Hours</h3>
            <ul className="text-sm space-y-1">
              <li className="flex justify-between"><span>Monday</span><span>7:00 AM - 8:00 PM</span></li>
              <li className="flex justify-between"><span>Tuesday</span><span>7:00 AM - 8:00 PM</span></li>
              <li className="flex justify-between"><span>Wednesday</span><span>7:00 AM - 8:00 PM</span></li>
              <li className="flex justify-between"><span>Thursday</span><span>7:00 AM - 8:00 PM</span></li>
              <li className="flex justify-between"><span>Friday</span><span>7:00 AM - 10:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>7:00 AM - 11:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
            </ul>
            <p className="text-sm mt-4">Call: +1 365 710 8181</p>
            <button className="mt-2 bg-yellow-700 hover:bg-yellow-800 text-white px-4 py-2 rounded text-sm">
              Book your table
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial Section (No changes here) */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Customer Say</h2>
          <blockquote className="italic text-gray-700 text-lg max-w-2xl mx-auto mb-6">
            “I like the coffee but a little expensive to recommend to friends.
            Can buy acceptable equivalent in Waitrose for half the price”
          </blockquote>
          <div className="flex flex-col items-center gap-2">
            <p className="font-semibold">Esther Howard</p>
            <div className="text-yellow-500 flex gap-1 text-sm">★★★★★</div>
            <div className="text-xs text-gray-500">✔ Verified Customer</div>
            <div className="flex gap-2 mt-2 text-gray-500">
              <i className="fab fa-twitter" />
              <i className="fab fa-facebook" />
              <i className="fab fa-instagram" />
              <i className="fas fa-envelope" />
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section (No changes here) */}
      <div className="bg-[#f8f1e9] py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Want to hear coffee news from us?</h2>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Your E-mail Address"
            className="w-full sm:flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-700"
          />
          <button className="w-full sm:w-auto bg-yellow-700 text-white px-6 py-3 rounded hover:bg-yellow-800 transition duration-300">
            Subscribe
          </button>
        </div>
        <div className="mt-4 flex items-center justify-center text-sm text-gray-600">
        <input
  type="checkbox"
  id="privacyConsent"
  className="mr-2 sm:mr-2 md:mt-4 lg:mr-2 xl:mr-2 2xl:mr-2 mb-4" />
          <label htmlFor="privacyConsent">
            Please read the Coffee Address Personal data processing policy <a href="#" className="text-yellow-700 underline hover:text-yellow-800">here</a>.
          </label>
        </div>
      </div>
    </>
  );
}
