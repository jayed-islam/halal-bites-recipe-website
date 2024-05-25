import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { countries } from "../../../constants";
import { BsArrowRightCircle } from "react-icons/bs";

const AllRecipesToolBar = () => {
  const [selected, setSelected] = useState(countries[0]);

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-20 md:px-11 lg:px-5 xl:px-0 mt-9 mb-16">
      <div className="bg-gray-100 p-4  rounded-3xl lg:rounded-full flex items-center gap-3 lg:gap-5 flex-col md:flex-row">
        <input
          type="text"
          className="w-full rounded-full py-3 outline-none border px-6 shadow-sm"
          placeholder="Search..."
        />
        <div className="w-full flex items-center flex-col md:flex-row gap-3 lg:gap-5">
          <div className="w-full lg:w-2/3">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative">
                <Listbox.Button className="  border shadow-sm relative w-full cursor-default rounded-full bg-white py-3 md:py-3.5 pl-6 pr-10 text-left focus:outline-none  sm:text-sm">
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {countries.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-green-100 text-green-900"
                              : "text-gray-900"
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <button className="w-full lg:w-1/3 border px-6 shadow-sm py-3 rounded-full bg-green-500 hover:bg-slate-800 transition-all duration-150 text-white text-center flex items-center group gap-3 justify-center overflow-hidden">
            <BsArrowRightCircle className="lg:-translate-x-16 group-hover:translate-x-1 transition-all duration-200" />
            <span className="-translate-x-3 group-hover:translate-x-0 transition-all duration-200">
              Search
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllRecipesToolBar;
