import React, { useState } from "react";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";

const CreateKonsulAdmin = () => {
  const [namaPasien, setNamaPasien] = useState("");
  const [namaOrtu, setNamaOrtu] = useState("");
  const [nomor, setNomor] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [placeBirth, setPlaceBirth] = useState("");
  const [kategori, setKategori] = useState("");
  const [viaKonsul, setViaKonsul] = useState("");
  const [penyakit, setPenyakit] = useState("");
  const [keluhan, setKeluhan] = useState("");
  const [activePage, setActivePage] = useState("Konsultasi");
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newKonsul = {
      namaPasien,
      namaOrtu,
      nomor,
      gender,
      address,
      dateBirth,
      placeBirth,
      kategori,
      viaKonsul,
      penyakit,
      keluhan,
    };

    try {
      setNamaPasien("");
      setNamaOrtu("");
      setNomor("");
      setGender("");
      setAddress("");
      setDateBirth("");
      setPlaceBirth("");
      setKategori("");
      setViaKonsul("");
      setPenyakit("");
      setKeluhan("");
    } catch (error) {}
  };

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="w-[1000px] mx-auto mt-10 justify-center">
        {/* judul */}
        <div>
          <h1 className="text-sizeTri text-textSec font-bold">
            Detail Konsultasi
          </h1>
          <p className="my-3 text-textFunc">Dashboard / Konsultasi / Create</p>
        </div>
        {/* judul */}
        {/* content */}
        <div className="w-[1000px] bg-bgTri mx-auto mt-5 justify-center rounded-md shadow-sm shadow-textFunc">
          <div className="h-10 bg-bgOpt rounded-t-md text-textOpt py-[10px] px-5 font-bold">
            {" "}
            DATA PRIBADI
          </div>
          <div className="p-5">
            <div className="flex-1">
              <div className="w-full ">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <table className="w-full">
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="title"
                          className="block text-textSec mb-1"
                        >
                          Nama Pasien
                        </label>
                      </td>
                      <td className="">
                        <input
                          type="text"
                          id="namaPasien"
                          value={namaPasien}
                          onChange={(e) => setNamaPasien(e.target.value)}
                          className="w-full py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="author"
                          className="block text-textSec mb-1"
                        >
                          Nama Orang Tua
                        </label>
                      </td>
                      <td className="">
                        <input
                          type="text"
                          id="namaOrtu"
                          value={namaOrtu}
                          onChange={(e) => setNamaOrtu(e.target.value)}
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="description"
                          className="block text-textSec mb-1"
                        >
                          No Whatsapp
                        </label>
                      </td>
                      <td className="">
                        <input
                          type="text"
                          id="nomor"
                          value={nomor}
                          onChange={(e) => setNomor(e.target.value)}
                          className="w-full py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="title"
                          className="block text-textSec mb-1"
                        >
                          Tanggal Lahir
                        </label>
                      </td>
                      <td className="">
                        <input
                          type="text"
                          id="dateBirth"
                          value={dateBirth}
                          onChange={(e) => setDateBirth(e.target.value)}
                          className="w-full py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="title"
                          className="block text-textSec mb-1"
                        >
                          Tempat Lahir
                        </label>
                      </td>
                      <td className="">
                        <input
                          type="text"
                          id="placeBirth"
                          value={placeBirth}
                          onChange={(e) => setPlaceBirth(e.target.value)}
                          className="w-full py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="title"
                          className="block text-textSec mb-1"
                        >
                          Jenis Kelamin
                        </label>
                      </td>
                      <td className="">
                        <input
                          type="text"
                          id="gender"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          className="w-full py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="title"
                          className="block text-textSec mb-1"
                        >
                          Alamat
                        </label>
                      </td>
                      <td className="">
                        <input
                          type="text"
                          id="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                  </table>
                </form>
              </div>
            </div>
          </div>

          <div className="h-10 bg-bgOpt rounded-t-md text-textOpt py-[10px] px-5 font-bold">
            {" "}
            DATA KONSULTASI
          </div>
          <div className="p-5">
            <div className="flex-1">
              <div className="w-full ">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <table className="w-full">
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="title"
                          className="block text-textSec mb-1"
                        >
                          Kategori Pasien
                        </label>
                      </td>
                      <td className="">
                        <input
                          type="text"
                          id="kategori"
                          value={kategori}
                          onChange={(e) => setKategori(e.target.value)}
                          className="w-full py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="author"
                          className="block text-textSec mb-1"
                        >
                          Via Konsultasi
                        </label>
                      </td>
                      <td className="">
                        <input
                          type="text"
                          id="viaKonsul"
                          value={viaKonsul}
                          onChange={(e) => setViaKonsul(e.target.value)}
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="description"
                          className="block text-textSec mb-1"
                        >
                          Riwayat Penyakit
                        </label>
                      </td>
                      <td className="">
                        <input
                          type="text"
                          id="penyakit"
                          value={penyakit}
                          onChange={(e) => setPenyakit(e.target.value)}
                          className="w-full py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <label
                          htmlFor="title"
                          className="block text-textSec mb-1"
                        >
                          Keluhan
                        </label>
                      </td>
                      <td className="">
                        <input
                          type="text"
                          id="keluhan"
                          value={keluhan}
                          onChange={(e) => setKeluhan(e.target.value)}
                          className="w-full py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                      </td>
                    </tr>
                  </table>

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
          </div>
        </div>
        {/* content */}
      </div>
    </div>
  );
};

export default CreateKonsulAdmin;
