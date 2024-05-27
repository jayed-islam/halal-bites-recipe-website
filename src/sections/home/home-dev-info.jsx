import SectionTitle from "../../components/section-title";
import { devInfos } from "../../constants";
import jayedImg from "../../assets/images/jayed.jpeg";

const HomeDevInfo = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-20 md:px-11 lg:px-5 xl:px-0 py-16">
      <SectionTitle
        titleFirstPart="Developer"
        titleSecondPart="Information"
        subTitle="This wonderful site developer information"
      />
      <section className="bg-white">
        <div className="py-10">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2 ">
              <div>
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
                  Md Jayedul Islam
                </h1>

                <div className="mt-2">
                  <span className="inline-block w-40 h-1 bg-green-500 rounded-full"></span>
                  <span className="inline-block w-3 h-1 ml-1 bg-green-500 rounded-full"></span>
                  <span className="inline-block w-1 h-1 ml-1 bg-green-500 rounded-full"></span>
                </div>
              </div>

              {devInfos.map((info, index) => (
                <div key={index} className="flex flex-col gap-5 mb-3">
                  <div className=" h-16 w-16 rounded-full  bg-green-100 p-3  flex items-center justify-center">
                    <img src={info.image} className=" w-full" />
                  </div>

                  <div className="mt-4 md:mt-0 w-full">
                    <h1 className="text-xl font-semibold text-gray-700 capitalize ">
                      {info.title}
                    </h1>

                    <p className="mt-3 text-gray-500 ">{info.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:flex lg:items-center lg:w-1/2 lg:justify-center flex-col">
              <img
                className="w-[15rem] h-[15rem] object-cover xl:w-[20rem] xl:h-[20rem] rounded-full"
                src={jayedImg}
                alt="Jayed"
              />
              <div className="max-w-[20rem] text-center text-xl font-semibold mt-5">
                Next.JS, Typescript, TailwindCSS, MUI, Flutter, NodeJS, MongoDB
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDevInfo;
