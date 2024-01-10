import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from "@/confiq/apiurl";
const getProducts = async (category) => {
  let products = {};
  try {
    const res = await fetch(`${BASE_URL}/products/getproducts/${category}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();
    if (response.success) {
      products = response.products;
    }
  } catch (error) {
    console.log("Server Error!");
  }
  return products;
};
export default async function Products({ params }) {
  const category = params.category;
  const products = await getProducts(category);
  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 text-center py-20 mx-auto">
        <span className="text-xl mb-5 text-pink-500">
          {Object.keys(products).length !== 0
            ? `Top ${category}s`
            : `${category} are currently out of stock in shop`}
        </span>
        <div className="flex flex-wrap justify-center mt-3">
          {Object.keys(products).map((title, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 w-full p-4">
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
                    {category}
                  </h3>
                  <h2 className="text-gray-900 text-lg font-medium">{title}</h2>
                  <p className="mt-1">₹{products[title].price}</p>
                  <div className="my-2">
                    {products[title]["color"].sort().map((color) => (
                      <button
                        key={color}
                        className={`border-2 border-gray-300 mr-1 ${
                          color !== "black" ? `bg-${color}-600` : "bg-black"
                        } rounded-full w-6 h-6 focus:outline-none`}
                      ></button>
                    ))}
                  </div>
                  <div className="text-gray-500 text-xs tracking-widest title-font my-2">
                    {products[title]["size"].sort().map((size) => (
                      <span
                        key={size}
                        className="mr-1 p-1 border border-gray-400"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
