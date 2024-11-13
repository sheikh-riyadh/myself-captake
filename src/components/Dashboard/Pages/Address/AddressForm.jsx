import { useForm } from "react-hook-form";
import Input from "../../../Common/Input";
import SelectInput from "../../../Common/SelectInput";
import Button from "../../../Common/Button";
import { inputData } from "../../../../data/input";


const AddressForm = () => {
  const { handleSubmit, register } = useForm();

  const handleAddress = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit(handleAddress)}>
        <div className="grid grid-cols-2 gap-5">
          {inputData.addressData.map(
            ({ placeholder, type, isRequired, registerName, data }) => (
              <div key={registerName}>
                {!data ? (
                  <Input
                    {...register(registerName)}
                    // label={label}
                    placeholder={placeholder}
                    type={type}
                    required={isRequired}
                    key={registerName}
                    className="bg-transparent border text-sm"
                  />
                ) : (
                  <SelectInput
                    required={isRequired}
                    className="bg-transparent border text-sm"
                  >
                    {data?.map((opt) => (
                      <option value={opt} key={opt}>
                        {opt}
                      </option>
                    ))}
                  </SelectInput>
                )}
              </div>
            )
          )}
        </div>
        <Button className="mt-5">Add address</Button>
      </form>
    </div>
  );
};

export default AddressForm;
