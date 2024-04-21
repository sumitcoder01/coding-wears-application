import React from 'react';

const OrdersSkeleton = () => {
  return (
    <div className="container mx-auto my-3">
      <h1 className="text-3xl text-center font-bold animate-pulse">My Orders</h1>
      <div className="text-center my-10 overflow-x-auto shadow-lg">
        <h2 className="text-xl font-semibold my-3 animate-pulse">Loading...</h2>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center animate-pulse">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 text-center animate-pulse">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-center animate-pulse">
                Varient
              </th>
              <th scope="col" className="px-6 py-3 text-center animate-pulse">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white animate-pulse">Loading...</td>
                <td className="px-6 py-4 text-center animate-pulse">Loading...</td>
                <td className="px-6 py-4 text-center animate-pulse">Loading...</td>
                <td className="px-6 py-4 text-center animate-pulse">Loading...</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="text-xl font-bold my-3 animate-pulse">Total Price: Loading...</h2>
        <hr className="border-t border-gray-700 mt-3 h-1 w-full animate-pulse" />
      </div>
    </div>
  );
};

export default OrdersSkeleton;
