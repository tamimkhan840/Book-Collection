/* eslint-disable react/prop-types */
import BookCard from "./BookCard";

const BookList = ({ onBooksTasks, onCard, onFavorite, cartItemIds }) => {
  // Ensure onBooksTasks is an array, if not, use an empty array
  const tasks = Array.isArray(onBooksTasks) ? onBooksTasks : [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {/* Check if there are books to display */}
      {tasks.length > 0 ? (
        tasks.map((book) => (
          <BookCard
            key={book.id} // Use book id as a unique key for each item
            book={book} // Pass book data to BookCard
            onCard={onCard} // Pass onCard function for adding to cart
            onFavorite={onFavorite} // Pass onFavorite function for marking as favorite
            isInCart={cartItemIds.includes(book.id)} // Check if the book is in the cart by its id
          />
        ))
      ) : (
        <p>No books available</p> // Display message if no books are available
      )}
    </div>
  );
};

export default BookList;
