import React from 'react';
import ListTes2 from '../../../image2/34.png';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

function DetailKetergantunganPage({ onStart }) {
  return (
    <>
      <Header />
      <div className="mx-32 ">
        {/* section 1 : gambar ie */}
        <div className="flex justify-center my-5">
          <img
            className="rounded-t-lg w-[300px] h-[300px]"
            src={ListTes2}
            alt="Gambar Tes Ekstrovert atau Introvert"
          />
        </div>

        {/* section 1 : gambar ie */}
        {/* section 2 : deskripsi */}
        <span className="text-sizePri font-bold text-textSec">
          "Apa Itu Gangguan Kepribadian Ketergantungan?"
        </span>
        <p className="my-3 text-textFunc text-sizeParagraph">
          Dependent Personality Disorder (DPD) adalah kondisi kesehatan mental
          yang ditandai dengan kebutuhan yang meluas dan berlebihan untuk diurus
          oleh orang lain. Ini mengarah pada perilaku tunduk dan melekat, serta
          ketakutan akan perpisahan atau pengabaian. Individu dengan DPD sering
          bergumul dengan membuat keputusan, menegaskan diri mereka sendiri, dan
          mengambil tanggung jawab secara mandiri.
        </p>
        <span>Apa Penyebab Gangguan Kepribadian Ketergantungan?</span>
        <p className="my-3 text-textFunc text-sizeParagraph">
          Penyebab pasti dari Dependent Personality Disorder (DPD) tidak
          sepenuhnya dipahami, tetapi diyakini sebagai hasil interaksi yang
          kompleks antara faktor genetik, lingkungan, dan psikologis.
        </p>
        <p className="my-3 text-textFunc text-sizeParagraph">
          Beberapa peneliti berpendapat bahwa penyebab utama Dependent
          Personality Disorder terletak pada pengalaman awal kehidupan.
          Faktor-faktor seperti gaya keterikatan yang tidak sehat yang terbentuk
          selama masa kanak-kanak, pola asuh yang terlalu protektif, atau
          kurangnya pengasuhan yang tepat, bersama dengan pengalaman pelecehan
          emosional atau fisik, dapat berkontribusi pada perkembangan gangguan
          tersebut.
        </p>
        <p className="my-3 text-textFunc text-sizeParagraph">
          Penting untuk mempertimbangkan pengaruh predisposisi genetik,
          temperamen individu, dan norma sosial dan budaya yang berlaku di
          komunitas tempat anak tumbuh, karena mereka juga memainkan peran
          penting dalam membentuk perkembangan kondisi ini.
        </p>
        {/* section 2 : deskripsi */}
        {/* section 3 : mulai */}
        <Link to={'tes'} className="text-white font-bold">
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

export default DetailKetergantunganPage;
