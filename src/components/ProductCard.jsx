// src/components/ProductCard.jsx
import React from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import beansBg from '../assets/beans.png';
import { useCart } from '../contexts/CartContext'; // Import useCart hook

export default function ProductCard({ image, name, description, price, discount, rating }) {
  const { addItemToCart } = useCart(); // Use the hook to get addItemToCart

  const renderStars = (numStars) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < numStars ? 'text-yellow-700' : 'text-gray-300'}
        />
      );
    }
    return stars;
  };

  const handleAddToCart = () => {
    // Call addItemToCart with the current product's details
    addItemToCart({ image, name, description, price, discount, rating });
  };

  return (
  <div
    className="relative bg-white rounded-lg shadow-lg pb-6 px-6 flex flex-col items-center"
    style={{
      backgroundImage: `url(${beansBg})`,
      backgroundSize: '300px auto',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center',
      backgroundBlendMode: 'multiply',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
    }}
  >
    {/* Only show this overlapping image on medium and up */}
    <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full shadow-md border-4 border-white z-10">
      <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
    </div>

    {/* Placeholder for overlapping image height (desktop only) */}
    <div className="hidden md:block h-20 md:h-24"></div>

    {/* Price Tag */}
    {price && (
      <div className="absolute top-4 left-4 bg-yellow-700 text-white text-sm font-semibold px-3 py-1 rounded-md shadow-md z-20">
        ${price}
      </div>
    )}

    {/* Star Ratings */}
    {rating && (
      <div className="flex justify-center mt-4 mb-2 space-x-1 text-base">
        {renderStars(rating)}
      </div>
    )}

    {/* Title */}
    <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
      {name}
    </h3>

    {/* Description */}
    <p className="text-sm text-gray-600 text-center mb-4 min-h-[40px]">
      {description}
    </p>

    {/* Discount Text */}
    {discount && (
      <p className="text-yellow-700 text-sm font-medium text-center mb-6">
        {discount}
      </p>
    )}

    {/* Normal image (visible only on small screens) */}
    <div className="md:hidden w-full mb-6">
      <img src={image} alt={name} className="w-full h-full object-cover rounded-md" />
    </div>

    {/* Add to Cart Button */}
    <button
      className="flex items-center justify-center bg-yellow-700 text-white px-6 py-2 rounded-md hover:bg-yellow-800 transition duration-300 mt-auto"
      onClick={handleAddToCart}
    >
      <FaShoppingCart className="mr-2" /> add
    </button>
  </div>
);
}
