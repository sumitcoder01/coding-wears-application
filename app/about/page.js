export default function About() {
    return (
      <div className='min-h-[527px] py-10 text-center'>
        <div className="max-w-full py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-md p-8 rounded-md shadow-md">
                <div className="px-4 pl-4 mb-6 border-l-4 border-pink-500">
                  <span className="text-sm text-gray-600 uppercase dark:text-gray-400">What We Offer</span>
                  <h1 className="mt-2 text-xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                    About Us
                  </h1>
                </div>
                <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                  Coding Wears is more than just a brand; its a statement. We offer a curated collection of coding-inspired wearables, including t-shirts, hoodies, and accessories. Our mission is to empower coders to express their passion for programming through stylish and comfortable apparel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  