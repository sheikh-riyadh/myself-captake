import BasicInfoForm from "../../components/Shop/CreateShop/BasicInfoForm";
import { smoothScroll } from "../../utils/scrollToTop";

const CreateShop = () => {
  smoothScroll();
  return (
    <section>
      <BasicInfoForm />
    </section>
  );
};

export default CreateShop;
