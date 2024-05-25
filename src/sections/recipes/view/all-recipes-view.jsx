import PageBanner from "../../../components/page-banner";
import { paths } from "../../../layouts/paths";
import AllRecipesToolBar from "../common/all-recipes-view-toolbar";

const AllRecipesView = () => {
  const breadCrumbs = [
    {
      title: "Home",
      path: paths.home,
    },
    {
      title: "All Recipes",
      path: paths.recipe.allrecipes,
    },
  ];
  return (
    <div>
      <PageBanner title="Our Delicious Recipes" breadCrumbs={breadCrumbs} />
      <AllRecipesToolBar />
    </div>
  );
};

export default AllRecipesView;
