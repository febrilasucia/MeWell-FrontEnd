import React from "react";
import Sidebar from "./Sidebar";

const DashboardAdmin = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        {/* Content */}
        <div className="w-[1000px] mx-auto mt-10 justify-center">
          {/* judul */}
          <div>
            <h1 className="text-sizeTri text-textSec font-bold">Dashboard</h1>
            <p className="my-1 text-textSec">Dashboard</p>
          </div>
          {/* judul */}
          {/* content */}
          <div className="w-[1000px] h-[1000px]  bg-bgTri mx-auto mt-5 justify-center rounded-md shadow-sm shadow-textFunc">
            <div className="mx-5">Ini dashboard admin</div>
          </div>
          {/* content */}
        </div>

        {/* Content */}
      </div>
    </>
  );
};

export default DashboardAdmin;
