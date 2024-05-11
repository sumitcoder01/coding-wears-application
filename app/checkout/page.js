"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { BASE_URL } from "@/confiq/apiurl";
import { clearCart } from "../redux/cartSlice";
import { HypnosisLoader } from '../components/loaders/HypnosisLoader';

export const dynamic = 'force-dynamic';

export default function Checkout() {
  const [loading, setLoading] = useState(false);
  const cart = useSelector((data) => data.cartData.cart);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
    city: '',
    state: '',
    pincode: '',
  });

  const router = useRouter();
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (loading) return;
    setLoading(true);
    for (let key in formData) {
      if (formData[key].length < 3) {
        toast.error("Please enter correct details!");
        setLoading(false);
        return;
      }
    }
    try {
      const totatPrice = calculateTotal();
      const res = await fetch(`${BASE_URL}/orders/createorder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token'),
        },
        body: JSON.stringify({ deliveryDetails: formData, cart: cart, totatPrice })
      });
      const response = await res.json();
      if (response.success) {
        toast.success(response.message);
        dispatch(clearCart());
        router.push(`/order/${response.orderId}`);
      }
      else {
        toast.error(response.error);
      }
    } catch (error) {
      toast.error("Server Error!");
    }
    setFormData({
      name: '',
      email: '',
      address: '',
      phoneNumber: '',
      city: '',
      state: '',
      pincode: '',
    })
    setLoading(false);
  };
  useEffect(() => {
    if (!localStorage.getItem('auth-token')) {
      router.push('/');
    }
  }, [router])
  return (
    <div className="container px-5 py-16 mx-auto">
      <div className="text-gray-600 ">
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="sm:text-4xl text-3xl font-bold  text-gray-900">Check Out</h1>
        </div>
        <div className="text-center font-semibold text-xl mb-5">Delivery Details</div>
        <form className="lg:w-1/2 md:w-2/3 mx-auto" onSubmit={(e) => e.preventDefault()}>
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
                  required
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
                  required
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
                  required
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
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
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
                  required
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
                  required
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
                  required
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
              {cart && cart.map((item, index) => (
                <div key={index} className="mb-4 flex justify-between flex-wrap items-center">
                  <p className="text-gray-700 mb-1 mr-1">
                    {`${index + 1}. ${item.name} (${item.size}/${item.color})`}
                  </p>
                  <p className="font-medium mb-1 mr-1">{item.quantity} items</p>
                  <p className="font-medium mb-1 mr-1">₹{item.price && item.price.toFixed(2)}</p>
                </div>
              ))}
              <hr className="my-4 border-gray-200" />
              <div className="flex justify-start items-center">
                <p className="text-lg mr-1 font-semibold">Total:</p>
                <p className="text-lg font-semibold">₹{calculateTotal().toFixed(2)}</p>
              </div>
              <div className="flex justify-start mt-4">
                <span>
                  <button disabled={!cart || cart.length === 0} onClick={handleSubmit} className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition duration-300 ease-in-out">
                    {loading ? <HypnosisLoader /> : "Order Now"}
                  </button>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
