import React, { useEffect } from "react";
import { useState } from "react";
import LogoMandehLogin from "../image/logo-mandeh-login.png";
import LogoMandeh from "../image/logo-hori.png";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

function RegisterPsikolog() {
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
    isPsikolog: "Menunggu",
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

    // Remove 'isPsikolog' from formData if the role is not 'psikolog'
    const filteredFormData = { ...formData };
    if (formData.role !== "psikolog") {
      delete filteredFormData.isPsikolog;
    }

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/auth/register`,
      data: filteredFormData,
    };

    try {
      const makeRequest = async () => {
        try {
          const response = await axios.request(config);
          console.log(response.data);
          console.log(JSON.stringify(response.data));

          // Check if registration is successful with the specified message
          if (response.data.message === "Registration is successful, please verify email") {
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
          <img src={LogoMandeh} className="w-[250px] absolute right-0 mt-5" alt="Logo Mandeh" />
        </div>
        {/* image logo lengkap */}
        {/* card */}
        <div className="flex flex-col my-10 justify-center">
          <div className="m-auto bg-bgSec w-full max-w-3xl p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <h5 className="text-[54px] font-semibold text-textPri text-center">Registrasi Psikolog</h5>
              <p className="text-sm text-gray-500  text-center font-medium">Silahkan masukan data lengkap anda</p>

              <div className="">
                <div>
                  <input
                    type="text"
                    name="pendidikan"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                    placeholder="Pendidikan Terakhir"
                    value={formData.pendidikan}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="univ"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5"
                    placeholder="Universitas Asal"
                    value={formData.univ}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <p className="text-textSec text-sizeParagraph mt-5">Upload KTP Asli</p>
                  <input
                    type="file"
                    name="ktp"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 "
                    placeholder="Link Gdrive KTP"
                    value={formData.ktp}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <p className="text-textSec text-sizeParagraph mt-5">Upload Ijazah</p>
                  <input
                    type="file"
                    name="ijazah"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 "
                    placeholder="Link Gdrive Ijazah"
                    value={formData.ijazah}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="alasan"
                    className="bg-gray-50 h-[100px] border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                    placeholder="Alasan mendaftar Psikolog di Lentera Mandeh"
                    required
                    value={formData.alasan}
                    onChange={handleChange}
                  />
                </div>

                <p className="text-textSec text-sizeParagraph mt-5">
                  Nota : Apabila telah mendaftar silahkan menunggu dan mengecek secara berkala status akun Me-Well anda.
                </p>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-bgFunc3 hover:bg-bgFunc4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Daftar Psikolog
              </button>
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
      </div>
    </div>
  );
}

export default RegisterPsikolog;
