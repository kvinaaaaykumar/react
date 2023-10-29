import { Link } from "react-router-dom";
import Navbarback from "../componets/navbar/Navbarback";

export default function Upsc1999() {
  return (
    <>
      <Navbarback />
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-3 pb-[20px] pt-[81px] sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="grid grid-cols-1 grid-rows-2 gap-3 sm:gap-6 lg:gap-8">
            {/* This is one */}

            <div className=" shadow-[0_8px_10px_-5px_rgba(0,0,0,0.3)] bg-[#F7EEFF] rounded-md min-w-40 h-[130px]">
              <div className="flex h-[60px] items-center justify-center ">
                <div className="block rounded-md px-3 py-2 font-medium text-gray-950">
                  Civil Services 1999
                </div>
              </div>
              <div className="flex h-[10px]  items-center justify-center mt-1">
                <div className="block rounded-md px-3 pt-3 font-medium text-gray-950">
                  <Link to="/099">
                    <button className=" mr-2 justify-center  rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Read Online
                    </button>
                  </Link>
                  <a
                    download=""
                    href="assets/1999.pdf"
                    class="button button--flex no-underline"
                  >
                    <button className=" ml-2 justify-center  rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Download
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
