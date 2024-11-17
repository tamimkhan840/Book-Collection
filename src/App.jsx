import { CartProvider } from "./Context/CartContext";
import DivineBook from "./Components/DivineBook";

function App() {
  return (
    // Wrap the entire application in the CartProvider for context access
    <CartProvider>
      <div className="dark:bg-gray-900 bg-white dark:text-slate-100 text-black">
        {/* Render the DivineBook component inside the app */}
        <DivineBook />
      </div>
    </CartProvider>
  );
}

export default App;
