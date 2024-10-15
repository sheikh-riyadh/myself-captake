import BasicInfoForm from "../../components/Shop/CreateShop/BasicInfoForm";
import { smoothScroll } from "../../utils/scrollToTop";

const CreateShop = () => {
  smoothScroll();
  return (
    <div>
      <BasicInfoForm />
    </div>
  );
};

export default CreateShop;
