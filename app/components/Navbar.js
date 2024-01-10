"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/image/coding-wears-logo.png";
import CartSideBar from "./CartSideBar";
import { CgProfile } from "react-icons/cg";
import { usePathname } from 'next/navigation'
export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="text-gray-600  body-font mb-2 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <span className="flex items-center mb-4 md:mb-0">
            <Image src={Logo} alt="Coding Wears" height={40} width={70} />
          </span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className={`link ${pathname === '/' ? 'text-gray-900' : ''}`} href="/">
            <span className="mr-4 font-bold text-sm hover:text-gray-900">
              Home
            </span>
          </Link>
          <Link className={`link ${pathname === '/products/TShirt' ? 'text-gray-900' : ''}`} href="/products/TShirt">
            <span className="mr-4 font-bold text-sm hover:text-gray-900">
              TShirts
            </span>
          </Link>
          <Link className={`link ${pathname === '/products/Hoodie' ? 'text-gray-900' : ''}`} href="/products/Hoodie">
            <span className="mr-4 font-bold text-sm hover:text-gray-900">
              Hoodies
            </span>
          </Link>
          <Link className={`link ${pathname === '/products/Mug' ? 'text-gray-900' : ''}`} href="/products/Mug">
            <span className="mr-4 font-bold text-sm hover:text-gray-900">
              Mugs
            </span>
          </Link>
          <Link className={`link ${pathname === '/products/Sticker' ? 'text-gray-900' : ''}`} href="/products/Sticker">
            <span className="mr-4 font-bold text-sm hover:text-gray-900">
              Stickers
            </span>
          </Link>
        </nav>
        {typeof window !== "undefined" && window.localStorage && localStorage.getItem('auth-token') ?
          <span className="inline-flex items-center py-1 px-3  hover:bg-gray-200 rounded  text-xl md:text-2xl mt-4 md:mt-0">
            <CgProfile className='text-pink-500' />
          </span> :
          <Link href='/login' >
            <button className="inline-flex text-white bg-pink-500 border-0 py-1 px-4 focus:outline-none hover:bg-pink-600 rounded mt-4 md:mt-0">Login</button>
          </Link>
        }
        <CartSideBar />
      </div>
    </div>
  );
}
