import { StarIcon as FilledStarIcon } from "@heroicons/react/16/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";
const ReviewCard = ({ review }) => {
  return (
    <div className="flex flex-col items-start bg-white p-6 m-4 rounded-lg shadow-lg">
      <div className="flex items-center mb-4 ">
        <img
          src={review.iconUrl}
          alt={review.title}
          className="lg:w-12 w-8 lg:h-12 h-8 mr-4"
        />
        <div>
          <h4 className="font-poppins font-medium text-text-3 lg:text-[22px] text-[18px] lg:leading-[35px] leading-[30px]">
            {review.title}
          </h4>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                {index < review.rating ? (
                  <FilledStarIcon className="w-6 h-6 text-yellow-500" />
                ) : (
                  <OutlineStarIcon className="w-6 h-6 text-gray-400" />
                )}{" "}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="font-poppins font-medium text-text-1 lg:text-[18px] text-[16px] lg:leading-[22.5px] leading-[20px] max-w-[349px]">
        {review.text}{" "}
      </p>
    </div>
  );
};

export default ReviewCard;
