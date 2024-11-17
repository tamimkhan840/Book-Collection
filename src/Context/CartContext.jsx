/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { initialTasks } from "../Data/initialTasks";
import { cartReducer } from "../Reducers/cartReducer";

// Create the CartContext
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export function CartProvider({ children }) {
   // Retrieve theme from localStorage or fallback to 'dark'
   const savedTheme = localStorage.getItem('themeMode') || 'dark';

   // Define the initial state
   const initialState = {
      booksTasks: initialTasks(), // Initial list of book tasks
      booksCard: [], // Initial empty state for the cart
      theme: savedTheme, // Set theme, default to 'dark'
      iconModal: false, // Modal is initially closed
      originalBooks: [], // Original database of books


   };

   // Use the useReducer hook to manage state and dispatch
   const [state, dispatch] = useReducer(cartReducer, initialState);

   // Provide state and dispatch through context
   return (
      <CartContext.Provider value={{ state, dispatch }}>
         {children}
      </CartContext.Provider>
   );
}
