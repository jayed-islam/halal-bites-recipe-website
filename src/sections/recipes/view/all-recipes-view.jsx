import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { BsArrowRightCircle } from "react-icons/bs";
import CardLoading from "../common/card-loading";
import { categories } from "../../../constants";
import { useGetAllRecipesQuery } from "../../../redux/reducers/recipe/recipeApi";
import { paths } from "../../../layouts/paths";
import PageBanner from "../../../components/page-banner";
import AllRecipesSection from "../all-recipes-section";

const AllRecipesView = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0].value);
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        isFetchingMore
      ) {
        return;
      }
      setIsFetchingMore(true);
      setPage((prevPage) => prevPage + 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetchingMore]);

  const queryParams = {
    pageNumber: page,
    pageSize: 10,
    category:
      selectedCategory !== categories[0].value ? selectedCategory : undefined,
    search: search.trim() !== "" ? search : undefined,
  };

  const { data, isLoading } = useGetAllRecipesQuery(queryParams, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (data && page === 1) {
      setRecipes(data.data);
    } else if (data) {
      setRecipes((prevRecipes) => [...prevRecipes, ...data.data]);
    }
    setIsFetchingMore(false);
  }, [data, page]);

  const handleReset = () => {
    setSearch("");
    setPage(1);
    setSelectedCategory(categories[0].value);
  };

  const handleCategoryChange = (category) => {
    setPage(1);
    setSearch("");
    setSelectedCategory(category);
    setRecipes([]);
  };

  return (
    <div>
      <PageBanner title="Our Delicious Recipes" breadCrumbs={breadCrumbs} />

      {/* toolbar section */}
      <div className="max-w-6xl mx-auto px-5 sm:px-20 md:px-11 lg:px-5 xl:px-0 mt-9 mb-16">
        <div className="bg-gray-100 p-4 rounded-3xl lg:rounded-full flex items-center gap-3 lg:gap-5 flex-col md:flex-row">
          <input
            type="text"
            className="w-full rounded-full py-3 outline-none border px-6 shadow-sm"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="w-full flex items-center flex-col md:flex-row gap-3 lg:gap-5">
            <div className="w-full lg:w-2/3">
              <Listbox value={selectedCategory} onChange={handleCategoryChange}>
                <div className="relative">
                  <Listbox.Button className="border shadow-sm relative w-full cursor-default rounded-full bg-white py-3 md:py-3.5 pl-6 pr-10 text-left focus:outline-none sm:text-sm">
                    <span className="block truncate">{selectedCategory}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10">
                      {categories.map((category, index) => (
                        <Listbox.Option
                          key={index}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-green-100 text-green-900"
                                : "text-gray-900"
                            }`
                          }
                          value={category.value}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {category.label}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            <button
              className="w-full lg:w-1/3 border px-6 shadow-sm py-3 rounded-full bg-green-500 hover:bg-slate-800 transition-all duration-150 text-white text-center flex items-center group gap-3 justify-center overflow-hidden"
              onClick={handleReset}
            >
              <BsArrowRightCircle className="lg:-translate-x-16 group-hover:translate-x-1 transition-all duration-200" />
              <span className="-translate-x-3 group-hover:translate-x-0 transition-all duration-200">
                Reset
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* all recipes */}
      <div>
        {isLoading && page === 1 ? (
          <div className="max-w-6xl mx-auto px-5 sm:px-20 md:px-11 lg:px-5 xl:px-0 mt-9 mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <CardLoading key={index} />
            ))}
          </div>
        ) : (
          <AllRecipesSection recipes={recipes} />
        )}
      </div>
      {isFetchingMore && (
        <div className="text-center py-4">
          <p>Loading more recipes...</p>
        </div>
      )}
    </div>
  );
};

export default AllRecipesView;
