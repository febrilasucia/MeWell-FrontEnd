import React, { useState } from "react";
import control from "./assets/control.png";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import LogoHori from "../../image/logo-tulisan-lentera2.png";
import LogoMandeh from "../../image/logo-mandeh.png";

const Sidebar = ({ activePage, setActivePage }) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: 'Dashboard', src: require('./assets/Chart_fill.png'), link:'/admin/dashboard' },
    { title: 'Blog', src: require('./assets/Blog.png'), link: '/admin/create-blog' },
    { title: 'Inbox', src: require('./assets/Chat.png') },
    { title: 'Accounts', src: require('./assets/User.png'), gap: true },
    { title: 'Schedule ', src: require('./assets/Calendar.png') },
    { title: 'Search', src: require('./assets/Search.png') },
    { title: 'Analytics', src: require('./assets/Chart.png') },
    { title: 'Files ', src: require('./assets/Folder.png'), gap: true },
    { title: 'Setting', src: require('./assets/Setting.png') },
  ];

  const handleMenuClick = (title) => {
    setActivePage(title);
    console.log(activePage);
  };

  return (
    <div className="">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-bgTri h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-bgOpt2
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center">
          <img
            src={LogoMandeh}
            className={`cursor-pointer w-[40px] duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <img
            src={LogoHori}
            className={`text-textSec origin-left w-[170px] duration-200 ${
              !open && "scale-0"
            }`}
          />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link to={Menu.link}>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-bgFunc3 hover:text-textOpt text-textSec text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
                onClick={() => handleMenuClick(Menu.title)}
              >
                <img src={Menu.src} style={{ width: "24px", height: "24px" }} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
