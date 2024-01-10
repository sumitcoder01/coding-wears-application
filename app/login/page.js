"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/image/coding-wears-logo.png";
import { FaUserLock } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/confiq/apiurl";
import { toast } from "react-toastify";
export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  useEffect(() => {
    if (localStorage.getItem('auth-token')) {
      router.push("/");
    }
  }, [router])
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const res = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
      });
      const response = await res.json();
      if (response.success) {
        localStorage.setItem('auth-token', response.authToken);
        toast.success(response.message);
        router.push('/');
      }
      else {
        toast.error(response.error);
      }
    } catch (error) {
      toast.error("Server Error!");
    }
    setFormData({
      email: '',
      password: '',
    })
  }
  const handleOnChange =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image className="mx-auto h-10 w-auto" src={Logo} alt="coding wears" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleOnSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="enter your email"
                minLength={5}
                value={formData.email}
                onChange={handleOnChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <Link href="/forgot">
                  <span className="font-semibold text-pink-600 hover:text-pink-500">
                    Forgot password?
                  </span>
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="enter your password"
                minLength={8}
                value={formData.password}
                onChange={handleOnChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
            >
              <FaUserLock className="mr-2" /> Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not registered yet?{" "}
          <Link href="/signup">
            <span className="font-semibold leading-6 text-pink-600 hover:text-pink-500">
              Create an Account
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
