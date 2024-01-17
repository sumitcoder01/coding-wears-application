"use client";
import { BASE_URL } from "@/confiq/apiurl";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function UpdateItem({ selected, setSelected, closeModal }) {
    const router =useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${BASE_URL}/products/updateproduct/${selected._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('auth-token'),
                },
                body: JSON.stringify(selected)
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
        closeModal();
        router.push('/admin/dashboard/allitems')
    }
    const handleChange = (e) => setSelected({ ...selected, [e.target.name]: e.target.value });
    return (
        <div className="container mb-2 mx-auto">
            <h1 className="text-2xl text-center font-bold mb-1">Update Item</h1>
            {selected && <form onSubmit={handleSubmit} className="w-3/4 mx-auto">
                <div className="mb-2">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-1">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={selected.title}
                        onChange={handleChange}
                        className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-1">
                        Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        value={selected.description}
                        onChange={handleChange}
                        className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
                        required
                    ></textarea>
                </div>
                <div className="mb-2">
                    <label htmlFor="slug" className="block text-gray-700 text-sm font-bold mb-1">
                        Slug
                    </label>
                    <input
                        type="text"
                        name="slug"
                        id="slug"
                        value={selected.slug}
                        onChange={handleChange}
                        className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="img" className="block text-gray-700 text-sm font-bold mb-1">
                        Image URL
                    </label>
                    <input
                        type="url"
                        name="img"
                        id="img"
                        value={selected.img}
                        onChange={handleChange}
                        className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
                        required
                    />
                </div>
                <div className='flex justify-center flex-wrap space-x-8 my-2'>
                    <div className="mb-2">
                        <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-1">
                            Category
                        </label>
                        <input
                            type="text"
                            name="category"
                            id="category"
                            value={selected.category}
                            onChange={handleChange}
                            className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="review" className="block text-gray-700 text-sm font-bold mb-1">
                            Review
                        </label>
                        <input
                            id="review"
                            type="number"
                            name="review"
                            value={selected.review}
                            onChange={handleChange}
                            className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
                            required
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-1">
                            Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            value={selected.price}
                            onChange={handleChange}
                            className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="availableQty" className="block text-gray-700 text-sm font-bold mb-1">
                            Quantity
                        </label>
                        <input
                            type="number"
                            name="availableQty"
                            id="availableQty"
                            value={selected.availableQty}
                            onChange={handleChange}
                            className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="color" className="block text-gray-700 text-sm font-bold mb-1">
                            Color
                        </label>
                        <input
                            type="text"
                            name="color"
                            id="color"
                            value={selected.color}
                            onChange={handleChange}
                            className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="color" className="block text-gray-700 text-sm font-bold mb-1">
                            Size
                        </label>
                        <input
                            type="text"
                            name="size"
                            id="size"
                            value={selected.size}
                            onChange={handleChange}
                            className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
                            required
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-pink-500 text-white px-4 mb-2 py-2 rounded hover:bg-pink-700"
                    >
                        Update Item
                    </button>
                </div>
            </form>}
        </div>
    )
}
