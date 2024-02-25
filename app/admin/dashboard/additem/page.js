"use client"
import Breadcrumb from "@/app/components/Breadcrumb";
import { useState } from "react";
import { toast } from 'react-toastify';
import { BASE_URL } from "@/confiq/apiurl";

export const dynamic = 'force-dynamic';

export default function AddItem() {
  const breadcrumbLinks = [
    { href: '/admin/dashboard', text: 'Dashboard' },
    { href: '/admin/dashboard/additem', text: 'AddItem' },
  ];
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    review: 0,
    img: '',
    slug: '',
    price: 0,
    availableQty: 0,
    category: '',
    color: '',
    size: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/products/addproduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token'),
        },
        body: JSON.stringify(formValues)
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
    setFormValues({
      title: '',
      description: '',
      review: 0,
      img: '',
      slug: '',
      price: 0,
      availableQty: 0,
      category: '',
      color: '',
      size: '',
    })
  };
  return (
    <div>
      <Breadcrumb links={breadcrumbLinks} />
      <div className="container min-h-screen p-8 my-10 mx-auto">
        <h1 className="text-3xl text-center font-bold mb-8">Add Item</h1>
        <form onSubmit={handleSubmit} className="w-2/3 mx-auto">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formValues.title}
              onChange={handleChange}
              className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              value={formValues.category}
              onChange={handleChange}
              className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={formValues.description}
              onChange={handleChange}
              className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="review" className="block text-gray-700 text-sm font-bold mb-2">
              Review
            </label>
            <input
              id="review"
              type="number"
              name="review"
              value={formValues.review}
              onChange={handleChange}
              className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="img" className="block text-gray-700 text-sm font-bold mb-2">
              Image URL
            </label>
            <input
              type="url"
              name="img"
              id="img"
              value={formValues.img}
              onChange={handleChange}
              className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={formValues.price}
              onChange={handleChange}
              className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="availableQty" className="block text-gray-700 text-sm font-bold mb-2">
              Quantity
            </label>
            <input
              type="number"
              name="availableQty"
              id="availableQty"
              value={formValues.availableQty}
              onChange={handleChange}
              className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="color" className="block text-gray-700 text-sm font-bold mb-2">
              Color
            </label>
            <input
              type="text"
              name="color"
              id="color"
              value={formValues.color}
              onChange={handleChange}
              className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="slug" className="block text-gray-700 text-sm font-bold mb-2">
              Slug
            </label>
            <input
              type="text"
              name="slug"
              id="slug"
              value={formValues.slug}
              onChange={handleChange}
              className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="color" className="block text-gray-700 text-sm font-bold mb-2">
              Size
            </label>
            <input
              type="text"
              name="size"
              id="size"
              value={formValues.size}
              onChange={handleChange}
              className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}