import FeedbackForm from "../../../components/Dashboard/Pages/Feedback/FeedbackForm";

const Feedback = () => {
  return (
    <div>
      <div className="h-44 w-full bg-primary flex flex-col justify-center items-center"></div>
      <div className="p-5 flex flex-col gap-5 -mt-36">
        <div>
          <span className="font-bold text-xl text-white">Feedback</span>
        </div>
        <div className="shadow-md border rounded-md overflow-hidden">
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
