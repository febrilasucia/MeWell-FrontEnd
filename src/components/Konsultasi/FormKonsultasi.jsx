import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormKonsultasi() {
  const navigate = useNavigate();
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
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="my-10 mx-[150px]">
      {/* judul */}
      <div className="text-center">
        <span className="text-[40px] text-textSec font-bold">
          FORM KONSULTASI
        </span>
        <p className="text-textSec">
          Silahkan isi sesuai dengan field, formulir ini akan dijaga
          kerahasiaannya.
        </p>
      </div>
      {/* form */}
      <div className="bg-bgSec w-full mt-5 shadow-sm shadow-textFunc">
        <div className="">
          <form>
            <h1 className="p-3 font-bold bg-bgFunc3 text-textOpt rounded-sm rounded-t-md">
              DATA PRIBADI
            </h1>
            <div className="p-5">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="nama_pasien"
                  id="nama_pasien"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                  placeholder=" "
                  required
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                  placeholder=" "
                  required
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
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                    placeholder=" "
                    required
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
                    type="text"
                    name="tgl_lahir"
                    id="tgl_lahir"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                    placeholder=" "
                    required
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
                  <input
                    type="text"
                    name="gender"
                    id="gender"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="gender"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                    placeholder=" "
                    required
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
                  className="h-[100px] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                  placeholder=" "
                  required
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
                <input
                  type="text"
                  name="nama_pasien"
                  id="nama_pasien"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="nama_pasien"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Kategori Pasien
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="nama_ortu"
                  id="nama_ortu"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="nama_ortu"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Via Konsultasi
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="alamat"
                  id="alamat"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="alamat"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Riwayat Penyakit
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="alamat"
                  id="alamat"
                  className="h-[100px] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="alamat"
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
                className="w-[100px] px-4 py-2 bg-bgFunc text-white rounded-md hover:bg-bgFunc3 focus:outline-none focus:ring focus:ring-gray-300"
                onClick={handleGoBack}
              >
                Batal
              </button>
              <button
                type="submit"
                className="w-[100px] px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-blue-300"
                onClick={handleSubmit}
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

export default FormKonsultasi;
