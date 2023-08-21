import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function FaqPage() {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [no, setNo] = useState("");
  const [pesan, setPesan] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      nama: nama,
      nomor_handphone: no,
      pesan: pesan,
    });

    console.log(data);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/faq`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    const response = await axios.request(config);
    console.log(response);

    try {
      Swal.fire({
        title: "Berhasil!",
        text: "Feedback berhasil dikirim.",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/`);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="my-10 mx-[150px]">
      {/* judul */}
      <div className="text-center">
        <span className="text-[40px] text-textSec font-bold">FORM FEEDBACK</span>
        <p className="text-textSec">Silahkan mengisi form feedback berikut untuk perbaikan Me-Well. Terimakasih </p>
      </div>
      {/* form */}
      <div className="bg-bgSec w-full mt-5 shadow-sm shadow-textFunc">
        <div className="">
          <form onSubmit={handleSubmit}>
            <h1 className="p-3 font-bold bg-bgFunc3 text-textOpt rounded-sm rounded-t-md">DATA KONSULTASI</h1>
            <div className="p-5">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="riwayat"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nama
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="number"
                  name="no"
                  id="no"
                  value={no}
                  onChange={(e) => setNo(e.target.value)}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="keluhan"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nomor Telepon
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="pesan"
                  id="pesan"
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  className="h-[100px] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="keluhan"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Pesan
                </label>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "relative",
              }}
              className="p-5 flex flex-wrap gap-2"
            >
              <button
                type="button"
                className="w-[100px] px-4 py-2 bg-bgFunc text-white rounded-md hover:bg-bgFunc3 focus:outline-none focus:ring focus:ring-gray-300"
                onClick={handleGoBack}
              >
                Batal
              </button>
              <button
                type="submit"
                className="w-[100px] px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* form */}
      {/* judul */}
    </div>
  );
}

export default FaqPage;
