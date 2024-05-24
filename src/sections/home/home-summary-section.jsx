import SectionTitle from "../../components/section-title";
import { summeryItem } from "../../constants";
import CountUp from "react-countup";

const HomeSummarySection = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-20 md:px-11 lg:px-5 xl:px-0 py-16">
      <SectionTitle
        titleFirstPart="Our Summary"
        titleSecondPart="Section"
        subTitle="See our platform summary at a glance"
      />
      <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {summeryItem.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col justify-center items-center border rounded-3xl p-5 shadow group hover:shadow-lg transition-all duration-150 cursor-pointer"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-20 pb-3 group-hover:scale-110 transition-all duration-150"
            />
            <h2 className="text-2xl font-semibold group-hover:text-green-500">
              {item.title}
            </h2>
            <h2 className="text-4xl font-bold pt-2">
              <CountUp delay={2} end={item.count} />
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSummarySection;
