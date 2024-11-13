import { useState } from "react";
import { FaHeart, FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import Button from "../../../Common/Button";
import Input from "../../../Common/Input";

const CartProduct = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreament = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreament = () => {
    if (quantity >= 2) setQuantity((prev) => prev - 1);
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4 bg-white rounded-md shadow-md border p-5">
        <div className="flex items-center">
          <div>
            <img
              className="w-20"
              src="https://www.startech.com.bd/image/cache/catalog/earbuds/xiaomi/black-shark-lucifer-t9/lucifer-t9-black-500x500.webp"
              alt="product_image"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm">
              Black Shark T9 ENC Wireless Earbuds.....
            </span>
            <span className="font-bold text-sm">{`$350`}</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 -mt-5">
          <div className="flex items-center justify-center cursor-pointer w-7 h-7 border rounded-full p-1 hover:bg-danger hover:text-white duration-300">
            <FaHeart />
          </div>
          <div className="flex items-center justify-center cursor-pointer w-7 h-7 border rounded-full p-1 hover:bg-danger hover:text-white duration-300">
            <FaTrashAlt />
          </div>
        </div>

        <div className="flex items-center border rounded-md -mt-5">
          <Button
            onClick={handleDecreament}
            className="p-2 flex items-center justify-center border-0 rounded-sm bg-transparent text-stech hover:bg-stech hover:text-white duration-300"
          >
            <FaMinus />
          </Button>
          <Input
            className="text-center w-10 rounded-none bg-transparent p-1"
            value={quantity}
          />
          <Button
            onClick={handleIncreament}
            className=" p-2 flex items-center justify-center border-0 rounded-sm bg-transparent text-stech hover:bg-stech hover:text-white duration-300"
          >
            <FaPlus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
