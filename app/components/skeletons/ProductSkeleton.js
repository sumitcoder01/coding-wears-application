const ProductSkeleton = () => {
    return (
            <div className="container px-5 py-20 mx-auto">
                <div className="animate-pulse lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full l:h-auto h-64 object-top rounded bg-gray-300"></div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest bg-gray-300 h-4 w-32 mb-4 rounded"></h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 bg-gray-300 h-8 w-80 rounded"></h1>
                        <div className="flex mb-4">
                            <div className="flex items-center bg-gray-300 rounded">
                                <div className="w-4 h-4 bg-pink-500 rounded-full mr-1"></div>
                                <div className="w-4 h-4 bg-pink-500 rounded-full mr-1"></div>
                                <div className="w-4 h-4 bg-pink-500 rounded-full mr-1"></div>
                                <div className="w-4 h-4 bg-pink-500 rounded-full mr-1"></div>
                                <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                            </div>
                            <span className="text-gray-600 ml-3 bg-gray-300 h-4 w-20 rounded"></span>
                        </div>
                        <p className="leading-relaxed bg-gray-300 h-24 w-full rounded"></p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                <div className="flex">
                                    <div className="w-6 h-6 bg-gray-300 rounded-full mr-1"></div>
                                    <div className="w-6 h-6 bg-gray-300 rounded-full mr-1"></div>
                                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Size</span>
                                <div className="w-24 h-10 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900 bg-gray-300 h-8 w-20 rounded"></span>
                            <div className="ml-auto">
                                <div className="w-24 h-10 bg-pink-500 rounded-full mr-4 mb-3"></div>
                                <div className="w-24 h-10 bg-pink-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default ProductSkeleton;
