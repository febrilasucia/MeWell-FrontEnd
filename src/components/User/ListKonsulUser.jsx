import React, { useEffect, useState } from "react";
import Sidebar from "./SidebarUser";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { formatDate } from "../../util/Helper";

function ListKonsulUser() {
  const [activePage, setActivePage] = useState("Konsultasi");
  const [konsuls, setKonsuls] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchKonsuls();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchKonsuls = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/konsul/user`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.request(config);
      setKonsuls(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChatClick = (status, _id) => {
    console.log(status);
    if (status !== "Pembayaran Sukses") {
      Swal.fire({
        icon: "error",
        title: "Belum bisa konsultasi",
        text: "Mohon menunggu sampai admin menyelesaikan status pembayaran kamu",
      });
      return;
    }
    navigate(`/user/konsul/${_id}/chat`);
  };

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      {/* Content */}
      <div className="w-[1000px] mx-auto mt-10 justify-center">
        {/* judul */}
        <div>
          <h1 className="text-sizeTri text-textSec font-bold">Konsultasi</h1>
          <p className="my-3 text-textFunc">Dashboard / Konsultasi </p>
        </div>
        {/* judul */}
        {/* content */}

        <div className="w-[1000px] bg-bgTri mx-auto mt-5 justify-center rounded-md shadow-sm shadow-textFunc">
          <div className="flex items-center justify-between px-5 pt-5">
            <div>
              <Link
                id="addBlog"
                className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 "
                type="button"
                to={"/konsultasi/form-konsultasi"}
              >
                Tambah
              </Link>
            </div>
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 "
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>

              <input
                type="text"
                id="table-search"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search items"
              />
            </div>
          </div>
          <div className="">
            <div className="relative overflow-x-auto p-5">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className=" text-textOpt  bg-bgFunc3 text-center">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Nama Psikolog
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tanggal
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status Pembayaran
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {konsuls.map((konsul, index) => (
                    <tr key={index} className="bg-white border-b ">
                      <td className="px-6 py-4 text-center whitespace-nowrap">{index + 1}</td>
                      <td className="px-6 py-4 text-center">{konsul.psikolog.nama}</td>
                      <td className="px-6 py-4 text-center">{formatDate(konsul.createdAt)}</td>
                      <td className="px-6 py-4 text-center"> {konsul.payment.status}</td>
                      <td className="px-6 py-4 flex gap-3 ">
                        <Link className="hover:text-bgFunc3" to={`/admin/konsul/${konsul._id}/detail`}>
                          {" "}
                          Detail
                        </Link>
                        <Link className="hover:text-bgFunc3" to={`/admin/konsul/${konsul._id}/edit`}>
                          {" "}
                          Edit
                        </Link>
                        <button
                          className="hover:text-bgFunc3"
                          onClick={() => handleChatClick(konsul.payment.status, konsul._id)}
                        >
                          {" "}
                          Chat
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* content */}
      </div>

      {/* Content */}
    </div>
  );
}

export default ListKonsulUser;
