import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const MessageList = ({ messages = [], setIsModalOpen, isModalOpen }) => {
  const modalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setIsModalOpen, isModalOpen]);

  return (
    <div className="z-50 absolute right-0 top-10" ref={modalRef}>
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-lg p-4 bg-white rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Messages</h2>
          <div className="space-y-4 max-h-[400px] overflow-y-auto custom-bar">
            {messages?.map((message) => (
              <div
                onClick={() =>
                  navigate(`/dashboard/message`, {
                    state: {
                      payload: { ...message },
                    },
                  })
                }
                key={message?._id}
                className="p-4 border cursor-pointer border-gray-200 rounded-lg flex items-start space-x-3"
              >
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-500"
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
                  <p className="text-sm font-semibold text-gray-800">
                    {message.title}
                  </p>
                  <p className="text-sm text-gray-500">{message.message}</p>
                  <p className="text-xs text-gray-400">{message.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array,
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
};

export default MessageList;
