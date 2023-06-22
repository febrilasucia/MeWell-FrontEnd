import React from "react";
import ListTes1 from "../../../image2/18.png";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function Detail({ onStart }) {
  return (
    <>
      <Header />
      <div className="mx-32 ">
        {/* section 1 : gambar ie */}
        <div className="flex justify-center my-5">
          <img
            className="rounded-t-lg w-[300px] h-[300px]"
            src={ListTes1}
            alt="Gambar Tes Ekstrovert atau Introvert"
          />
        </div>

        {/* section 1 : gambar ie */}
        {/* section 2 : deskripsi */}
        <span className="text-sizePri font-bold text-textSec">
          "Temukan Sisi Tersembunyi dalam Dirimu: Tes Ekstrovert atau
          Introvert!"
        </span>
        <p className="my-3 text-textFunc text-sizeParagraph">
          Apakah Anda penasaran dengan jenis kepribadian Anda? Apakah Anda ingin
          mengetahui apakah Anda lebih cenderung menjadi ekstrovert yang energik
          atau introvert yang introspektif? Jika ya, maka tes ekstrovert atau
          introvert kami adalah jawabannya!
        </p>
        <p className="my-3 text-textFunc text-sizeParagraph">
          Bergabunglah dengan ribuan orang lainnya yang telah mengambil tes ini
          dan temukan jenis kepribadian Anda yang sebenarnya. Tes kami dirancang
          secara khusus untuk menggali aspek-aspek yang mungkin tersembunyi
          dalam diri Anda. Jawablah serangkaian pertanyaan menarik dan dalam
          waktu singkat, Anda akan mendapatkan hasil yang menarik dan
          bermanfaat.
        </p>
        <p className="my-3 text-textFunc text-sizeParagraph">
          Apakah Anda akan terkejut mengetahui sisi yang baru dari kepribadian
          Anda? Atau mungkin hasilnya akan mengonfirmasi apa yang sudah Anda
          ketahui sebelumnya? Tes ini adalah kesempatan sempurna untuk menggali
          diri sendiri dan mendapatkan wawasan yang berharga tentang diri Anda.
        </p>
        <p className="my-3 text-textFunc text-sizeParagraph">
          Jadi, apa yang Anda tunggu? Ikuti tes kami sekarang dan mulailah
          petualangan menarik ini untuk menemukan apakah Anda adalah seorang
          ekstrovert yang bersinar atau seorang introvert yang dalam!
        </p>
        {/* section 2 : deskripsi */}
        {/* section 3 : mulai */}
        <Link onClick={onStart} className="text-white font-bold">
          <div className="w-100 h-50 bg-bgOpt2 hover:bg-bgOpt cursor-pointer border border-1 rounded-2xl m-5 text-center p-2">
            Mulai
          </div>
        </Link>
        {/* section 3 : mulai */}
      </div>
      <Footer />
    </>
  );
}

export default Detail;
