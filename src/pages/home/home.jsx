import { Helmet } from "react-helmet-async";
import { HomePageView } from "../../sections/home/view";
export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home: HalalBites</title>
      </Helmet>
      <HomePageView />
    </>
  );
}
