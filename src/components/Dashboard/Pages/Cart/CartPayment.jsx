import { numberWithCommas } from "../../../../utils/numberWithComma";
import Button from "../../../Common/Button";
import Input from "../../../Common/Input";

const CartPayment = () => {
  const orderSummery = [
    {
      title: `Subtotal (0 items)`,
      value: 100,
    },
    { title: "Shipping Fee", value: "" },
    { title: "Shipping Discount", value: "" },
  ];

  return (
    <div className="shadow-md border bg-white px-4 py-5 rounded-md">
      <p className="font-bold text-sm">Order Summary</p>
      <div className="flex flex-col gap-2 mt-2">
        {orderSummery.map(({ title, value }) => (
          <div
            className="font-semibold text-sm flex items-center justify-between"
            key={title}
          >
            <span>{title}</span>
            <span>৳ {value}</span>
          </div>
        ))}
      </div>
      <div>
       
        <div className="w-full grid  grid-cols-12 md:grid-cols-1 lg:grid-cols-12 gap-4 items-center mt-4">
          <div className="col-span-9">
            <Input
              placeholder="Enter Voucher Code"
              className={"w-full text-xs"}
              required={false}
            />
          </div>
          <Button className={"uppercase text-xs col-span-3"}>Apply</Button>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm pt-3">
        <span>Total</span>
        <span>৳ {numberWithCommas(1000)}</span>
      </div>

      {/* Place order button */}
      <div className="mt-5">
        <Button
          className={"text-sm w-full hover:text-[15px] duration-500 uppercase"}
        >
          {`proceed to checkout`}
        </Button>
      </div>
    </div>
  );
};

export default CartPayment;
