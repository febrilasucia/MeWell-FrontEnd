import React, { useEffect } from "react";
import { useState } from "react";
import LogoMandehLogin from "../image/logo-mandeh-login.png";
import LogoMandeh from "../image/logo-hori.png";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { data } from "autoprefixer";

function RegisterPsikolog() {
  const [setMessage, setSetMessage] = useState("");
  const authState = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");
  const [ijazah, setIjazah] = useState(null);
  const [ktp, setKtp] = useState(null);
  const [univ, setUniv] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("ijazah", ijazah);
    data.append("ktp", ktp);
    data.append("univ", univ);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/auth/register/psikolog`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      if (response.data.message === "Registration is successful, please wait for the admin to check") {
        // Show SweetAlert for successful registration
        Swal.fire({
          icon: "success",
          title: "Psikologs Registration Successful!",
          text: "Please check the status in your dashboard.",
          confirmButtonText: "OK",
        }).then(() => {
          // Navigate to login page after user clicks "OK" button
          navigate("/");
        });
      }
    } catch (error) {
      console.log(error);
    }

    // try {
    //   const makeRequest = async () => {
    //     try {
    //       const response = await axios.request(config);
    //       console.log(response.data);
    //       console.log(JSON.stringify(response.data));

    //       // Check if registration is successful with the specified message

    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    //   makeRequest();
    //   // setShowAlert(true);
    // } catch (error) {
    //   setMessage(error.response.data.message);
    // }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIjazaheChange = (e) => {
    const file = e.target.files[0];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (file.size > maxSize) {
      Swal.fire({
        title: "Ukuran Gambar Terlalu Besar",
        text: "Ukuran gambar tidak boleh melebihi 5MB.",
        icon: "error",
      });
      setIjazah(null); // Reset the selected thumbnail
      return;
    }

    setIjazah(file);
  };

  const handleKtpChange = (e) => {
    const file = e.target.files[0];
    const maxSize = 2 * 1024 * 1024; // 2MB

    if (file.size > maxSize) {
      Swal.fire({
        title: "Ukuran Gambar Terlalu Besar",
        text: "Ukuran gambar tidak boleh melebihi 2MB.",
        icon: "error",
      });
      setKtp(null); // Reset the selected thumbnail
      return;
    }

    setKtp(file);
  };

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
                    name="univ"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5"
                    placeholder="Universitas Asal"
                    value={univ}
                    onChange={(e) => setUniv(e.target.value)}
                  />
                </div>
                <div>
                  <p className="text-textSec text-sizeParagraph mt-5">Upload KTP Asli</p>
                  <input
                    type="file"
                    name="ktp"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 "
                    onChange={handleKtpChange}
                  />
                </div>
                <div>
                  <p className="text-textSec text-sizeParagraph mt-5">Upload Ijazah</p>
                  <input
                    type="file"
                    name="ijazah"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 "
                    onChange={handleIjazaheChange}
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
