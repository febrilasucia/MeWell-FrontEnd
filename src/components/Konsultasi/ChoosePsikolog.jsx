import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import PsiImg from "../../image/psikologimage.jpg";
import { FaStarHalf, FaStar } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

function ChoosePsikolog() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [psikologId, setPsikologId] = useState("");
  const [isPayment, setIsPayment] = useState("");
  const { id } = useParams();

  const handleUpdate = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("psikologId", psikologId);
    data.append("isPayment", isPayment);

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/konsul/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      // Navigasi ke halaman detail blog setelah berhasil update

      Swal.fire({
        title: "Do you want to save the psikolog?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Cancel`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate(`/konsultasi/detail-payment`);
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Psikolog are not saved", "", "info");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // Fetch data blog yang akan diupdate
    const fetchKonsul = async () => {
      console.log("fetch konsul running");
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/konsul/${id}`
        );
        const konsulData = response.data.data;
        setPsikologId(konsulData.psikologId);
        console.log(konsulData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchKonsul();
  }, [id]);

  return (
    <div>
      <Header />
      <div className="text-center my-10">
        <span className="text-[40px] text-textSec font-bold">
          LIST PSIKOLOG
        </span>
        <p className="text-textSec">
          Silahkan pilih salah satu psikolog yang di rekomendasikan sesuai
          dengan yang kamu dibutuhkan.
        </p>
      </div>

      <div className="bg-bgSec w-full mt-5 shadow-sm shadow-textFunc">
        <div className="my-10 mx-[150px]">
          <form>
            <h1 className="p-3 font-bold bg-bgFunc3 text-textOpt rounded-sm rounded-t-md">
              DATA PRIBADI
            </h1>
            <div className="p-5">
              <div className=" my-[10px] flex flex-wrap justify-center">
                <Link
                  to="#"
                  className="flex flex-col mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100"
                >
                  <img
                    className="object-cover mx-2 w-full rounded-t-lg h-96 md:h-auto md:w-36 md:rounded-none md:rounded-l-lg"
                    src={PsiImg}
                  />
                  <form onSubmit={handleUpdate}></form>
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-textSec dark:text-white">
                      Prof. Dr. Desi, M.Psi., Psikolog
                    </h5>
                    <p className="mb-3 font-normal text-textFunc">
                      Sudah lebih 3 tahun berpengalaman dalam konseling anak
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="mb-3 flex font-normal text-yellow-500 dark:text-gray-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                      </p>
                      <p className="mb-3 font-normal text-green-500 dark:text-gray-400">
                        Rp. 200.000
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ChoosePsikolog;
