export const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
  return {
    ...state,
    booksCard: [...state.booksCard, { ...action.payload, quantity: 1 }],
  };

      case "REMOVE_ITEM":
        return {
          ...state,
          booksCard: state.booksCard.filter((item) => item.id !== action.payload),
        };
        case "UPDATE_QUANTITY":
      return {
        ...state,
        booksCard: state.booksCard.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
        case "DECREASE_QUANTITY":
        return {
            ...state,
            booksCard: state.booksCard.map((item) =>
            item.id === action.payload && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
        };
      case "TOGGLE_THEME":
        return {
          ...state,
          theme: action.payload,
        };
      case "TOGGLE_MODAL":
        return {
          ...state,
          iconModal: action.payload,
        };
      case "SET_BOOK_TASKS":
        return {
          ...state,
          booksTasks: action.payload,
        };
      case "SET_ORIGINAL_BOOKS":
        return {
          ...state,
          originalBooks: action.payload,
          booksTasks: action.payload, // Initialize booksTasks with all books
        };

      case "TOGGLE_FAVORITE":
        return {
          ...state,
          booksTasks: state.booksTasks.map((book) =>
            book.id === action.payload
              ? { ...book, isFavorite: !book.isFavorite }
              : book
          ),
        };

      default:
        return state;
    }
  };
