import React from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Upsc03() {
  return (
    <div>
      <div>
        <Disclosure as="nav" className="bg-gray-800 fixed min-w-full ">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  ">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Link to="/03">
                      <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                          />
                        </svg>
                      </Disclosure.Button>
                    </Link>
                  </div>
                  <div className=" ml-11 pl-3 mt-2">
                    <h4 className="text-white">UPSC Papers</h4>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </div>
      <div>
        <embed
          className="embed-responsive-item min-h-screen min-w-full"
          frameBorder=""
          src="assets/2003.pdf"
        />
      </div>
    </div>
  );
}

