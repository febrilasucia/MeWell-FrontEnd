import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import LogoHori from '../image/logo-hori.png';
import LogoMandeh from '../image/logo-mandeh.png';
import LogoTulisanMandeh from '../image/logo-tulisan-lentera2.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav className="bg-bgSec shadow-xl z-10">
      <div className="flex flex-col lg:flex-row">
        <div className="flex justify-between items-center border-b lg:border-b-0">
          <div className="p-2">
            <button
              onClick={toggleMenu}
              className="focus:outline bgOpt font-bold block lg:hidden"
            >
              <div className="">
                <div className="w-[470px] p-2 flex flex-wrap items-center justify-around">
                  <div className="">
                    <Link to={'/'}>
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
                    <Link to={'/'}>
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
                        className={!isOpen ? 'block' : 'hidden'}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                      <path
                        className={isOpen ? 'block' : 'hidden'}
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
            isOpen ? 'block' : 'hidden'
          } lg:flex flex-col lg:flex-row justify-between items-center w-full text-textSec`}
        >
          <div className="ml-3 flex flex-col lg:flex-row gap-4">
            <Link to={'/'} className=" hover:font-bold ">
              Home
            </Link>
            <Link to={'/blog'} className=" hover:font-bold">
              Blog
            </Link>
            <Link to={'/video'} className=" hover:font-bold">
              Video
            </Link>
            <Link to={'/tes'} className=" hover:font-bold">
              Tes Psikologi
            </Link>
            <Link to={'/konsultasi'} className=" hover:font-bold">
              Konsultasi
            </Link>
          </div>
          <div className={!isOpen ? 'block' : 'hidden'}>
            <img className="h-[30px]" src={LogoHori} alt="LogoHori" />
          </div>
          <div className="my-3 flex items-center lg:flex-row" ref={dropdownRef}>
            {isLogin ? (
              <div className="mr-8 my-3 flex gap-3 flex-col items-baseline lg:flex-row">
                <div className="relative">
                  <div
                    className="flex gap-2 items-center text-textSec rounded-2xl cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    <FaUserCircle className="text-xl hover:text-textPrimary" />
                    {user.name}
                  </div>
                  {dropdownOpen && (
                    // dropdown-menu w-48 py-2 mt-2 ml-4 text-base text-left rounded-lg shadow-lg bg-white
                    <ul className="dropdown-menu w-48 py-2 mt-2 ml-4 text-base text-left rounded-lg shadow-lg min-w-max items-center  bg-white float-left  list-none   m-0 bg-clip-padding border-none dropdown-menu fixed right-5">
                      <li>
                        <Link
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          to="/profile"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          onClick={handleLogout}
                        >
                          Logout
                        </Link>
                      </li>
                      {user.role === 'admin' && (
                        <li>
                          <Link
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            to="/admin/dashboard"
                          >
                            Admin
                          </Link>
                        </li>
                      )}
                    </ul>
                  )}
                </div>
              </div>
            ) : (
              <div className="mr-8 my-3 flex gap-3 flex-col items-baseline lg:flex-row">
                <Link
                  className="px-9 py-1 bg-bgOpt2 hover:bg-bgOpt text-white rounded-2xl"
                  to="/login"
                >
                  Masuk
                </Link>
                <Link
                  className="px-9 py-1 bg-bgFunc hover:bg-bgFunc3 text-white rounded-2xl"
                  to="/register"
                >
                  Daftar
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
