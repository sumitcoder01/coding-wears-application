"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    address: '',
    phone: '',
    city: '',
    state: '',
    pincode: '',
  });
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
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="container px-5 py-16 mx-auto">
      <div className="text-gray-600 ">
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="sm:text-4xl text-3xl font-bold  text-gray-900">Check Out</h1>
        </div>
        <div className="text-center font-semibold text-xl mb-5">Delivery Details</div>
        <form className="lg:w-1/2 md:w-2/3 mx-auto" onSubmit={() => e.preventDefault()}>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="">
                <label htmlFor="address" className="leading-7 text-sm text-gray-600">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="">
                <label htmlFor="state" className="leading-7 text-sm text-gray-600">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="">
                <label htmlFor="state" className="leading-7 text-sm text-gray-600">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="">
                <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">
                  Pincode
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
        </form>
        <div className="text-center font-semibold text-xl mt-5 mb-5">Review Cart Items & Pay</div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto bg-pink-100 px-6 py-8 rounded-lg">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item, index) => (
                <div key={item.id} className="mb-4 flex justify-between items-center">
                  <p className="text-gray-700 mb-1">
                    {index + 1}. {item.name}
                  </p>
                  <p className="font-medium mb-1">{item.quantity} items</p>
                  <p className="font-medium mb-1">₹{item.price.toFixed(2)}</p>
                </div>
              ))}
              <hr className="my-4 border-gray-200" />
              <div className="flex justify-start items-center">
                <p className="text-lg mr-1 font-semibold">Total:</p>
                <p className="text-lg font-semibold">₹{calculateTotal().toFixed(2)}</p>
              </div>
              <div className="flex justify-start mt-4">
                <Link href="/orders">
                  <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition duration-300 ease-in-out">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
