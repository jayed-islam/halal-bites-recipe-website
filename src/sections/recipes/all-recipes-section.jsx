import image from "../../assets/images/table-food.jpg";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegFlag } from "react-icons/fa";

const AllRecipesSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-20 md:px-11 lg:px-5 xl:px-0 mt-9 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <div
            key={index}
            className="w-full rounded-2xl border group hover:-translate-y-2 transition-all duration-300 shadow-md bg-white h-72 cursor-pointer"
          >
            <div className="w-full h-48 overflow-hidden rounded-t-2xl relative ">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30">
                <h2 className="text-xl font-semibold text-white text-center absolute bottom-3 left-0 right-0">
                  Spicy Shandwitch
                </h2>
              </div>
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover transition-all duration-300 rounded-t-2xl"
              />
            </div>

            <div className="p-5 relative">
              {/* <div className="absolute h-16 w-16 rounded-full -top-8 border p-1 border-white">
                <img
                  src="https://img.freepik.com/free-photo/close-up-portrait-man-looking-camera-outdoors_23-2148283854.jpg?t=st=1716647006~exp=1716650606~hmac=f2b7ad61823b891dc7afbf66cf0386bdbd0a603e438ae60ff4b4e61c688bed1d&w=740"
                  className="h-full w-full rounded-full"
                  alt=""
                />
              </div> */}

              <div className="flex items-center gap-3 -mt-2">
                <MdOutlineMailOutline className="text-green-500 text-xl" />
                <span className="">creatoremail@gmail.com</span>
              </div>
              <div className="flex items-center gap-3.5">
                <FaRegFlag className="text-green-500 text-lg" />
                <span className="">Bangladesh</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipesSection;
