import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// video
import ListVideo from './pages/UserPage/VideoPage/ListVideoPage';
import DetailVideoPage from './pages/UserPage/VideoPage/DetailVideoPage';
// blog
import ListBlogPage from './pages/UserPage/BlogPage/ListBlogPage';
import DetailBlogPage from './pages/UserPage/BlogPage/DetailBlogPage';
// tes
import ListTes from './pages/TesPsikologiPage/ListTesPsikologi';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardAdminPage from './pages/Admin/DashboardAdminPage';
// ! user
import DashboardUserPage from './pages/UserPage/DashboardUserPage';
//konsul
import DetailKonsultasiPage from './pages/KonsultasiPage/DetailKonsultasiPage';
// import DetailTesIE from "./pages/v_Tes-Psikologi/TesIE/Detail";
import DetailTesIE from './pages/TesPsikologiPage/TesIEPage/TesIE';

// ! Admin
import CreateBlogAdminPage from './pages/Admin/blogAdminPage/CreateBlogAdminPage';
import EditBlogAdminPage from './pages/Admin/blogAdminPage/EditBlogAdminPage';
import ListBlogAdminPage from './pages/Admin/blogAdminPage/ListBlogAdminPage';
import CreateVideoAdminPage from './pages/Admin/videoAdminPage/CreateVideoAdminPage';
import EditVideoAdminPage from './pages/Admin/videoAdminPage/EditVideoAdminPage';
import ListVideoAdminPage from './pages/Admin/videoAdminPage/ListVideoAdminPage';
import BlogIcon from './components/Admin/assets/BlogIcon';

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
          <Route path="/tes" element={<ListTes />} />
          <Route path="/tes/detail-ie" element={<DetailTesIE />} />
          {/* user */}

          {/* admin */}
          <Route path="/admin/dashboard" element={<DashboardAdminPage />} />
          <Route path="/admin/blog" element={<ListBlogAdminPage />} />
          <Route
            path="/admin/blog/create-blog"
            element={<CreateBlogAdminPage />}
          />
          <Route path="/admin/blog/:id/edit" element={<EditBlogAdminPage />} />
          <Route path="/admin/video" element={<ListVideoAdminPage />} />
          <Route
            path="/admin/video/create-video"
            element={<CreateVideoAdminPage />}
          />
          <Route
            path="/admin/video/edit-video"
            element={<EditVideoAdminPage />}
          />
          <Route path="/blog-icon" element={<BlogIcon />} />
          <Route path="/blog-icon" element={<BlogIcon />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
