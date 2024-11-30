import { FaClipboard } from "react-icons/fa";
import StoreBanner from "../../../components/Main/Store/StoreBanner";
import StoreCard from "../../../components/Main/Store/StoreCard";
import StoreSkeleton from "../../../components/Skeleton/Shop/Store/StoreSkeleton";
import { useGetAllSellerQuery } from "../../../store/main/service/allSeller/allSellerApi";
import StoreFilterTop from "../../../components/Main/Store/StoreFilterTop";
import { useAllSellerFilter } from "../../../hooks/useAllSellerFilter";

const Store = () => {
  const { limit, page, sortedValue } = useAllSellerFilter();
  const query = new URLSearchParams({
    limit,
    page,
    sortedValue,
  });

  const { data, isLoading } = useGetAllSellerQuery({
    query: query.toString(),
  });

  return (
    <section>
      <div className="my_container my-[80px] lg:my-28 xl:my-[100px]">
        <StoreBanner />
        <div>
          <StoreFilterTop data={data} />
        </div>
        <div>
          {!isLoading ? (
            <div className="flex flex-col gap-5">
              {data?.length ? (
                data?.map((seller) => (
                  <StoreCard key={seller?._id} seller={seller} />
                ))
              ) : (
                <div className="flex gap-5 flex-col items-center justify-center w-full h-80 bg-white">
                  <FaClipboard className="text-8xl text-slate" />
                  <span className="font-medium text-xl text-accent capitalize">
                    Seller data not found
                  </span>
                </div>
              )}
            </div>
          ) : (
            <StoreSkeleton />
          )}
        </div>
      </div>
    </section>
  );
};

export default Store;
