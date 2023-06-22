import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ListBlog from "./pages/v_Blog/List";
import DetailBlog from "./pages/v_Blog/Detail";
import ListVideo from "./pages/v_Video/List";
import DetailVideo from "./pages/v_Video/Detail";
import Konsultasi from "./pages/v_Konsultasi/Detail";
import ListTes from "./pages/v_Tes-Psikologi/List";
// import DetailTesIE from "./pages/v_Tes-Psikologi/TesIE/Detail";
import DetailTesIE from "./pages/v_Tes-Psikologi/TesIE/TesIE";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardUserPage from "./pages/User/DashboardUserPage";
import DashboardAdminPage from "./pages/Admin/DashboardAdminPage";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-bgFunc h-12 w-12 mb-4"></div>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />

          {/* user */}
          <Route path="/dashboard" element={<DashboardUserPage />} />
          <Route path="/blog" element={<ListBlog />} />
          <Route path="/blog/:id" element={<DetailBlog />} />
          <Route path="/video" element={<ListVideo />} />
          <Route path="/video/:id" element={<DetailVideo />} />
          <Route path="/konsultasi" element={<Konsultasi />} />
          <Route path="/tes" element={<ListTes />} />
          <Route path="/tes/detail-ie" element={<DetailTesIE />} />
          {/* user */}

          {/* admin */}
          <Route path="/admin/dashboard" element={<DashboardAdminPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
