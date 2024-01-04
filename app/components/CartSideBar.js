const CartSidebar = ({ cartItems, onAddQuantity, onRemoveQuantity, onRemoveItem, onCheckout }) => {
  return (
    <div className="fixed inset-y-0 right-0 w-1/4 bg-white shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="mb-4">
              <p className="text-gray-700 mb-1">{item.category}</p>
              <p className="font-medium mb-1">${item.price.toFixed(2)}</p>
              <div className="flex items-center">
                <button
                  className="text-sm text-gray-500 mr-2"
                  onClick={() => onRemoveQuantity(item.id)}
                >
                  -
                </button>
                <span className="text-sm">{item.quantity}</span>
                <button
                  className="text-sm text-gray-500 ml-2"
                  onClick={() => onAddQuantity(item.id)}
                >
                  +
                </button>
                <button
                  className="text-sm text-red-500 ml-auto"
                  onClick={() => onRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <hr className="my-4 border-gray-200" />
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">Total:</p>
            <p className="text-lg font-semibold">${calculateTotal(cartItems).toFixed(2)}</p>
          </div>
          <button
            className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600"
            onClick={onCheckout}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default CartSidebar;
