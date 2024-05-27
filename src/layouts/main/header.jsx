import { Link } from "react-router-dom";
import { navConfig } from "./config-navigation";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AppContext } from "../../context/auth-context";
import { paths } from "../paths";
import { Button } from "@headlessui/react";
import ProfilePopover from "../../components/profile-popover";
import { useSelector } from "react-redux";
import { PiCoinsThin } from "react-icons/pi";

const Header = () => {
  const { user, googleSignIn } = useContext(AppContext);
  const { user: currentUser } = useSelector((state) => state.auth);

  console.log(user);

  return (
    <header className="w-full bg-white z-20 sticky top-0 border-b shadow">
      <div className="mx-auto max-w-6xl px-5 xl:px-0">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link
              className="block font-bold text-3xl text-teal-600 pacifico-regular"
              to="#"
            >
              HalalBites
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {navConfig.map((navItem, index) => (
                  <li key={index}>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      to={navItem.path}
                    >
                      {navItem.title}
                    </Link>
                  </li>
                ))}

                {user && user?.email && (
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      to={paths.recipe.addrecipe}
                    >
                      Add Recipe
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {user && user?.email ? (
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <h2 className="hidden sm:flex text-sm">My Coin:</h2>
                  <div className="border bg-green-500 sm:text-sm rounded-3xl px-2 sm:px-3 py-1 text-xs sm:py-2 text-white font-semibold">
                    {currentUser.coin}
                  </div>
                </div>
                <ProfilePopover />
              </div>
            ) : (
              <Button
                onClick={() => googleSignIn()}
                className="flex items-center gap-2 rounded-full bg-white/10 py-2 px-5  font-semibold  transition data-[hover]:scale-105 data-[hover]:bg-white/15 border shadow"
              >
                <FcGoogle className="text-[21px]" />
                <span>Login</span>
              </Button>
            )}

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
