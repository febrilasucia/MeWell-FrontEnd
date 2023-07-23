import React, { useEffect } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaHandHoldingHeart,
} from 'react-icons/fa';
import Konsultan from '../../image2/32.png';
import Online from '../../image2/33.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

function KonsultasiComponent() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const authState = useSelector((state) => state.auth);
  const handleKonsultasi = async () => {
    if (authState.isLogin === false) {
      try {
        // Tampilkan pesan kesalahan menggunakan SweetAlert atau cara lain sesuai preferensi Anda
        const result = await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You need to login first!',
          showCancelButton: true,
          cancelButtonText: 'Cancel',
          confirmButtonText: 'Go to login',
        });

        if (result.isConfirmed) {
          navigate('/login'); // Navigasi ke halaman login jika pengguna memilih "Go to login"
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        // Tampilkan pesan kesalahan menggunakan SweetAlert atau cara lain sesuai preferensi Anda
        const result = await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You need to login first!',
          showCancelButton: true,
          cancelButtonText: 'Cancel',
          confirmButtonText: 'Go to login',
        });

        if (result.isConfirmed) {
          navigate('/konsultasi/form-konsultasi'); // Navigasi ke halaman login jika pengguna memilih "Go to login"
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div>
      <div className=" md:flex">
        {/* Konsultasi Area */}
        <div className="bg-bgFunc text-white justify-center">
          <img className="" src={Online} />
          <div className="mx-[100px] mt-[50px] ">
            <div className="my-5 flex items-center gap-3">
              <FaHandHoldingHeart className="h-10 w-10" />
              <p className="text-[24px]">Konsultasi Area</p>
            </div>
            <p className="text-sizePri font-bold leading-7 mb-4">
              Penyelesaian secara online dan tatap muka
            </p>
            <p className="text-sizeParagraph leading-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            </p>
            {/* ingat untuk konsultasi harus mempunyai akun, jikalau tidak maka di alihkan ke halaman login dan dengan alert anda harus login terlebih dahulu */}
            <Link
              onClick={handleKonsultasi}
              className="inline-block mt-5 mb-10 bg-bgOpt2 hover:bg-bgOpt font-bold py-2 px-4 rounded-xl"
            >
              Konsultasi Sekarang
            </Link>
          </div>
        </div>

        {/* Konsultasi Area */}

        {/* Contact Us */}
        <div className="mx-[100px] mt-[50px]">
          <span className="text-sizePri font-bold">Contact Us</span>
          <div className="my-[20px] flex gap-3 items-center">
            <div className="w-7 h-7 flex justify-center items-center bg-bgFunc2 rounded-full">
              <FaPhoneAlt className="text-textOpt rounded-full" />
            </div>
            <div className="">
              <p className="font-bold -mb-2">Phonecall</p>
              <p className="text-[12px]">www.mewellenteramandeh.com</p>
            </div>
          </div>
          <div className="my-[20px] flex gap-3 items-center">
            <div className="w-7 h-7 flex justify-center items-center bg-bgFunc2 rounded-full">
              <FaEnvelope className="text-textOpt" />
            </div>
            <div className="">
              <p className="font-bold -mb-2">Email Address</p>
              <p className="text-[12px]">psikologilenteramandeh@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-7 h-7 flex justify-center items-center bg-bgFunc2 rounded-full">
              <FaInstagram className="text-textOpt" />
            </div>
            <div className="">
              <p className="font-bold -mb-2">Instagram</p>
              <p className="text-[12px] ">@lenteramandeh</p>
            </div>
          </div>
          <div className="md:w-[500px]">
            <img src={Konsultan} />
          </div>
        </div>
        {/* Contact Us */}
      </div>

      {/* Why Choose Us */}
      {/* Why Choose Us */}

      {/* Best Service */}
      {/* Best Service */}
    </div>
  );
}

export default KonsultasiComponent;
