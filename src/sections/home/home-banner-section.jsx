/* eslint-disable react/prop-types */
import Slider from "react-slick";
import { courouselItems } from "../../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowRight } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../layouts/paths";
import { useContext } from "react";
import { AppContext } from "../../context/auth-context";
import toast from "react-hot-toast";

const HomeBannerSection = () => {
  const { user, googleSignIn } = useContext(AppContext);
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    loop: true,
    autoplay: true,
    waitForAnimate: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  const navigate = useNavigate();
  const handleRedirect = () => {
    if (user && user.uid) {
      navigate(paths.recipe.addrecipe);
    } else {
      toast.error("Please login!");
      googleSignIn();
    }
  };
  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {courouselItems.map((item, index) => (
          <div key={index} className="relative h-[85vh]">
            <div className="absolute bg-[#231f40c4] top-0 left-0 right-0 bottom-0">
              <div className="max-w-6xl mx-auto mt-32 px-5 xl:px-0">
                <h2 className="text-white text-6xl font-bold max-w-4xl ">
                  {item.title}
                </h2>

                <p className="max-w-xl text-gray-400 mt-5 text-lg">
                  Unlock the secrets of exquisite halal cuisine with our
                  expertly curated recipes, designed to elevate your culinary
                  experience with every bite.
                </p>
                <div className="flex items-center gap-5 mt-7">
                  <Link
                    to={paths.recipe.allrecipes}
                    className="border-2 border-green-500 px-7 py-2 rounded-full flex items-center gap-2 text-white hover:bg-green-500 transition-all duration-200 group"
                  >
                    <span>See Recipes</span>
                    <GoArrowRight className="group-hover:translate-x-2 transition-all duration-200" />
                  </Link>
                  <div
                    onClick={() => handleRedirect()}
                    className="cursor-pointer border-2 border-green-500 px-7 py-2 rounded-full flex items-center gap-2 text-white bg-green-500 transition-all duration-200 group hover:translate-x-2"
                  >
                    Add Recipes
                    <FiPlus className="group-hover:rotate-180 transition-all duration-200" />
                  </div>
                </div>
              </div>
            </div>

            <img src={item.banner} className="h-full w-full object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeBannerSection;
