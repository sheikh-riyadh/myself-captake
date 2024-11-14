import Table from "../../../Common/Table";

import { useGetAddressQuery } from "../../../../store/dashboard/service/address/addressApi";
import { useGetUser } from "../../../../hooks/useGetUser";
import LoadingSpinner from "../../../Common/LoadingSpinner";
import UpdateAddress from "./UpdateAddress";
import DeleteAddress from "./DeleteAddress";

const AddressTable = () => {
  const { user } = useGetUser();
  const { data, isLoading } = useGetAddressQuery({ userId: user?._id });

  return (
    <div className="overflow-hidden">
      {!isLoading ? (
        <Table
          className="font-normal"
          tableData={data}
          columns={[
            {
              name: "Name",
              dataIndex: "fullName",
              key: "fullName",
            },
            {
              name: "Phone",
              dataIndex: "phoneNumber",
              key: "phoneNumber",
            },
            {
              name: "Country",
              dataIndex: "country",
              key: "country",
            },
            {
              name: "State",
              dataIndex: "state",
              key: "state",
            },
            {
              name: "City",
              dataIndex: "city",
              key: "city",
            },
            {
              name: "Actions",
              render: ({ item }) => {
                return (
                  <div className="flex items-center gap-2">
                    <UpdateAddress item={item} />
                    <DeleteAddress userId={user?._id} _id={item?._id}/>
                  </div>
                );
              },
            },
          ]}
        />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default AddressTable;
