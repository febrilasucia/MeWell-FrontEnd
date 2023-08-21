import axios from "axios";
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function EditFaqAdmin() {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [no, setNo] = useState("");
  const [pesan, setPesan] = useState("");
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [activePage, setActivePage] = useState("Feedback");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      nama: nama,
      nomor_handphone: no,
      pesan: pesan,
    });

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/faq/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));

      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate(`/admin/faq`);
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="w-[1000px] mx-auto mt-10 justify-center">
        {/* judul */}
        <div>
          <h1 className="text-sizeTri text-textSec font-bold">Edit Feedback</h1>
          <p className="my-3 text-textFunc">Dashboard / Feedback / Edit</p>
        </div>
        {/* judul */}
        {/* content */}
        <div className="w-[1000px] bg-bgTri mx-auto mt-5 justify-center rounded-md shadow-sm shadow-textFunc">
          <div className="my-10 mx-[150px]">
            {/* form */}
            <div className="bg-bgSec w-full mt-5 shadow-sm shadow-textFunc">
              <div className="">
                <form onSubmit={handleSubmit}>
                  <h1 className="p-3 font-bold bg-bgFunc3 text-textOpt rounded-sm rounded-t-md">DATA FEEDBACK</h1>
                  <div className="p-5">
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="nama"
                        id="nama"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                      />
                      <label
                        htmlFor="riwayat"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Nama
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="number"
                        name="no"
                        id="no"
                        value={no}
                        onChange={(e) => setNo(e.target.value)}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                      />
                      <label
                        htmlFor="keluhan"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Nomor Telepon
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="pesan"
                        id="pesan"
                        value={pesan}
                        onChange={(e) => setPesan(e.target.value)}
                        className="h-[100px] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                      />
                      <label
                        htmlFor="keluhan"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Pesan
                      </label>
                    </div>
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
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="w-[100px] px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                      Simpan
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* form */}
            {/* judul */}
          </div>
        </div>
        {/* content */}
      </div>
    </div>
  );
}

export default EditFaqAdmin;
