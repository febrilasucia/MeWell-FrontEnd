import React from "react";
import Header from "./components/Header/Header";
import { Route, Switch, Routes } from "react-router-dom";
import Home from "./pages/v_Home/v_home";
import Footer from "./components/Footer/Footer";
import ListBlog from "./pages/v_Blog/v_list_blog";
import DetailBlog from "./pages/v_Blog/v_detail_blog";
import ListVideo from "./pages/v_Video/v_list_video";
import DetailVideo from "./pages/v_Video/v_detail_video";
import Konsultasi from "./components/Konsultasi/Konsultasi";
import ListTes from "./pages/v_Tes-Psikologi/v_list_tes";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Header */}

      {/* Body */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blog" element={<ListBlog />}></Route>
        <Route path="/blog/:id" element={<DetailBlog />}></Route>
        <Route path="/video" element={<ListVideo />}></Route>
        <Route path="/video/:id" element={<DetailVideo />}></Route>
        <Route path="/login" element={<LoginWithoutHeaderFooter />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/konsultasi" element={<Konsultasi />}></Route>
        <Route path="/tes" element={<ListTes />}></Route>
        {/* <Route path="/profile" element={<Profile />}></Route> */}
        {/* <Route
          path="/kepribadian"
          element={<Kepribadian/>}
        ></Route> */}
      </Routes>
      {/* Body */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </div>
  );
}

function LoginWithoutHeaderFooter() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
