import { useState } from "react";

const Navbar = ({toggleCard}) => {
  const [open, setOpen] = useState(false);


  const hendleOpen = () => {
    setOpen(true);
    toggleCard()
 
  };
  const handleClose = () => {
    setOpen(false);
    toggleCard()
  
  };

  return (
    <>
      <div className="text-center  absolute">
        <div
          className={`flex w-48 fixed h-screen  border-r-4 border-r-[#D29A5A]  bg-black/75
              ${open ? "hidden" : "block"} 
          `}
        >
          <div className="h-screen sticky w-48  my-8 ">
            <svg
              className="mx-20"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={hendleOpen}
            >
              <path
                d="M35 30H5V26.6667H35V30ZM35 21.6667H5V18.3333H35V21.6667ZM35 13.3333H5V10H35V13.3333Z"
                fill="white"
              />
            </svg>

            <div className="">
              <img
                className=" object-fill h-full my-48 mx-5  w-56 "
                src="./src/assets/222.png"
                alt="222.png"
              />
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="drawer-navigation"
          className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform  border-r-8  bg-black/75 border-r-[#D29A5A]  w-96 dark:bg-gray-800"
          tabIndex="-1"
          aria-labelledby="drawer-navigation-label"
        >
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={handleClose}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 9L9 27"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 9L27 27"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="">
            <img
              className=" object-fill h-56   w-80 "
              src="./src/assets/225.png"
              alt="225.png"
            />
          </div>
          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center  p-2 text-white  hover:text-[#D29A5A]"
                >
                  <span className="text-xl font-thin">HOME</span>
                </a>
              </li>
              <li>
                <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2  text-white  hover:text-[#D29A5A]"
                    >
                      <span className="text-xl font-thin">PRODUCTS</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2  text-white  hover:text-[#D29A5A]"
                >
                  <span className="text-xl font-thin">MEET CHEF MATT</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2  text-white  hover:text-[#D29A5A]"
                >
                  <span className="text-xl font-thin">FAQ</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2  text-white  hover:text-[#D29A5A]"
                >
                  <span className="text-xl font-thin">CONTECT WITH US</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
