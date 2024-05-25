import { Helmet } from "react-helmet-async";
import { DetailsRecipeView } from "../../sections/recipes/view";

const DetailsRecipePage = () => {
  return (
    <>
      <Helmet>
        <title>Details Recipe: HalalBites</title>
      </Helmet>
      <DetailsRecipeView />
    </>
  );
};

export default DetailsRecipePage;
