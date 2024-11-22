import { FaBell, FaPowerOff, FaQuestionCircle } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetAdminMessageQuery } from "../../../store/dashboard/service/adminMessage/adminMessageApi";
import moment from "moment";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../store/main/features/user/userSlice";
import MessageList from "../Pages/AdminMessage/MessageList";
import { useState } from "react";

const RightSide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading } = useGetAdminMessageQuery();
  const todayMessages = data?.filter(
    (message) => message?.date === moment().format("L")
  );
  const dispatch = useDispatch();

  return (
    <div className="relative h-full">
      <div className="w-12 h-full bg-white pt-6 border">
        <div className="flex flex-col gap-5 items-center justify-center">
          <div className="relative cursor-pointer">
            <div onClick={() => setIsModalOpen(true)}>
              <FaBell className="text-lg" />
            </div>
            {!isLoading && (
              <div className="absolute -top-4 w-5 h-5 bg-danger flex flex-col items-center justify-center rounded-full text-white">
                <span>{todayMessages?.length}</span>
              </div>
            )}
          </div>
          <Link title="working..">
            <FaQuestionCircle className="text-lg" />
          </Link>
          <Link title="working..">
            <MdQuestionAnswer className="text-lg" />
          </Link>
          <div onClick={() => dispatch(removeUser())}>
            <FaPowerOff className="text-lg" />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <MessageList
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          messages={data}
        />
      )}
    </div>
  );
};

export default RightSide;
