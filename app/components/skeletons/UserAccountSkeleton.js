const UserAccountSkeleton = () => {
    return (
      <div className="container mx-auto mt-8">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="animate-pulse rounded-full w-20 h-20 bg-gray-300"></div>
          </div>
          <div>
            <div className="mb-4">
              <div className="animate-pulse h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
            <div className="mb-4">
              <div className="animate-pulse h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
            <div className="mb-4">
              <div className="animate-pulse h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
            <div className="mb-4">
              <div className="animate-pulse h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
            <div className="mb-4">
              <div className="animate-pulse h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
            <div className="mb-4">
              <div className="animate-pulse h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserAccountSkeleton;
  