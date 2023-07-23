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
    name: '',
    email: '',
    password: '',
    confPassword: '',
    dateOfBirth: '',
    gender: '',
    age: '',
    work: '',
  });
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/auth/register`,
      data: formData,
    };
    try {
      const makeRequest = async () => {
        try {
          const response = await axios.request(config);
          console.log(response.data);
          console.log(JSON.stringify(response.data));
        } catch (error) {
          console.log(error);

          console.log(error.response.data.message);
        }
      };
      makeRequest();
      // setShowAlert(true);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    // Navigate to home
    navigate('/');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const passwordMatch = formData.password === formData.confPassword;

  return (
    <div>
      <div>
        {/* image logo */}
        <div className="absolute opacity-25">
          <img src={LogoMandehLogin} className="h-screen" alt="Logo Mandeh" />
        </div>
        {/* image logo */}
        {/* image logo lengkap */}
        <div className="relative">
          <img
            src={LogoMandeh}
            className="w-[250px] absolute right-0 mt-5"
            alt="Logo Mandeh"
          />
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
                      name="name"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Nama"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      name="dateOfBirth"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <select
                      name="gender"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      value={formData.gender}
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
                      name="age"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Umur"
                      required
                      value={formData.age}
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
                      type="password"
                      name="confPassword"
                      id="confPassword"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-5 "
                      placeholder="Konfirmasi Password"
                      required
                      value={formData.confPassword}
                      onChange={handleChange}
                    />
                    <div
                      className="text-red-500 text-[10px] mb-1"
                      style={{
                        position: "absolute",
                        visibility:
                          formData.password && !passwordMatch
                            ? "visible"
                            : "hidden",
                      }}
                    >
                      *Password and Confirm Password do not match
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="work"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-bgFunc3 focus:border-bgFunc3 block w-full p-2.5 mt-6 "
                      placeholder="Pekerjaan"
                      required
                      value={formData.work}
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
                <a href="/login" className="text-bgFunc3 hover:underline ">
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
            <Link to="/" className="">
              Kembali{' '}
            </Link>
          </div>
          <div>
            <Link to="/">
              <FaAngleDoubleRight className="" />{' '}
            </Link>
          </div>
        </div>
        {/* tombol back */}

        {showAlert && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md">
              <p className="text-green-600 font-semibold text-lg">
                Registrasi berhasil!
              </p>
              <p className="text-gray-500 mt-2">
                Selamat, Anda telah berhasil melakukan registrasi.
              </p>
              <button
                className="text-sm text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg px-4 py-2 mt-4"
                onClick={handleAlertClose}
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
