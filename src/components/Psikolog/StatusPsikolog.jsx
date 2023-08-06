import React, { useState } from "react";
import Sidebar from "./SidebarPsikolog";
import { useSelector } from "react-redux";

const StatusPsikolog = () => {
  const [activePage, setActivePage] = useState("Status Penerimaan");
  const authState = useSelector((state) => state.auth);
  const status = authState?.user?.psikologStatus || "n/a";

  return (
    <>
      <div className="flex">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        {/* Content */}
        <div className="h-screen mx-auto pt-10">
          {/* judul */}
          <div>
            <h1 className="text-sizeTri text-textSec font-bold">Status Penerimaan</h1>
            <p className="my-3 text-textFunc">Dashboard / Status</p>
          </div>
          {/* judul */}
          {/* content */}
          <div className="flex flex-wrap gap-5  w-[980px] p-5 bg-bgTri rounded-md shadow-sm shadow-textFunc">
            <p>{status}</p>
          </div>
          {/* content */}
        </div>
        {/* Content */}
      </div>
    </>
  );
};

export default StatusPsikolog;
