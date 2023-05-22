import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaHandHoldingHeart,
} from "react-icons/fa";
import Konsultan from "../../image2/32.png";
import Online from "../../image2/33.png";

function Konsultasi() {
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
            <a
              href="#"
              className="inline-block mt-5 mb-10 bg-bgOpt2 hover:bg-bgOpt font-bold py-2 px-4 rounded-xl"
            >
              Konsultasi Sekarang
            </a>
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

export default Konsultasi;
