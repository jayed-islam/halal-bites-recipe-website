const DetailsRecipeView = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-20 md:px-11 lg:px-5 xl:px-0 mt-9 mb-16">
      <div className="flex items-start gap-7 flex-col lg:flex-row">
        <div className="w-full">
          <iframe 
            className="w-full h-[301px] lg:h-[400px]"
            src="https://www.youtube.com/embed/PvYv3y7TYtI?si=SAeynrGmoPsw32IF"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full lg:w-[50rem] px-5 pt-5">
          <h2 className="text-2xl font-semibold">Maxican Pizza Test Better</h2>
          <h1 className="text-lg font-semibold pt-5 pb-3">Description</h1>
          <p className="text-md text-gray-400">
            Pizza is a savory dish of Italian origin consisting of a usually
            round, flattened base of leavened wheat-based dough topped with
            tomatoes, cheese, and often various other ingredients.
          </p>
          <div className="flex items-center gap-5 mt-7">
            <h2 className="text-lg font-semibold">Purched:</h2>
            <div className="flex -space-x-1 overflow-hidden">
              <img
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center gap-5 mt-2">
            <h2 className="text-lg font-semibold">Created By:</h2>
            <p>createdby@gmail.com</p>
          </div>
          <div className="flex items-center gap-5 mt-2">
            <h2 className="text-lg font-semibold">Country:</h2>
            <p>Madinah</p>
          </div>
          <div className="flex items-center gap-5 mt-2">
            <h2 className="text-lg font-semibold">Category:</h2>
            <div className="bg-green-500 px-5 py-1 rounded-full text-white">
              Saladah
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsRecipeView;
