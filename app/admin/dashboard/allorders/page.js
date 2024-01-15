"use client";
import Breadcrumb from "@/app/components/Breadcrumb";
import { BASE_URL } from "@/confiq/apiurl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AllOrders() {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
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
      }
    } catch (error) {
      console.log("server error")
    }
  }
  useEffect(() => {
    if (!localStorage.getItem('auth-token')) {
      router.push('/');
    }
    getOrders();
  }, [router])

  const breadcrumbLinks = [
    { href: '/admin/dashboard', text: 'Dashboard' },
    { href: '/admin/dashboard/allorders', text: 'AllOrders' },
  ];

  return (
    <div>
      <Breadcrumb links={breadcrumbLinks} />
      <div className="container min-h-screen my-10 mx-auto">
        <h1 className="text-3xl text-center font-bold mb-8">All Orders</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">#</th>
                <th className="py-2 px-4 border-b">Address</th>
                <th className="py-2 px-4 border-b">Pincode</th>
                <th className="py-2 px-4 border-b">State</th>
                <th className="py-2 px-4 border-b">City</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders && orders.map((order, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 text-center border-b">{index}</td>
                  <td className="py-2 px-4 text-center border-b">{order.address}</td>
                  <td className="py-2 px-4 text-center border-b">{order.pincode}</td>
                  <td className="py-2 px-4 text-center border-b">{order.state}</td>
                  <td className="py-2 px-4 text-center border-b">{order.city}</td>
                  <td className={`py-2 text-center ${order.status === 'Pending' ? 'text-yellow-500' : 'text-green-500'} px-4 border-b`}>{order.status}</td>
                  <td className="py-2 text-center px-4 border-b">
                    <button className="text-blue-500 mr-2">View</button>
                    <button className="ml-2 text-green-500 me-2">Modify</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}