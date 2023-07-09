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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <div className="flex flex-wrap">
        {/* bagian 1 */}
        <div className="w-1/3 ">
          <div className="px-10 text-sizePri text-textPri font-bold">
            <br />
            <h1 className="leading-7">
              Kelas Emosi <br /> Dibuka
            </h1>
          </div>
          <p className="px-10 text-sizeParagraph mt-[15px]">
            We are a company that manages various children's schools that focus
            on quality education.
            <br />
            <br />
            We prioritize the quality of education in this country to improve
            your child's non-academic intelligence.
          </p>
          <br />
          <div className="absolute md:w-[460px]">
            <img className="" src={Foto7} alt="Foto7" />
          </div>

          <img src={CloudDown} alt="CloudDown" className="mt-[50px]" />
        </div>

        {/* bagian 1 */}
        {/* bagian 2 */}
        <div className="w-1/3 relative h-screen">
          <img className="absolute" src={CloudUp} alt="CloudUp" />
          <div className="">
            <div className="relative text-center text-textOpt mt-[100px]">
              <p className="text-sizeSec font-bold">MeWell</p> <br />
              <p className="text-sizeParagraph mx-[60px] leading-[14px]">
                MeWell Mental Wellness merupakan konsultasi tentang Lorem ipsum
                dolor sit amet consectetur quas vel sint commodi
              </p>
            </div>
          </div>
          <img className="-mt-[62px]" src={Chairs} alt="Chairs" />
        </div>

        {/* bagian 2 */}
        {/* bagian 3 */}
        <div className="w-1/3">
          <div className="mx-[20px] mt-[3px]">
            <img src={StarYellow} className="h-[170px]" alt="StarYellow" />
          </div>
          <div className="mx-[100px]">
            <span className="text-[24px] font-bold">
              Konsultasi <br /> Permasalahan
            </span>
            <div className="my-[5px]">
              <p className="font-bold">Website</p>
              <p className="text-[12px]">www.mewellenteramandeh.com</p>
            </div>
            <div className="my-[5px]">
              <p className="font-bold">Email</p>
              <p className="text-[12px]">psikologilenteramandeh@gmail.com</p>
            </div>
            <div className="my-[5px]">
              <p className="font-bold">Social Media</p>
              <p className="text-[12px]">@lenteramandeh</p>
            </div>
          </div>
          <div className="absolute -mt-[100px]">
            <img src={CloudDown} alt="" className="" />
          </div>
          <div className="absolute mt-[200px] md:w-[429px] w-full text-textOpt text-center">
            <p className="w-full text-[14px]">Open Admission</p>
            <p className="text-[24px] font-bold">12 Februari 2023</p>
          </div>
        </div>
        {/* bagian 3 */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
