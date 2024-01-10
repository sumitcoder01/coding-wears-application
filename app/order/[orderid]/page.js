import Image from "next/image";
import Hero from "../../../public/image/hero.jpg";
export default function Order({ params }) {
  return (
    <div className="text-gray-600">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              CODINGWEAR.COM
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Order Id: #{params.orderid}
            </h1>
            <h4 className="text-sm mb-4 text-gray-500">
              Your order has been successfully placed
            </h4>
            <div className="flex mb-4">
              <span className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                Item Description
              </span>
              <span className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                Quantity
              </span>
              <span className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                Item Total
              </span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Wear the code</span>
              <span className="ml-auto text-gray-900">3</span>
              <span className="ml-auto text-gray-900">₹1000.00</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Wear the code</span>
              <span className="ml-auto text-gray-900">3</span>
              <span className="ml-auto text-gray-900">₹1000.00</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Wear the code</span>
              <span className="ml-auto text-gray-900">3</span>
              <span className="ml-auto text-gray-900">₹1000.00</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Wear the code</span>
              <span className="ml-auto text-gray-900">3</span>
              <span className="ml-auto text-gray-900">₹1000.00</span>
            </div>

            <div className="flex flex-col space-y-5 mt-9">
              <h1 className="text-gray-700 text-2xl title-font font-medium">
                SubTotal: ₹1600.00
              </h1>
              <div>
                <button className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Track Order
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full  lg:h-auto h-64 object-cover object-center rounded">
            <Image src={Hero} alt="coding wears" width={800} height={800} />
          </div>
        </div>
      </div>
    </div>
  );
}
