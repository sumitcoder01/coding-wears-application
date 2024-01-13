"use client";
import { BASE_URL } from "@/confiq/apiurl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Orders() {
  const router =useRouter();
  const [orders, setOrders] = useState([]);
  const [text,setText]=useState('Wait! Your orders are fetching')
  const getOrders = async () => {
    try {
      const res = await fetch(`${BASE_URL}/orders/getorders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token'),
        },
      });
      const response = await res.json();
      if (response.success) {
        setOrders(response.orders);
        setText(`${response.orders.length===0 ? "your orders yet":""}`);
      }
    } catch (error) {
      setText('No Orders yet!');
      console.log("server error")
    }
  }
  useEffect(() => {
    if(!localStorage.getItem('auth-token')){
      router.push('/');
    }
    getOrders();
  }, [router])
  const formattedDate = (inputDate) => {
    const date = new Date(inputDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  return (
    <div>
      {orders && orders.length !== 0 ? <div className='container mx-auto my-3'>
        <h1 className='text-3xl text-center font-bold'>My Orders</h1>
        {orders.map((order, index) =>
          <Link key={index} href={`/order/${order._id}`}>
            <div className="text-center my-10 overflow-x-auto shadow-lg">
              <h2 className='text-xl font-semibold my-3'>{formattedDate(order.createdAt)}</h2>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Varient
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {order.products && order.products.map((item, index) =>
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.name}
                      </th>
                      <td className="px-6 py-4">
                        {item.quantity}
                      </td>
                      <td className="px-6 py-4">
                        {`${item.size},${item.color}`}
                      </td>
                      <td className="px-6 py-4">
                        ₹{item.price}
                      </td>
                    </tr>)}
                </tbody>
              </table>
              <h2 className='text-xl font-bold my-3'>Total Price: ₹{order.amount}</h2>
              <hr className='border-t  border-gray-700 mt-3 h-1 w-full' />
            </div>
          </Link>)}
      </div> :
        <div className='text-center text-3xl'>{text}</div>}
    </div>
  )
}
