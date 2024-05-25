import { Helmet } from "react-helmet-async";
import { AddRecipeView } from "../../sections/recipes/view";

const AddRecipePage = () => {
  return (
    <>
      <Helmet>
        <title>Add Recipe: HalalBites</title>
      </Helmet>
      <AddRecipeView />
    </>
  );
};

export default AddRecipePage;
