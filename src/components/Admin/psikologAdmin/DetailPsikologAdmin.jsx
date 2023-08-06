import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import Sidebar from "../Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DetailPsikologAdmin = () => {
  const [activePage, setActivePage] = useState("Psikolog");
  const navigate = useNavigate();
  const { psikolog_id } = useParams();
  const token = localStorage.getItem("token");
  const [ijazah, setIjazah] = useState("");
  const [ktp, setKtp] = useState("");
  const [univ, setUniv] = useState("");
  const [status, setStatus] = useState("");
  const [userId, setUserId] = useState("");

  const handleGoBack = () => {
    navigate(-1);
  };

  const fetchPsikolog = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/psikolog/registrasi/${psikolog_id}`,
    };

    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      setUserId(response.data.user.user_id);
      setKtp(response.data.ktp);
      setIjazah(response.data.ijazah);
      setUniv(response.data.univ);
      setStatus(response.data.status);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPsikolog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateStatus = async (status) => {
    let data = JSON.stringify({
      user_id: userId,
      status: status,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/auth/status/psikolog`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data,
    };

    try {
      await axios.request(config);
      navigate("/admin/psikolog");
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusPsikolog = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Ubah Status Psikolog?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Diterima",
      denyButtonText: `Ditolak`,
      cancelButtonText: "Batal",
      confirmButtonClass: "bg-green-500 hover:bg-purple-600 text-white font-semibold",
      denyButtonClass: "bg-red-500 hover:bg-red-600 text-white font-semibold",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        updateStatus("Diterima");
        Swal.fire("Diterima!", "", "success");
      } else if (result.isDenied) {
        updateStatus("Ditolak");
        Swal.fire("Tidak Diterima", "", "info");
      }
    });
  };

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="w-[1000px] mx-auto mt-10 justify-center">
        {/* judul */}
        <div>
          <h1 className="text-sizeTri text-textSec font-bold">Detail Konsultasi</h1>
          <p className="my-3 text-textFunc">Dashboard / Konsultasi / Edit</p>
        </div>
        {/* judul */}
        {/* content */}
        <div className="bg-bgSec w-full mt-5 shadow-sm shadow-textFunc">
          <div className="">
            <form onSubmit={handleStatusPsikolog}>
              <h1 className="p-3 font-bold bg-bgFunc3 text-textOpt rounded-sm rounded-t-md">DATA CALON PSIKOLOG</h1>
              <div className="p-5">
                <table>
                  <tbody>
                    <tr>
                      <td className="p-4">Universitas</td>
                      <td className="px-10">:</td>
                      <td className="">{univ}</td>
                    </tr>
                    <tr>
                      <td className="p-4">Status</td>
                      <td className="px-10">:</td>
                      <td className="">{status}</td>
                    </tr>
                    <tr>
                      <td className="p-4">KTP</td>
                      <td className="px-10">:</td>
                      <td className="">
                        {" "}
                        <img
                          className="rounded-t-lg h-[300px]"
                          src={`${process.env.REACT_APP_BASE_URL}${ktp}`}
                          alt=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">Ijazah</td>
                      <td className="px-10">:</td>
                      <td className="">
                        <img
                          className="rounded-t-lg h-[500px]"
                          src={`${process.env.REACT_APP_BASE_URL}${ijazah}`}
                          alt=""
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                  Kembali
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* content */}
      </div>
    </div>
  );
};

export default DetailPsikologAdmin;
