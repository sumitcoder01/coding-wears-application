import Image from "next/image";
import Link from "next/link";

export default function Shop() {
  return (
    <div className="text-gray-600 body-font">
      {["TShirt", "Hoodie", "Mug", "Sticker"].map((category) => (
        <div key={category} className="container text-center py-16 px-5 mx-auto">
          <h2 className="text-2xl mb-5 text-pink-500 font-semibold">Top {category}s</h2>
          <hr className="h-[2px] mb-4 bg-pink-300" />
          <div className="flex flex-wrap justify-center">
            {[1, 2, 3, 4, 6, 7, 9, 8, 10].map((_, index) => (
              <div
                key={index}
                className="lg:w-1/4 md:w-1/2 w-full p-4"
              >
                <Link href={`/products/product/${index}`}>
                <div className="relative h-60 overflow-hidden rounded-md shadow-md transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none focus:shadow-outline">
                  <Image
                    alt={`Product ${index}`}
                    className="object-cover w-full h-full rounded"
                    src={`https://m.media-amazon.com/images/I/7122cQdvZ-L._SX679_.jpg`}
                    width={420}
                    height={260}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest mb-1">
                    Product Category
                  </h3>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Black hoodie-{index}
                  </h2>
                  <p className="mt-1">₹499.00</p>
                  <span className='text-gray-500 text-xs tracking-widest title-font mb-1'>S, M, L, XL, XXL</span>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
