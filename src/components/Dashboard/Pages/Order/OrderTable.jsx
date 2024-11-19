import Table from "../../../Common/Table";
import SelectInput from "../../../Common/SelectInput";
import { FaStreetView, FaTrash } from "react-icons/fa";
import { useGetOrderQuery } from "../../../../store/dashboard/service/order/orderApi";
import { useGetUser } from "../../../../hooks/useGetUser";
import LoadingSpinner from "../../../Common/LoadingSpinner";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { numberWithCommas } from "../../../../utils/numberWithComma";

const OrderTable = () => {
  const { user } = useGetUser();
  const { data, isLoading } = useGetOrderQuery(user?._id);
  console.log(data);

  return (
    <div className="overflow-hidden">
      {!isLoading ? (
        <Table
          className="font-normal"
          tableData={data}
          columns={[
            {
              name: "Images",
              render: ({ item }) => {
                return (
                  <div className="flex gap-2">
                    <PhotoProvider>
                      {item?.productsInfo?.map((product) => (
                        <figure key={product?._id}>
                          <PhotoView src={product?.image}>
                            <img
                              className="border w-10 h-10 rounded p-1 cursor-pointer"
                              src={product?.image}
                              alt="product_gallery_image"
                            />
                          </PhotoView>
                        </figure>
                      ))}
                    </PhotoProvider>
                  </div>
                );
              },
            },
            {
              name: "Order ID",
              render: ({ item }) => {
                return (
                  <div>
                    <span>#{item?.orderId}</span>
                  </div>
                );
              },
            },
            {
              name: "Payment Method",
              render: ({ item }) => {
                return (
                  <div>
                    <span>{item?.paymentMethod}</span>
                  </div>
                );
              },
            },
            {
              name: "Order Status",
              render: ({ item }) => {
                return (
                  <div>
                    <span className="capitalize">{item?.status}</span>
                  </div>
                );
              },
            },
            {
              name: "Total",
              render: ({ item }) => {
                return (
                  <div>
                    <span className="font-medium">
                      {numberWithCommas(
                        item?.productsInfo?.reduce((total, item) => {
                          return (total += item?.buyQnt * item?.price);
                        }, 0) + parseInt(item?.deliveryCharge)
                      )}
                      TK
                    </span>
                  </div>
                );
              },
            },
            {
              name: "Actions",
              render: ({ item }) => {
                return (
                  <div className="flex items-center gap-2">
                    <span className="text-danger cursor-pointer border border-danger text-center p-2 rounded-full hover:bg-red-300 hover:text-white duration-300">
                      <FaStreetView />
                    </span>
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

export default OrderTable;
