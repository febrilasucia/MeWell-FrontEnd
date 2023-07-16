import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// ! user
// blog
import ListBlogPage from './pages/BlogPage/ListBlogPage';
import DetailBlogPage from './pages/BlogPage/DetailBlogPage';
// video
import ListVideo from './pages/VideoPage/ListVideoPage';
import DetailVideoPage from './pages/VideoPage/DetailVideoPage';
// tes
import ListTes from './pages/TesPsikologiPage/ListTesPsikologi';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardAdminPage from './pages/Admin/DashboardAdminPage';
import DashboardUserPage from './pages/DashboardUserPage';
//konsul
import DetailKonsultasiPage from './pages/KonsultasiPage/DetailKonsultasiPage';
import FormKonsultasiPage from './components/Konsultasi/FormKonsultasi';
// import DetailTesIE from "./pages/v_Tes-Psikologi/TesIE/Detail";
import DetailTesIE from './pages/TesPsikologiPage/TesIEPage/TesIE';
import DetailKetergantunganPage from './pages/TesPsikologiPage/Ketergantungan/DetailKetergantunganPage';

// ! Admin
// video
import ListVideoAdminPage from './pages/Admin/videoAdminPage/ListVideoAdminPage';
import EditVideoAdminPage from './pages/Admin/videoAdminPage/EditVideoAdminPage';
import CreateVideoAdminPage from './pages/Admin/videoAdminPage/CreateVideoAdminPage';
// konsul
import ListKonsulAdminPage from './pages/Admin/konsultasiAdminPage/ListKonsulAdminPage';
import DetailKonsulAdminPage from './pages/Admin/konsultasiAdminPage/DetailKonsulAdminPage';
import CreateKonsulAdminPage from './pages/Admin/konsultasiAdminPage/CreateKonsulAdminPage';
import EditKonsulAdminPage from './pages/Admin/konsultasiAdminPage/EditKonsulAdminPage';
// blog
import ListBlogAdminPage from './pages/Admin/blogAdminPage/ListBlogAdminPage';
import EditBlogAdminPage from './pages/Admin/blogAdminPage/EditBlogAdminPage';
import CreateBlogAdminPage from './pages/Admin/blogAdminPage/CreateBlogAdminPage';
import BlogIcon from './components/Admin/assets/BlogIcon';
import UserDashboardGuard from './pages/UserDashboardGuard';
import AdminDashboardGuard from './pages/Admin/AdminDashboardGuard';

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
          <Route path="/konsultasi" element={<DetailKonsultasiPage />} />
          <Route
            path="/konsultasi/form-konsultasi"
            element={<FormKonsultasiPage />}
          />
          <Route path="/tes" element={<ListTes />} />
          <Route path="/tes/detail-ie" element={<DetailTesIE />} />
          <Route path="/tes/detail-gk" element={<DetailKetergantunganPage />} />
          {/* user */}

          {/* admin */}
          <Route path="/admin/dashboard" element={ <AdminDashboardGuard> <DashboardAdminPage /></AdminDashboardGuard> } />
          <Route path="/admin/blog" element={<AdminDashboardGuard><ListBlogAdminPage /></AdminDashboardGuard>}/>
          <Route path="/admin/video" element={<AdminDashboardGuard><ListVideoAdminPage /></AdminDashboardGuard>} />
          <Route path="/admin/konsul" element={<AdminDashboardGuard><ListKonsulAdminPage /></AdminDashboardGuard>} />
          <Route path="/admin/konsul/detail" element={<AdminDashboardGuard><DetailKonsulAdminPage /></AdminDashboardGuard>} />
          <Route path="/admin/konsul/edit" element={<EditKonsulAdminPage />} />
          <Route path="/admin/blog/create-blog" element={<AdminDashboardGuard><CreateBlogAdminPage /></AdminDashboardGuard>} />
          <Route path="/admin/blog/:id/edit" element={<AdminDashboardGuard><EditBlogAdminPage /></AdminDashboardGuard>} />
          <Route path="/admin/video" element={<AdminDashboardGuard><ListVideoAdminPage /></AdminDashboardGuard>} />
          <Route path="/admin/video/create-video" element={<AdminDashboardGuard><CreateVideoAdminPage /></AdminDashboardGuard>}/>
          <Route path="/admin/video/:id/edit" element={<AdminDashboardGuard><EditVideoAdminPage /></AdminDashboardGuard>} />
          <Route path="/blog-icon" element={<BlogIcon />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
