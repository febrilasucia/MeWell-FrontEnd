import React, { useState } from "react";
import Sidebar from "./SidebarPsikolog";
import { FaUsers, FaBookOpen, FaUserMd, FaVideo } from "react-icons/fa";

const DashboardPsikolog = () => {
  const [activePage, setActivePage] = useState("Chat Pasien");

  // Dummy data for the dashboard
  const dummyData = {
    blogs: 25,
    videos: 10,
    consultations: 5,
    users: 1000,
  };

  return (
    <div className="flex">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        {/* Content */}
        <div className="h-screen mx-auto pt-10">
            <div className="flex justify-center items-center">
                <div className="w-11/12">
                <div className="bg-bgOpt text-white font-bold py-4 pl-8 rounded-xl">
                    {/* <FontAwesomeIcon icon={faCircleUser} size="2xl" className="pr-2" /> */}
                    <span className="font-normal text-lg">Dr. Username, A.Md.Kom</span>
                </div>
                <div className="bg-bgTri h-[70vh] overflow-scroll">
                    <div className="flex justify-start">
                    <div className="bg-bgOpt rounded-xl max-w-[50%] m-5 px-4 pt-4 pb-2 relative before:w-0 before:h-0 before:border-l-transparent before:border-r-transparent before:border-t-transparent before:border-b-bgOpt before:border-[10px] before:absolute before:left-[-10px] before:bottom-0">
                        <p>
                        udin sed tempor at, tristique id lacus. Duis aliquam ante libero, nec convallis purus dignissim eu. Phasellus nec consectetur erat, eu gravida metus. Phasellus ultrices turpis libero, bibendum
                        posuere dolor scelerisque nec. Donec cursus, felis convallis tristique dapibus, libero eros pulvinar nunc, id varius mauris eros se
                        </p>
                        <small className="block mt-2 text-right font-bold text-xxs">10:32</small>
                    </div>
                    </div>
                    <div className="flex justify-end">
                    <div className="bg-bgFunc3 rounded-xl max-w-[50%] m-5 px-4 pt-4 pb-2 relative before:w-0 after:h-0 after:border-l-transparent after:border-r-transparent after:border-t-transparent after:border-b-bgFunc3 after:border-[10px] after:absolute after:right-[-10px] after:bottom-0">
                        <p>LOREM IPSUM DOLOR SET AMET AWAODIJAWOID JAasdsadadadadasdadadasdsadadasdasd</p>
                        <small className="block mt-2 text-left font-bold text-xxs">10:32</small>
                    </div>
                    </div>
                    
                </div>
                <div className="bg-bgOpt text-white font-bold py-4 rounded-xl">
                    <form className="flex mx-4">
                    <input
                        type="text"
                        placeholder="Typing Here..."
                        className="rounded text-black bg-bgSec font-normal grow focus:outline-none mr-2 p-2"
                    />
                    <button type="submit">
                        <svg style={{ fill: "white" }} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                    </button>
                    </form>
                </div>
                </div>
            </div>
            {/* content */}
        </div>
    {/* Content */}
    </div>
  );
};

export default DashboardPsikolog;
