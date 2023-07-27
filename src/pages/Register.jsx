import React, { useEffect } from "react";
import { useState } from "react";
import LogoMandehLogin from "../image/logo-mandeh-login.png";
import LogoMandeh from "../image/logo-hori.png";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

function Register() {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
    dateOfBirth: "",
    gender: "",
    age: "",
    work: "",
    role: "",
    isPsikolog: "",
    pendidikan: "",
    univ: "",
    ktpUrl: "",
    ijazahUrl: "",
    alasan: "",
  });
  // const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/auth/register`,
      data: formData,
    };
    try {
      const makeRequest = async () => {
        try {
          const response = await axios.request(config);
          console.log(response.data);
          console.log(JSON.stringify(response.data));

          // Check if registration is successful with the specified message
          if (
            response.data.message ===
            "Registration is successful, please verify email"
          ) {
            // Show SweetAlert for successful registration
            Swal.fire({
              icon: "success",
              title: "Registration Successful!",
              text: "Please verify your email before logging in.",
              confirmButtonText: "OK",
            }).then(() => {
              // Navigate to login page after user clicks "OK" button
              navigate("/login");
            });
          }
        } catch (error) {
          console.log(error);
          console.log(error.response.data.message);
        }
      };
      makeRequest();
      // setShowAlert(true);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const passwordMatch = formData.password === formData.confPassword;

  return (
    <div>
      <div>
        {/* image logo */}
        <div className="absolute opacity-25">
          <img src={LogoMandehLogin} className="h-screen" alt="Logo Mandeh" />
        </div>
        {/* image logo */}
        {/* image logo lengkap */}
        <div className="relative">
          <img
            src={LogoMandeh}
            className="w-[250px] absolute right-0 mt-5"
            alt="Logo Mandeh"
          />
        </div>
        {/* image logo lengkap */}
        {/* card */}
        <div className="flex flex-col my-10 justify-center">
          <div className="m-auto bg-bgSec w-full max-w-3xl p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <h5 className="text-[54px] font-semibold text-textPri text-center">
                Registrasi
              </h5>
              <p className="text-sm text-gray-500  text-center font-medium">
                Silahkan masukan data lengkap anda
              </p>

              {/* form */}
              <div className="flex flex-wrap justify-center w-full h-[250px] max-w-3xl gap-5">
                <div className="w-[300px]">
                  <div>
                    <input
                      type="text"
                      name="name"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Nama"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      name="dateOfBirth"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <select
                      name="gender"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="">Pilih Jenis Kelamin</option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="number"
                      name="age"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Umur"
                      required
                      value={formData.age}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-[300px]">
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="confPassword"
                      id="confPassword"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Konfirmasi Password"
                      required
                      value={formData.confPassword}
                      onChange={handleChange}
                    />
                    <div
                      className="text-red-500 text-[10px] mb-1"
                      style={{
                        position: "absolute",
                        visibility:
                          formData.password && !passwordMatch
                            ? "visible"
                            : "hidden",
                      }}
                    >
                      *Password and Confirm Password do not match
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="work"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-6 "
                      placeholder="Pekerjaan"
                      required
                      value={formData.work}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              {/* dropdown */}
              <div className="mx-[40px] mt-[100px]">
                <div>
                  <p className="text-textSec text-sizeParagraph">
                    Upload Foto Profil
                  </p>
                  <input
                    type="file"
                    name="profilUrl"
                    className="bg-gray-50 border mb-5 border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 "
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                </div>
                <p className="text-textSec text-sizeParagraph">
                  Note : Jikalau kamu ingin menjadi distributor psikolog Me-Well
                  dapat mendaftar dengan memilih Calon Psikolog Freelance
                  Me-Well pada dropdown
                </p>
                <div className="w-full">
                  <select
                    name="role"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option value="">Pilih Role</option>
                    <option value="user">User Website Me-Well</option>
                    <option value="psikolog">
                      Calon Psikolog Freelance Me-Well
                    </option>
                  </select>
                </div>

                {/* data khusus calon psikolog */}
                {formData.role === "psikolog" && (
                  <div className="">
                    <div>
                      <input
                        type="text"
                        name="pendidikan"
                        className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                        placeholder="Pendidikan Terakhir"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="univ"
                        className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5"
                        placeholder="Universitas Asal"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <p className="text-textSec text-sizeParagraph mt-5">
                        Upload KTP Asli
                      </p>
                      <input
                        type="file"
                        name="ktp"
                        className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 "
                        placeholder="Link Gdrive KTP"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <p className="text-textSec text-sizeParagraph mt-5">
                        Upload Ijazah
                      </p>
                      <input
                        type="text"
                        name="ijazah"
                        className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 "
                        placeholder="Link Gdrive Ijazah"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="alasan"
                        className="bg-gray-50 h-[100px] border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                        placeholder="Alasan mendaftar Freelance Psikolog di Lentera Mandeh"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <p className="text-textSec text-sizeParagraph mt-5">
                      Nota : Apabila telah mendaftar silahkan menunggu dan
                      mengecek secara berkala email & akun Me-Well anda.
                    </p>
                  </div>
                )}

                {/* data khusus calon psikolog */}
              </div>
              {/* dropdown */}

              {/* form */}

              <button
                type="submit"
                className="w-full text-white bg-bgFunc3 hover:bg-bgFunc4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Daftar
              </button>
              <div className="text-sm font-medium text-gray-500 text-center ">
                Sudah mempunyai akun? masuk{" "}
                <a href="/login" className="text-bgFunc3 hover:underline ">
                  disini
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* card */}
        {/* tombol back */}
        <div className="flex items-center float-right mr-10 -mt-8 text-bgFunc hover:text-bgFunc2 font-medium ">
          <div>
            <Link to="/" className="">
              Kembali{" "}
            </Link>
          </div>
          <div>
            <Link to="/">
              <FaAngleDoubleRight className="" />{" "}
            </Link>
          </div>
        </div>
        {/* tombol back */}

        {/* {showAlert && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md">
              <p className="text-green-600 font-semibold text-lg">
                Registrasi berhasil!
              </p>
              <p className="text-gray-500 mt-2">
                Selamat, Anda telah berhasil melakukan registrasi.
              </p>
              <button
                className="text-sm text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg px-4 py-2 mt-4"
                onClick={handleAlertClose}
              >
                Tutup
              </button>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Register;
