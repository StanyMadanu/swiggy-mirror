import { useDispatch, useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  //   const cartItems = useSelector((store) => store.cart.items);

  const store = useSelector((store) => store);

  const cartItems = store.cart.items;

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4 w-6/12 mx-auto">
      <div className="flex align-middle justify-between mb-5 mt-3 gap-2">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button
          className="px-3 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
      </div>

      <div className="mt-4">
        {cartItems?.length === 0 ? (
          <h1 className="text-center">Cart is Empty. Add Items to the Cart</h1>
        ) : (
          <CategoryItems items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
