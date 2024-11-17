/* eslint-disable react/prop-types */
// src/Modal/ModalImg.js
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Modal } from 'flowbite-react';
import ModalCartImg from './ModalCartImg';


const ModalImg = ({ showModal, setShowModal }) => {

  const { state,  } = useContext(CartContext);
  const { booksCard } = state;

  // Close the modal
  const handleClose = () => setShowModal(false);



  return (
    <Modal
      className=" w-11/12  h-5/6 ml-auto dark:bg-gray-900 bg-gray-300 overflow-hidden"
      show={showModal}
      onClose={handleClose}
      size="4xl"
      dismissible
    >
      <div className="dark:text-white text-slate-800 p-6 dark:bg-gray-900 bg-gray-100 rounded-lg flex flex-col items-center md:flex-row md:space-x-6">
        {/* Cart items section */}
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl text-center font-bold mb-6 pb-5">Your Carts</h2>
          <div className="space-y-4">
            {/* Render each cart item */}
            {booksCard && booksCard.map((cart) => (
              <ModalCartImg key={cart.id} cart={cart} />
            ))}
          </div>
        </div>

        {/* Order summary section */}
        <div className="w-full md:w-1/3 mt-10 md:mt-0">
          <div className="dark:bg-gray-900 bg-gray-50 shadow-2xl rounded-lg space-y-4">
            <h3 className="text-xl pb-5 pt-3 px-4 text-center font-semibold border-b border-b-slate-400">Order summary</h3>
            {/* Subtotal */}
            <div className="flex justify-between hover:bg-slate-700 hover:text-slate-200 py-1 px-3">
              <span>Subtotal</span>
              <span>
                ${booksCard.reduce((acc, item) => acc + item.price * item.quantity, 0)}
              </span>
            </div>
            {/* Shipping */}
            <div className="flex justify-between hover:bg-slate-700 hover:text-slate-200 py-1 px-3">
              <span>Shipping</span>
              <span className="text-green-500">Free</span>
            </div>
            {/* Total */}
            <div className="flex justify-between font-bold bg-slate-500 hover:bg-slate-800 hover:text-slate-200 py-1 px-3">
              <span>Total</span>
              <span>
                ${booksCard.reduce((acc, item) => acc + item.price * item.quantity, 0)}
              </span>
            </div>
            {/* Checkout button */}
            <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-green-700">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalImg;
