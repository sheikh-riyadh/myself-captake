import MapSection from "../../../components/Main/Reviews/MapSection";
import ReviewCarousel from "../../../components/Main/Reviews/ReviewCarousel";
import ReviewHeroSection from "../../../components/Main/Reviews/ReviewHeroSection";
import SignInOption from "../../../components/Main/Reviews/SignInOption";

const Reviews = () => {
  return (
    <div>
      <ReviewHeroSection />
      <MapSection />
      <ReviewCarousel />
      <SignInOption />
    </div>
  );
};

export default Reviews;
