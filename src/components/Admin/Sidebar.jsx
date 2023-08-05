import React, { useContext, useState } from "react";
import control from "./assets/control.png";
import logo from "./assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import LogoHori from "../../image/logo-tulisan-lentera2.png";
import LogoMandeh from "../../image/logo-mandeh.png";
import { FaBookReader, FaComment, FaHome, FaMoneyBill, FaSignOutAlt, FaUserMd, FaUsers, FaVideo } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../features/sidebarSlice";
import { logout } from "../../features/authSlice";

const Sidebar = ({ activePage, setActivePage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { open } = useSelector((state) => state.sidebar);

  const Menus = [
    { title: "Dashboard", icon: <FaHome />, link: "/admin/dashboard" },
    { title: "User", icon: <FaUsers />, link: "/admin/user" },
    { title: "Psikolog", icon: <FaUserMd />, link: "/admin/psikolog" },
    { title: "Blog", icon: <FaBookReader />, link: "/admin/blog" },
    { title: "Video", icon: <FaVideo />, link: "/admin/video" },
    { title: "Konsultasi ", icon: <FaComment />, link: "/admin/konsul" },
    { title: "Pembayaran ", icon: <FaMoneyBill />, link: "/admin/payment" },
  ];

  const handleMenuClick = (title) => {
    setActivePage(title);
    console.log(activePage);
  };

  const handleLogout = () => {
    dispatch(logout()); // Langkah 5: Panggil aksi logout saat tombol logout diklik
    navigate("/");
  };

  return (
    <div className="">
      <div className={` ${open ? "w-72" : "w-20"} bg-bgTri h-screen p-5 pt-8 relative duration-300`}>
        <img
          src={control}
          alt="control"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-bgOpt2
          border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => dispatch(setOpen(!open))}
        />
        <Link to={"/"} className="flex gap-x-4 items-center">
          <img
            src={LogoMandeh}
            alt="LogoMandeh"
            className={`cursor-pointer w-[40px] duration-500 ${open && "rotate-[360deg]"}`}
          />
          <img
            src={LogoHori}
            alt="LogoHori"
            className={`text-textSec origin-left w-[170px] duration-200 ${!open && "scale-0"}`}
          />
        </Link>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link to={Menu.link} key={index}>
              <li
                className={`flex rounded-md p-2 cursor-pointer hover:bg-bgOpt hover:text-textOpt  text-md items-center gap-x-4
              ${Menu.gap ? "mt-9" : "mt-2"}
                } ${activePage === Menu.title ? "bg-bgOpt text-textOpt" : "text-textSec"}`}
                onClick={() => handleMenuClick(Menu.title)}
              >
                <p className="text-center">{Menu.icon}</p>
                {/* <FaHome style={{ width: "24px", height: "24px" }} /> */}
                <span className={`${!open && "hidden"} origin-left duration-200`}>{Menu.title}</span>
              </li>
            </Link>
          ))}
          {/* Tombol Logout */}
          <li
            className={`flex rounded-md p-2 cursor-pointer hover:bg-bgOpt hover:text-textOpt text-md items-center gap-x-4 mt-9 ${
              activePage === "Logout" ? "bg-bgOpt text-textOpt" : "text-textSec"
            }`}
            onClick={() => handleLogout()} // Langkah 6: Panggil handler logout saat tombol logout diklik
          >
            <p className="text-center">
              <FaSignOutAlt />
            </p>
            <span className={`${!open && "hidden"} origin-left duration-200`}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
