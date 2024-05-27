import { PiCoinsThin } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import { paths } from "../layouts/paths";
import pasta from "../assets/images/pasta.jpg";
import tableFood from "../assets/images/table-food.jpg";
import asSunnah from "../assets/images/logo.png";
import madrasha from "../assets/images/graduation.png";
import location from "../assets/images/location.png";
import thai from "../assets/images/thai.jpg";
import recipes from "../assets/icons/halo-halo.png";
import users from "../assets/icons/programmer.png";
import since from "../assets/icons/since.png";

export const devInfos = [
  {
    title: "Junior Full-Stack Developer at As-Sunnah Foundation",
    desc: "Currently, I am working as a Junior Frontend Developer at As-Sunnah Foundation. In this role, I contribute to the development of a dynamic website using technologies such as Next.js, Material-UI, and JavaScript. My responsibilities include collaborating with the team to implement frontend solutions that meet project requirements and design specifications. I actively participate in crafting responsive user interfaces and optimizing website  performance. This role has been pivotal in my journey as a frontend developer, allowing me to enhance my skills and  contribute meaningfully to projects.",
    image: asSunnah,
  },
  {
    title: "Studing at Islamic Arabic University in Hadith (M.A) Kamil",
    desc: "Currently pursuing studies at the Islamic Arabic University with a focus on Hadith, delving into the profound teachings and insights of Islamic tradition.",
    image: madrasha,
  },
  {
    title: "Aftabnagar, Dhaka",
    desc: "My current location",
    image: location,
  },
];

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
