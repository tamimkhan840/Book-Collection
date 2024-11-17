/* eslint-disable react/prop-types */
import { Modal } from 'flowbite-react';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import { useState } from 'react';

function ProductModal({ book, onCard, clickModal, setClickModal, onFavorite, isInCart }) {
  const { name, description, image, title, author, price } = book;
  
  const [isFavorite, setIsFavorite] = useState(book.isFavorite);

  const handleClose = () => setClickModal(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    onFavorite(book.id); // Toggle favorite status
  };

  const handleCartClick = () => {
    if (!isInCart) {
      onCard(book); // Add book to cart
    }
  };

  return (
    <div className="w-full bg-gray-900/25">
      <Modal
        className="w-full max-w-md sm:max-w-lg lg:max-w-2xl mx-auto rounded-3xl"
        show={clickModal}
        onClose={handleClose}
        size="lg"
        dismissible
      >
        <div className="bg-slate-800 text-slate-100 rounded-lg grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Product Details */}
          <div className="order-2 md:order-1 space-y-4 p-4 md:col-span-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-semibold">{name}</h2>
            <p className="text-sm md:text-lg text-gray-400">{author}</p>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex items-center space-x-2 md:space-x-4 pt-4">
              <button
                onClick={handleCartClick}
                disabled={isInCart} // Disable button if already in cart
                className={`px-3 py-2 text-sm rounded hover:scale-105 transition-transform ${
                  isInCart ? "bg-red-600 cursor-not-allowed" : "bg-green-600"
                } text-white`}
              >
                {isInCart ? "Added to cart" : `$${price} Add to cart`}
              </button>
              <button
                onClick={handleFavoriteClick}
                className="p-2 border rounded-md text-green-500 hover:text-green-700"
              >
                {isFavorite ? <MdFavorite size={25} /> : <MdFavoriteBorder size={25} />}
              </button>
              <button
                className="px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>

          {/* Product Image */}
          <div className="order-1 md:order-2 w-full md:col-span-4">
            <img
              src={image}
              alt={title}
              className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover rounded-t-lg md:rounded-r-lg md:rounded-l-none"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProductModal;
