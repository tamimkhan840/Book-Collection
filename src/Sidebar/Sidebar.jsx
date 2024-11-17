/* eslint-disable react/prop-types */
// src/Sidebar/Sidebar.js
import { useState } from "react";
import { FiFolderPlus } from "react-icons/fi";
import { MdOutlineUpcoming, MdFavoriteBorder } from "react-icons/md";
import { FaSearch, FaFire, FaBars } from "react-icons/fa";
import InputModal from "../Modal/InputModal";
import Modal from "../Modal/Modal";
import { initialTasks } from "../Data/initialTasks";

const Sidebar = ({ onBooksTasks, onCard, onFilterChange }) => {
  // State for managing modals and selected category
  const [openInputModal, setOpenInputModal] = useState(false); // State for Input Modal visibility
  const [openSidebarModal, setOpenSidebarModal] = useState(false); // State for Sidebar Modal visibility
  const [selectedCategory, setSelectedCategory] = useState(null); // State for selected category
  const [noItemsFound, setNoItemsFound] = useState(false); // State to show "No items found" message
 const booksTasks = initialTasks() // Initial list of book tasks
  // Open the Input Modal
  function handleModal() {
    setOpenInputModal(true);
  }

  // Handle category button click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Set selected category
    const filteredBooks = filterBooks(category); // Filter books by category
    if (filteredBooks.length === 0) {
      setNoItemsFound(true); // Show "No items found" if the filter result is empty
    } else {
      setNoItemsFound(false); // Hide "No items found"
      onFilterChange(filteredBooks); // Update filtered books
    }
  };

  // Filter books based on the selected category
  const filterBooks = (category) => {
    if (!category) return []; // Return empty if no category is selected

    switch (category) {
      case "newReleases":
        return booksTasks.filter((book) => book.status === "new_releases");
      case "comingSoon":
        return booksTasks.filter((book) => book.status === "coming_soon");
      case "trending":
        return booksTasks.filter((book) => book.rating === 5);
      case "favorites":
        return onBooksTasks.filter((book) => book.isFavorite === true);
      default:
        return [];
    }
  };

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="fixed top-0 z-50 left-3 pl-2 md:hidden flex items-center h-10 w-10 bg-green-600 text-white rounded-lg mt-4"
        onClick={() => setOpenSidebarModal(true)}
      >
        <FaBars className="mr-2" />
      </button>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-1/6 pr-1 border-r border-r-slate-700 dark:bg-gray-900 bg-white dark:text-slate-100 text-black">
        <div className="space-y-2">
          {/* Search Input */}
          <button
            onClick={handleModal}
            className="flex items-center dark:bg-gray-900 bg-white dark:text-slate-100 text-black rounded py-1 mb-4 mx-auto"
          >
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Quick search..."
              className="py-1 pl-2 w-11/12 dark:bg-gray-900 rounded-lg bg-white min-w-full border dark:text-slate-100 text-black mr-3 outline-none placeholder-gray-400"
            />
          </button>

          {/* Category Buttons */}
          <button
            onClick={() => handleCategoryClick("trending")}
            className="flex items-center px-1 my-3 text-xs xl:text-lg hover:bg-green-600 py-2 min-w-full rounded cursor-pointer"
          >
            <FaFire className="mr-1" /> Trending
          </button>
          <button
            onClick={() => handleCategoryClick("newReleases")}
            className="flex items-center px-1 my-3 text-xs xl:text-lg hover:bg-green-600 py-2 min-w-full rounded cursor-pointer"
          >
            <FiFolderPlus className="mr-1" /> New Releases
          </button>
          <button
            onClick={() => handleCategoryClick("comingSoon")}
            className="flex items-center px-1 my-3 text-xs xl:text-lg hover:bg-green-600 py-2 min-w-full rounded cursor-pointer"
          >
            <MdOutlineUpcoming className="mr-1" /> Coming Soon
          </button>
          <button
            onClick={() => handleCategoryClick("favorites")}
            className="flex items-center my-3 px-1 text-xs xl:text-lg hover:bg-green-600 py-2 min-w-full rounded cursor-pointer"
          >
            <MdFavoriteBorder className="mr-1" /> Favorites
          </button>
        </div>

        {/* Display if no items found */}
        {noItemsFound && <p className="text-center text-xl text-red-500 mt-4">No item found</p>}

        {/* Input Modal */}
        {openInputModal && (
          <InputModal
            openInputModal={openInputModal}
            setOpenInputModal={setOpenInputModal}
            onBooksTasks={onBooksTasks}
            onCard={onCard}
          />
        )}
      </div>

      {/* Mobile Sidebar Modal */}
      {openSidebarModal && (
        <Modal onClose={() => setOpenSidebarModal(false)}>
          <div className="p-4">
            {/* Mobile Search Input */}
            <button
              onClick={handleModal}
              className="flex items-center dark:bg-gray-900 bg-white dark:text-slate-100 text-black rounded py-1 mb-4 mx-auto"
            >
              <input
                type="text"
                placeholder="Quick search..."
                className="py-1 px-2 w-full sm:w-full md:w-11/12 lg:w-full dark:bg-gray-900 bg-white rounded-lg border dark:text-slate-100 text-black outline-none placeholder-gray-400 text-sm sm:text-base"
              />
            </button>

            {/* Category Buttons for Mobile */}
            <button
              onClick={() => handleCategoryClick("trending")}
              className="flex items-center my-3 text-[12px] sm:text-sm lg:text-lg hover:bg-green-600 py-2 px-0 sm:px-4 min-w-full mr-auto rounded cursor-pointer"
            >
              <FaFire className="mr-2" /> Trending
            </button>
            <button
              onClick={() => handleCategoryClick("newReleases")}
              className="flex items-center my-3 text-[12px] sm:text-sm lg:text-lg hover:bg-green-600 py-2 px-0 sm:px-4 min-w-full mr-auto rounded cursor-pointer"
            >
              <FiFolderPlus className="mr-2" /> New Releases
            </button>
            <button
              onClick={() => handleCategoryClick("comingSoon")}
              className="flex items-center my-3 text-[12px] sm:text-sm lg:text-lg hover:bg-green-600 py-2 px-0 sm:px-4 min-w-full mr-auto rounded cursor-pointer"
            >
              <MdOutlineUpcoming className="mr-2" /> Coming Soon
            </button>
            <button
              onClick={() => handleCategoryClick("favorites")}
              className="flex items-center my-3 text-[12px] sm:text-sm lg:text-lg hover:bg-green-600 py-2 px-0 sm:px-4 min-w-full mr-auto rounded cursor-pointer"
            >
              <MdFavoriteBorder className="mr-2" /> Favorites
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Sidebar;
