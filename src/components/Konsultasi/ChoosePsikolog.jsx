import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import PsiImg from "../../image/psikologimage.jpg";
import { FaStarHalf, FaStar } from "react-icons/fa";
import axios from "axios";

function ChoosePsikolog() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  const [psikologId, setPsikologId] = useState("");
  const { id } = useParams();
  const [psikolog, setpsikolog] = useState([]);

  console.log(psikologId);

  const fetchPsikolog = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/user?role=psikolog&isPsikolog=Diterima`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);
        setpsikolog(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    makeRequest();
  };

  useEffect(() => {
    fetchPsikolog();
  }, []);

  const handleUpdate = async (psikologId) => {
    const data = {
      psikologId,
    };

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/konsul/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      navigate(`/konsultasi/${id}/detail-konsul`)
    } catch (error) {
      console.log(error);
    }
  };

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
                {psikolog.map((psi, index) => (
                  <Link
                    key={index}
                    onClick={() => handleUpdate(psi._id)}
                    className="flex flex-col mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100"
                  >
                    <img
                      className="object-cover mx-2 w-full rounded-t-lg h-96 md:h-auto md:w-36 md:rounded-none md:rounded-l-lg"
                      src={PsiImg}
                    />
                    <form onSubmit={handleUpdate}></form>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-textSec">
                        {psi.name}
                      </h5>
                      <p className="mb-3 font-normal text-textFunc">
                        Sudah lebih 3 tahun berpengalaman dalam konseling anak
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="mb-3 flex font-normal text-yellow-500">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStarHalf />
                        </p>
                        <p className="mb-3 font-normal text-green-500">
                          Rp. 200.000
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
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
