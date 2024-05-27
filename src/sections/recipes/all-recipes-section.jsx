/* eslint-disable react/prop-types */
// import image from "../../assets/images/table-food.jpg";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegFlag } from "react-icons/fa";
import { LuView } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { paths } from "../../layouts/paths";
import { useConfirmRecipeTrnsMutation } from "../../redux/reducers/recipe/recipeApi";
import { useContext } from "react";
import { AppContext } from "../../context/auth-context";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const AllRecipesSection = ({ recipes }) => {
  const { user } = useContext(AppContext);
  const { user: currentUser } = useSelector((state) => state.auth);
  // eslint-disable-next-line no-unused-vars

  const navigate = useNavigate();

  const [confirmRecipeTrns] = useConfirmRecipeTrnsMutation();

  const handleViewRecipe = async (recipe) => {
    if (!user) {
      toast.error("Please login to show details");
    } else if (user && user.email === recipe.creatorEmail) {
      navigate(`${paths.recipe.root}/${recipe._id}`);
    } else if (
      user &&
      currentUser &&
      recipe.purchased_by.includes(currentUser.email)
    ) {
      navigate(`${paths.recipe.root}/${recipe._id}`);
    } else if (currentUser && user && currentUser.coin < 10) {
      navigate(paths.purchase);
      toast.error("Don't have enough coin, Please purchase.");
    } else if (currentUser && user && currentUser.coin > 10) {
      const confirm = window.confirm(
        "You are about to spend 10 coins to view the recipe. Do you want to proceed?"
      );

      const recipeTrns = {
        userId: currentUser._id,
        recipeId: recipe._id,
      };

      if (confirm) {
        const response = await confirmRecipeTrns(recipeTrns).unwrap();
        if (response.success) {
          toast.success(response.message);
          navigate(`${paths.recipe.root}/${recipe._id}`);
        }
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-20 md:px-11 lg:px-5 xl:px-0 mt-9 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
        {recipes.length > 0 ? (
          recipes?.map((recipe, index) => (
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
                  <h2 className="font-semibold">Purchased:</h2>
                  <div className="flex -space-x-1 overflow-hidden">
                    {recipe.purchased_by.length}
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-5 group">
                  <button
                    onClick={() => handleViewRecipe(recipe)}
                    className="bg-green-500 flex items-center justify-center py-2 rounded-lg text-white gap-3 w-full text-sm "
                  >
                    <LuView className="text-lg  group-hover:rotate-180" />
                    View The Recipe
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="h-56 max-w-xl w-full flex items-center justify-center">
            <h2 className="text-3xl font-semibold text-red-500 text-center">
              No data Found
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllRecipesSection;
