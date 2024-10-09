

const FormSkeleton = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md animate-pulse">
          <h1 className="text-lg font-semibold bg-gray-300 rounded w-1/2 h-6"></h1>
    
          <form className="mt-6 flex flex-col gap-6">
            
            {/* Authentication Information */}
            <div className="flex flex-col gap-4">
              <h3 className="text-md font-semibold bg-gray-300 rounded w-1/3 h-2"></h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="bg-gray-300 h-2 rounded w-1/3"></div>
                  <div className="bg-gray-300 h-8 rounded"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="bg-gray-300 h-2 rounded w-1/3"></div>
                  <div className="bg-gray-300 h-8 rounded"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="bg-gray-300 h-2 rounded w-1/3"></div>
                  <div className="bg-gray-300 h-8 rounded"></div>
                </div>
              </div>
            </div>
            
            {/* Personal Information */}
            <div className="flex flex-col gap-4">
              <h3 className="text-md font-semibold bg-gray-300 rounded w-1/3 h-2"></h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="bg-gray-300 h-2 rounded w-1/3"></div>
                  <div className="bg-gray-300 h-8 rounded"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="bg-gray-300 h-2 rounded w-1/3"></div>
                  <div className="bg-gray-300 h-8 rounded"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="bg-gray-300 h-2 rounded w-1/3"></div>
                  <div className="bg-gray-300 h-8 rounded"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="bg-gray-300 h-2 rounded w-1/3"></div>
                  <div className="bg-gray-300 h-8 rounded"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="bg-gray-300 h-2 rounded w-1/3"></div>
                  <div className="bg-gray-300 h-8 rounded"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="bg-gray-300 h-2 rounded w-1/3"></div>
                  <div className="bg-gray-300 h-8 rounded"></div>
                </div>
              </div>
            </div>
            
            {/* Additional Information */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="bg-gray-300 h-2 rounded w-1/3"></div>
                  <div className="bg-gray-300 h-8 rounded"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="bg-gray-300 h-2 rounded w-1/3"></div>
                  <div className="bg-gray-300 h-8 rounded"></div>
                </div>
              </div>
            </div>
    
            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <div className="bg-gray-300 rounded w-20 h-8"></div>
              <div className="bg-gray-300 rounded w-20 h-8"></div>
            </div>
          </form>
        </div>
      );
}

export default FormSkeleton