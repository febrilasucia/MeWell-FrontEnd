import React, { useEffect } from "react";
import Konsultasi from "../../components/Konsultasi/KonsultasiComponent";

function KonsultasiPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Konsultasi />
    </div>
  );
}

export default KonsultasiPage;
