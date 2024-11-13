import { useState } from "react";
import Button from "../../../components/Common/Button";
import AddressTable from "../../../components/Dashboard/Pages/Address/AddressTable";
import CommonModal from "../../../components/Modals/CommonModal";
import AddressForm from "../../../components/Dashboard/Pages/Address/AddressForm";

const Address = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section>
      <div className="h-44 w-full bg-primary flex flex-col justify-center items-center"></div>
      <div className="p-5 flex flex-col gap-5 -mt-36">
        <div className="grid grid-cols-2">
          <span className="font-bold text-xl text-white">Address</span>
          <div className="flex items-center gap-3 justify-end">
            <Button
              onClick={() => setIsModalOpen((prev) => !prev)}
              className="w-40"
            >
              Add new address
            </Button>
          </div>
        </div>
        <div className="shadow-md border rounded-md overflow-hidden">
          <AddressTable />
        </div>
      </div>
      {isModalOpen && (
        <CommonModal
          title={"Add new delivery address"}
          className="w-[500px]"
          onClose={setIsModalOpen}
          isOpen={isModalOpen}
        >
          <AddressForm />
        </CommonModal>
      )}
    </section>
  );
};

export default Address;
