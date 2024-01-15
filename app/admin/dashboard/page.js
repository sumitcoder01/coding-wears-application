"use client"
import Card from "@/app/components/Card";
import { BASE_URL } from "@/confiq/apiurl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
export default function Dashboard() {
  const [userName, setUserName] = useState('admin');
  const router = useRouter();
  const getUser = async () => {
    try {
      const res = await fetch(`${BASE_URL}/users/getuser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token'),
        },
      });
      const response = await res.json();
      if (response.success) {
        let { name, userType } = response.user;
        setUserName(name);
        if (userType !== "admin") {
          toast.error(response.error);
          router.push("/");
        }
        else {
          toast.success(`welcome ${name}`);
        }
      }
      else {
        toast.error(response.error);
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
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])
  return (
    <div>
      <div className="container min-h-screen my-10 mx-auto">
        <h2 className='text-xl mb-10 mt-5 font-bold text-center'>{`Welcome ${userName}`}</h2>
        <div className="flex flex-wrap mb-10 justify-center">
          <Card
            title="All Orders"
            description="View all orders in the system."
            link="/admin/dashboard/allorders"
          />
        </div>
        <div className="flex flex-wrap  mb-10 justify-center">
          <Card
            title="All Items"
            description="View all items in the system."
            link="/admin/dashboard/allitems"
          />
        </div>
        <div className="flex flex-wrap  mb-10 justify-center">
          <Card
            title="Add Item "
            description="add items in the system."
            link="/admin/dashboard/additem"
          />
        </div>
        <div className="flex flex-wrap  mb-10 justify-center">
          <Card
            title="Add Category "
            description="add  category in the system."
            link="/admin/dashboard/addcategory"
          />
        </div>
        <div className="flex flex-wrap  mb-10 justify-center">
          <Card
            title="All Category"
            description="View all category in the system."
            link="/admin/dashboard/allcategories"
          />
        </div>
      </div>
    </div>
  )
}
