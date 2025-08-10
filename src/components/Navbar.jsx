import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, LogOut, ChevronDown, Menu, X } from "lucide-react";
import logo from '../assets/logo.png';
import { useState, useEffect, useRef } from "react";
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useCart } from '../contexts/CartContext';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const { getTotalItems } = useCart();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] shadow-lg rounded-sm">
      {/* Top banner */}
      <div className="bg-[#3c352e] w-full">
        <div className="text-white text-xs text-center py-1 px-4">
          <p>
            Sign up for our Loyalty Program today and receive <strong>15% OFF</strong> your first order.
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-gray-900 flex items-center hover:text-gray-700 transition-colors duration-200">
            <img src={logo} alt="MR. CAFE Logo" className="h-10 mr-0" />
            <span className="ml-2">MY. CAFE</span>
          </Link>

          {/* Center Links (Desktop Only) */}
          <div className="hidden lg:flex gap-6 text-sm text-gray-700">
            <Link to="/" className="hover:text-yellow-700">Home</Link>
            <Link to="/about" className="hover:text-yellow-700">About Us</Link>
            <Link to="/menu" className="hover:text-yellow-700">Coffee & Drinks</Link>
            <Link to="/reservation" className="hover:text-yellow-700">Reservation</Link>
            <Link to="/contact" className="hover:text-yellow-700">Contact Us</Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 text-sm text-gray-700">
            {/* Search (desktop only) */}
            <form onSubmit={handleSearch} className="hidden lg:flex items-center border rounded px-2 py-1">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="outline-none text-sm px-1"
              />
              <button type="submit" className="text-gray-700 hover:text-yellow-700">
                <Search size={18} />
              </button>
            </form>

            {/* Cart Icon */}
            <Link to="/cart" className="relative hover:text-yellow-700">
              <ShoppingCart size={18} />
              <span className="absolute -top-2 -right-2 bg-yellow-700 text-white text-xs rounded-full px-1 min-w-[18px] text-center">
                {getTotalItems()}
              </span>
            </Link>

            {/* Profile Picture & Dropdown - Desktop and Mobile */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                {/* Profile button visible always (desktop + mobile/tablet) */}
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  <img
                    src={user.photoURL || '/default-profile.png'}
                    alt="Profile"
                    className="w-10 h-10 rounded-full hover:scale-105 object-cover"
                  />
                  {/* Chevron shown only on desktop */}
                  <ChevronDown className="text-gray-700 hidden lg:block" size={18} />
                </button>

                {/* Dropdown menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded shadow-lg z-50">
                    <div className="p-4 border-b border-gray-200">
                      <p className="text-xs text-gray-600">Signed in as</p>
                      <p className="text-sm font-medium text-gray-900 truncate">{user.email}</p>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100"
                    >
                      <LogOut size={16} className="mr-2" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // Sign In button visible on desktop only
              <Link to="/signin" className="hidden lg:block text-sm hover:text-yellow-700">Sign In</Link>
            )}

            {/* Hamburger Menu (Mobile and Tablet) */}
            <div className="lg:hidden">
              <button onClick={() => setMobileMenuOpen(true)} className="text-gray-700">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu (Tablet and Mobile) */}
      <div
        className={`fixed inset-0 z-[9998] bg-black bg-opacity-40 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 overflow-y-auto z-[9999] transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-bold text-gray-900">Menu</span>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X size={24} className="text-gray-700" />
          </button>
        </div>
        <form onSubmit={handleSearch} className="flex items-center border rounded px-2 py-1 mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="outline-none text-sm px-1 w-full"
          />
          <button type="submit" className="text-gray-700 hover:text-yellow-700">
            <Search size={18} />
          </button>
        </form>
        <nav className="flex flex-col gap-4 text-gray-700 text-sm">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-700">Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-700">About Us</Link>
          <Link to="/menu" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-700">Coffee & Drinks</Link>
          <Link to="/reservation" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-700">Reservation</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-700">Contact Us</Link>
          <Link to="/cart" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-700">Cart ({getTotalItems()})</Link>
          {user ? (
            <button
              onClick={() => {
                handleSignOut();
                setMobileMenuOpen(false);
              }}
              className="text-left text-red-600 hover:bg-gray-100 px-2 py-1 rounded"
            >
              <LogOut size={16} className="inline mr-2" />
              Sign Out
            </button>
          ) : (
            <Link to="/signin" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-700">Sign In</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
