import { useContext, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import { FaFire, FaUser, FaShoppingCart } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import ModalImg from "../Modal/ModalImg";

function Navbar() {
  // Access state and dispatch from CartContext
  const { state, dispatch } = useContext(CartContext);
  const { booksCard, theme, iconModal } = state;

  // Toggle theme between dark and light mode
  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    dispatch({ type: "TOGGLE_THEME", payload: newTheme });
  };

  // Apply the theme to the document and save it in localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("themeMode", theme);
  }, [theme]);

  return (
    <div className="container border-b dark:border-b-slate-700 fixed w-full mx-auto bg-white dark:bg-gray-900 z-50">
      <nav className="flex items-center justify-between px-4 py-2 dark:text-white text-slate-200">
        {/* Left section of the navbar */}
        <div className="flex items-center ml-20 my-6">
          {/* Website title */}
          <h1 className="text-xl sm:text-3xl font-bold text-green-500 hidden sm:block hover:scale-105 transition-transform">
            KHANBOOK
          </h1>
          {/* Trending button */}
          <button className="hidden sm:flex items-center hover:scale-105 transition-transform bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full ml-4">
            <FaFire className="mr-2" />
            Trending
          </button>
        </div>

        {/* Right section of the navbar */}
        <div className="flex items-center space-x-2 sm:space-x-4 mr-28">
          {/* User profile button */}
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 hover:scale-105 transition-transform">
            <FaUser size={18} />
          </button>

          {/* Theme toggle button */}
          <button
            className="border p-2 rounded-full hover:scale-105 transition-transform"
            onClick={handleThemeToggle}
          >
            <MdOutlineLightMode
              size={18}
              className={`cursor-pointer ${theme === "dark" ? "text-white" : "text-black"}`}
            />
          </button>

          {/* Cart button with item count */}
          <button
            onClick={() => dispatch({ type: "TOGGLE_MODAL", payload: true })}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 relative hover:scale-105 transition-transform"
          >
            <FaShoppingCart size={18} />
            <span className="absolute top-0 right-0 bg-green-500 text-xs rounded-full px-1">
              {booksCard ? booksCard.length : 0}
            </span>
          </button>
        </div>
      </nav>

      {/* Modal for cart items */}
      {iconModal && (
        <ModalImg
          showModal={iconModal}
          setShowModal={() => dispatch({ type: "TOGGLE_MODAL", payload: false })}
        />
      )}
    </div>
  );
}

export default Navbar;
