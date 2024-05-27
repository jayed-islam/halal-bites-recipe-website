import { Link } from "react-router-dom";
import banner from "../assets/images/thai.jpg";
import { AiOutlineHome } from "react-icons/ai";

/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const PageBanner = ({ title, breadCrumbs }) => {
  return (
    <div className="relative w-full h-64">
      <div className="absolute bg-[#231f40c4] top-0 left-0 right-0 bottom-0">
        <div className="flex items-start max-w-6xl mx-auto inset-0 justify-center h-full flex-col px-5 xl:px-0">
          <h2 className=" text-2xl md:text-4xl font-semibold text-white">
            {title}
          </h2>
          <div className="flex items-center justify-start text-white gap-3 mt-2">
            <AiOutlineHome />
            {breadCrumbs.map((item, index) => (
              <div key={index} className="flex items-center">
                <Link
                  to={item.path}
                  className="hover:text-green-500 transition-all duration-150"
                >
                  {item.title}
                </Link>
                {index !== breadCrumbs.length - 1 && (
                  <div className="w-3 h-[2px] bg-green-500 ml-2 mt-[2px]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src={banner} className="h-full w-full object-cover" />
    </div>
  );
};

export default PageBanner;
