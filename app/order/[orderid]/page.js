"use client";
import Image from "next/image";
import Hero from "../../../public/image/hero.jpg";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/confiq/apiurl";
import OrderSkeleton from "@/app/components/skeletons/OrderSkeleton";

export const dynamic = 'force-dynamic';

export default function Order({ params }) {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('Wait! Your order in progress')
  const router = useRouter();
  const getOrder = async (orderId) => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/orders/getorders/${orderId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token'),
        },
      });
      const response = await res.json();
      if (response.success) {
        toast.success(response.message);
        setOrder(response.order);
      }
      else {
        toast.error(response.error);
        setText('Sorry! Your order is not placed ')
      }
    } catch (error) {
      toast.error("Server Error!");
    }
    setLoading(false);
  };
  useEffect(() => {
    if (!localStorage.getItem('auth-token')) {
      router.push('/');
    }
    getOrder(params.orderid);
  }, [router, params.orderid])
  return (
    <div className="text-gray-600">
      {loading ? <OrderSkeleton /> : <div className="container px-5 py-24 mx-auto">
        {order ? <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              CODINGWEAR.COM
            </h2>
            <h1 className="text-gray-900 text-xl title-font font-medium mb-4">
              Order Id: #{params.orderid}
            </h1>
            <h4 className="text-sm mb-4 text-gray-500">
              Your order has been successfully placed
            </h4>
            <div className="flex mb-4">
              <span className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                Item Description
              </span>
              <span className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                Quantity
              </span>
              <span className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                Item Total
              </span>
            </div>
            {order.products && order.products.map(item =>
              <div key={item.productId} className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500 text-sm">{`${item.name} ${item.size}/${item.color}`}</span>
                <span className="ml-auto text-gray-900">{item.quantity}</span>
                <span className="ml-auto text-gray-900">₹{item.price}</span>
              </div>)}
            <div className="flex flex-col space-y-5 mt-9">
              <h1 className="text-gray-700 text-2xl title-font font-medium">
                SubTotal: ₹{order.amount}
              </h1>
              <div>
                <button className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Track Order
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full  lg:h-auto h-64 object-cover object-center rounded">
            <Image src={Hero} alt="coding wears" width={800} height={800} />
          </div>
        </div> : <div className='text-red-700 text-center'>{text}</div>}
      </div>}
    </div>
  );
}
