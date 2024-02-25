"use client"
import Breadcrumb from "@/app/components/Breadcrumb";
import { useState } from "react";
import { toast } from 'react-toastify';
import { BASE_URL } from "@/confiq/apiurl";

export const dynamic = 'force-dynamic';

export default function AddCategory() {
  const breadcrumbLinks = [
    { href: '/admin/dashboard', text: 'Dashboard' },
    { href: '/admin/dashboard/addcategory', text: 'AddCategory' },
  ];
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const res = await fetch(`${BASE_URL}/products/addcategory`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token'),
        },
        body: JSON.stringify({category})
      });
      const response = await res.json();
      if (response.success) {
        toast.success(response.message);
      }
      else {
        toast.error(response.error);
      }
    } catch (error) {
      toast.error("Server Error!");
    }
    setCategory('')
  };
  return (
    <div>
      <Breadcrumb links={breadcrumbLinks} />
      <div className="container min-h-screen p-8 my-10 mx-auto">
        <h1 className="text-3xl text-center font-bold mb-8">Add Category</h1>
        <form onSubmit={handleSubmit} className="w-2/3 mx-auto">
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
              Categroy
            </label>
            <input
              type="text"
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}