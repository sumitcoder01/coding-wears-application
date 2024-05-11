"use client";
import { BASE_URL } from "@/confiq/apiurl";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { HypnosisLoader } from "./loaders/HypnosisLoader";
import { useState } from "react";

export default function UpdateUser({ user, setUser, closeModal }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/users/updateuser`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('auth-token'),
                },
                body: JSON.stringify(user)
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
        setLoading(false);
        closeModal();
        router.push('/myaccount');
    }
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    return (
        <div className="container mb-2 mx-auto">
            <h1 className="text-2xl text-center font-bold mb-1">Update User</h1>
            {user && <form onSubmit={handleSubmit} className="w-3/4 mx-auto">
                <div className="mb-2">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={user.name}
                        onChange={handleChange}
                        className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={user.email}
                        onChange={handleChange}
                        className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
                        required
                    ></input>
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-pink-500 text-white px-4 mb-2 py-2 rounded hover:bg-pink-700"
                    >
                        {loading ? <HypnosisLoader /> : "Update user"}
                    </button>
                </div>
            </form>}
        </div>
    )
}
