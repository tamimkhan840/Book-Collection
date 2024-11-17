/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import Modal from "../Modal/FilterModal";

const Filter = ({ onBooksTasks, onFilterChange }) => {
  const [openFilterModal, setOpenFilterModal] = useState(false); // State to control modal visibility

  // Function to sort books based on the selected type
  const sortBooks = (books, type) => {
    let sortedBooks = [...books];
    if (type === "nameAsc") {
      sortedBooks.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name A to Z
    } else if (type === "nameDesc") {
      sortedBooks.sort((a, b) => b.name.localeCompare(a.name)); // Sort by name Z to A
    } else if (type === "priceAsc") {
      sortedBooks.sort((a, b) => a.price - b.price); // Sort by price low to high
    } else if (type === "priceDesc") {
      sortedBooks.sort((a, b) => b.price - a.price); // Sort by price high to low
    } else if (type === "ratingAsc") {
      sortedBooks.sort((a, b) => a.rating - b.rating); // Sort by rating low to high
    } else if (type === "ratingDesc") {
      sortedBooks.sort((a, b) => b.rating - a.rating); // Sort by rating high to low
    }
    return sortedBooks;
  };

  // Handle filter change and update the sorted books
  const handleSortTypeChange = (type) => {
    const sortedBooks = sortBooks(onBooksTasks, type);
    onFilterChange(sortedBooks); // Pass sorted books to parent component
  };

  return (
    <>
      {/* Mobile filter button */}
      <button
        className=" fixed top-0 z-50 right-3 pl-2  md:hidden flex items-center h-10 w-10 bg-green-600 text-white rounded-lg mt-4"
        onClick={() => setOpenFilterModal(true)} // Open filter modal when clicked
      >
        <FaFilter className="mr-2" />
      </button>

      {/* Filter options visible on larger screens */}
      <div className="hidden md:block w-1/6 py-4 px-2 dark:bg-gray-900 bg-white dark:text-slate-100 text-black border-l border-slate-700">
        <h3 className="text-base font-semibold mb-2">Filter On Page</h3>
        <ul className="space-y-1">
          {/* Sorting options */}
          <li className="flex items-center my-3 text-xs xl:text-lg hover:bg-green-600 py-2 min-w-full mr-auto rounded cursor-pointer" onClick={() => handleSortTypeChange("nameAsc")}><IoIosArrowForward /> By Name (A +) </li>
          <li className="flex items-center my-6 text-xs xl:text-lg hover:bg-green-600 py-2 min-w-full mr-auto rounded cursor-pointer" onClick={() => handleSortTypeChange("nameDesc")}><IoIosArrowForward /> By Name (Z - ) </li>
          <li className="flex items-center my-6 text-xs xl:text-lg hover:bg-green-600 py-2 min-w-full mr-auto rounded cursor-pointer" onClick={() => handleSortTypeChange("priceDesc")}><IoIosArrowForward /> By Price (H +)</li>
          <li className="flex items-center my-6 text-xs xl:text-lg hover:bg-green-600 py-2 min-w-full mr-auto rounded cursor-pointer" onClick={() => handleSortTypeChange("priceAsc")}><IoIosArrowForward /> By Price (L -)</li>
          <li className="flex items-center my-6 text-xs xl:text-lg hover:bg-green-600 py-2 min-w-full mr-auto rounded cursor-pointer" onClick={() => handleSortTypeChange("ratingDesc")}><IoIosArrowForward /> By Rating (5 +)</li>
          <li className="flex items-center my-6 text-xs xl:text-lg hover:bg-green-600 py-2 min-w-full mr-auto rounded cursor-pointer" onClick={() => handleSortTypeChange("ratingAsc")}><IoIosArrowForward /> By Rating (5 -)</li>
        </ul>
      </div>

      {/* Filter modal for smaller screens */}
      {openFilterModal && (
        <Modal onClose={() => setOpenFilterModal(false)}>
          <div className="py-4 px-2 ml-auto">
            <h3 className="text-lg font-semibold mb-2 pb- mt-6 border-b">Filter On Page</h3>
            <ul className="space-y-1">
              {/* Sorting options inside the modal */}
              <li className="flex items-center my-3 text-[12px] sm:text-sm lg:text-lg hover:bg-green-600 py-2 px-0 sm:px-4 min-w-full mr-auto rounded cursor-pointer" onClick={() => handleSortTypeChange("nameAsc")}><IoIosArrowForward /> By Name (A - Z) </li>
              <li className="flex items-center my-6 text-[12px] sm:text-sm lg:text-lg hover:bg-green-600 py-2 px-0 sm:px-4 min-w-full mr-auto rounded cursor-pointer" onClick={() => handleSortTypeChange("nameDesc")}><IoIosArrowForward /> By Name (Z - A) </li>
              <li className="flex items-center my-6 text-[12px] sm:text-sm lg:text-lg hover:bg-green-600 py-2 px-0 sm:px-4 min-w-full mr-auto rounded cursor-pointer" onClick={() => handleSortTypeChange("priceDesc")}><IoIosArrowForward /> By Price (H to L)</li>
              <li className="flex items-center my-6 text-[12px] sm:text-sm lg:text-lg hover:bg-green-600 py-2 px-0 sm:px-4 min-w-full mr-auto rounded cursor-pointer" onClick={() => handleSortTypeChange("priceAsc")}><IoIosArrowForward /> By Price (L to H)</li>
              <li className="flex items-center my-6 text-[12px] sm:text-sm lg:text-lg hover:bg-green-600 py-2 px-0 sm:px-4 min-w-full mr-auto rounded cursor-pointer" onClick={() => handleSortTypeChange("ratingAsc")}><IoIosArrowForward /> By Rating (Ascend)</li>
              <li className="flex items-center my-6 text-[12px] sm:text-sm lg:text-lg hover:bg-green-600 py-2 px-0 sm:px-4 min-w-full mr-auto rounded cursor-pointer" onClick={() => handleSortTypeChange("ratingDesc")}><IoIosArrowForward /> By Rating (Descend)</li>
            </ul>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Filter;
