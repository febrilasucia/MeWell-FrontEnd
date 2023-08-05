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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("confPassword", confPassword);
    data.append("gender", gender);
    data.append("date_birth", dateOfBirth);
    data.append("place_birth", placeOfBirth);
    data.append("profile", profile);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/auth/register`,
      data: data,
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

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    const maxSize = 2 * 1024 * 1024; // 2MB

    if (file.size > maxSize) {
      Swal.fire({
        title: "Ukuran Gambar Terlalu Besar",
        text: "Ukuran gambar tidak boleh melebihi 2MB.",
        icon: "error",
      });
      setProfile(null); // Reset the selected thumbnail
      return;
    }

    setProfile(file);

    // // Check image dimensions before uploading
    // const img = new Image();
    // img.src = URL.createObjectURL(file);
    // img.onload = () => {
    //   const width = img.width;
    //   const height = img.height;
    //   if (width !== 1080 || height !== 716) {
    //     Swal.fire({
    //       title: "Ukuran Gambar Salah",
    //       text: "Ukuran gambar harus 1080x716 pixel.",
    //       icon: "error",
    //     });
    //     setProfile(null); // Reset the selected thumbnail
    //     setThumbnailPreview(null); // Reset the thumbnail preview
    //   }
    // };
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const passwordMatch = password === confPassword;

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
              <h5 className="text-[54px] font-semibold text-textPri text-center">Registrasi</h5>
              <p className="text-sm text-gray-500  text-center font-medium">Silahkan masukan data lengkap anda</p>

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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      name="dateOfBirth"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="placeOfBirth"
                      placeholder="Tempat Lahir"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5"
                      value={placeOfBirth}
                      onChange={(e) => setPlaceOfBirth(e.target.value)}
                    />
                  </div>
                  <div>
                    <select
                      name="gender"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="">Pilih Jenis Kelamin</option>
                      <option value="L">Laki-laki</option>
                      <option value="P">Perempuan</option>
                    </select>
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                      value={confPassword}
                      onChange={(e) => setConfPassword(e.target.value)}
                    />
                    <div
                      className="text-red-500 text-[10px] mb-1"
                      style={{
                        position: "absolute",
                        visibility: password && !passwordMatch ? "visible" : "hidden",
                      }}
                    >
                      *Password and Confirm Password do not match
                    </div>
                  </div>
                  <div>
                    <input
                      type="file"
                      name="profile"
                      accept=".jpg, .png"
                      id="profile"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      onChange={handleProfileChange}
                    />
                  </div>
                </div>
              </div>
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
      </div>
    </div>
  );
}

export default Register;
