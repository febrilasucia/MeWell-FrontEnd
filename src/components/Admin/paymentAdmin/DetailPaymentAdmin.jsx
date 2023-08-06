import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import Sidebar from "../Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DetailPaymentAdmin = () => {
  const [activePage, setActivePage] = useState("Pembayaran");
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [buktiPayment, setBuktiPayment] = useState("");
  const [konsultasiId, setkonsultasiId] = useState("");
  const [status, setStatus] = useState("");

  const [userId, setUserId] = useState("");
  const handleGoBack = () => {
    navigate(-1);
  };

  const fetchPayment = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/konsul/${id}`,
    };

    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      setUserId(response.data.user.user_id);
      setkonsultasiId(response.data.konsultasi_id);
      setStatus(response.data.Status);
      setBuktiPayment(response.data.bukti_pembayaran);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPayment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateStatus = async (status) => {
    let data = new FormData();

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/payment/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log(error);
      }
    }

    makeRequest();
  };
  const handleStatusPayment = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Ubah Status Pembayaran?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Diterima",
      denyButtonText: `Ditolak`,
      cancelButtonText: "Batal",
      confirmButtonClass: "bg-green-500 hover:bg-purple-600 text-white font-semibold",
      denyButtonClass: "bg-red-500 hover:bg-red-600 text-white font-semibold",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        updateStatus("Diterima");
        Swal.fire("Diterima!", "", "success");
      } else if (result.isDenied) {
        updateStatus("Ditolak");
        Swal.fire("Tidak Diterima", "", "info");
      }
    });
  };
  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="w-[1000px] mx-auto mt-10 justify-center">
        {/* judul */}
        <div>
          <h1 className="text-sizeTri text-textSec font-bold">Detail Konsultasi</h1>
          <p className="my-3 text-textFunc">Dashboard / Konsultasi / Edit</p>
        </div>
        {/* judul */}
        {/* content */}
        <div className="bg-bgSec w-full mt-5 shadow-sm shadow-textFunc">
          <div className="">
            <form>
              <h1 className="p-3 font-bold bg-bgFunc3 text-textOpt rounded-sm rounded-t-md">DATA KONSULTASI</h1>
              <div className="p-5">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="riwayat"
                    id="riwayat"
                    value={konsultasiId}
                    onChange={(e) => setkonsultasiId(e.target.value)}
                    placeholder=" "
                    className="cursor-not-allowed block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                    disabled
                  />
                  <label
                    for="riwayat"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Riwayat Penyakit
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="keluhan"
                    id="keluhan"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    placeholder=" "
                    className="cursor-not-allowed block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                    disabled
                  />
                  <label
                    for="keluhan"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Keluhan
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
                  className="w-[100px] px-4 py-2 bg-bgOpt text-white rounded-md hover:bg-bgOpt2 focus:outline-none focus:ring focus:ring-gray-300"
                  onClick={handleGoBack}
                >
                  Kembali
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* content */}
      </div>
    </div>
  );
};

export default DetailPaymentAdmin;
