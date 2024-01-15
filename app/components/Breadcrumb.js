"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ links }) {
    const pathname = usePathname();
    return (
        <nav className="text-gray-600 font-medium mb-4 mt-1">
            <ol className="list-none p-0 inline-flex">
                {links.map((link, index) => (
                    <li key={index} className="flex items-center">
                        {index > 0 && (
                            <span className="mx-2  text-gray-400">&#9658;</span>
                        )}
                        <Link href={link.href} className={`${pathname === link.href ? "text-gray-900" : ""}`}>
                            <span className="hover:text-gray-900">{link.text}</span>
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    )
}
