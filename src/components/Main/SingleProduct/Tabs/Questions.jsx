import { useState } from "react";
import { useGetUser } from "../../../../hooks/useGetUser";
import Button from "../../../Common/Button";
import { useForm } from "react-hook-form";
import TextArea from "../../../Common/TextArea";
import SubmitButton from "../../../Common/SubmitButton";
import Input from "../../../Common/Input";
import PropTypes from "prop-types";
import QuestionCard from "./QuestionCard";
import { useCreateProductQuestionMutation } from "../../../../store/main/service/questions/questionsApi";
import toast from "react-hot-toast";

const Questions = ({ product }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [totalQuestion, setTotalQuestion] = useState(0);
  const { user } = useGetUser();

  const [createQuestion, { isLoading }] = useCreateProductQuestionMutation();

  const { handleSubmit, register, reset } = useForm();
  const handleQuestion = async (data) => {
    const newData = {
      productInfo: {
        productId: product?._id,
        title: product?.title,
        productImage: product?.productImages?.[0],
        sellerId: product?.sellerId,
        fullInfo: product,
      },
      userInfo: {
        userName: user?.fName + "" + user?.lName,
        userId: user?._id,
        userPhoto: user?.photo,
      },
      userQuestion: data.question,
    };

    try {
      const res = await createQuestion(newData);
      if (res?.error) {
        toast.error("Something went wrong 😓", { id: "question_error" });
      } else {
        reset();
        setIsFocus(false);
      }
    } catch (error) {
      toast.error("Something went wrong 😓", { id: error });
    }
  };

  return (
    <>
      <div className="white">
        <div className="bg-gray-100 p-2">
          <p className="font-medium">{`Question about this product (${totalQuestion})`}</p>
        </div>

        {user?._id ? (
          <>
            {!isFocus ? (
              <div className="grid grid-cols-1 md:grid-cols-12 py-5">
                <div className="w-full md:col-span-9 xl:col-span-10">
                  <Input
                    className="bg-white rounded-none border"
                    onFocus={() => setIsFocus(true)}
                  />
                </div>
                <div className="md:col-span-3 xl:col-span-2">
                  <Button
                    onClick={() => setIsFocus(true)}
                    className="rounded-none w-full uppercase py-2.5 bg-stech"
                  >
                    Ask question
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(handleQuestion)}>
                <div className="py-5">
                  <div className="border bg-white p-5">
                    <TextArea
                      placeholder="Ask a question to seller"
                      {...register("question")}
                      type="text"
                      label="Question"
                      required
                      className="h-24"
                      autoFocus
                    />
                    <div className="grid grid-cols-1 md:grid-cols-12 border-t pt-5 gap-10">
                      <div className="md:col-span-8 xl:col-span-9">
                        <p>
                          Your question should not contain contact information
                          such as email, phone or external web links
                        </p>
                      </div>
                      <div className="md:col-span-4 xl:col-span-3">
                        <SubmitButton
                          isLoading={isLoading}
                          className={" rounded-none w-full uppercase"}
                        >
                          Submit
                        </SubmitButton>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </>
        ) : (
          <div className="flex items-center gap-2 p-5">
            <div className="text-primary underline cursor-pointer">Sign-in</div>
            <span>or</span>
            <div className="text-primary underline cursor-pointer">
              Register
            </div>
            <span>to ask questions to seller</span>
          </div>
        )}

        <QuestionCard
          productId={product?._id}
          setTotalQuestion={setTotalQuestion}
        />
      </div>
    </>
  );
};

Questions.propTypes = {
  product: PropTypes.object,
};

export default Questions;
