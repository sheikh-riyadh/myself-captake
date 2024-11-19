import PropTypes from "prop-types";
import { FaUserCircle } from "react-icons/fa";
import { useGetReportedSellerQuery } from "../../../../store/shop/service/report/reportApi";
import LoadingSpinner from "../../../Common/LoadingSpinner";
const ViewReportContent = ({ item }) => {
  const { data, isLoading } = useGetReportedSellerQuery(item?.againstTo);

  return (
    <div>
      {!isLoading ? (
        <div className="flex flex-col gap-5">
          <div>
            <div className="p-7 h-44 w-44 bg-white border shadow-md rounded-md flex items-center justify-center overflow-hidden">
              {item ? (
                <div className="flex flex-col gap-3 items-center justify-center">
                  <img
                    className="w-full h-full rounded-full border border-stech"
                    src={data?.logo}
                    alt="user_photo"
                  />
                  <span className="font-bold">{data?.businessName}</span>
                </div>
              ) : (
                <div className="h-full w-full flex flex-col justify-center items-center">
                  <FaUserCircle className="w-44 h-44 rounded-full border p-5 border-stech" />
                </div>
              )}
            </div>
          </div>
          <div className="shadow-md rounded-md flex flex-col gap-5">
            <div className="border p-5 rounded-md text-lg flex flex-col gap-5">
              <p className="font-bold">
                Title:{" "}
                <span className="font-medium text-sm">
                  {item?.report?.title}
                </span>{" "}
              </p>
              <p className="font-bold">
                Message:{" "}
                <span className="font-normal text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi quam, eveniet veniam dolore maxime sunt consequatur quibusdam consectetur reprehenderit numquam voluptatem illum laboriosam possimus provident tempora temporibus. Voluptatem expedita, odio corrupti suscipit, dolores modi accusamus aliquid autem sequi quibusdam sint? Ullam in tempore obcaecati voluptate id qui sequi quia magnam facere dolorem similique a veniam reprehenderit distinctio ipsam, nobis dolorum harum vero at numquam. Expedita, quisquam dolore error delectus accusantium reprehenderit quod quis aperiam praesentium cumque! Enim delectus sit unde odit amet quidem tempora mollitia laborum, labore aut provident obcaecati velit reprehenderit veniam. Placeat modi nam illo porro delectus optio voluptatibus blanditiis iusto sunt, quia aliquid aspernatur. Ut dolore deserunt, quibusdam id nam praesentium eveniet cum animi sit, amet dignissimos. Unde animi velit illum neque odit alias cum, praesentium officia eaque magni perspiciatis et assumenda vero eum sint voluptatem, tenetur at? Repellendus consectetur molestias eos tenetur magnam dignissimos voluptates ex nobis labore quibusdam, reprehenderit, quia inventore accusamus sit minus laudantium nihil. Qui accusantium veritatis, cupiditate, repudiandae enim odit in quibusdam id quaerat velit dolor repellendus amet debitis consequatur doloremque impedit ab saepe neque totam voluptate. Quam, sit possimus maiores blanditiis dolore a harum aliquam id amet vel iure distinctio ea minus sint quis modi laudantium, architecto pariatur nam quod nihil quas officia. Fugiat repellat non dolores accusantium? Qui, aperiam veritatis esse, dignissimos eius labore accusantium soluta dolores dolor quod id consectetur maiores. Rerum quae accusantium, nihil ducimus nesciunt aut iure modi reiciendis doloremque consequatur aspernatur, provident sint adipisci in vero architecto at fugit illum aperiam aliquid assumenda corrupti tenetur dolore. Maiores reprehenderit animi aliquid nemo velit consectetur non doloremque tenetur, fugit dolorem deleniti molestias. Labore dignissimos iure omnis temporibus illo, officiis incidunt, mollitia expedita recusandae nam distinctio? Quisquam rem, soluta laudantium nisi quos modi nemo consectetur sed quas dolores?
                  {item?.report?.reportMessage}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

ViewReportContent.propTypes = {
  item: PropTypes.object,
};

export default ViewReportContent;
