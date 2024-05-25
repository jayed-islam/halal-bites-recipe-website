import PageBanner from "../../../components/page-banner";
import { paths } from "../../../layouts/paths";
import AddRecipeFormView from "../add-recipe-form-view";

const AddRecipeView = () => {
  const breadCrumbs = [
    {
      title: "Home",
      path: paths.home,
    },
    {
      title: "Add Recipe",
      path: paths.recipe.addrecipe,
    },
  ];

  return (
    <div>
      <PageBanner title="Add New Recipe" breadCrumbs={breadCrumbs} />
      <AddRecipeFormView />
    </div>
  );
};

export default AddRecipeView;
