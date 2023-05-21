import React, { useEffect } from 'react';
import { useState } from 'react';
import LogoMandehLogin from '../image/logo-mandeh-login.png';
import LogoMandeh from '../image/logo-hori.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaAngleDoubleRight } from 'react-icons/fa';
import axios from 'axios';

function Register() {
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    tanggalLahir: '',
    password: '',
    jenisKelamin: '',
    pekerjaan: '',
    umur: '',
    hobi: '',
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/register`,
        formData
      );
      navigate('/');
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <div>
        {/* image logo */}
        <div className="absolute opacity-25">
          <img src={LogoMandehLogin} className="h-screen" />
        </div>
        {/* image logo */}
        {/* image logo lengkap */}
        <div className="relative">
          <img src={LogoMandeh} className="w-[250px] absolute right-0 mt-5" />
        </div>
        {/* image logo lengkap */}
        {/* card */}
        <div className="flex flex-col h-screen justify-center">
          <div className="m-auto bg-bgSec w-full max-w-3xl p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <h5 className="text-[54px] font-semibold text-textPri text-center">
                Registrasi
              </h5>
              <p className="text-sm text-gray-500  text-center font-medium">
                Silahkan masukan data lengkap anda
              </p>

              {/* form */}
              <div className="flex flex-wrap justify-center w-full h-[250px] max-w-3xl gap-5">
                <div className="w-[300px]">
                  <div>
                    <input
                      type="text"
                      name="nama"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Nama"
                      required
                      value={formData.nama}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      name="tanggalLahir"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5"
                      value={formData.tanggalLahir}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <select
                      name="jenisKelamin"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      value={formData.jenisKelamin}
                      onChange={handleChange}
                    >
                      <option value="">Pilih Jenis Kelamin</option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="number"
                      name="umur"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Umur"
                      required
                      value={formData.umur}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-[300px]">
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="pekerjaan"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Pekerjaan"
                      required
                      value={formData.pekerjaan}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="hobi"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Hobi"
                      required
                      value={formData.hobi}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* form */}

              <button
                type="submit"
                className="w-full text-white bg-bgFunc3 hover:bg-bgFunc4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Daftar
              </button>
              <div className="text-sm font-medium text-gray-500 text-center ">
                Sudah mempunyai akun? masuk{' '}
                <a href={'/login'} className="text-bgFunc3 hover:underline ">
                  disini
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* card */}
        {/* tombol back */}
        <div className="flex items-center float-right mr-10 -mt-8 text-bgFunc hover:text-bgFunc2 font-medium ">
          <div>
            <Link to={'/home'} className="">
              Kembali{' '}
            </Link>
          </div>
          <div>
            <Link to={'/home'}>
              <FaAngleDoubleRight className="" />{' '}
            </Link>
          </div>
        </div>
        {/* tombol back */}
      </div>
    </div>
  );
}

export default Register;
