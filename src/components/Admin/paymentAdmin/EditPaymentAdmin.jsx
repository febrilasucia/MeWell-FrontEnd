import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import Sidebar from "../Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditPaymentAdmin = () => {
  const [activePage, setActivePage] = useState("Pembayaran");
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [buktiPayment, setBuktiPayment] = useState("");
  const [konsultasiId, setkonsultasiId] = useState("");
  const [status, setStatus] = useState("");
  const handleGoBack = () => {
    navigate(-1);
  };

  const fetchPayment = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/payment/${id}`,
    };

    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data.data));
      setkonsultasiId(response.data.data.konsultasi_id);
      setStatus(response.data.data.status);
      setBuktiPayment(response.data.data.bukti_pembayaran);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPayment();
  }, []);

  const updateStatus = async (status) => {
    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}}/payment/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.request(config);
      navigate("/admin/payment");
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusPayment = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Ubah Status Pembayaran?",
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
        updateStatus("Pembayaran Diterima");
        Swal.fire("Diterima!", "", "success");
      } else if (result.isDenied) {
        updateStatus("Pembayaran Ditolak");
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
          <h1 className="text-sizeTri text-textSec font-bold">Detail Pembayaran</h1>
          <p className="my-3 text-textFunc">Dashboard / Pembayaran / Detail</p>
        </div>
        {/* judul */}
        {/* content */}
        <div className="bg-bgSec w-full mt-5 shadow-sm shadow-textFunc">
          <div className="">
            <form onSubmit={handleStatusPayment}>
              <h1 className="p-3 font-bold bg-bgFunc3 text-textOpt rounded-sm rounded-t-md">DATA KONSULTASI</h1>
              <div className="p-5">
                <table>
                  <tbody>
                    <tr>
                      <td className="p-4">Status</td>
                      <td className="px-10">:</td>
                      <td className="">{status}</td>
                    </tr>
                    <tr>
                      <td className="p-4">Konsultasi Id</td>
                      <td className="px-10">:</td>
                      <td className="">{konsultasiId}</td>
                    </tr>
                    <tr>
                      <td className="p-4">Bukti Pembayaran</td>
                      <td className="px-10">:</td>
                      <td className="">
                        {" "}
                        <img
                          className="rounded-t-lg h-[300px]"
                          src={`${process.env.REACT_APP_BASE_URL}${buktiPayment}`}
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
                <button
                  className="w-[300px] px-4 py-2  text-white rounded-md bg-bgOpt hover:bg-bgOpt2 focus:outline-none focus:ring focus:ring-gray-300"
                  type="submit"
                >
                  Ubah Status Pembayaran
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

export default EditPaymentAdmin;
