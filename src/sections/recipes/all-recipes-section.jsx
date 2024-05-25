import image from "../../assets/images/table-food.jpg";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegFlag } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
// import { FaHeart } from "react-icons/fa6";
import { LuView } from "react-icons/lu";
import { Link } from "react-router-dom";
import { paths } from "../../layouts/paths";

const AllRecipesSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-20 md:px-11 lg:px-5 xl:px-0 mt-9 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <Link
            to={`${paths.recipe.root}/${index}`}
            key={index}
            className="w-full rounded-lg border group hover:-translate-y-2 transition-all duration-300 shadow-md bg-white cursor-pointer"
          >
            <div className="w-full h-48 overflow-hidden rounded-t-lg relative ">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30">
                <h2 className="text-xl font-semibold text-white text-center absolute bottom-3 left-0 right-0">
                  Spicy Shandwitch
                </h2>
              </div>
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover transition-all duration-300 rounded-t-lg"
              />
            </div>

            <div className="p-5 relative">
              <div className="flex items-center gap-3 -mt-2">
                <MdOutlineMailOutline className="text-green-500 text-xl" />
                <span className="">creatoremail@gmail.com</span>
              </div>
              <div className="flex items-center gap-3.5">
                <FaRegFlag className="text-green-500 text-lg" />
                <span className="">Bangladesh</span>
              </div>

              <div className="flex items-center justify-between mt-3">
                <h2 className="font-semibold">Purched:</h2>
                <div className="flex -space-x-1 overflow-hidden">
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 mt-5 group">
                <button className="bg-green-500 flex items-center justify-center py-2 rounded-lg text-white gap-3 w-full text-sm ">
                  <LuView className="text-lg  group-hover:rotate-180" />
                  View The Recipe
                </button>
                <div className="border-2 p-2 border-gray-500 rounded-lg">
                  <FaRegHeart />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllRecipesSection;
