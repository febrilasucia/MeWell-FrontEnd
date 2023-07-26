import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import PsiImg from "../../image/psikologimage.jpg";
import { FaStarHalf, FaStar } from "react-icons/fa";

function ChoosePsikolog() {
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
      <div className="mx-[400px] my-[10px] pxflex flex-col">
        <Link
          to="#"
          class="flex flex-col mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover mx-2 w-full rounded-t-lg h-96 md:h-auto md:w-36 md:rounded-none md:rounded-l-lg"
            src={PsiImg}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-textSec dark:text-white">
              Prof. Dr. Desi, M.Psi., Psikolog
            </h5>
            <p class="mb-3 font-normal text-textFunc">
              Sudah lebih 3 tahun berpengalaman dalam konseling anak
            </p>
            <div className="flex justify-between items-center">
              <p class="mb-3 flex font-normal text-yellow-500 dark:text-gray-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </p>
              <p class="mb-3 font-normal text-green-500 dark:text-gray-400">
                Rp. 200.000
              </p>
            </div>
          </div>
        </Link>
        <Link
          to="#"
          class="flex flex-col mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover mx-2 w-full rounded-t-lg h-96 md:h-auto md:w-36 md:rounded-none md:rounded-l-lg"
            src={PsiImg}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-textSec dark:text-white">
              Prof. Dr. Desi, M.Psi., Psikolog
            </h5>
            <p class="mb-3 font-normal text-textFunc">
              Sudah lebih 3 tahun berpengalaman dalam konseling anak
            </p>
            <div className="flex justify-between items-center">
              <p class="mb-3 flex font-normal text-yellow-500 dark:text-gray-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </p>
              <p class="mb-3 font-normal text-green-500 dark:text-gray-400">
                Rp. 200.000
              </p>
            </div>
          </div>
        </Link>
        <Link
          to="#"
          class="flex flex-col mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover mx-2 w-full rounded-t-lg h-96 md:h-auto md:w-36 md:rounded-none md:rounded-l-lg"
            src={PsiImg}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-textSec dark:text-white">
              Prof. Dr. Desi, M.Psi., Psikolog
            </h5>
            <p class="mb-3 font-normal text-textFunc">
              Sudah lebih 3 tahun berpengalaman dalam konseling anak
            </p>
            <div className="flex justify-between items-center">
              <p class="mb-3 flex font-normal text-yellow-500 dark:text-gray-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </p>
              <p class="mb-3 font-normal text-green-500 dark:text-gray-400">
                Rp. 200.000
              </p>
            </div>
          </div>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default ChoosePsikolog;
