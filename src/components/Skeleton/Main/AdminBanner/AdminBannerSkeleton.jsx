const AdminBannerSkeleton = () => {
  return (
    <div className="mt-[80px] lg:mt-24 xl:mt-[100px]">
      <div className="h-full lg:grid lg:grid-cols-12 gap-5">
        {/* Swiper Skeleton */}
        <div className="w-full h-full col-span-full lg:col-span-9 border-r-4 border-b-4">
          <div className="h-[200px] md:h-[350px] xl:h-[460px] w-full bg-gray-300 animate-pulse"></div>
        </div>

        {/* Side Banners Skeleton */}
        <div className="lg:col-span-3 h-full w-full mt-5 lg:mt-0">
          <div className="h-full w-full grid grid-cols-1 gap-5">
            {/* First Side Banner */}
            <div className="h-[200px] lg:h-[165px] xl:h-[220px] w-full border-r-4 border-b-4 bg-gray-300 animate-pulse"></div>
            {/* Second Side Banner */}
            <div className="h-[200px] lg:h-[165px] xl:h-[220px] w-full border-r-4 border-b-4 bg-gray-300 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBannerSkeleton;
