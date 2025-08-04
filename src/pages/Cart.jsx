// src/components/Cart.jsx
import React from 'react';
import { useCart } from '../contexts/CartContext'; // Import useCart hook
import { FaTrashAlt } from 'react-icons/fa'; // Import a trash icon for removal

const Cart = () => {
  const { cartItems, removeItemFromCart, updateItemQuantity, getCartTotal } = useCart();

  // Assuming getCartTotal already handles subtotal and potentially tax/shipping
  // If not, you might want to calculate subtotal, tax, and total here separately
  // For demonstration, let's assume getCartTotal returns the final grand total.
  // If you need subtotal, tax, and total separately for display, you'd calculate them here.
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = 5.00; // Example fixed shipping cost
  const grandTotal = subtotal + shippingCost; // Assuming this is your final total

  return (
    <div className="bg-[#f9f4ec] min-h-screen pt-32 pb-10 px-2">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row gap-10 px-4">
        {/* Cart Table */}
        <div className="w-full md:w-2/3"> {/* sm:w-full is redundant if w-full is already set */}
          <h2 className="text-3xl font-serif font-semibold text-[#1a1a1a] mb-6">My Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="border border-gray-200 rounded-lg shadow-sm">
              {/* For mobile, we'll hide the traditional table header and transform rows into blocks */}
              <table className="min-w-full text-sm text-left bg-white hidden sm:table"> {/* Hide on small screens, show on sm and up */}
                <thead className="border-b border-[#c4a75a] text-[#1a1a1a] bg-gray-50">
                  <tr>
                    <th className="py-3 px-4">Product</th>
                    <th className="py-3 px-4">Quantity</th>
                    <th className="py-3 px-4">Subtotal</th>
                    <th className="py-3 px-4">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.name} className="border-b border-gray-100 last:border-b-0">
                      <td className="py-3 px-4 flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md mr-4"
                        />
                        <span className="font-medium text-gray-800">{item.name}</span>
                      </td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <button
                            onClick={() => updateItemQuantity(item.name, item.quantity - 1)}
                            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l hover:bg-gray-300 focus:outline-none"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateItemQuantity(item.name, parseInt(e.target.value))}
                            className="w-16 text-center border-t border-b border-gray-200 py-1 focus:outline-none"
                            min="1"
                          />
                          <button
                            onClick={() => updateItemQuantity(item.name, item.quantity + 1)}
                            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r hover:bg-gray-300 focus:outline-none"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-semibold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => removeItemFromCart(item.name)}
                          className="text-red-500 hover:text-red-700 transition"
                          title="Remove item"
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile Cart View: Using Flexbox/Grid for individual items */}
              <div className="sm:hidden"> {/* Show only on small screens */}
                {cartItems.map((item) => (
                  <div key={item.name} className="flex flex-col border-b border-gray-100 p-4 last:border-b-0">
                    <div className="flex items-center mb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md mr-4 flex-shrink-0"
                      />
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-800 text-lg">{item.name}</span>
                        <span className="text-gray-600 text-sm">Unit Price: ${(item.price).toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center"> {/* Use grid for quantity/subtotal on mobile */}
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Quantity</p>
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() => updateItemQuantity(item.name, item.quantity - 1)}
                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l hover:bg-gray-300 focus:outline-none"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateItemQuantity(item.name, parseInt(e.target.value))}
                            className="w-16 text-center border-t border-b border-gray-200 py-1 focus:outline-none"
                            min="1"
                          />
                          <button
                            onClick={() => updateItemQuantity(item.name, item.quantity + 1)}
                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r hover:bg-gray-300 focus:outline-none"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-gray-500 mb-1">Subtotal</p>
                        <span className="font-semibold text-gray-900 text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={() => removeItemFromCart(item.name)}
                        className="text-red-500 hover:text-red-700 transition flex items-center gap-1"
                        title="Remove item"
                      >
                        <FaTrashAlt /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/3 md:border-l border-[#e0d8c3] md:pl-6 pt-6 md:pt-0">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">Order Summary</h3>
            <div>
              <h4 className="text-sm font-medium text-[#1a1a1a] mb-2">Add Note To Your Order</h4>
              <textarea
                placeholder="message"
                className="w-full border border-gray-300 rounded p-2 mb-4 h-28 resize-none focus:outline-none focus:border-yellow-700"
              ></textarea>
            </div>

            <div className="text-sm text-[#1a1a1a] space-y-3 border-t pt-4">
              <div className="flex justify-between">
                <span className="font-medium">Subtotal:</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="font-medium">Shipping:</span>
                <span className="text-right">
                  ${shippingCost.toFixed(2)} <br /> (1901 Thornridge Cir. Shiloh, Hawaii 81063)
                </span>
              </div>
              <div className="flex justify-between font-bold border-t pt-3 text-lg">
                <span>Grand Total:</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full mt-6 bg-[#9b6b1a] hover:bg-[#815a12] text-white py-3 rounded text-base font-semibold transition">
              Process to Checkout
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">Shipping calculated at checkout.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;