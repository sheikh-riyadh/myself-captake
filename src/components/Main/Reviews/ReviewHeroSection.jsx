import review_image from "../../../assets/Main/Review/ribbon_star_award.png";
const ReviewHeroSection = () => {
  return (
    <div className="mt-[60px]">
      <div className="grid grid-cols-2 gap-5 items-center justify-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl font-bold">Customer reviews</h1>
          <p className="text-justify leading-loose text-lg">
            {` Welcome to our customer review page, where you can discover genuine
            feedback from people who have experienced our products and services.
            We take pride in offering high-quality products and exceptional
            service, and our customers’ reviews reflect the commitment we make
            to their satisfaction. Whether it's product performance, delivery
            speed, or customer support, these reviews highlight why so many
            choose us. Take a moment to read through and see how we’ve helped
            others make informed decisions, and why they continue to shop with
            us.`}
          </p>
        </div>
        <div>
          <img src={review_image} alt="review_image" />
        </div>
      </div>
    </div>
  );
};

export default ReviewHeroSection;
