import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUser } from "../../../hooks/useGetUser";
import { useGetQnAQuery } from "../../../store/dashboard/service/question/questionApi";
import {
  FaCheckCircle,
  FaClipboard,
  FaFutbol,
  FaMousePointer,
} from "react-icons/fa";
import toast from "react-hot-toast";
import moment from "moment";

const QnA = () => {
  const [currentQuestion, setCurrentQuestion] = useState();
  const { user } = useGetUser();

  const { data, isLoading } = useGetQnAQuery(user?._id);
  const navigate = useNavigate();

  const handleRedirect = (product) => {
    if (product) {
      navigate(
        `/product/${currentQuestion?.question?.productInfo?.title
          ?.toLowerCase()
          ?.split(` `)
          ?.join("-")}`,
        {
          state: {
            payload: { ...currentQuestion?.question?.productInfo?.fullInfo },
          },
        }
      );
    } else {
      toast.error("Data missing!. Please try again!", { id: "product_error" });
    }
  };

  useEffect(() => {
    setCurrentQuestion(data?.[0]);
  }, [data]);

  return (
    <div>
      {!isLoading ? (
        <div>
          {data?.length ? (
            <div className="grid md:grid-cols-12 gap-5 m-5 h-screen">
              <div className="md:col-span-4 md:h-[calc(100%-100px)] overflow-y-auto custom-bar w-full border flex flex-col rounded-md bg-white">
                {data?.map((question) => (
                  <div
                    key={question?._id}
                    onClick={() => {
                      setCurrentQuestion(question);
                    }}
                    className={`px-5 py-5 cursor-pointer ${
                      currentQuestion?._id === question?._id
                        ? "bg-blue-50"
                        : null
                    }`}
                  >
                    <div className="flex gap-5">
                      <div className="w-12 h-12 rounded-full border">
                        <img
                          className="w-full h-full rounded-full"
                          src={question?.answer?.logo}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span
                          title={question?.question?.userInfo?.userName}
                          className="text-sm"
                        >
                          {question?.question?.userInfo?.userName?.length > 20
                            ? `${question?.question?.userInfo?.userName?.slice(
                                0,
                                20
                              )}...`
                            : question?.question?.userInfo?.userName}
                        </span>
                        {!question?.answer?.answer ? (
                          <span
                            title={question?.question?.userQuestion}
                            className="text-sm"
                          >
                            {question?.question?.userQuestion.length > 20
                              ? `${question?.question?.userQuestion.slice(
                                  0,
                                  20
                                )}...`
                              : question?.question?.userQuestion}
                          </span>
                        ) : (
                          <span
                            title={question?.answer?.answer}
                            className="text-sm"
                          >
                            {question?.answer?.answer?.length > 20
                              ? `${question?.answer?.answer?.slice(0, 20)}...`
                              : question?.answer?.answer}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-3">
                        <span className="text-xs">
                          {moment(question?.createdAt).format("LT")}
                        </span>
                        {Object?.keys(question?.answer).length ? (
                          <div className="flex flex-col items-center justify-center">
                            <FaCheckCircle className="text-green-600" />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="md:col-span-8 md:h-[calc(100%-100px)] custom-bar overflow-y-auto w-full border rounded-md relative bg-white">
                <div>
                  <div className="border-b flex gap-5 p-2">
                    <img
                      className="w-16 h-16"
                      src={currentQuestion?.question?.productInfo?.productImage}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <span
                        className="hover:underline cursor-pointer hover:text-primary"
                        onClick={handleRedirect}
                      >
                        {currentQuestion?.question?.productInfo?.title}
                      </span>
                      <span className="text-sm">
                        {moment(currentQuestion?.createdAt).format(
                          "D MMMM YYYY"
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex flex-col gap-10">
                  {currentQuestion?.answer?.answer ? (
                    <div className="p-5 flex flex-col gap-10">
                      <div className="flex flex-col justify-end items-end gap-3">
                        <div className="bg-stech p-3 rounded-md relative w-3/6">
                          <span className="text-white ">
                            {currentQuestion?.question?.userQuestion}
                          </span>
                          <FaMousePointer className="absolute -bottom-3 right-0 text-xl -rotate-180 text-stech" />
                        </div>
                        <div className="w-8 h-8">
                          <img
                            className="w-full h-full rounded-full"
                            src={user?.photo}
                            alt="user"
                          />
                        </div>
                      </div>
                      <div className=" flex flex-col gap-3">
                        <div className="w-8 h-8 border rounded-full">
                          <img
                            className="w-full h-full rounded-full"
                            src={currentQuestion?.answer.logo}
                            alt=""
                          />
                        </div>
                        <div className="bg-blue-100 p-3 rounded-md relative w-3/6">
                          <span>{currentQuestion?.answer?.answer}</span>
                          <FaMousePointer className="absolute -top-3 text-xl -rotate-12 text-blue-100" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col justify-end items-end gap-3">
                      <div className="bg-stech p-3 rounded-md relative w-3/6">
                        <span className="text-white ">
                          {currentQuestion?.question?.userQuestion}
                        </span>
                        <FaMousePointer className="absolute -bottom-3 right-0 text-xl -rotate-180 text-stech" />
                      </div>
                      <div className="w-8 h-8">
                        <img
                          className="w-full h-full rounded-full"
                          src={user?.photo}
                          alt="user"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex gap-5 flex-col items-center justify-center w-full h-80 bg-white">
              <FaClipboard className="text-8xl text-slate" />
              <span className="font-medium text-xl text-danger capitalize">
                No data found
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-80">
          <FaFutbol className="text-6xl animate-spin" />
        </div>
      )}
    </div>
  );
};

export default QnA;
