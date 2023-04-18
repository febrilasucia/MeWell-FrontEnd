import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import LogoHori from "../../image/logo-hori.png";
import LogoMandeh from "../../image/logo-mandeh.png";
import LogoTulisanMandeh from "../../image/logo-tulisan-lentera2.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-bgSec shadow-xl">
      <div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex justify-between items-center border-b lg:border-b-0">
            <div className="p-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline bgOpt font-bold block lg:hidden"
              >
                <div className="">
                  <div className="w-[470px] p-2 flex flex-wrap items-center justify-around">
                    <div className="">
                      <Link to={"/"}>
                        <div>
                          <img className="h-[30px]" src={LogoMandeh} />
                        </div>
                      </Link>
                    </div>
                    <div className="">
                      <Link to={"/"}>
                        <div>
                          <img className="h-[30px]" src={LogoTulisanMandeh} />
                        </div>
                      </Link>
                    </div>
                    <div className="">
                      <svg
                        className="w-6 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        strokeWidth="2"
                        stroke="currentColor"
                        color="#FFB803"
                      >
                        <path
                          className={!isOpen ? "block" : "hidden"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                        <path
                          className={isOpen ? "block" : "hidden"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row justify-between items-center w-full text-textSec`}
          >
            <div className="flex flex-col lg:flex-row">
              <Link to={"/home"} className="p-4 hover:font-bold ">
                Home
              </Link>
              <Link to={"/blog"} className="p-4 hover:font-bold">
                Blog
              </Link>
              <Link to={"/"} className="p-4 hover:font-bold">
                Video
              </Link>
              <Link to={"/"} className="p-4 hover:font-bold">
                Kuis
              </Link>
              <Link to={"/"} className="p-4 hover:font-bold">
                Konsultasi
              </Link>
            </div>
            <div className={!isOpen ? "block" : "hidden"}>
              <img className="h-[30px]" src={LogoHori} />
            </div>
            <div className="my-3 flex items-center lg:flex-row">
              <Link className="invisible sm:visible">Febrila Sucia</Link>
              <Link to={"/profile"} className="-ml-[85px] sm:mx-5 ">
                <FaUserCircle className="text-3xl hover:text-textPrimary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
