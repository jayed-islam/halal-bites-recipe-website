/* eslint-disable react/prop-types */
import Slider from "react-slick";
import { courouselItems } from "../../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// eslint-disable-next-line no-unused-vars
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

// eslint-disable-next-line no-unused-vars
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const HomeBannerSection = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {courouselItems.map((item, index) => (
          <div key={index} className="relative h-[80vh]">
            <div className="absolute bg-[#231f40c4] top-0 left-0 right-0 bottom-0"></div>
            <img src={item.banner} className="h-full w-full object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeBannerSection;
