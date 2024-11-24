import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import moment from "moment";
import { FaBell, FaPowerOff, FaQuestionCircle } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";
import { useGetAdminMessageQuery } from "../../../store/dashboard/service/adminMessage/adminMessageApi";
import { removeUser } from "../../../store/main/features/user/userSlice";
import MessageList from "../Pages/AdminMessage/MessageList";
import { useGetUser } from "../../../hooks/useGetUser";
import { useGetQnAQuery } from "../../../store/dashboard/service/question/questionApi";
import {
  handleIsClicked,
  handleQnASize,
} from "../../../store/dashboard/features/QnA/qnaSlice";
import { useQnAIndex } from "../../../hooks/useQnAIndex";

const RightSide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const { user } = useGetUser();
  const dispatch = useDispatch();

  const { data: QuestionData, isLoading: QuestionLoading } = useGetQnAQuery(
    user?._id
  );
  const { data: MessageData, isLoading: MessageLoading } =
    useGetAdminMessageQuery();

  const todayMessages = MessageData?.filter(
    (message) => message?.date === moment().format("L")
  );

  const answered = QuestionData?.filter(
    (question) => question?.answer?.answer
  );

  const { isClicked, showSize } = useQnAIndex();

  useEffect(() => {
    dispatch(handleQnASize(answered?.length));
  }, [dispatch, answered]);

  return (
    <div className="relative h-full">
      <div className="w-12 h-full bg-white pt-6 border">
        <div className="flex flex-col gap-5 items-center justify-center">
          <div
            className="relative cursor-pointer"
            onClick={() => setIsModalOpen((prev) => !prev)}
          >
            <div>
              <FaBell className="text-lg" />
            </div>
            {!MessageLoading && (
              <>
                {todayMessages?.length ? (
                  <div className="absolute -top-4 w-5 h-5 bg-danger flex flex-col items-center justify-center rounded-full text-white">
                    <span>{todayMessages?.length}</span>
                  </div>
                ) : null}
              </>
            )}
          </div>
          <Link title="working..">
            <FaQuestionCircle className="text-lg" />
          </Link>
          <div
            onClick={() => {
              dispatch(handleIsClicked()), navigate("/dashboard/qna");
            }}
            className="relative cursor-pointer"
          >
            <div>
              <MdQuestionAnswer className="text-lg" />
            </div>
            {!QuestionLoading && (
              <>
                {!isClicked && showSize? (
                  <div className="absolute -top-4 w-5 h-5 bg-danger flex flex-col items-center justify-center rounded-full text-white">
                    <span>{showSize}</span>
                  </div>
                ) : showSize ? (
                  <div className="absolute -top-4 w-5 h-5 bg-danger flex flex-col items-center justify-center rounded-full text-white">
                    <span>{showSize}</span>
                  </div>
                ) : null}
              </>
            )}
          </div>
          <div onClick={() => dispatch(removeUser())}>
            <FaPowerOff className="text-lg" />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <MessageList
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          messages={MessageData}
        />
      )}
    </div>
  );
};

export default RightSide;
