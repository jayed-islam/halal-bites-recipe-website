import { PiCoinsThin } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import { paths } from "../layouts/paths";
import pasta from "../assets/images/pasta.jpg";
import tableFood from "../assets/images/table-food.jpg";
import thai from "../assets/images/thai.jpg";

export const courouselItems = [
  {
    title: "",
    banner: pasta,
  },
  {
    title: "",
    banner: tableFood,
  },
  {
    title: "",
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
