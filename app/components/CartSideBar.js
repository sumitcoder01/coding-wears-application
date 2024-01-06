"use client";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartSideBar() {
  const [cartVisible, setCartVisible] = useState(false);
  const [cart, setCart] = useState([{
    id: 1000,
    name: "black Hoodie(XL,XX)",
    price: 345,
    quantity: 10,
  },
  {
    id: 1001,
    name: "black Hoodie(XL,XX)",
    price: 345,
    quantity: 10,
  },
  {
    id: 1002,
    name: "black Hoodie(XL,XX)",
    price: 345,
    quantity: 10,
  },

  {
    id: 1003,
    name: "black Hoodie(XL,XX)",
    price: 345,
    quantity: 10,
  },
  {
    id: 1004,
    name: "black Hoodie(XL,XX)",
    price: 345,
    quantity: 10,
  },
  {
    id: 1005,
    name: "black Hoodie(XL,XX)",
    price: 345,
    quantity: 10,
  },
  {
    id: 1006,
    name: "black Hoodie(XL,XX)",
    price: 345,
    quantity: 10,
  },
  {
    id: 1007,
    name: "black Hoodie(XL,XX)",
    price: 345,
    quantity: 10,
  },
  {
    id: 1008,
    name: "black Hoodie(XL,XX)",
    price: 345,
    quantity: 10,
  },
  ]);
  useEffect(() => {
    if (cart.length !== 0) {
      setCartVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnMinus = (index) => { };
  const handleOnPlus = (index) => { };

  const removeFromCart = (id) => { };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <>
      <span className="inline-flex items-center py-1 px-3  hover:bg-gray-200 rounded  text-xl md:text-2xl mt-4 md:mt-0">
        <button onClick={() => setCartVisible(true)}>
          <PiShoppingCartSimpleFill className="text-pink-500" />
        </button>
      </span>
      {cartVisible && (
        <div className="absolute z-10 top-0 right-0 min-h-full md:w-1/4 w-1/2 bg-pink-100 shadow-lg p-4">
          <div className="flex justify-end">
            <button
              className="text-2xl text-red-500"
              onClick={() => setCartVisible(false)}
            >
              <IoClose />
            </button>
          </div>
          <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item, index) => (
                <div key={item.id} className="mb-4">
                  <div className="flex justify-between">
                    <p className="text-gray-700 mb-1">
                      {index + 1}. {item.name}
                    </p>
                    <button
                      className="text-md text-red-500 ml-auto"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                  <p className="font-medium mb-1">₹{item.price.toFixed(2)}</p>

                  <div className="flex items-center">
                    <button
                      className="text-sm text-gray-500 mr-2"
                      onClick={() => handleOnMinus(index)}
                    >
                      <FaCircleMinus />
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      className="text-sm text-gray-500 ml-2"
                      onClick={() => handleOnPlus(index)}
                    >
                      <FaCirclePlus />
                    </button>
                  </div>
                </div>
              ))}
              <hr className="my-4 border-gray-200" />
              <div className="flex justify-start items-center">
                <p className="text-lg font-semibold mr-1">Total:</p>
                <p className="text-lg font-semibold">
                  ₹{calculateTotal().toFixed(2)}
                </p>
              </div>
              <div className="flex justify-around items-center flex-wrap">
                <Link href="/checkout">
                  <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
                    Checkout
                  </button>
                </Link>
                <button
                  className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600"
                  onClick={clearCart}
                >
                  clear cart
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
