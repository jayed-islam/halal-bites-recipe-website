import { Helmet } from "react-helmet-async";
import { DetailsRecipeView } from "../../sections/recipes/view";
import { useParams } from "react-router-dom";

const DetailsRecipePage = () => {
  const params = useParams();
  const { id } = params;
  return (
    <>
      <Helmet>
        <title>Details Recipe: HalalBites</title>
      </Helmet>
      <DetailsRecipeView id={id} />
    </>
  );
};

export default DetailsRecipePage;
