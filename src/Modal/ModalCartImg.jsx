/* eslint-disable react/prop-types */
// src/Modal/ModalCartImg.js
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { RiDeleteBinLine } from "react-icons/ri";


const ModalCartImg = ({ cart }) => {

  const { dispatch } = useContext(CartContext);

  // Increase quantity by 1
  const handleIncrease = () => {
    dispatch({ type: "UPDATE_QUANTITY", payload: cart.id });
  };

  // Decrease quantity by 1 (ensure quantity doesn't go below 1)
  const handleDecrease = () => {
    dispatch({ type: "DECREASE_QUANTITY", payload: cart.id });
  };

  // Remove item from the cart
  const handleDelete = () => {
    dispatch({ type: "REMOVE_ITEM", payload: cart.id });
  };

  return (
    <div className="overflow-auto w-full">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-800 text-left">
            <th className="p-3 border border-gray-300 dark:border-gray-700">Image</th>
            <th className="p-3 border border-gray-300 dark:border-gray-700">Book</th>
            <th className="p-3 border border-gray-300 dark:border-gray-700">Price</th>
            <th className="p-3 border border-gray-300 dark:border-gray-700">Quantity</th>
            <th className="p-3 border border-gray-300 dark:border-gray-700">Total</th>
            <th className="p-3 border border-gray-300 dark:border-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="p-3 border border-gray-300 dark:border-gray-700">
              <img
                src={cart.image}
                alt="Book"
                className="w-12 h-16 rounded"
              />
            </td>
            <td className="p-3 border border-gray-300 dark:border-gray-700">
              <h3 className="font-semibold text-sm">{cart.name}</h3>
              <p className="text-xs text-gray-400">{cart.author}</p>
            </td>
            <td className="p-3 border border-gray-300 dark:border-gray-700">${cart.price}</td>
            <td className="p-3 border border-gray-300 dark:border-gray-700">
              <div className="flex items-center justify-center space-x-2">
                <button onClick={handleDecrease} className="p-1 rounded-full dark:bg-gray-700 bg-white shadow hover:bg-gray-400">
                  <AiOutlineMinus />
                </button>
                <span className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-lg">{cart.quantity}</span>
                <button onClick={handleIncrease} className="p-1 rounded-full dark:bg-gray-700 bg-white shadow hover:bg-gray-400">
                  <AiOutlinePlus />
                </button>
              </div>
            </td>
            <td className="p-3 border border-gray-300 dark:border-gray-700">${(cart.price * cart.quantity).toFixed(2)}</td>
            <td className="p-3 border border-gray-300 dark:border-gray-700">
              <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
                <RiDeleteBinLine size={20} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ModalCartImg;
