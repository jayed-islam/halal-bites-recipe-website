/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import {
  useGetSingleRecipeQuery,
  useReactRecipeByUserMutation,
} from "../../../redux/reducers/recipe/recipeApi";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import toast from "react-hot-toast";

const DetailsRecipeView = ({ id }) => {
  const { data, isLoading } = useGetSingleRecipeQuery(id);

  const { user } = useSelector((state) => state.auth);

  console.log(user);

  const [makeReaction] = useReactRecipeByUserMutation();

  const handleReaction = async () => {
    const reactionData = {
      userId: user._id,
    };
    console.log(reactionData);
    const result = await makeReaction({ id: id, body: reactionData }).unwrap();

    if (result.success) {
      toast.success("Successfull!!!");
      console.log("res", result);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-20 md:px-11 lg:px-5 xl:px-0 mt-9 mb-16">
      {isLoading ? (
        <div className="h-[50rem] w-full flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-green-500"></div>
        </div>
      ) : (
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
            <h2 className="text-2xl font-semibold">{data?.data?.recipeName}</h2>
            <h1 className="text-lg font-semibold pt-5 pb-3">Description</h1>
            <p className="text-md text-gray-400">{data?.data?.recipeDetails}</p>
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
              <p className="text-xl font-semibold">{data?.data?.watchCount}</p>
            </div>

            <div
              className="mt-7 bg-gray-100 rounded-2xl p-3 w-min cursor-pointer"
              onClick={() => handleReaction()}
            >
              {data?.data?.reactions.includes(user?._id) ? (
                <FaHeart className="text-xl text-green-500 transition-all duration-150" />
              ) : (
                <FaRegHeart className="text-xl hover:text-green-500 transition-all duration-150" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsRecipeView;
