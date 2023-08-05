import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { FaUsers, FaFileVideo, FaBookOpen, FaUserMd, FaVideo } from "react-icons/fa";

const DashboardAdmin = () => {
  const [activePage, setActivePage] = useState("Dashboard");

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
            <div className="flex p-5 items-center justify-center gap-5  w-[300px] h-[150px] border  rounded-sm shadow-md bg-white">
              <div>
                <FaUsers className="w-20 h-20 text-textSec" />
              </div>
              <div>
                <a href="#">
                  <h5 className="mb-2 text-3xl font-semibold tracking-tight text-textSec">
                    Users
                  </h5>
                </a>
                <p className="mb-3 font-normal text-textFunc">Jumlah : 10</p>
              </div>
            </div>
            <div className="flex p-5 items-center justify-center gap-5 w-[300px] h-[150px] border  rounded-sm shadow-md bg-white">
              <div>
                <FaBookOpen className="w-20 h-20 text-textSec" />
              </div>
              <div>
                <a href="#">
                  <h5 className="mb-2 text-3xl font-semibold tracking-tight text-textSec">
                    Blogs
                  </h5>
                </a>
                <p className="mb-3 font-normal text-textFunc">Jumlah : 10</p>
              </div>
            </div>
            <div className="flex p-5 items-center justify-center gap-5 w-[300px] h-[150px] border  rounded-sm shadow-md bg-white">
              <div>
                <FaVideo className="w-20 h-20 text-textSec" />
              </div>
              <div>
                <a href="#">
                  <h5 className="mb-2 text-3xl font-semibold tracking-tight text-textSec">
                    Videos
                  </h5>
                </a>
                <p className="mb-3 font-normal text-textFunc">Jumlah : 10</p>
              </div>
            </div>
            <div className="flex p-5 items-center justify-center gap-5 w-[300px] h-[150px] border  rounded-sm shadow-md bg-white">
              <div>
                <FaUserMd className="w-20 h-20 text-textSec" />
              </div>
              <div>
                <a href="#">
                  <h5 className="mb-2 text-3xl font-semibold tracking-tight text-textSec">
                    Konsultasi
                  </h5>
                </a>
                <p className="mb-3 font-normal text-textFunc">Jumlah : 10</p>
              </div>
            </div>
            

            {/* <div className="mx-5">
              <h2 className="text-textSec font-bold">Dummy Data</h2>
              <p className="my-2">Total Blogs: {dummyData.blogs}</p>
              <p className="my-2">Total Videos: {dummyData.videos}</p>
              <p className="my-2">
                Total Consultations: {dummyData.consultations}
              </p>
              <p className="my-2">Total Users: {dummyData.users}</p>
            </div> */}
          </div>
          {/* content */}
        </div>
        {/* Content */}
      </div>
    </>
  );
};

export default DashboardAdmin;
