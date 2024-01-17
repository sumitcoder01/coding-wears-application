"use client";
import { BASE_URL } from "@/confiq/apiurl";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function UpdateOrder({ selected, setSelected, closeModal }) {
  const router =useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/orders/updateorder`, {
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
    router.push('/admin/dashboard/allorders')
  }
  return (
    <div className="container first-line:p-8 my-10 mx-auto">
      <h1 className="text-2xl text-center font-bold mb-4">Update Order</h1>
      {selected && <form onSubmit={handleSubmit} className="w-2/3 mx-auto">
        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">
            Status
          </label>
          <input
            type="text"
            name="status"
            id="status"
            value={selected.status}
            onChange={(e) => setSelected({ ...selected, status: e.target.value })}
            className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700"
          >
            Update Category
          </button>
        </div>
      </form>}
    </div>
  )
}
