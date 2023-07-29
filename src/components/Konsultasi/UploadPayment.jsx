import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import LogoBCA from "../../image/logo bca.jpeg";

function UploadPayment() {
  const [buktiPayment, setBuktiPayment] = useState("");
  const handlePayment = () => {
    // console.log(first);
  };
  return (
    <div>
      {/* <Header /> */}
      <div className="m-10">
        <div className="text-center my-5">
          <span className="text-[40px] text-textSec font-bold">
            Upload Pembayaran
          </span>
          <p className="text-textSec">
            Silahkan melakukan pembayaran sesuai dengan harga yang telah di
            cantumkan.
          </p>
        </div>
        <form onClick={handlePayment}></form>
        {/* 3. Tampilkan detail pembayaran yang akan dilakukan user */}
        <h1 className="p-3 font-bold bg-bgFunc3 text-textOpt rounded-sm rounded-t-md">
          DETAIL PEMBAYARAN
        </h1>
        <div className="p-5 text-textSec">
          <div
            // style={{
            //   display: "flex",
            //   // justifyContent: "flex-end",
            //   // position: "relative",
            // }}
            className="flex justify-between items-center my-5"
          >
            <div>
              <h1 className="text-textSec text-sizePri font-bold ">INVOICE</h1>
            </div>
            <div className="flex flex-col text-center">
              <p className="text-textSec text-sizeParagraph">
                Rabu, 26/07/2023
              </p>
              <p className="text-textSec text-sizeParagraph">22.10 WIB</p>
            </div>
          </div>
          <div className="w-full my-3 border border-textFunc"></div>

          <div className="mt-5">
            <div className="flex justify-between">
              <div>Subtotal</div>
              <div>Rp. 200.000</div>
            </div>
            <div className="flex justify-between mt-1">
              <div>Diskon</div>
              <div>Rp. 0</div>
            </div>
            <div className="flex justify-between mt-1">
              <div>Jasa Aplikasi</div>
              <div>Rp. 10.000</div>
            </div>
            <div className="w-full my-3 border border-textFunc"></div>
            <div className="flex justify-between mt-1">
              <div>Total Pembayaran</div>
              <div>
                <b>Rp. 210.000</b>
              </div>
            </div>
            <div className="w-full my-3 border border-textFunc"></div>
          </div>
          <p className="mt-5 text-gray-500">
            Apabila data anda sudah benar, silahkan melakukan pembayaran
            konsultasi anda melalui :
          </p>
          <div className="flex items-center gap-4">
            <div className="w-[100px] my-5">
              <img src={LogoBCA} alt="" />
            </div>
            <div>No. Rek : 12344566 A/N Me-Well Admin</div>
          </div>
          <div className="w-full my-3 border border-textFunc"></div>

          <h1 className="p-3 font-bold bg-bgFunc3 text-textOpt rounded-sm rounded-t-md">
            Upload Bukti Transfer
          </h1>
          <div className="mt-5 text-gray-500">
            Apabila telah selesai melakukan transfer pada nomor rekening diatas
            silahkan upload bukti transfer dibawah ini
          </div>
          <div className="p-5">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="file"
                name="buktiPayment"
                id="buktiPayment"
                value={buktiPayment}
                onChange={(e) => setBuktiPayment(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full my-3 border border-textFunc"></div>

          <div>
            <button className="py-3 rounded-lg font-bold px-6 w-full border text-bgTri  bg-bgOpt hover:bg-bgOpt2">
              Upload Bukti Pembayaran
            </button>
          </div>
        </div>
        {/* 3. Tampilkan detail pembayaran yang akan dilakukan user */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default UploadPayment;
