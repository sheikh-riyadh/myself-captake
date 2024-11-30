import OrderTable from "../../../components/Dashboard/Pages/Order/OrderTable";

const Order = () => {
  return (
    <div>
      
      <div className="p-5 flex flex-col gap-5">
        <div>
          <span className="font-bold text-xl text-white">Order</span>
        </div>
        <div className="shadow-md rounded-md overflow-hidden">
          <OrderTable />
        </div>
      </div>
    </div>
  );
};

export default Order;
