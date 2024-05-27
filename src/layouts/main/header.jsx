import { Link } from "react-router-dom";
import { navConfig } from "./config-navigation";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AppContext } from "../../context/auth-context";
import { paths } from "../paths";
import { Button } from "@headlessui/react";
import ProfilePopover from "../../components/profile-popover";
import { useSelector } from "react-redux";
import { PiCoinsThin } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const { user, googleSignIn } = useContext(AppContext);
  const { user: currentUser } = useSelector((state) => state.auth);

  console.log(user);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white z-20 sticky top-0 border-b shadow">
      <div className="mx-auto max-w-6xl px-5 xl:px-0">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link
              className="block font-bold text-3xl text-teal-600 pacifico-regular"
              to={paths.root}
            >
              HalalBites
            </Link>
          </div>

          <div
            className={`md:hidden h-screen bg-white  top-0 bottom-0 left-0 absolute  border-r md:border-none shadow pt-11 z-30 transition-all duration-200  ${
              isOpen ? "w-[251px]  left-0" : "w-[-300px] -left-[251px]"
            }`}
          >
            <Link
              onClick={() => setIsOpen((prev) => !prev)}
              to={paths.root}
              className="text-teal-700 font-bold px-5 mb-9 text-xl pacifico-regular"
            >
              HalalBites
            </Link>
            <nav className="w-full mt-5">
              <ul className="flex-col md:flex-col flex items-center gap-2 text-sm w-full px-5">
                {navConfig.map((navItem, index) => (
                  <Link
                    onClick={() => setIsOpen((prev) => !prev)}
                    key={index}
                    className="text-gray-500 transition hover:text-gray-600/75 hover:bg-gray-100 px-5 py-2 rounded-lg w-full"
                    to={navItem.path}
                  >
                    {navItem.title}
                  </Link>
                ))}

                {user && user?.email && (
                  <Link
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="text-gray-500 transition hover:text-gray-600/75 hover:bg-gray-100 px-5 py-2 rounded-lg w-full"
                    to={paths.recipe.addrecipe}
                  >
                    Add Recipe
                  </Link>
                )}
              </ul>
            </nav>
          </div>
          <div className="hidden md:block">
            <nav aria-label="Global" className="w-full">
              <ul className=" flex items-center gap-6 text-sm">
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
                  <h2 className="hidden sm:flex text-sm">My Coins:</h2>
                  <div className="border bg-green-500 sm:text-sm rounded-3xl px-2 sm:px-3 py-1 text-xs sm:py-2 text-white font-semibold flex items-center gap-2">
                    <PiCoinsThin className="sm:text-xl" />
                    {currentUser?.coin}
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
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                {isOpen ? (
                  <IoMdClose className="text-xl" />
                ) : (
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
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
