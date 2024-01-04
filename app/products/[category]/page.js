import Image from "next/image";
import Link from "next/link";

export default function Products({ params }) {
  const category = params.category;
  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 text-center py-20 mx-auto">
      <span className='text-xl mb-5 text-pink-500'>Top {category}s </span>
        <div className="flex flex-wrap justify-center mt-3">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div key={index} className="lg:w-1/4 border border-1 rounded-md mx-4 mb-5 md:w-1/2 py-1 px-4 w-full">
              <Link href={`/products/product/${index}`}>
              <span className="block relative h-60 rounded overflow-hidden transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none focus:shadow-outline">
                <Image
                  alt={`Product ${index}`}
                  className="object-top w-full h-full block rounded"
                  src={`https://m.media-amazon.com/images/I/7122cQdvZ-L._SX679_.jpg`}
                  width={420}
                  height={260}
                />
              </span>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Black hooddie-{index}</h2>
                <p className="mt-1">₹499.00</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
