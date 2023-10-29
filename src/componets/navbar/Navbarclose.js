import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

export default function Navbarclose() {
  return (
    <div className="bg-gray-800 min-h-[980px] min-w-[980px] fixed ">
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <Link to="/">
                <div className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                </div>
              </Link>
            </div>
            <div className=" justify-start ml-11 pl-3 mt-2">
              <h4 className="text-white">UPSC Papers</h4>
            </div>
          </div>
        </div>

        <div className="space-y-1 px-2 pb-3 pt-2">
          \{" "}
          <div className="text-gray-300 no-underline">
            <Link to="/" className="no-underline">
              <div className="block rounded-md px-3 py-2 text-2xl  text-gray-300 font-medium hover:bg-gray-700 hover:text-white">
                Home
              </div>
            </Link>
            <a href="https://play.google.com/store/apps/details?id=com.tzttonline.applicationnumberone" className="no-underline">
              <div className="block rounded-md px-3 py-2 text-2xl text-gray-300 font-medium hover:bg-gray-700 hover:text-white">
                More App
              </div>
            </a>
            <Link to="/privacy" className="no-underline">
              <div className="block rounded-md px-3 py-2 text-2xl text-gray-300 font-medium hover:bg-gray-700 hover:text-white">
                Privacy Policy
              </div>
            </Link>
            
          </div>
        </div>
      </>
    </div>
  );
}
