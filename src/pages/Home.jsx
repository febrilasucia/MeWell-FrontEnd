import React, { useEffect } from "react";
import Foto7 from "../image2/7.png";
import CloudDown from "../image/cloud-red-down.png";
import CloudUp from "../image/cloud-red-up.png";
import Chairs from "../image/8.png";
import StarYellow from "../image/star-yellow.png";
import Principal from "../image/7(1).png";
import Child from "../image2/25.png";
import Train from "../image2/24.png";

import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const token = useSelector((state) => state.auth.token);
  console.log("ini token di halaman home", token);
  // Gunakan token dalam komponen
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div>
        <div className="flex-none sm:flex-none md:flex">
          {/* Part 2 Konsultasi Permasalahan */}
          <div className="md:w-[460px]">
            <div className="md:w-[460px] mt-[34px] mx-[100px]">
              <span className="text-sizePri text-textPri font-bold">
                Kelas Emosi <br />
                Dibuka
              </span>
              <br />
              <p className="md:w-[250px] text-sizeParagraph mt-[15px]">
                We are a company that manages various children's schools that
                focus on quality education.
                <br /> <br />
                We prioritize the quality of education in this country to
                improve your child's non-academic intelligence.
              </p>
              <br />
            </div>
            <div className="absolute md:w-[460px]">
              <img className="" src={Foto7} alt="Foto7" />
            </div>
            <div className="mt-[50px] md:w-[460px]">
              <img src={CloudDown} alt="CloudDown" />
            </div>
          </div>

          {/* Part 2 Konsultasi Permasalahan */}
          {/* Part 1 Konsultasi Permasalahan */}
          <div className="">
            <div className="">
              <img
                className="absolute md:w-[460px]"
                src={CloudUp}
                alt="CloudUp"
              />
              <div className="absolute md:w-[460px] text-center text-textOpt mt-[100px]">
                <p className="text-sizeSec font-bold">MeWell</p> <br />
                <p className="text-sizeParagraph mx-[60px] leading-[14px]">
                  MeWell Mental Wellness merupakan konsultasi tentang Lorem
                  ipsum dolor sit amet consectetur quas vel sint commodi
                </p>
              </div>
            </div>
            <div className="block">
              <div className="h-[200px]"></div>
              <img className="md:w-[460px]" src={Chairs} alt="Chairs" />
            </div>
          </div>

          {/* Part 1 Konsultasi Permasalahan */}

          {/* Part 3 Konsultasi Permasalahan */}
          <div className="mb-[400px] md:mb-0">
            <div className="mx-[20px] mt-[30px]">
              <img src={StarYellow} className="h-[170px]" alt="StarYellow" />
            </div>
            <div className="mx-[100px] mt-[50px]">
              <span className="text-[24px] font-bold">
                Konsultasi <br /> Permasalahan
              </span>
              <div className="my-[10px]">
                <p className="font-bold">Website</p>
                <p className="text-[12px]">www.mewellenteramandeh.com</p>
              </div>
              <div className="my-[10px]">
                <p className="font-bold">Email</p>
                <p className="text-[12px]">psikologilenteramandeh@gmail.com</p>
              </div>
              <div className="my-[10px]">
                <p className="font-bold">Social Media</p>
                <p className="text-[12px]">@lenteramandeh</p>
              </div>
            </div>
            <div className="absolute -mt-[100px]">
              <img src={CloudDown} alt="" className="md:h-[440px]  h-auto" />
            </div>
            <div className="absolute mt-[200px] md:w-[429px] w-full text-textOpt text-center">
              <p className="w-full text-[14px]">Open Admission</p>
              <p className="text-[24px] font-bold">12 Februari 2023</p>
            </div>
          </div>
          {/* Part 3 Konsultasi Permasalahan */}
        </div>
        {/* *************************** */}
        <div className="flex-none sm:flex-none md:flex ">
          {/* Part 2 Konsultasi Permasalahan */}
          <div className="">
            <img
              className="absolute  md:w-[460px] h-[700px]"
              src={CloudUp}
              alt=""
            />
            <div className="md:w-[460px]">
              <div className="absolute md:w-[460px] mx-[60px] text-textOpt mt-[50px]">
                <p className="text-[20px] font-bold">Sing and Dance</p> <br />
                <p className="md:w-[250px] text-sizeParagraph">
                  We also open singing and dancing classes to give children who
                  are talented in this field to channel their talents and
                  interests without being forced.
                </p>
                <br />
                <p className="font-bold text-sizeParagraph text-bgOpt">
                  ***********************************
                </p>
                <br />
                <p className="text-[20px] font-bold">Writing Contest</p> <br />
                <p className="md:w-[250px] text-sizeParagraph">
                  Creative writing class that is able to develop children's
                  writing talent creatively.
                </p>
                <br />
              </div>
            </div>
            <div className="block">
              <div className="h-[200px] mt-[230px]"></div>
              <img
                className="md:w-[460px] mt-[180px] md:mt-0"
                src={Child}
                alt=""
              />
            </div>
          </div>
          {/* Part 2 Konsultasi Permasalahan */}
          {/* Part 1 Konsultasi Permasalahan */}
          <div className="">
            <div className="block">
              <img className="md:w-[460px]" src={Principal} alt="Principal" />
            </div>
            <div className="">
              <img
                className="absolute md:w-[460px]"
                src={CloudUp}
                alt="CloudUp"
              />
              <div className="absolute md:w-[460px] text-center text-textOpt mt-[50px]">
                <p className="text-sizePri font-bold ">Our Principle</p> <br />
                <p className="text-[16px] font-bold text-bgOpt">
                  Evantruda Mailyza, M.Psi Psikologi
                </p>{" "}
                <br />
                <p className="text-sizeParagraph mx-[60px] leading-[14px]">
                  Our leader is someone who is able to inspire many people with
                  his style of speaking.
                </p>
              </div>
            </div>
          </div>

          {/* Part 1 Konsultasi Permasalahan */}
          {/* Part 3 Konsultasi Permasalahan */}
          <div className="">
            <img className="absolute h-[700px]" src={CloudUp} alt="CloudUp" />
            <div className="">
              <div className="absolute md:w-[460px] mx-[60px] text-textOpt mt-[50px]">
                <span className="text-[36px] font-bold leading-10">
                  Last Summer <br /> Class
                </span>{" "}
                <br />
                <br />
                <p className="font-bold text-sizeParagraph text-bgOpt">
                  ***********************************
                </p>
                <br />
                <p className="text-[20px] font-bold">Fun Activity</p> <br />
                <p className="md:w-[250px] text-sizeParagraph">
                  We organize fun activities to help your child's learning
                  process become more effective.
                </p>
                <br />
              </div>
            </div>
            <div className="block mt-[430px] text-center">
              <div className="h-[300px] md:w-[431px] flex justify-center mt-[230px]">
                <img src={Train} alt="train" />
              </div>
              <br />
              <span className="text-sizeSec font-bold leading-10">50% Off</span>
              <p className="text-[20px]">Promotion</p>
            </div>
          </div>
          {/* Part 3 Konsultasi Permasalahan */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
