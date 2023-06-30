import React, { useState } from 'react';
import Sidebar from './Sidebar';

const DashboardAdmin = () => {
  const [activePage, setActivePage] = useState('Dashboard');
  return (
    <>
      <div className="flex">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        {/* Content */}
        <div className="h-screen mx-auto mt-10 justify-center">
          {/* judul */}
          <div>
            <h1 className="text-sizeTri text-textSec font-bold">Dashboard</h1>
            <p className="my-3 text-textFunc">Dashboard</p>
          </div>
          {/* judul */}
          {/* content */}
          <div className="w-[1000px] bg-bgTri mx-auto mt-5 justify-center rounded-md shadow-sm shadow-textFunc">
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
