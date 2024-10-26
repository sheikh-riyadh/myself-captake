import MapSection from "../../../components/Main/Reviews/MapSection";
import ReviewCarousel from "../../../components/Main/Reviews/ReviewCarousel";
import ReviewHeroSection from "../../../components/Main/Reviews/ReviewHeroSection";
import SignInOption from "../../../components/Main/Reviews/SignInOption";
import { smoothScroll } from "../../../utils/scrollToTop";

const Reviews = () => {
  smoothScroll();
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
