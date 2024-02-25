"use client"
import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";
import { BASE_URL } from "@/confiq/apiurl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "@/app/components/Modal";
import UpdateItem from "@/app/components/UpdateItem";
import { toast } from "react-toastify";

export const dynamic = 'force-dynamic';

export default function AllItems() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState({});

  const handleOnUpdate = (item) => {
    setSelected(item);
    openModal();
  }

  const handleOnDelete = async (id) => {
    let updatedproducts = products.filter((item => item._id !== id));
    setProducts(updatedproducts);
    try {
      const res = await fetch(`${BASE_URL}/products/deleteproduct/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token'),
        },
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
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getProducts = async () => {
    try {
      const res = await fetch(`${BASE_URL}/products/getallproducts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
      if (response.success) {
        setProducts(response.products);
      }
      else {
        router.push('/');
      }
    } catch (error) {
      console.log("Server Error!");
      router.push('/');
    }
  };
  useEffect(() => {
    if (!localStorage.getItem('auth-token')) {
      router.push('/');
    }
    getProducts();
  })
  const breadcrumbLinks = [
    { href: '/admin/dashboard', text: 'Dashboard' },
    { href: '/admin/dashboard/allitems', text: 'AllItems' },
  ];

  return (
    <div>
      <Breadcrumb links={breadcrumbLinks} />
      <h1 className="text-3xl text-center font-semibold my-8">Products</h1>
      <div className="container min-h-screen my-10 mx-auto p-24">

        {products && products.map((product, index) => (
          <div key={index} className="flex flex-col items-center my-16 space-y-8 shadow-xl p-6 bg-white rounded-lg">
            <div className="relative w-40 h-40 mb-4">
              <Image
                src={product.img}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
            <div className="text-center space-y-4">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 text-base mb-4"><strong>Slug:</strong>{product.slug}</p>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex flex-wrap justify-center space-x-4">
                <p className="mb-2">
                  <strong>Price:</strong> ₹{product.price}
                </p>
                <p className="mb-2">
                  <strong>Quantity:</strong> {product.availableQty}
                </p>
                <p className="mb-2">
                  <strong>Color:</strong> {product.color}
                </p>
                <p className="mb-2">
                  <strong>Size:</strong> {product.size}
                </p>
                <p className="mb-2">
                  <strong>Category:</strong> {product.category}
                </p>
                <p className="mb-4">
                  <strong>Reviews:</strong> {product.review}
                </p>
              </div>
              <div className="flex space-x-4">
                <button onClick={() => handleOnDelete(product._id)}
                  className="bg-red-700 text-white px-4 py-2 rounded transition duration-300 hover:bg-red-600 focus:outline-none focus:border-red-800 focus:ring focus:ring-red-400"
                >
                  Delete
                </button>
                <button onClick={() => handleOnUpdate(product)}
                  className="bg-green-700 text-white px-4 py-2 rounded transition duration-300 hover:bg-green-600 focus:outline-none focus:border-green-800 focus:ring focus:ring-green-400"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <UpdateItem selected={selected} setSelected={setSelected} closeModal={closeModal} />
      </Modal>
    </div>
  )
}