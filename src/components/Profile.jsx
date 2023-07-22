import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaUserCircle, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile() {
  const authState = useSelector((state) => state.auth);
  console.log(authState);

  return (
    <div>
      <Header />
      <div className="mx-10 mt-5">
        <div className="flex justify-center gap-10 items-center">
          {/* Isi Card Pertama */}
          <div className="w-1/3 bg-lightgray  border border-textFunc rounded-lg ml-10">
            <div className="w-full  ">
              <div className="bg-bgFunc3 rounded-lg">
                <h1 className="text-textOpt text-[20px] font-bold py-2.5 px-4">
                  Photo
                </h1>
              </div>
              <div className="my-[63px] text-[100px] text-textSec justify-center flex w-full">
                <FaUserCircle />
              </div>
            </div>
          </div>
          {/* Isi Card PertamaclassName="px-3" */}
          {/* Isi Card Kedua */}
          <div className="w-2/3 bg-lightgray  border border-textFunc rounded-lg  mr-10">
            <div className="w-full  ">
              <div className="bg-bgFunc3 rounded-lg">
                <h1 className="text-textOpt text-[20px] font-bold py-2.5 px-4">
                  Identitas
                </h1>
              </div>
              <div className="my-5 mx-5 text-textSec w-full">
                <form>
                  <table>
                    <thead>
                      <tr>
                        <td className="p-3">Nama Lengkap</td>
                        <td className="p-3">:</td>
                        <td className="p-3">{authState.user.name}</td>
                      </tr>
                      <tr>
                        <td className="p-3">Tanggal Lahir</td>
                        <td className="p-3">:</td>
                        <td className="p-3">{authState.user.dateOfBirth}</td>
                      </tr>
                      <tr>
                        <td className="p-3">Jenis Kelamin</td>
                        <td className="p-3">:</td>
                        <td className="p-3">{authState.user.gender}</td>
                      </tr>
                      <tr>
                        <td className="p-3">Pekerjaan</td>
                        <td className="p-3">:</td>
                        <td className="p-3">{authState.user.work}</td>
                      </tr>
                    </thead>
                  </table>
                </form>
              </div>
            </div>
          </div>
          {/* Isi Card Kedua */}
        </div>
        <div className="flex justify-center gap-10 ">
          {/* Isi Card Pertama */}
          <div className="w-1/3 bg-lightgray  border border-textFunc rounded-lg  ml-10">
            <div className="w-full  ">
              <div className="bg-bgFunc3 rounded-lg">
                <h1 className="text-textOpt text-[20px] font-bold py-2.5 px-4">
                  Motivasi
                </h1>
              </div>
              <div className="my-[40px] text-textSec justify-center items-center text-center flex-wrap w-full">
                <p>
                  Hello, {authState.user.name} <br /> Welcome to your profile
                  page
                </p>
                <div>
                  <Link
                    type="button"
                    className="bg-bgOpt mt-3 hover:bg-bgOpt2 px-5 py-2 rounded-md text-white"
                  >
                    Edit Profil
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Isi Card Pertama*/}
          {/* Isi Card Kedua */}
          <div className="w-2/3 bg-lightgray  border border-textFunc rounded-lg  mr-10">
            <div className="w-full  ">
              <div className="bg-bgFunc3 rounded-lg">
                <h1 className="text-textOpt text-[20px] font-bold py-2.5 px-4">
                  Akun
                </h1>
              </div>
              <div className="my-5 mx-5 text-textSec w-full">
                <form>
                  <table>
                    <thead>
                      <tr>
                        <td className="p-3">Email</td>
                        <td className="p-3">:</td>
                        <td className="p-3">{authState.user.email}</td>
                      </tr>
                      <tr>
                        <td className="p-3">Role</td>
                        <td className="p-3">:</td>
                        <td className="p-3">{authState.user.role}</td>
                      </tr>
                      <tr>
                        <td className="p-3">Verified</td>
                        <td className="p-3">:</td>
                        <td className="p-3">
                          {authState.user.isVerified ? (
                            <FaCheckCircle className="text-green-500"/>
                          ) : (
                            <FaTimesCircle className="text-red-500"/>
                          )}
                        </td>
                      </tr>
                    </thead>
                  </table>
                </form>
              </div>
            </div>
          </div>
          {/* Isi Card Kedua */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;
