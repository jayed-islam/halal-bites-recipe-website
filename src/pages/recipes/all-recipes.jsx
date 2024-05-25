import { Helmet } from "react-helmet-async";
import { AllRecipesView } from "../../sections/recipes/view";

const AllRecipesPage = () => {
  return (
    <>
      <Helmet>
        <title>All Recipes: HalalBites</title>
      </Helmet>
      <AllRecipesView />
    </>
  );
};

export default AllRecipesPage;
