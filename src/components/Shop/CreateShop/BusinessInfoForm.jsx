import { useForm } from "react-hook-form";
import Button from "../../Common/Button";
import Input from "../../Common/Input";
import PropTypes from "prop-types";

const BusinessInfoForm = ({ setIsBusinessFormVisible, formData }) => {
  const { handleSubmit, register } = useForm();

  const handleRegistration = (data) => {
    console.log({ ...data, ...formData });
  };


  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(handleRegistration)}
        className="flex flex-col items-center justify-center gap-5 w-full p-7"
      >
        <h1 className="font-bold text-3xl text-start">Business Info</h1>
        <div className="w-full flex flex-col gap-5">
          <Input
            {...register("BusinessName")}
            placeholder="Business name *"
            required
          />
          <Input
            {...register("BusinessEmail")}
            placeholder="Email *"
            type="email"
            required
          />
          <Input
            {...register("Phone")}
            placeholder="Phone *"
            type="number"
            required
          />
          <Input
            {...register("Zipcode")}
            placeholder="Zip code *"
            type="number"
            required
          />
          <Input
            {...register("Address")}
            placeholder="Full address *"
            required
          />
        </div>
        <div className="flex items-center justify-between gap-5 w-full">
          <Button
            className="font-medium uppercase text-sm w-24 bg-transparent text-danger"
            onClick={() => setIsBusinessFormVisible(false)}
          >
            Back
          </Button>
          <Button className="font-medium uppercase text-sm w-36">Submit</Button>
        </div>
      </form>
    </div>
  );
};

BusinessInfoForm.propTypes = {
  setIsBusinessFormVisible: PropTypes.func,
  formData: PropTypes.object,
};

export default BusinessInfoForm;
