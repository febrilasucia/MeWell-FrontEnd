import React from 'react';
import Sidebar from './Sidebar';

const DashboardAdmin = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="h-screen flex-1">
          <div className=" min-h-screen">
            <div className="container mx-auto py-8">
              <h1 className="text-3xl font-bold mb-4">
                Selamat Datang di Dashboard Psikologi
              </h1>

              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Informasi Pengguna</h2>
                {/* Tampilkan informasi pengguna seperti nama, alamat, email, dll. */}
              </div>

              {/* Tambahkan komponen-komponen lain sesuai dengan kebutuhan */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
