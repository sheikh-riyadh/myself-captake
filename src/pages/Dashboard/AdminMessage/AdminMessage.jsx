import { useLocation } from "react-router-dom";

const AdminMessage = () => {
  const location = useLocation();
  const data = location.state.payload;
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-4 bg-white rounded-lg shadow-lg flex items-center space-x-4">
        <div className="flex-shrink-0">
          <svg
            className="h-8 w-8 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m2 0h-1m1-4h-.01M12 6h.01M17 16v1m-10 0v-1m5-7v2m-6 4h12"
            />
          </svg>
        </div>
        <div>
          <p className="text-lg font-medium text-gray-800">{data?.title}</p>
          <p className="text-sm text-gray-500">{data?.message}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminMessage;
