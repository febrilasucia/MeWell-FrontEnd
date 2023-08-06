import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const DashboardUser = () => {
  const authState = useSelector((state) => state.auth);
  console.log(authState);
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">Selamat Datang di Dashboard Psikologi</h1>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Informasi Pengguna</h2>
            {/* Tampilkan informasi pengguna seperti nama, alamat, email, dll. */}
            <h3>{authState.user.id}</h3>
            <h3>{authState.user.email}</h3>
            <h3>{authState.user.name}</h3>
            <h3>{authState.user.role}</h3>
          </div>

          {/* Tambahkan komponen-komponen lain sesuai dengan kebutuhan */}
        </div>
      </div>
    </>
  );
};

export default DashboardUser;
