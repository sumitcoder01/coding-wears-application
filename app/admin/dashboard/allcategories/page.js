"use client";
import Breadcrumb from "@/app/components/Breadcrumb";
import { BASE_URL } from "@/confiq/apiurl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function AllCategories() {
  const [categories,setCategories]=useState([]);
  const router = useRouter();
  const getCategories = async () => {
    try {
      const res = await fetch(`${BASE_URL}/products/getcategory`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
      if (response.success) {
        setCategories(response.categories);
      }
      else{
        router.push('/');
      }
    } catch (error) {
      console.log("Server Error!");
      router.push('/')
    }
  };
  useEffect(() => {
    if (!localStorage.getItem('auth-token')) {
      router.push('/');
    }
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  const breadcrumbLinks = [
    { href: '/admin/dashboard', text: 'Dashboard' },
    { href: '/admin/dashboard/allcategories', text: 'AllCategories' },
  ];

  return (
    <div>
      <Breadcrumb links={breadcrumbLinks} />
      <h1 className="text-3xl text-center font-semibold mt-5 mb-8">Categories</h1>
      <div className="container min-h-screen my-10 mx-auto px-56 py-16">
        {categories && categories.map((categoryItem, index) => (
          <div key={index} className="flex flex-col items-center my-16 space-y-8 shadow-xl p-6 bg-white rounded-lg">
            <div className="text-center space-y-4">
              <p className="text-xl font-semibold mb-2">{categoryItem.category}</p>
              <div className="flex space-x-4">
                <button
                  className="bg-red-700 text-white px-4 py-2 rounded transition duration-300 hover:bg-red-600 focus:outline-none focus:border-red-800 focus:ring focus:ring-red-400"
                >
                  Delete
                </button>
                <button
                  className="bg-green-700 text-white px-4 py-2 rounded transition duration-300 hover:bg-green-600 focus:outline-none focus:border-green-800 focus:ring focus:ring-green-400"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}