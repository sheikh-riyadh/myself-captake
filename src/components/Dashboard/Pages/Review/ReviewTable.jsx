import { PhotoProvider, PhotoView } from "react-photo-view";
import { useGetUser } from "../../../../hooks/useGetUser";
import { useGetReviewsQuery } from "../../../../store/dashboard/service/review/reviewApi";
import LoadingSpinner from "../../../Common/LoadingSpinner";
import Table from "../../../Common/Table";
import { FaStar } from "react-icons/fa";
import moment from "moment";
import ViewReview from "./ViewReview";

const ReviewTable = () => {
  const { user } = useGetUser();
  const { data, isLoading } = useGetReviewsQuery(user?._id);

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
                      {item?.productInfo?.map((product) => (
                        <figure key={product?._id}>
                          <PhotoView src={product?.image}>
                            <div className="border w-10 h-10 rounded p-1 cursor-pointer">
                              <img
                                className="h-full w-full"
                                src={product?.image}
                                alt="product_gallery_image"
                              />
                            </div>
                          </PhotoView>
                        </figure>
                      ))}
                    </PhotoProvider>
                  </div>
                );
              },
            },
            {
              name: "Rating",
              render: ({ item }) => {
                return (
                  <div className="flex gap-1 items-center">
                    {[...Array(item?.rating?.rating).keys()].map((rating) => (
                      <div key={rating}>
                        <FaStar className="text-accent" />
                      </div>
                    ))}
                  </div>
                );
              },
            },
            {
              name: "Review Message",
              index: "reviewMessage",
              dataIndex: "reviewMessage",
            },
            {
              name: "Time",
              render: ({ item }) => {
                return <div>{moment(item?.createdAt).format("LL")}</div>;
              },
            },
            {
              name: "Actions",
              render: ({ item }) => {
                return (
                  <div className="flex gap-3">
                    <ViewReview item={item} />
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

export default ReviewTable;
