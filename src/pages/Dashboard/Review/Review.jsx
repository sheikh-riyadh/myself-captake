import OrderTable from "../../../components/Dashboard/Pages/Order/OrderTable";


const Review = () => {
  return (
    <div>
      <div className="h-44 w-full bg-primary flex flex-col justify-center items-center"></div>
      <div className="p-5 flex flex-col gap-5 -mt-36">
        <div>
          <span className="font-bold text-xl text-white">Review</span>
        </div>
        <div className="shadow-md border rounded-md overflow-hidden">
          <OrderTable/>
        </div>
      </div>
    </div>
  );
};

export default Review;
