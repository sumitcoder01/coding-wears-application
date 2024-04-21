import React from 'react';

const OrderSkeleton = () => {
    return (
        <div className="text-gray-600">
            <div className="container px-5 py-24 mx-auto">
                <div className="animate-pulse">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest bg-gray-300 h-6 w-1/2 mb-4"></h2>
                            <h1 className="text-gray-900 text-xl title-font font-medium mb-4 bg-gray-300 h-6 w-1/3"></h1>
                            <h4 className="text-sm mb-4 text-gray-500 bg-gray-300 h-4 w-2/3"></h4>
                            <div className="flex mb-4">
                                <span className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 bg-gray-300 h-6 w-1/3"></span>
                                <span className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 bg-gray-300 h-6 w-1/3"></span>
                                <span className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 bg-gray-300 h-6 w-1/3"></span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500 text-sm bg-gray-300 h-4 w-1/2"></span>
                                <span className="ml-auto text-gray-900 bg-gray-300 h-4 w-1/4"></span>
                                <span className="ml-auto text-gray-900 bg-gray-300 h-4 w-1/4"></span>
                            </div>
                            <div className="flex flex-col space-y-5 mt-9">
                                <h1 className="text-gray-700 text-2xl title-font font-medium bg-gray-300 h-8 w-1/3"></h1>
                                <div>
                                    <button className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded  h-12 w-1/3"></button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full  lg:h-auto h-64 object-cover object-center rounded bg-gray-300"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSkeleton;
