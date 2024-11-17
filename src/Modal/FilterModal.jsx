/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";

const FilterModal = ({ children, onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50 z-50">
        <div className="ml-auto h-full dark:bg-gray-900/70 bg-white/70 dark:text-slate-100 text-black rounded-lg w-6/12">
          <button onClick={onClose} className=" text-red-500 text-lg float-left ml-4 mt-4"><IoMdClose size={30 }/></button>
          {children}
        </div>
      </div>
    );
  };

  export default FilterModal;
