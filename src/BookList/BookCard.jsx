/* eslint-disable react/prop-types */
// src/BookList/BookCard.js
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useState } from "react";
import ProductModal from "../Modal/ProductModal";


const BookCard = ({ book, onCard, onFavorite, isInCart }) => {
  const { title, price, image, author, name, rating } = book;

  const [clickModal, setClickModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(book.isFavorite);

  const handleClick = () => {
    setClickModal(true);
  };

  const toggleCartStatus = () => {
    onCard(book);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    onFavorite(book.id);
  };

  return (
    <>
      <div className="bg-gray-700/5 dark:bg-gray-900 bg-white dark:text-slate-100 text-black rounded-lg p-4 border border-slate-700 shadow-lg flex flex-col space-y-4 sm:max-w-sm">
        <div onClick={handleClick} className="cursor-pointer">
          <img src={image} alt={title} className="w-full object-cover rounded-md hover:opacity-90" />
          <h3 className="text-lg font-bold mt-4">{name}</h3>
          <p className="text-sm">{author}</p>
          <ul className="flex items-center ">
            {Array.from({ length: rating }).map((_, index) => (
              <li key={index} className="hover:scale-110 transition-transform">⭐</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center mt-2">
          <button
            onClick={toggleCartStatus}
            className={`px-3 py-2 text-sm rounded hover:scale-105 transition-transform ${isInCart ? "bg-red-600" : "bg-green-600"} text-white`}
            disabled={isInCart}
          >
            {isInCart ? "Added to cart" : `$${price} Add to cart`}
          </button>
          <button onClick={handleFavoriteClick} className="favorite-btn p-[8px] border rounded-md text-green-500 hover:text-green-700 hover:scale-105 transition-transform">
            {isFavorite ? <MdFavorite size={20} /> : <MdFavoriteBorder size={20} />}
          </button>
        </div>
      </div>

      {clickModal && (
        <ProductModal
          clickModal={clickModal}
          setClickModal={setClickModal}
          book={book}
          onCard={onCard}
          onFavorite={onFavorite}
          isInCart={isInCart} // Pass isInCart as prop to ProductModal
        />
      )}
    </>
  );
};

export default BookCard;
