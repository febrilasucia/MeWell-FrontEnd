import React from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";

function SuccessForm() {
  return (
    <div className="text-center h-screen flex flex-wrap justify-center items-center">
      <div className="text-center">
        <span className="block">
          <FaRegCheckCircle className="text-[64px] text-bgOpt inline-block align-middle" />
        </span>
        <span className="block text-[40px] text-textSec font-bold mt-5">Pembayaran Sukses</span>
        <p className="text-textSec mt-5 w-[700px] mx-auto">
          Konsultasi dan Pembayaran sudah sukses diupload. Silahkan menunggu admin mengecek pembayaran kamu. Setelah itu
          kamu akan di chat oleh psikolog.
        </p>
        <div className="h-10 rounded-lg py-2 mt-4 text-white bg-bgOpt hover:bg-bgOpt2 w-[300px] mx-auto">
          <Link to={"/"}>Kembali Halaman Utama</Link>
        </div>
      </div>
    </div>
  );
}

export default SuccessForm;
