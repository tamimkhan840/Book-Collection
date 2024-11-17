/* eslint-disable react/prop-types */
import { Modal } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { getImage } from '../utils/getImage';
import ProductModal from './ProductModal';

// InputModal component
const InputModal = ({ openInputModal, setOpenInputModal, onCard, onBooksTasks = [] }) => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  // State for filtered books based on search
  const [filteredBooks, setFilteredBooks] = useState([]);
  // State for the selected book
  const [selectedBook, setSelectedBook] = useState(null);

  // Filter books based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      // If search query is empty, reset filtered books
      setFilteredBooks([]);
    } else {
      // Filter books by name matching the search query
      const filteredData = onBooksTasks.filter((book) =>
        book.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBooks(filteredData);
    }
  }, [searchQuery, onBooksTasks]);

  // Handle book selection
  const handleBookClick = (book) => {
    setSelectedBook(book); // Set the clicked book as the selected book
  };

  // Add the selected book to the cart
  const handleAddToCart = () => {
    onCard(selectedBook); // Pass the selected book to the onCard function
  };

  return (
    <Modal
      className="w-11/12 max-w-2xl md:max-w-3xl lg:max-w-6xl mx-auto dark:bg-gray-900 bg-gray-400/25 rounded-3xl"
      show={openInputModal}
      onClose={() => setOpenInputModal(false)} // Close the modal
      size="lg"
      dismissible
    >
      <div className="dark:bg-gray-900 bg-gray-300 text-white w-full max-w-full h-[80vh] sm:h-[550px] overflow-hidden mx-auto p-3 rounded-s-lg shadow-2xl">
        {/* Search bar */}
        <div className="flex justify-between items-center pb-4 border-b">
          <input
            type="text"
            placeholder="Type your favorite book name here ..."
            className="dark:bg-gray-800 bg-gray-200 p-2 rounded w-11/12 text-sm md:text-base lg:text-lg mx-auto text-white border-none outline-none"
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          />
          {/* Close button */}
          <button
            onClick={() => setOpenInputModal(false)}
            className="ml-2 text-white text-3xl sm:text-4xl md:text-5xl"
          >
            &times;
          </button>
        </div>

        {/* Display filtered books or "No item found" */}
        <div className="text-center mt-4 sm:mt-5 overflow-y-auto max-h-72 sm:max-h-80 md:max-h-96">
          {filteredBooks.length > 0 ? (
            <ul>
              {filteredBooks.map((book) => (
                <li
                  key={book.id}
                  className="py-2 px-4 flex items-center space-x-4 rounded-md dark:bg-gray-900 bg-gray-100 dark:hover:bg-emerald-600 hover:bg-emerald-600 mb-2 cursor-pointer shadow-lg text-sm md:text-base lg:text-lg"
                  onClick={() => handleBookClick(book)} // Select book on click
                >
                  {/* Book image */}
                  {book.image && (
                    <img
                      src={book.image}
                      alt="Book"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded"
                    />
                  )}
                  <h3>{book.name}</h3>
                </li>
              ))}
            </ul>
          ) : (
            // Message displayed when no books match the search query
            <p className="text-lg sm:text-xl md:text-4xl font-bold dark:text-slate-100 text-slate-700">
              No item found
            </p>
          )}
        </div>

        {/* ProductModal */}
        {selectedBook && (
          <ProductModal
            clickModal={Boolean(selectedBook)} // Show ProductModal if a book is selected
            setClickModal={() => setSelectedBook(null)} // Close ProductModal
            book={selectedBook} // Pass the selected book to the ProductModal
            onCard={handleAddToCart} // Add to cart handler
          />
        )}
      </div>
    </Modal>
  );
};

export default InputModal;
