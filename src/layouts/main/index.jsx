import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import HeroHeader from "./hero-header";

const MainLayout = () => {
  return (
    <>
      <HeroHeader />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
