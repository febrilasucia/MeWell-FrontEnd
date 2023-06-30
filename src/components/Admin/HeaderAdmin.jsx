import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FaUserCircle } from 'react-icons/fa';
import LogoHori from "../../image/logo-hori.png";
import LogoMandeh from "../../image/logo-mandeh.png";
import LogoTulisanMandeh from "../../image/logo-tulisan-lentera2.png";
import { useSelector } from "react-redux";

function HeaderAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const { token, user, isLoading, error, isLogin } = useSelector(
    (state) => state.auth
  );

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
                          <img
                            className="h-[30px]"
                            src={LogoMandeh}
                            alt="LogoMandeh"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="">
                      <Link to={"/"}>
                        <div>
                          <img
                            className="h-[30px]"
                            src={LogoTulisanMandeh}
                            alt="LogoTulisanMandeh"
                          />
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
            <div className="ml-3 flex flex-col lg:flex-row gap-4">
              <Link to={"/admin/dashboard"} className=" hover:font-bold ">
                Home
              </Link>
              <Link to={"/admin/create-blog"} className=" hover:font-bold">
                Create Blog
              </Link>
              <Link to={"/admin/blog"} className=" hover:font-bold">
                Blog
              </Link>
            </div>
            <div className={!isOpen ? "block" : "hidden"}>
              <img className="h-[30px]" src={LogoHori} alt="LogoHori" />
            </div>
            <div className="my-3 flex items-center lg:flex-row">
              {/* <Link className="invisible sm:visible">Febrila Sucia</Link>
              <Link to={"/profile"} className="-ml-[85px] sm:mx-5 ">
                <FaUserCircle className="text-3xl hover:text-textPrimary" />
              </Link> */}
              {isLogin ? (
                <div className="mr-8 my-3 flex gap-3 flex-col items-baseline lg:flex-row">
                  <span className="px-9 py-1 text-white rounded-2xl">
                    {user.name}
                  </span>
                  {/* <Link
                    to={"/profile"}
                    className="-ml-[85px] sm:mx-5"
                  >
                    <FaUserCircle className="text-3xl hover:text-textPrimary" />
                  </Link> */}
                </div>
              ) : (
                <div className="mr-8 my-3 flex gap-3 flex-col items-baseline lg:flex-row">
                  <Link
                    className="px-9 py-1 bg-bgOpt2 hover:bg-bgOpt text-white rounded-2xl"
                    to={"/login"}
                  >
                    Masuk
                  </Link>
                  <Link
                    className="px-9 py-1 bg-bgFunc hover:bg-bgFunc3 text-white rounded-2xl"
                    to={"/register"}
                  >
                    Daftar
                  </Link>
                </div>
              )}
            </div>

            {/* Auth */}
            {/* {isSuccess && isSuccess == true ? (
              <div className="my-3 flex items-center lg:flex-row">
                <Link className="hidden sm:hidden md:hidden lg:block ">
                  {user.name}
                </Link>
                <Link
                  className="mx-5"
                  onClick={() => setProfileToggle(!profileToggle)}
                >
                  <FaUserCircle className="text-3xl hover:text-textPrimary" />
                  {profileToggle ? (
                    <ul className="dropdown-menu min-w-max items-center  bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none dropdown-menu fixed right-5">
                      <li>
                        <Link
                          className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                          href="#"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={logout}
                          className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                          href="#"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  ) : null}
                </Link>
              </div>
              {/* <img width={24} src={'https://finalproject-be-production.up.railway.app/images/'+user.photo.split('/').pop()} alt="" /> */}
            {/* ) : !isSuccess ? (
            <div className="mr-3 my-3 flex gap-3 flex-col items-baseline lg:flex-row">
              <Link
                className="px-5 border-2 border-white-500 hover:border-3 hover:font-bold rounded-lg"
                to={"/login"}
              >
                Masuk
              </Link>
              <Link
                className="px-4 border-2 border-white-500 hover:border-3 hover:font-bold rounded-lg"
                to={"/register"}
              >
                Daftar
              </Link>
            </div>
            ) : null} */}
            {/* Auth */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderAdmin;
