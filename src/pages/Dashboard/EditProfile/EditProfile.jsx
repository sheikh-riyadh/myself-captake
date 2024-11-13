import { useForm } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import Input from "../../../components/Common/Input";
import { inputData } from "../../../data/input";
import SelectInput from "../../../components/Common/SelectInput";
import Button from "../../../components/Common/Button";
import { useGetUser } from "../../../hooks/useGetUser";
import { useEffect } from "react";

const EditProfile = () => {
  const { handleSubmit, register, setValue } = useForm();
  const demo = "";

  const { user } = useGetUser();

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("");
    }
  };

  const handleUpdate = () => {};


  useEffect(()=>{
    for (const key in user) {
      if (Object.prototype.hasOwnProperty.call(user, key)) {
        setValue(key, user[key])
        
      }
    }
  },[setValue,user])


  return (
    <div>
      <div className="h-44 w-full bg-primary flex flex-col justify-center items-center"></div>
      <div className="p-5 flex flex-col gap-5 -mt-36">
        <div>
          <span className="font-bold text-xl text-white">Edit profile</span>
        </div>
        <div className="shadow-md bg-white border rounded-md overflow-hidden">
          <form onSubmit={handleSubmit()} className="p-5">
            <div className="rounded-full">
              <label
                htmlFor="photo"
                className="mb-1 inline-block rounded-full h-32 w-32 relative"
              >
                <div
                  className="h-32 w-32 border-2 border-primary rounded-full relative flex flex-col items-center justify-center cursor-pointer"
                  title="Personal photo"
                >
                  {demo ? (
                    <img className="w-full h-full" src="" alt="" />
                  ) : (
                    <FaUserAlt className="absolute w-full h-full p-2 rounded-full" />
                  )}
                  {demo && (
                    <div className="absolute h-full w-full bg-black opacity-100 rounded-full">
                      <ImSpinner9 className="h-full w-full animate-spin text-primary" />
                    </div>
                  )}

                  <div className="absolute h-full w-full rounded-full z-50">
                    <FaUserAlt className="h-full w-full text-primary rounded-full opacity-0 hover:opacity-100 bg-black duration-300 p-2" />
                  </div>
                </div>
              </label>

              <Input
                onChange={(e) => handleImageChange(e)}
                className="hidden"
                id="photo"
                type="file"
                accept="image/*"
                required={false}
                label="Select your photo"
              />
            </div>

            <div className="grid grid-cols-2 gap-5 mt-5">
              {inputData?.personalData?.map(
                ({
                  registerName,
                  label,
                  isRequired,
                  type,
                  data,
                  placeholder,
                }) =>
                  !data ? (
                    <Input
                    {...register(registerName)}
                      key={registerName}
                      label={label}
                      required={isRequired}
                      type={type}
                      placeholder={placeholder}
                      className={"bg-white border"}
                      value={type === "email" ? user?.email : undefined}
                      disabled={type=="email"}
                    />
                  ) : (
                    <SelectInput
                      label={label}
                      required={isRequired}
                      key={registerName}
                      placeholder={placeholder}
                      className={"bg-white border"}
                    >
                      <option selected disabled value="">
                        Select
                      </option>
                      {data?.map((op) => (
                        <option className="capitalize" value={op} key={op}>
                          {op}
                        </option>
                      ))}
                    </SelectInput>
                  )
              )}
            </div>
            <div className="mt-5 flex flex-col justify-end items-end">
              <Button className="py-2 w-40">Save</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
