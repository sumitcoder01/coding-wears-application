"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/image/coding-wears-logo.png";
import CartSideBar from "./CartSideBar";
import { CgProfile } from "react-icons/cg";
import { usePathname, useRouter } from 'next/navigation';
import { toast } from "react-toastify";
import { useState } from "react";
export default function Navbar() {
  const pathname = usePathname();
  const [dropDown, setDropDown] = useState(false);
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    setDropDown(false);
    toast.success('Logout Successfully!');
    router.push('/');
  }
  return (
    <div className="text-gray-600  body-font mb-2 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <div className="flex items-center mb-4 md:mb-0">
            <Image src={Logo} alt="Coding Wears" height={40} width={70} />
          </div>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className={`link ${pathname === '/' ? 'text-gray-900' : ''}`} href="/">
            <div className="mr-4 font-bold text-sm hover:text-gray-900">
              Home
            </div>
          </Link>
          <Link className={`link ${pathname === '/products/TShirt' ? 'text-gray-900' : ''}`} href="/products/TShirt">
            <div className="mr-4 font-bold text-sm hover:text-gray-900">
              TShirts
            </div>
          </Link>
          <Link className={`link ${pathname === '/products/Hoodie' ? 'text-gray-900' : ''}`} href="/products/Hoodie">
            <div className="mr-4 font-bold text-sm hover:text-gray-900">
              Hoodies
            </div>
          </Link>
          <Link className={`link ${pathname === '/products/Mug' ? 'text-gray-900' : ''}`} href="/products/Mug">
            <div className="mr-4 font-bold text-sm hover:text-gray-900">
              Mugs
            </div>
          </Link>
          <Link className={`link ${pathname === '/products/Sticker' ? 'text-gray-900' : ''}`} href="/products/Sticker">
            <div className="mr-4 font-bold text-sm hover:text-gray-900">
              Stickers
            </div>
          </Link>
        </nav>
        {typeof window !== "undefined" && window.localStorage && localStorage.getItem('auth-token') ?
          <span onClick={() => setDropDown(!dropDown)} className="inline-flex items-center py-1 px-3  hover:bg-gray-200 rounded  text-xl md:text-2xl mt-4 md:mt-0">
            <CgProfile className='text-pink-500' />
          </span> :
          <Link href='/login' >
            <button className="inline-flex text-white bg-pink-500 border-0 py-1 px-4 focus:outline-none hover:bg-pink-600 rounded mt-4 md:mt-0">Login</button>
          </Link>
        }
        {dropDown && <div className="absolute flex flex-col items-center spacey-3 z-10 top-14 right-28 bg-gray-50 shadow-lg p-4">
          <Link onClick={() => setDropDown(false)} href="/myaccount" className='py-1 hover:text-pink-800 text-sm transition duration-300 ease-in-out'>My Account</Link>
          <hr className='border-t border-gray-200 mt-1 w-full' />
          <Link onClick={() => setDropDown(false)} href="/orders" className='py-1 hover:text-pink-800 text-sm transition duration-300 ease-in-out'>Orders</Link>
          <hr className='border-t border-gray-200 mt-1 w-full' />
          <span className='py-1 hover:text-pink-800 text-sm transition duration-300 ease-in-out' onClick={handleLogout}>Logout</span>
        </div>}
        <CartSideBar />
      </div>
    </div>
  );
}
