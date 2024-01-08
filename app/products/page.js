import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from '@/confiq/apiurl';
const getProducts = async () => {
  let products = {}
  try {
    const res = await fetch(`${BASE_URL}/products/getproducts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const response = await res.json();
    if (response.success) {
      products = response.products;
    }
  } catch (error) {
    console.log("Server Error!");
  }
  return products;
}
const getCategories = async () => {
  let categories = {}
  try {
    const res = await fetch(`${BASE_URL}/products/getcategory`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const response = await res.json();
    if (response.success) {
      categories = response.categories;
    }
  } catch (error) {
    console.log("Server Error!");
  }
  return categories;
}
export default async function Shop() {
  const products = await getProducts();
  const categories = await getCategories();
  return (
    <div className="text-gray-600 body-font">
      {categories.map(item => (
        <div key={item.category} className="container text-center py-16 px-5 mx-auto">
          <h2 className="text-2xl mb-5 text-pink-500 font-semibold">Top {item.category}s</h2>
          <hr className="h-[2px] mb-4 bg-pink-300" />
          <div className="flex flex-wrap justify-center">
            {Object.keys(products).map((title, index) => (
              products[title]["category"] === item.category && <div
                key={index}
                className="lg:w-1/4 md:w-1/2 w-full p-4"
              >
                <Link href={`/products/product/${products[title].slug}`}>
                  <div className="relative h-60 overflow-hidden rounded-md shadow-md transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none focus:shadow-outline">
                    <Image
                      alt={title}
                      className="object-cover w-full h-full rounded"
                      src={products[title].img}
                      width={420}
                      height={260}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest mb-1">
                      {item.category}
                    </h3>
                    <h2 className="text-gray-900 text-lg font-medium">
                      {title}
                    </h2>
                    <p className="mt-1">₹{products[title].price}</p>
                    <div className='my-2'>
                      {products[title]["color"].map(color =>
                        <button key={color} className={`border-2 border-gray-300 mr-1 ${color !== "black" ? `bg-${color}-600` : "bg-black"} rounded-full w-6 h-6 focus:outline-none`}></button>
                      )}
                    </div>
                    <div className='text-gray-500 text-xs tracking-widest title-font my-2'>
                      {products[title]["size"].map(size =>
                        <span key={size} className="mr-1 p-1 border border-gray-400">{size}</span>
                      )}
                    </div>
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

