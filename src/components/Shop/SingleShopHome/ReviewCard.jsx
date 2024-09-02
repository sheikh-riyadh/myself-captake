import { FaStar } from "react-icons/fa";

const ReviewCard = () => {
  return (
    <div className="flex flex-col bg-white p-5 rounded-xl border">
      <div>
        <div className="flex items-center gap-5">
          <img
            className="w-12 h-12 rounded-full"
            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/157d2d0d0c06b7c34450261e005b28be-1664305937048/3521d275-e9ba-48e2-8d28-a34d44a0d660.jpg"
            alt="user_image"
          />
          <span className="font-bold">Sheikh Riyadh</span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 font-bold">
              {[...Array(5).keys()].map((k) => (
                <FaStar className="text-primary" key={k} />
              ))}
              <span>5</span>
            </div>
            <span className="font-semibold text-sm text-slate">
              2 months ago
            </span>
          </div>
          <hr />
          <div className="flex flex-col gap-3">
            <p className="text font-medium">{`I'm glad I found you to help me with my Wordpress. He has created complex shopping and subscription systems in record time. We will continue to work together.`}</p>
            <img
              className="w-20 h-20"
              src="https://d3cn6pl0719mpa.cloudfront.net/34wq75c-b-06-500x500-1716733259335.webp"
              alt="review_product_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
