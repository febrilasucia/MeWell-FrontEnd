import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import PsiImg from "../../image/psikologimage.jpg";
import { FaStarHalf, FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

const DetailPayment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [viaKonsul, setViaKonsul] = useState("");
  const [riwayat, setRiwayat] = useState("");
  const [keluhan, setKeluhan] = useState("");
  const [psikologId, setPsikologId] = useState("");
  const [psikologName, setPsikologName] = useState("");

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // Fetch data blog yang akan diupdate
    const fetchKonsul = async () => {
      console.log("fetch konsul running");
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/konsul/${id}`);
        const konsulData = response.data.data;
        setRiwayat(konsulData.riwayat);
        setKeluhan(konsulData.keluhan);
        setViaKonsul(konsulData.via_konsul);
        setPsikologId(konsulData.psikolog_id);
        setPsikologName(konsulData.user_id.name);
        console.log(konsulData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchKonsul();
  }, [id]);

  const paymentDetail = () => {
    // Show a SweetAlert confirmation dialog
    Swal.fire({
      title: "Pastikan Data Sudah Benar",
      text: "Apakah Anda yakin data sudah benar?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cek Data Lagi",
      confirmButtonText: "Sudah Benar",
      reverseButtons: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then((result) => {
      if (result.isConfirmed) {
        // Cek Data Lagi button was clicked, you can perform additional actions here if needed
        // For example, show another dialog for rechecking data or take any appropriate action.
        // If you want to perform some action before navigating, do it here and navigate afterwards.
        navigate(`/konsultasi/${id}/upload-payment`);
      } else {
        // Sudah Benar button was clicked, navigate to the desired location
      }
    });
  };

  return (
    <div className="mb-6">
      {/* 1. Tampilkan detail konsultasi  */}
      {/* 2. Tampilkan detail Psikolog yang dipilih */}
      {/* 3. Tampilkan detail pembayaran yang akan dilakukan user */}
      {/* <Header /> */}
      <div className="flex">
        <div className="w-[1000px] mx-auto mt-10 justify-center">
          <div className="text-center my-5">
            <span className="text-[40px] text-textSec font-bold">Detail Konsultasi</span>
            <p className="text-textSec">
              Silahkan pilih salah satu psikolog yang di rekomendasikan sesuai dengan yang kamu dibutuhkan.
            </p>
          </div>

          <div className="bg-bgSec w-full mt-5 shadow-sm shadow-textFunc">
            <div className="">
              <form>
                {/* 1. Tampilkan detail konsultasi  */}

                <h1 className="p-3 font-bold bg-bgFunc3 text-textOpt rounded-sm rounded-t-md">DATA KONSULTASI</h1>
                <div className="p-5">
                  <div className="relative z-0 w-full mb-6 group">
                    <select
                      name="via_konsul"
                      id="via_konsul"
                      value={viaKonsul}
                      placeholder=" "
                      className="cursor-not-allowed block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                      disabled
                    >
                      <option value="">Pilih Via Konsul</option>
                      <option value="Via Online">Via Online</option>
                      <option value="Via Offline">Via Offline</option>
                    </select>
                    <label
                      htmlFor="via_konsul"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Via Konsul
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="riwayat"
                      id="riwayat"
                      value={riwayat}
                      onChange={(e) => setRiwayat(e.target.value)}
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
                      value={keluhan}
                      onChange={(e) => setKeluhan(e.target.value)}
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
                {/* 1. Tampilkan detail konsultasi  */}
                {/* 2. Tampilkan detail Psikolog yang dipilih */}
                <h1 className="p-3 font-bold bg-bgFunc3 text-textOpt rounded-sm rounded-t-md">DATA PSIKOLOG</h1>
                <div className="p-5">
                  <div className="flex flex-col mb-5 items-center md:flex-row md:max-w-4xl ">
                    <img
                      alt="PsiImg"
                      className="object-cover mx-2 w-full rounded-t-lg h-96 md:h-auto md:w-36 md:rounded-none md:rounded-l-lg"
                      src={PsiImg}
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-textSec dark:text-white">
                        {psikologName}
                      </h5>
                      <p class="mb-3 font-normal text-textFunc">
                        Sudah lebih 3 tahun berpengalaman dalam konseling anak
                      </p>
                      <div className="flex justify-between items-center">
                        <p class="mb-3 flex font-normal text-yellow-500 dark:text-gray-400">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStarHalf />
                        </p>
                        <p class="mb-3 font-normal text-green-500 dark:text-gray-400">Rp. 200.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2. Tampilkan detail Psikolog yang dipilih */}
              </form>
            </div>
          </div>
          <div className="text-center flex mt-5 w-full justify-between items-center ">
            <button onClick={handleGoBack} className=" text-textOpt py-3 px-4 rounded-md bg-gray-500 hover:bg-gray-400">
              &laquo; Kembali Pilih Psikolog
            </button>
            <button onClick={paymentDetail} className=" text-textOpt py-3 px-4 rounded-md bg-bgOpt hover:bg-bgOpt2">
              Upload Bukti Pembayaran &raquo;
            </button>
          </div>
          {/* 1. Tampilkan detail konsultasi  */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default DetailPayment;
