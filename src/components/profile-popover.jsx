/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Popover, Transition } from "@headlessui/react";
import { PiCoinsThin } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import { Fragment, useContext } from "react";
import { AppContext } from "../context/auth-context";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export default function ProfilePopover() {
  const { user, logOut } = useContext(AppContext);

  const { user: currentUser } = useSelector((state) => state.auth);

  const handleLogout = () => {
    logOut();
    toast.success("Logged Out successfully!");
  };
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center gap-2 rounded-full p-1 text-sm/6 font-semibold transition data-[hover]:scale-105 data-[hover]:bg-white/15 border ring-none">
            <img
              src={user.photoURL}
              className="h-9 w-9 bg-gray-500 rounded-full"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 mt-3 w-52 max-w-xs transform px-4 pt-3 pb-5 bg-white shadow-lg rounded-3xl">
              <div className="flex flex-col  items-start border-b pb-3">
                <h2 className="text-md font-semibold">
                  {user && user?.displayName}
                </h2>
                <p className="text-sm">{user && user?.email}</p>
              </div>

              <div className="mt-3">
                <button className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition-all duration-150 w-full">
                  <PiCoinsThin />
                  <span>
                    Coins:{" "}
                    <span className="text-green-500 font-semibold">
                      {currentUser?.coin}
                    </span>
                  </span>
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition-all duration-150 w-full"
                >
                  <IoLogOutOutline />
                  <span>Logout</span>
                </button>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
