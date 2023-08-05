import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import Sidebar from "../Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditPsikologAdmin = () => {
  const [activePage, setActivePage] = useState("Psikolog");
  const navigate = useNavigate();
  const { psikolog_id } = useParams();
  const token = localStorage.getItem("token");
  const [ijazah, setIjazah] = useState("");
  const [ktp, setKtp] = useState("");
  const [univ, setUniv] = useState("");
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
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        updateStatus("Diterima");
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        updateStatus("Ditolak");
        Swal.fire("Changes are not saved", "", "info");
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
              <h1 className="p-3 font-bold bg-bgFunc3 text-textOpt rounded-sm rounded-t-md">DATA PRIBADI</h1>
              <div className="p-5">
                <div className="relative z-0 w-full mb-6 group flex items-center">
                  <div>KTP</div>
                  <div>
                    <img className="rounded-t-lg" src={`${process.env.REACT_APP_BASE_URL}${ktp}`} alt="" />
                  </div>
                </div>
                <div className="relative z-0 w-full mb-6 group flex items-center">
                  <div>Ijazah</div>
                  <img className="rounded-t-lg" src={`${process.env.REACT_APP_BASE_URL}${ijazah}`} alt="" />
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="univ"
                      id="univ"
                      value={univ}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-bgFunc3 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="univ"
                      className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgFunc3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Universitas Asal
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <div>Status</div>
                    <div>
                      <button type="submit">Status</button>
                    </div>
                  </div>
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

export default EditPsikologAdmin;
