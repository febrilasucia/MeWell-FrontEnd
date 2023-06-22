import React, { useEffect } from "react";
import KonsultasiComponent from "../../components/Konsultasi/KonsultasiComponent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Konsultasi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Header />
      <KonsultasiComponent />
      <Footer />
    </div>
  );
}

export default Konsultasi;
