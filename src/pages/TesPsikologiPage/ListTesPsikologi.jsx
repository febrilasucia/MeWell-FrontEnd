import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HeaderTes from '../../image/list-psikologi-test.png';
import HeaderTes2 from '../../image/list-psikologi-test2.png';
import ListTes1 from '../../image2/18.png';
import ListTes2 from '../../image2/34.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const list = [
  {
    img: ListTes1,
    title: 'Tes Ekstrovert atau Introvert',
    content:
      'Apakah Anda ingin mengetahui apakah Anda lebih cenderung menjadi ekstrovert yang energik atau introvert yang introspektif? Jika ya, maka tes ekstrovert atau introvert kami adalah jawabannya!',
    link: '/tes/detail-ie',
  },
  {
    img: ListTes2,
    title: 'Tes Gangguan Kepribadian Ketergantungan',
    content:
      'Dependent Personality Disorder (DPD) adalah kondisi kesehatan mental yang ditandai dengan kebutuhan yang meluas dan berlebihan untuk diurus oleh orang lain. Ini mengarah pada perilaku tunduk dan melekat, serta ketakutan akan perpisahan atau pengabaian. Individu dengan DPD sering bergumul dengan membuat keputusan, menegaskan diri mereka sendiri, dan mengambil tanggung jawab secara mandiri.',
    link: '/tes/detail-gk',
  },
];

export default function ListTesPsikologi() {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getBlogs();
  }, []);
  const getBlogs = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/blog`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    setBlogs(response.data);
    setIsLoading(false);
  };
  return (
    <div>
      <Header />
      <div className="bg-bgSec">
        {/* Header List Blog */}
        <div className="absolute w-[450px] text-right md:w-[1200px] text-white mt-[200px] mx-[30px] md:mt-[200px]">
          <span className="text-sizeSec font-bold">Tes Psikologi</span>
          <p className="text-[14px] md:text-[16px] mt-3 md:ml-[600px] ml-[100px]">
            Sebuah tes survei untuk mengetahui diri lebih dalam sebagai patokan
            dan dapat di gunakan untuk semua kalangan umur
          </p>
        </div>

        <div>
          <img
            className="w-full h-auto md:hidden"
            src={HeaderTes}
            alt="Header for small screens"
          />
          <img
            className="w-full h-auto hidden md:block"
            src={HeaderTes2}
            alt="Header for medium and large screens"
          />
        </div>

        {/* Header List Blog */}

        {/* Card List Blog */}
        <div className="flex flex-wrap justify-center my-10">
          {list.map((list) => (
            <div class="max-w-sm m-5 bg-white hover:bg-[#f1f1f1] border border-gray-200 rounded-lg shadow">
              <img
                class="rounded-t-lg"
                src={list.img}
                alt="Gambar Tes Ekstrovert atau Introvert"
              />
              <div class="px-5 pt-5">
                <h5 class="mb-2 text-[20px] font-bold text-textSec">
                  {list.title}
                </h5>
                <p class="mb-3 text-textFunc text-sizeParagraph ">
                  {list.content}
                </p>
              </div>
              <Link to={list.link} className="text-white">
                <div className="w-100 h-50 bg-bgOpt2 hover:bg-bgOpt cursor-pointer border border-1 rounded-2xl m-5 text-center p-2">
                  Lihat
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
