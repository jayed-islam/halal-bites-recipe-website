// eslint-disable-next-line no-unused-vars, react/prop-types
const SectionTitle = ({ titleFirstPart, titleSecondPart, subTitle }) => {
  return (
    <div className="max-w-6xl mx-auto flex items-center justify-center flex-col gap-2">
      <h2 className="text-2xl md:text-4xl font-bold">
        {titleFirstPart}{" "}
        <span className="text-green-500">{titleSecondPart}</span>
      </h2>
      <p className="text-center text-lg">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
