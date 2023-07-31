import React, { useState } from "react";
import Sidebar from "./SidebarUser";
import { FaUsers, FaBookOpen, FaUserMd, FaVideo } from "react-icons/fa";

const DashboardUser = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  // Dummy data for the dashboard
  const dummyData = {
    blogs: 25,
    videos: 10,
    consultations: 5,
    users: 1000,
  };

  return (
    <>
      <div className="flex">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        {/* Content */}
        <div className="h-screen mx-auto pt-10">
          {/* judul */}
          <div>
            <h1 className="text-sizeTri text-textSec font-bold">Dashboard</h1>
            <p className="my-3 text-textFunc">Dashboard</p>
          </div>
          {/* judul */}
          {/* content */}
          <div className="flex flex-wrap gap-5  w-[980px] p-5 bg-bgTri rounded-md shadow-sm shadow-textFunc">
            <p>Halo User</p>
          </div>
          {/* content */}
        </div>
        {/* Content */}
      </div>
    </>
  );
};

export default DashboardUser;
