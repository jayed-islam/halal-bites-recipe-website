import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoGlobe } from "react-icons/go";
import { Link } from "react-router-dom";
import { navConfig } from "./config-navigation";
import { AppContext } from "../../context/auth-context";
import { useContext } from "react";
import { paths } from "../paths";

const Footer = () => {
  const { user } = useContext(AppContext);
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600 text-3xl font-bold">
          HalalBites
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Halal Bites is a Halal food recipe creating company
        </p>

        <ul className="flex items-center gap-6 text-sm  justify-center mt-4">
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

        <div className="flex items-center gap-3 py-2 sm:py-0 mx-auto max-w-6xl justify-center mt-5">
          <a
            href="https://jayedulislam.vercel.app/"
            className="w-7 h-7 bg-green-600 rounded-full hover:bg-green-700  text-white flex items-center justify-center group"
            target="_blank"
          >
            <GoGlobe className="group-hover:scale-110 transition-all duration-150" />
          </a>
          <a
            href="https://www.linkedin.com/in/jayedulislam/"
            target="_blank"
            className="w-7 h-7 bg-green-600 rounded-full hover:bg-green-700  text-white flex items-center justify-center group"
          >
            <FaLinkedinIn className="group-hover:scale-110 transition-all duration-150" />
          </a>
          <a
            href="https://github.com/jayed-islam"
            className="w-7 h-7 bg-green-600 rounded-full hover:bg-green-700  text-white flex items-center justify-center group"
            target="_blank"
          >
            <IoLogoGithub className="group-hover:scale-110 transition-all duration-150" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
