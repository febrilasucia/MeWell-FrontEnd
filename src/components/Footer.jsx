import React from "react";
import LogoMandeh from "../image/logo-mandeh.png";

function Footer() {
  return (
    <div className="footer">
      <div className="h-[250px] bg-bgSec bottom-0  w-full flex items-center justify-center gap-3 md:gap-10">
        <div className="w-[100px]  md:w-[150px]">
          <img src={LogoMandeh} />
        </div>
        <div className="text-textSec">
          <div className="my-[10px]">
            <p className="font-bold text-[14px] md:text-[18px]">
              Customer Service
            </p>
            <p className="text-[10px] md:text-[12px]">+628123456 (Whatsapp)</p>
          </div>
          <div className="my-[10px]">
            <p className="font-bold text-[14px] md:text-[18px]">Ikuti Kami</p>
            <p className="text-[10px] md:text-[12px]">
              @lenteramandeh (Instagram)
            </p>
          </div>
          <div className="my-[10px]">
            <p className="font-bold text-[14px] md:text-[18px]">Email</p>
            <p className="text-[10px] md:text-[12px]">
              psikologilenteramandeh@gmail.com
            </p>
          </div>
        </div>

        <div className="text-textSec w-[180px] md:w-[300px]">
          <div className="my-[10px]">
            <p className="font-bold text-[14px] md:text-[18px]">Alamat</p>
            <p className="text-[10px] md:text-[12px]">
              Jl. Batang Marao No.1, Alai Parak Kopi, Kec. Padang Utara, Kota
              Padang, Sumatera Barat 25173
            </p>
          </div>
          <div className="my-[10px]">
            <p className="font-bold text-[14px] md:text-[18px]">MeWell</p>
            <p className="text-[10px] md:text-[12px]">
              Copyright © 2023 Mental Wellness
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
