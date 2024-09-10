import { reviews } from "../constant";
import styles from "../style";
import ReviewCard from "./design/ReviewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { polygon } from "../assets";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={`${styles.paddingX} w-full bg-bg-pp relative`}>
      <div className="absolute bottom-[-5%] right-[-2%] lg:max-w-[353.53px] sm:max-w-[250px] max-w-[200px]">
        <img
          src={polygon}
          alt="polygon"
          width={353}
          height={286}
          className="h-auto w-full"
        />
      </div>
      <div className={`${styles.paddingY} z-[1]`}>
        <div className="flex flex-col items-center mb-2">
          <h2 className="font-poppins font-medium lg:text-[54px] md:text-[50px] text-center text-[30px] text-primary leading-[54px] sm:mb-5 mb-3">
            Some Reviews
          </h2>
          <p className="font-poppins font-normal sm:text-[18px] text-[16px] text-text-2 sm:leading-[21px] leading-[18px] max-w-[612px] text-center sm:mb-4 mb-2 ">
            Highlighted below are few of our reviews our happy users are saying
            about using our platform
          </p>
        </div>

        <Slider {...settings}>
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
