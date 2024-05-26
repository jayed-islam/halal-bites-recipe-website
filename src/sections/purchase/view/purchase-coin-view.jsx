const PurchaseCoinView = () => {
  const purchaseOptions = [
    { coins: 100, dollars: 1 },
    { coins: 500, dollars: 5 },
    { coins: 1000, dollars: 10 },
  ];
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-20 md:px-11 lg:px-5 xl:px-0 mt-9 mb-16 pb-32">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-2">Awesome Package</h1>
        <h2 className="text-xl font-semibold mb-8">Purchase our packages</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {purchaseOptions.map((option, index) => (
          <div
            key={index}
            className="max-w-sm  bg-white shadow-lg rounded-lg overflow-hidden border"
          >
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{option.coins} Coins</h2>
              <p className="text-gray-700 text-base">
                Purchase for ${option.dollars}
              </p>
              <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Purchase
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseCoinView;
