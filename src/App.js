import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListBlog from './pages/v_Blog/v_list_blog';
import DetailBlog from './pages/v_Blog/v_detail_blog';
import ListVideo from './pages/v_Video/v_list_video';
import DetailVideo from './pages/v_Video/v_detail_video';
import Konsultasi from './components/Konsultasi/KonsultasiComponent';
import ListTes from './pages/v_Tes-Psikologi/v_list_tes';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardUserPage from './pages/User/DashboardUserPage';
import DashboardAdminPage from './pages/Admin/DashboardAdminPage';

function App() {
  return (
    <div className="App">
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
        {/* user */}

        {/* admin */}
        <Route path="/admin/dashboard" element={<DashboardAdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
