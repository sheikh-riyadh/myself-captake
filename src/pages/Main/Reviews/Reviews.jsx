import ReviewCarousel from "../../../components/Main/Reviews/ReviewCarousel";
import ReviewHeroSection from "../../../components/Main/Reviews/ReviewHeroSection";
import SignInOption from "../../../components/Main/Reviews/SignInOption";

const Reviews = () => {
  return (
    <div className="my_container">
      <ReviewHeroSection />
      <ReviewCarousel />
      <SignInOption/>
    </div>
  );
};

export default Reviews;
