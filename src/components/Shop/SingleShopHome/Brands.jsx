import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className="bg-[#081621] p-10">
      <div className="my_container">
      <Marquee>
        <div className="flex items-center gap-10">
          {[...Array(10).keys()].map((keys) => (
            <img
              key={keys}
              src="https://ibid.modeltheme.com/wp-content/uploads/2015/04/client2-s2-1-300x90.png"
              alt="brand_image"
              className="w-36"
            />
          ))}
        </div>
      </Marquee>
      </div>
    </div>
  );
};

export default Brands;
