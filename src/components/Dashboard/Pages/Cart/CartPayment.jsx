import { useGetCart } from "../../../../hooks/useGetCart";
import { numberWithCommas } from "../../../../utils/numberWithComma";
import Button from "../../../Common/Button";

const CartPayment = () => {
  const { userCart } = useGetCart();

  const total = userCart.reduce((total, item) => {
    return (total += item?.buyQnt * item?.price);
  }, 0);

  
  const totalItem = userCart.reduce((total, item) => {
    return (total += item?.buyQnt);
  }, 0);



  const orderSummery = [
    {
      title: `Subtotal (${totalItem} items)`,
      value: numberWithCommas(Math.round(total)),
    },
    { title: "Shipping Fee", value: "" },
    { title: "Shipping Discount", value: "" },
  ];

  console.log(total);

  return (
    <div className="shadow-md border bg-white px-4 py-5 rounded-md sticky top-20">
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
      <div className="flex items-center justify-between text-sm pt-3">
        <span>Total</span>
        <span>৳ {numberWithCommas(Math.round(total))}</span>
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
