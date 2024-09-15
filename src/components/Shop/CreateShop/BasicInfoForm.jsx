import { useForm } from "react-hook-form";
import Button from "../../Common/Button";
import Input from "../../Common/Input";
import SelectInput from "../../Common/SelectInput";
import { FaStore, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import BusinessInfoForm from "./BusinessInfoForm";
import { Link } from "react-router-dom";

const BasicInfoForm = () => {
  const [isBusinessFormVisible, setIsBusinessFormVisible] = useState(false);
  const [formData, setFormData] = useState({});

  const { handleSubmit, register, watch } = useForm();
  const role = watch("Role");

  const handleNext = (data) => {
    setIsBusinessFormVisible(true);
    setFormData(data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full my_container">
      <div className="w-full md:w-10/12 lg:w-5/6 xl:w-8/12 bg-white border shadow-lg rounded-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden md:h-2.5/5 lg:h-[500px] xl:h-5/6">
        <div className="bg-[url('./../assets/Main/Store/shop.png')] bg-contain bg-center bg-no-repeat hidden md:block"></div>
        <div className="flex items-center justify-center h-full pt-7 md:hidden">
          <FaStore className="w-24 h-24 border rounded-full p-2 bg-white text-secondary" />
        </div>
        <div className="flex flex-col items-center justify-center">
          {isBusinessFormVisible ? (
            <BusinessInfoForm
              setIsBusinessFormVisible={setIsBusinessFormVisible}
              formData={formData}
              setFormData={setFormData}
            />
          ) : (
            <form
              onSubmit={handleSubmit(handleNext)}
              className="flex flex-col items-center justify-center gap-5 w-full p-7"
            >
              <h1 className="font-bold text-3xl text-start">
                Register as a <span className="text-secondary">{role}</span>
              </h1>
              <div className="w-full flex flex-col gap-5">
                <SelectInput {...register("Role")} required>
                  <option value="" disabled selected>
                    Choose your role*
                  </option>
                  <option value="Retailer">Retailer</option>
                  <option value="Wholesaler">Wholsaler</option>
                  <option value="Supplier">Supplier</option>
                  <option value="Manufacturer">Manufacturer</option>
                </SelectInput>

                <Input {...register("Name")} placeholder="Name *" required />
                <Input
                  {...register("Phone")}
                  placeholder="Phone *"
                  type="number"
                  required
                />
                <Input
                  {...register("Email")}
                  placeholder="Email *"
                  type="email"
                  required
                />

                <Input
                  {...register("Password")}
                  placeholder="*******"
                  type="password"
                  required
                />
              </div>
              <div className="w-full flex items-center justify-between gap-5">
                <div className="flex items-center gap-2">
                  <FaUserCircle />
                  <span className="text-sm">
                    have an account?{" "}
                    <Link to="sign-in">
                    <strong className="hover:underline cursor-pointer text-secondary">
                      Sign-in
                    </strong>
                    </Link>
                  </span>
                </div>
                <Button className="font-medium uppercase text-sm w-36">
                  Next
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicInfoForm;
