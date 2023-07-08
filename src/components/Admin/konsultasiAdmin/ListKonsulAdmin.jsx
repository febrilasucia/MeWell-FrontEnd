import React from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";

function ListKonsullAdmin() {
  return (
    <div className="flex">
      <Sidebar />
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
                className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
                to={"/admin/konsul/create-konsul"}
              >
                Tambah
              </Link>
            </div>
            <label for="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search items"
              />
            </div>
          </div>
          <div className="">
            <div className="relative overflow-x-auto p-5">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className=" text-textOpt  bg-bgFunc3 text-center">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Nama Pasien
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Nomor Telepon
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Kategori
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Via Konsul
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b ">
                    <td
                      scope="row"
                      className="px-6 py-4 text-center  whitespace-nowrap"
                    >
                      1
                    </td>
                    <td className="px-6 py-4">Muhammad Dwi Susanto</td>
                    <td className="px-6 py-4 text-center hover:text-bgOpt">
                      <a href="https://wa.me/6281218386051">6281218386051</a>
                    </td>
                    <td className="px-6 py-4 text-center"> Masalah Remaja</td>
                    <td className="px-6 py-4 text-center"> Online</td>
                    <td className="px-6 py-4 flex gap-3 ">
                      <Link
                        className="hover:text-bgFunc3"
                        to={"/admin/konsul/detail-konsul"}
                      >
                        {" "}
                        Detail
                      </Link>
                      <Link
                        className="hover:text-bgFunc3"
                        to={"/admin/konsul/edit-konsul"}
                      >
                        {" "}
                        Edit
                      </Link>
                      <Link className="hover:text-bgFunc3" href="">
                        {" "}
                        Delete
                      </Link>
                    </td>
                  </tr>
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

export default ListKonsullAdmin;