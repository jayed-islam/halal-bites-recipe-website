import { PiCoinsThin } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import { paths } from "../layouts/paths";
import pasta from "../assets/images/pasta.jpg";
import tableFood from "../assets/images/table-food.jpg";
import thai from "../assets/images/thai.jpg";
import recipes from "../assets/icons/halo-halo.png";
import users from "../assets/icons/programmer.png";
import since from "../assets/icons/since.png";

export const summeryItem = [
  {
    title: "Total Users",
    icon: users,
    count: 5031,
  },
  {
    title: "Our Recipes",
    icon: recipes,
    count: 351,
  },
  {
    title: "Since From",
    icon: since,
    count: 2023,
  },
];

export const courouselItems = [
  {
    title: "Delicious Recipes With wonderful Eating",
    banner: pasta,
  },
  {
    title: "Experience the Essence of Halal Cuisine. Fresh, Flavorful.",
    banner: tableFood,
  },
  {
    title: "Simple Recipes, Extraordinary Taste. Quick and Halal.",
    banner: thai,
  },
];

export const profileItems = [
  {
    title: "Coins",
    icon: <PiCoinsThin />,
    path: paths.root,
  },
  {
    title: "Log Out",
    icon: <IoLogOutOutline />,
    path: paths.root,
  },
];

export const countries = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

export const categories = [
  { value: "appetizers", label: "Reset" },
  { value: "desserts", label: "Desserts" },
  { value: "soupsStews", label: "Soups and Stews" },
  { value: "salads", label: "Salads" },
  { value: "snacks", label: "Snacks" },
  { value: "mexican", label: "Mexican" },
  { value: "deshiDish", label: "Deshi Dish" },
];
