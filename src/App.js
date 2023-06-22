import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// video
import ListVideo from './pages/VideoPage/ListVideoPage';
import DetailVideoPage from './pages/VideoPage/DetailVideoPage';
// blog
import ListBlogPage from './pages/UserPage/BlogPage/ListBlogPage';
import DetailBlogPage from './pages/UserPage/BlogPage/DetailBlogPage';
// video
// consul
import ListTes from './pages/TesPsikologiPage/ListTesPsikologi';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardAdminPage from './pages/Admin/DashboardAdminPage';
// user
import DashboardUserPage from './pages/UserPage/DashboardUserPage';
import KepribadianPage from './pages/UserPage/KepribadianPage/KepribadianPage';
import Konsultasi from './pages/v_Konsultasi/Detail';
// import DetailTesIE from "./pages/v_Tes-Psikologi/TesIE/Detail";
import DetailTesIE from './pages/v_Tes-Psikologi/TesIE/TesIE';

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
          <Route path="/blog" element={<ListBlogPage />} />
          <Route path="/blog/:id" element={<DetailBlogPage />} />
          <Route path="/video" element={<ListVideo />} />
          <Route path="/video/:id" element={<DetailVideoPage />} />
          <Route path="/konsultasi" element={<Konsultasi />} />
          <Route path="/tes" element={<ListTes />} />
          <Route path="/tes/detail-ie" element={<DetailTesIE />} />
          <Route path="/Kepribadian" element={<KepribadianPage />} />
          {/* user */}

          {/* admin */}
          <Route path="/admin/dashboard" element={<DashboardAdminPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
