import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import PsiImg from "../../image/psikologimage.jpg";
import { FaStarHalf, FaStar } from "react-icons/fa";

const DetailPayment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [namaPasien, setNamaPasien] = useState("");
  const [namaOrtu, setNamaOrtu] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [nomor, setNomor] = useState("");
  const [placeBirth, setPlaceBirth] = useState("");
  const [kategori, setKategori] = useState("");
  const [viaKonsul, setViaKonsul] = useState("");
  const [riwayat, setRiwayat] = useState("");
  const [keluhan, setKeluhan] = useState("");
  const [namaPsikolog, setNamaPsikolog] = useState("");

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // Fetch data blog yang akan diupdate
    const fetchKonsul = async () => {
      console.log("fetch konsul running");
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/konsul/${id}`
        );
        const konsulData = response.data.data;
        setNamaPasien(konsulData.nama_pasien);
        setNamaOrtu(konsulData.nama_ortu);
        setGender(konsulData.gender);
        setAddress(konsulData.alamat);
        setDateBirth(konsulData.tgl_lahir);
        setNomor(konsulData.no_wa);
        setPlaceBirth(konsulData.tempat_lahir);
        setKategori(konsulData.kategori_pasien);
        setRiwayat(konsulData.riwayat);
        setKeluhan(konsulData.keluhan);
        setViaKonsul(konsulData.via_konsul);
        console.log(konsulData);
        setNamaPsikolog(konsulData.psikologId.name);
      } catch (error) {
        console.log(error);
      }
    };
    fetchKonsul();
  }, [id]);

  const paymentDetail= () => {

  }

  return (
    <div className="mb-6">
      {/* 1. Tampilkan detail konsultasi  */}
      {/* 2. Tampilkan detail Psikolog yang dipilih */}
      {/* 3. Tampilkan detail pembayaran yang akan dilakukan user */}
      {/* <Header /> */}
      <div className="flex">
        <div className="w-[1000px] mx-auto mt-10 justify-center">
          <div className="text-center my-5">
            <span className="text-[40px] text-textSec font-bold">
              Detail Konsultasi
            </span>
            <p className="text-textSec">
              Silahkan pilih salah satu psikolog yang di rekomendasikan sesuai
              dengan yang kamu dibutuhkan.
            </p>
          </div>

          <div className="bg-bgSec w-full mt-5 shadow-sm shadow-textFunc">
            <div className="">
              <form>
                {/* 1. Tampilkan detail konsultasi  */}
                <h1 className="p-3 font-bold bg-bgFunc3 text-textOpt rounded-sm rounded-t-md">
                  DATA PRIBADI
                </h1>
                <div className="p-5">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="nama_pasien"
                      id="nama_pasien"
                      value={namaPasien}
                      onChange={(e) => setNamaPasien(e.target.value)}
                      className="cursor-not-allowed block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                      disabled
                      placeholder=" "
                    />
                    <label
                      for="nama_pasien"
                      className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Nama Pasien
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="nama_ortu"
                      id="nama_ortu"
                      value={namaOrtu}
                      onChange={(e) => setNamaOrtu(e.target.value)}
                      placeholder=" "
                      className="cursor-not-allowed block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                      disabled
                    />
                    <label
                      for="nama_ortu"
                      className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Nama Orang Tua
                    </label>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="tempat_lahir"
                        id="tempat_lahir"
                        value={placeBirth}
                        onChange={(e) => setPlaceBirth(e.target.value)}
                        placeholder=" "
                        className="cursor-not-allowed block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                        disabled
                      />
                      <label
                        for="tempat_lahir"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Tempat Lahir
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="date"
                        name="tgl_lahir"
                        id="tgl_lahir"
                        value={dateBirth}
                        onChange={(e) => setDateBirth(e.target.value)}
                        className="cursor-not-allowed block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                        disabled
                        placeholder=" "
                      />
                      <label
                        for="tgl_lahir"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Tanggal Lahir
                      </label>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                      <select
                        name="gender"
                        id="gender"
                        value={gender}
                        className="cursor-not-allowed block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                        disabled
                        placeholder=" "
                      >
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="L">Laki-Laki</option>
                        <option value="P">Perempuan</option>
                      </select>
                      <label
                        htmlFor="kategori_pasien"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Jenis Kelamin
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="number"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        name="no_wa"
                        id="no_wa"
                        value={nomor}
                        onChange={(e) => setNomor(e.target.value)}
                        placeholder=" "
                        className="cursor-not-allowed block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                        disabled
                      />
                      <label
                        for="no_wa"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Nomor Whatsapp (62812345678)
                      </label>
                    </div>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="alamat"
                      id="alamat"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder=" "
                      className="cursor-not-allowed block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                      disabled
                    />
                    <label
                      for="alamat"
                      className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Alamat
                    </label>
                  </div>
                </div>
                <h1 className="p-3 font-bold bg-bgFunc3 text-textOpt rounded-sm rounded-t-md">
                  DATA KONSULTASI
                </h1>
                <div className="p-5">
                  <div className="relative z-0 w-full mb-6 group">
                    <select
                      name="kategori_pasien"
                      id="kategori_pasien"
                      value={kategori}
                      placeholder=" "
                      className="cursor-not-allowed block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                      disabled
                    >
                      <option value="">Pilih Kategori Pasien</option>
                      <option value="Konsultasi Anak (5-11 tahun)">
                        Konsultasi Anak (5-11 tahun)
                      </option>
                      <option value="Konsultasi Remaja (12-25 tahun)">
                        Konsultasi Remaja (12-25 tahun)
                      </option>
                      <option value="Konsultasi Dewasa (26-45 tahun)">
                        Konsultasi Dewasa (26-45 tahun)
                      </option>
                    </select>
                    <label
                      htmlFor="kategori_pasien"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Kategori Pasien
                    </label>
                  </div>
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
                <h1 className="p-3 font-bold bg-bgFunc3 text-textOpt rounded-sm rounded-t-md">
                  DATA PSIKOLOG
                </h1>
                <div className="p-5">
                  <div class="flex flex-col mb-5 items-center md:flex-row md:max-w-4xl ">
                    <img
                      className="object-cover mx-2 w-full rounded-t-lg h-96 md:h-auto md:w-36 md:rounded-none md:rounded-l-lg"
                      src={PsiImg}
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-textSec dark:text-white">
                        {namaPsikolog}
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
                        <p class="mb-3 font-normal text-green-500 dark:text-gray-400">
                          Rp. 200.000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2. Tampilkan detail Psikolog yang dipilih */}
              </form>
            </div>
            <div className="text-center mt-4">
              <button
                onClick={paymentDetail}
                className="bg-opt text-black py-2 px-4 rounded-md"
              >
                Detail Pembayaran
              </button>
            </div>
          </div>
          {/* 1. Tampilkan detail konsultasi  */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default DetailPayment;
