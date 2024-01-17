"use client";
import Breadcrumb from "@/app/components/Breadcrumb";
import { BASE_URL } from "@/confiq/apiurl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Order({ params }) {

  const breadcrumbLinks = [
    { href: '/admin/dashboard', text: 'Dashboard' },
    { href: `/admin/dashboard/order/${params.id}`, text: `orderid:${params.id}` },
  ];
  const router = useRouter();
  const [order, setOrder] = useState({});
  const getOrder = async () => {
    try {
      const res = await fetch(`${BASE_URL}/orders/getorder/${params.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token'),
        },
      });
      const response = await res.json();
      if (response.success) {
        setOrder(response.order);
      }
      else {
        router.push('/admin/dashboard');
      }
    } catch (error) {
      router.push('/admin/dashboard');
    }
  }
  useEffect(() => {
    if (!localStorage.getItem('auth-token')) {
      router.push('/');
    }
    getOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Breadcrumb links={breadcrumbLinks} />
      {order && <div className="text-center mt-10 overflow-x-auto shadow-md">
        <h2 className='text-xl font-semibold my-3'>{formattedDate(order.createdAt)}</h2>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Varient
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {order.products && order.products.map((item, index) =>
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.name}
                </th>
                <td className="px-6 py-4 text-center">
                  {item.quantity}
                </td>
                <td className="px-6 py-4 text-center">
                  {`${item.size},${item.color}`}
                </td>
                <td className="px-6 py-4 text-center">
                  ₹{item.price}
                </td>
              </tr>)}
          </tbody>
        </table>
        <h2 className='text-xl font-bold my-3'>Total Price: ₹{order.amount}</h2>
        <p onClick={()=>router.push('/admin/dashboard/allorders')} className='text-sm font-bold my-3'>Other Orders</p>  
      </div>}
    </div>
  )
}
