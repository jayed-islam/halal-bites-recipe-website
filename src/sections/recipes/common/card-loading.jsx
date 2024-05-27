const CardLoading = () => {
  return (
    <div className="border border-gray-300 shadow max-w-sm w-full mx-auto rounded-lg">
      <div className="animate-pulse">
        <div className=" bg-slate-200 h-48 w-full"></div>
        <div className="flex-1 space-y-6 p-5">
          <div className="h-3 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-3 bg-slate-200 rounded col-span-2"></div>
              <div className="h-3 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-3 bg-slate-200 rounded"></div>
            <div className="h-7 mt-5 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLoading;
