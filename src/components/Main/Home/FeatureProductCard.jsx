import { numberWithCommas } from "../../../utils/numberWithComma";


const FeatureProductCard = () => {
  return (
    <div className="rounded-xl p-3 lg:p-5 bg-white border-b-2 relative">
      <div className="flex items-center justify-center">
      <img
      className="h-32 w-32 lg:h-52 lg:w-full"
        src="https://www.startech.com.bd/image/cache/catalog/laptop/msi/stealth-16-studio-a13vg-407bd/stealth-16-studio-a13vg-407bd-pure-white-01-500x500.webp"
        alt="product_image"
      />
      </div>
      <div>
        <p className="text-sm hover:underline hover:text-primary">{`MSI Stealth 16 Studio A13VG-407BD Core i9 13th Gen RTX 4070 8GB Graphics 16" UHD+`}</p>
        <div className="flex flex-wrap items-center gap-1 lg:gap-5">
          <span className="text-primary font-semibold">
          {`${numberWithCommas(299000)}৳`}
          </span>
          <span className="line-through font-semibold text-sm">{`${numberWithCommas(300000)}৳`}</span>
        </div>
      </div>
      <div className="absolute top-4 left-0">
        <span className="text-xs bg-primary text-white px-3 py-1 rounded-tr-xl rounded-br-xl">Save: {`${numberWithCommas(10000)}৳`}</span>
      </div>
    </div>
  );
};

export default FeatureProductCard;
