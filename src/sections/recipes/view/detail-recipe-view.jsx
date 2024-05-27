/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import {
  useGetCategoryBasedRecipeQuery,
  useGetSingleRecipeQuery,
  useReactRecipeByUserMutation,
} from "../../../redux/reducers/recipe/recipeApi";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import toast from "react-hot-toast";
import ScrollToTopOnMount from "../../../hooks/scroll-top-on-mount";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegFlag } from "react-icons/fa";
import { LuView } from "react-icons/lu";
import { Link } from "react-router-dom";
import { paths } from "../../../layouts/paths";

const DetailsRecipeView = ({ id }) => {
  const { data, isLoading } = useGetSingleRecipeQuery(id);

  const { user } = useSelector((state) => state.auth);

  const [makeReaction] = useReactRecipeByUserMutation();
  const { data: categoryBased } = useGetCategoryBasedRecipeQuery(
    data?.data.category
  );

  const handleReaction = async (recipeId) => {
    const reactionData = {
      userId: user._id,
    };
    console.log(reactionData);
    const result = await makeReaction({
      id: recipeId,
      body: reactionData,
    }).unwrap();

    if (result.success) {
      toast.success("Successfull!!!");
      console.log("res", result);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-20 md:px-11 lg:px-5 xl:px-0 mt-9 mb-16">
      <ScrollToTopOnMount />
      {isLoading ? (
        <div className="h-[50rem] w-full flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-green-500"></div>
        </div>
      ) : (
        <div>
          <div className="flex items-start gap-7 flex-col lg:flex-row">
            <div className="w-full">
              <iframe
                className="w-full h-[301px] lg:h-[400px]"
                src={`https://www.youtube.com/embed/${data?.data?.embedVideoId}?si=SAeynrGmoPsw32IF`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="w-full lg:w-[50rem] px-5 pt-5">
              <h2 className="text-2xl font-semibold">
                {data?.data?.recipeName}
              </h2>
              <h1 className="text-lg font-semibold pt-5 pb-3">Description</h1>
              <p className="text-md text-gray-400">
                {data?.data?.recipeDetails}
              </p>
              <div className="flex items-center gap-5 mt-7">
                <h2 className="text-lg font-semibold">Purched:</h2>
                <div className="flex -space-x-1 overflow-hidden">
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
              <div className="flex items-center gap-5 mt-2">
                <h2 className="text-lg font-semibold">Created By:</h2>
                <p>{data?.data?.creatorEmail}</p>
              </div>
              <div className="flex items-center gap-5 mt-2">
                <h2 className="text-lg font-semibold">Country:</h2>
                <p>{data?.data?.country}</p>
              </div>
              <div className="flex items-center gap-5 mt-2">
                <h2 className="text-lg font-semibold">Category:</h2>
                <div className="bg-green-500 px-5 py-1 rounded-full text-white">
                  {data?.data?.category}
                </div>
              </div>

              <div className="flex items-center gap-5 mt-2">
                <h2 className="text-lg font-semibold">Total Viewer:</h2>
                <p className="text-xl font-semibold">
                  {data?.data?.watchCount}
                </p>
              </div>

              <div
                className="mt-7 bg-gray-100 rounded-2xl p-3 w-min cursor-pointer"
                onClick={() => handleReaction(id)}
              >
                {data?.data?.reactions.includes(user?._id) ? (
                  <FaHeart className="text-xl text-green-500 transition-all duration-150" />
                ) : (
                  <FaRegHeart className="text-xl hover:text-green-500 transition-all duration-150" />
                )}
              </div>
            </div>
          </div>
          <div className="mt-9">
            <h2 className="text-2xl font-semibold pb-7">For Your Choice</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
              {categoryBased?.data.map((recipe, index) => (
                <div
                  // to={`${paths.recipe.root}/${recipe._id}`}
                  key={index}
                  className="w-full rounded-lg border group hover:-translate-y-2 transition-all duration-300 shadow-md bg-white cursor-pointer"
                >
                  <div className="w-full h-48 overflow-hidden rounded-t-lg relative ">
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30">
                      <h2 className="text-xl font-semibold text-white text-center absolute bottom-3 left-0 right-0">
                        {recipe.recipeName}
                      </h2>
                    </div>
                    <img
                      src={recipe.recipeImage}
                      alt=""
                      className="w-full h-full object-cover transition-all duration-300 rounded-t-lg"
                    />
                  </div>

                  <div className="p-5 relative">
                    <div className="flex items-center gap-3 -mt-2">
                      <MdOutlineMailOutline className="text-green-500 text-xl" />
                      <span className="">{recipe.creatorEmail}</span>
                    </div>
                    <div className="flex items-center gap-3.5">
                      <FaRegFlag className="text-green-500 text-lg" />
                      <span className="">{recipe.country}</span>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <h2 className="font-semibold">Category:</h2>
                      <div className="px-5 py-1 bg-green-300 border m-1 text-sm rounded-2xl">
                        {recipe.category}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mt-5 group">
                      <Link
                        to={`${paths.recipe.root}/${recipe._id}`}
                        className="bg-green-500 flex items-center justify-center py-2 rounded-lg text-white gap-3 w-full text-sm "
                      >
                        <LuView className="text-lg  group-hover:rotate-180" />
                        View The Recipe
                      </Link>
                      <div
                        className="border-2 p-2 border-gray-500 rounded-lg"
                        onClick={() => handleReaction(recipe._id)}
                      >
                        {recipe?.reactions?.includes(user?._id) ? (
                          <FaHeart className="text-xl text-green-500 transition-all duration-150" />
                        ) : (
                          <FaRegHeart className="text-xl hover:text-green-500 transition-all duration-150" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsRecipeView;
