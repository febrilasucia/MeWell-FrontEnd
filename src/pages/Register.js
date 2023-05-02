import React, { useEffect } from "react";
import { useState } from "react";
import LogoMandehLogin from "../image/logo-mandeh-login.png";
import LogoMandeh from "../image/logo-hori.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleDoubleRight } from "react-icons/fa";

function Register() {
  return (
    <div>
      <div>
        {/* image logo */}
        <div className="absolute opacity-25">
          <img src={LogoMandehLogin} className="h-screen" />
        </div>
        {/* image logo */}
        {/* image logo lengkap */}
        <div className="relative">
          <img src={LogoMandeh} className="w-[250px] absolute right-0 mt-5" />
        </div>
        {/* image logo lengkap */}
        {/* card */}
        <div className="flex flex-col h-screen justify-center">
          <div className="m-auto bg-bgSec w-full max-w-3xl p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
            <form className="space-y-6" action="#">
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
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Nama"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Tanggal Lahir"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="jk"
                      id="jk"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Jenis Kelamin"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="age"
                      id="age"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Umur"
                      required
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
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="job"
                      id="job"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Pekerjaan"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="hobby"
                      id="hobby"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Hobi"
                      required
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
                <a href={"/login"} className="text-bgFunc3 hover:underline ">
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
            <Link to={"/home"} className="">
              Kembali{" "}
            </Link>
          </div>
          <div>
            <Link to={"/home"}>
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
