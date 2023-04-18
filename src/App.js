import React from "react";
import Header from "./components/Header/Header";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/v_Home/v_home";
import Footer from "./components/Footer/Footer";
import ListBlog from "./pages/v_Blog/v_list_blog";


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
        {/* <Route path="/blog/:id" element={<DetailBlog />}></Route>
        <Route path="/video" element={<ListVideo />}></Route>
        <Route path="/video/:id" element={<DetailVideo />}></Route>
        <Route path="/team" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/profile" element={<Profile />}></Route> */}
      </Routes>
      {/* Body */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </div>
  );
}

export default App;
