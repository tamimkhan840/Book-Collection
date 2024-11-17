import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import BookList from "../BookList/BookList";
import Filter from "../Filter/Filter";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

function DivineBook() {
  // Access state and dispatch from CartContext
  const { state, dispatch } = useContext(CartContext);
  const { booksTasks, booksCard } = state;

  // Handle filter changes in the Sidebar and update the booksTasks state
  const handleSidebarFilterChange = (filteredBooks) => {
    dispatch({ type: "SET_BOOK_TASKS", payload: filteredBooks });
  };

  // Toggle favorite status of a book by its ID
  const handleFavoriteToggle = (bookId) => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: bookId });
  };

  return (
    <div className="dark:bg-gray-900 bg-white dark:text-slate-100 text-black">
      {/* Render the Navbar component */}
      <Navbar />
      <div className="flex min-h-screen w-full md:container mx-auto pt-12 md:pt-28 pl-6">
        {/* Render the Sidebar component with necessary props */}
        <Sidebar
          onCard={(cardItem) => dispatch({ type: "ADD_TO_CART", payload: cardItem })}
          onBooksTasks={booksTasks}
          onFilterChange={handleSidebarFilterChange}
        />
        <div className="flex-grow">
          {/* Display the main heading */}
          <h1 className="text-center text-xl md:text-3xl font-bold py-6 animate-bounce">
            Book Collection
          </h1>
          {/* Render the BookList component with relevant props */}
          <BookList
            onBooksTasks={booksTasks}
            onCard={(cardItem) => dispatch({ type: "ADD_TO_CART", payload: cardItem })}
            onFavorite={handleFavoriteToggle}
            cartItemIds={booksCard.map((item) => item.id)}
          />
        </div>
        {/* Render the Filter component */}
        <Filter onBooksTasks={booksTasks} onFilterChange={handleSidebarFilterChange} />
      </div>
      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}

export default DivineBook;
