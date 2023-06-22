import React from "react";
import IntrovertImage from "../../../image2/14.png";
import EkstrovertImage from "../../../image2/15.png";
import AmbivertImage from "../../../image2/16.png";
import { Link } from "react-router-dom";

const HasilPage = ({ introvertCount, extrovertCount }) => {
  const isIntrovert = introvertCount > extrovertCount;
  const isAmbivert = introvertCount === extrovertCount;

  return (
    <div className="flex flex-col items-center mx-64 mt-5">
      <div className="mx-auto text-center my-5">
        <span className="text-[30px] font-bold text-textSec">Hasil Tes</span>
      </div>
      <p className=" mb-8 text-[40px] font-bold text-textSec">
        {`Kamu termasuk ${
          isIntrovert ? "Introvert" : isAmbivert ? "Ambivert" : "Ekstrovert"
        }`}
      </p>
      <div>
        {introvertCount > extrovertCount ? (
          <img
            className="rounded-t-lg w-[300px] h-[300px]"
            src={IntrovertImage}
            alt="Introvert"
          />
        ) : introvertCount < extrovertCount ? (
          <img
            className="rounded-t-lg w-[300px] h-[300px]"
            src={EkstrovertImage}
            alt="Ekstrovert"
          />
        ) : (
          <img
            className="rounded-t-lg w-[300px] h-[300px]"
            src={AmbivertImage}
            alt="Ambivert"
          />
        )}
      </div>
      <div className="flex justify-evenly gap-3 w-full ">
        <p className="text-[16px] text-textSec">{`Jumlah pernyataan introvert: ${introvertCount}`}</p>
        <p className="text-[16px] text-textSec">{`Jumlah pernyataan ekstrovert: ${extrovertCount}`}</p>
      </div>

      <div className="my-10">
        {introvertCount > extrovertCount ? (
          <div className="">
            <span className="text-sizeParagraph text-textFunc">
              <p className="">
                <b>Introvert</b> adalah salah satu dari dua dimensi kepribadian
                dalam model kepribadian yang dikenal sebagai Model Big Five atau
                Lima Besar. Sifat introvert (disingkat "I") mengacu pada
                cenderungnya seseorang untuk mendapatkan energi dari waktu
                sendiri dan refleksi internal, serta cenderung menghindari
                interaksi sosial yang terlalu banyak. Berikut adalah penjelasan
                mengenai introvert, ciri-ciri umumnya, cita-cita yang cocok, dan
                beberapa tokoh dunia yang dikenal memiliki sifat introvert.
              </p>
              <br />
              <span className="font-bold">1. Ciri-ciri Introvert</span>
              <p className="my-2 mx-5">
                - Pemikir yang mendalam: Introvert cenderung suka merenung dan
                memikirkan hal-hal secara dalam.
              </p>
              <p className="my-2 mx-5">
                - Memiliki sedikit lingkaran sosial: Mereka lebih memilih
                memiliki sedikit teman yang dekat dan memilih menghabiskan waktu
                sendiri daripada berada di kerumunan.
              </p>
              <p className="my-2 mx-5">
                - Percaya diri: Ekstrovert umumnya memiliki rasa percaya diri
                yang tinggi dan cenderung ekspresif dalam mengungkapkan pendapat
                dan perasaan mereka.
              </p>
              <p className="my-2 mx-5">
                - Lebih tenang dan hati-hati: Mereka cenderung lebih tenang,
                hati-hati dalam tindakan, dan lebih sensitif terhadap lingkungan
                sekitar mereka.
              </p>
              <p className="my-2 mx-5">
                - Lebih suka aktivitas yang tenang: Introvert cenderung
                menikmati aktivitas yang tenang, seperti membaca, menulis, atau
                merenung.
              </p>
              <span className="font-bold">2. Cita-cita yang cocok </span>
              <p className="my-2 mx-5">
                - Karir yang fokus pada pemikiran dan refleksi: Introvert
                cenderung menemukan kepuasan dalam karir yang memungkinkan
                mereka untuk menggunakan kreativitas dan pemikiran mendalam,
                seperti penulis, ilmuwan, seniman, atau pekerja lepas.
              </p>
              <p className="my-2 mx-5">
                - Posisi yang lebih independen: Mereka cenderung menikmati
                pekerjaan yang memungkinkan mereka untuk bekerja secara mandiri
                dan memiliki kontrol atas waktu dan ruang pribadi mereka.
              </p>
              <span className="font-bold">
                3. Tokoh Dunia dengan Sifat Introvert:
              </span>
              <p className="my-2 mx-5">
                - Albert Einstein: Fisikawan terkenal ini dikenal dengan
                pemikiran dan kerja kerasnya yang mendalam.
              </p>
              <p className="my-2 mx-5">
                - J.K. Rowling: Penulis seri Harry Potter yang terkenal, yang
                cenderung menghabiskan waktu sendiri untuk mengekspresikan
                imajinasi kreatifnya.
              </p>
              <p className="my-2 mx-5">
                - Bill Gates: Pendiri Microsoft yang terkenal dengan
                kepintarannya dan dedikasinya pada teknologi, cenderung
                introvert dalam gaya kepemimpinannya.
              </p>
              <p>
                Perlu diingat bahwa sifat kepribadian dapat bervariasi di antara
                individu, dan orang bisa memiliki campuran sifat introvert dan
                ekstrovert dalam berbagai tingkatan. Penting untuk diingat bahwa
                tidak ada sifat kepribadian yang lebih baik atau lebih buruk
                daripada yang lain, dan keberagaman sifat kepribadian merupakan
                bagian alami dari manusia.
              </p>
            </span>
          </div>
        ) : introvertCount < extrovertCount ? (
          <div className=" ">
            <span className="text-sizeParagraph text-textFunc">
              <p className="">
                <b>Ekstrovert</b> adalah salah satu dari dua dimensi kepribadian
                dalam model kepribadian yang dikenal sebagai Model Big Five atau
                Lima Besar. Sifat ekstrovert (disingkat "E") mengacu pada
                cenderungnya seseorang untuk mendapatkan energi dari interaksi
                dengan orang lain dan lingkungan eksternal. Berikut adalah
                penjelasan mengenai ekstrovert, ciri-ciri umumnya, cita-cita
                yang cocok, dan beberapa tokoh dunia yang dikenal memiliki sifat
                ekstrovert.
              </p>
              <br />
              <span className="font-bold">1. Ciri-ciri Ekstrovert</span>
              <p className="my-2 mx-5">
                - Sosial dan ramah: Ekstrovert cenderung menyukai interaksi
                sosial dan merasa energik saat berada di lingkungan yang ramai
                dengan orang-orang.
              </p>
              <p className="my-2 mx-5">
                - Mudah bergaul: Mereka memiliki kemampuan yang baik dalam
                membangun hubungan dengan orang lain dan merasa nyaman dalam
                berbagai situasi sosial.
              </p>
              <p className="my-2 mx-5">
                - Percaya diri: Ekstrovert umumnya memiliki rasa percaya diri
                yang tinggi dan cenderung ekspresif dalam mengungkapkan pendapat
                dan perasaan mereka.
              </p>
              <p className="my-2 mx-5">
                - Aktif dan bersemangat: Mereka cenderung aktif, bersemangat,
                dan terbuka terhadap pengalaman baru.
              </p>
              <p className="my-2 mx-5">
                - Berbicara lebih banyak: Ekstrovert seringkali cenderung lebih
                suka berbicara dan membagikan pemikiran mereka dengan orang
                lain.
              </p>
              <span className="font-bold">2. Cita-cita yang cocok </span>
              <p className="my-2 mx-5">
                - Karir yang melibatkan interaksi sosial: Ekstrovert cenderung
                menikmati pekerjaan yang memungkinkan mereka berinteraksi dengan
                banyak orang, seperti di bidang pemasaran, hubungan masyarakat,
                politik, atau pengajaran.
              </p>
              <p className="my-2 mx-5">
                - Posisi kepemimpinan: Karena kemampuan mereka dalam
                berkomunikasi dan mempengaruhi orang lain, ekstrovert sering
                kali cocok dalam peran kepemimpinan di berbagai bidang.
              </p>
              <span className="font-bold">
                3. Tokoh Dunia dengan Sifat Ekstrovert:
              </span>
              <p className="my-2 mx-5">
                - Barack Obama: Mantan Presiden Amerika Serikat ini dikenal
                dengan karisma dan kemampuannya dalam berbicara di depan publik.
              </p>
              <p className="my-2 mx-5">
                - Oprah Winfrey: Tokoh televisi terkenal ini memiliki gaya
                berkomunikasi yang menarik dan kemampuan untuk terhubung dengan
                beragam orang.
              </p>
              <p className="my-2 mx-5">
                - Richard Branson: Pengusaha sukses dari Inggris yang terkenal
                dengan kepemimpinannya yang karismatik dan kemampuannya dalam
                menjalin hubungan bisnis.
              </p>
              <p>
                Perlu diingat bahwa sifat kepribadian dapat bervariasi di antara
                individu, dan orang bisa memiliki campuran sifat introvert dan
                ekstrovert dalam berbagai tingkatan. Penting untuk diingat bahwa
                tidak ada sifat kepribadian yang lebih baik atau lebih buruk
                daripada yang lain, dan keberagaman sifat kepribadian merupakan
                bagian alami dari manusia.
              </p>
            </span>
          </div>
        ) : (
          <div className="">
            <span className="text-sizeParagraph text-textFunc">
              <p className="">
                <b>Ambivert</b> adalah istilah yang digunakan untuk
                menggambarkan seseorang yang memiliki kombinasi sifat introvert
                dan ekstrovert. Mereka memiliki kemampuan untuk beradaptasi
                dengan baik dalam situasi sosial dan juga menikmati waktu
                sendiri. Berikut adalah penjelasan mengenai ambivert, ciri-ciri
                umumnya, cita-cita yang cocok, dan beberapa tokoh dunia yang
                dikenal memiliki sifat ambivert.
              </p>
              <br />
              <span className="font-bold">1. Ciri-ciri Ambivert</span>
              <p className="my-2 mx-5">
                - Fleksibel dalam situasi sosial: Ambivert dapat beradaptasi
                dengan baik dalam situasi sosial. Mereka bisa menjadi sosial dan
                berkomunikasi dengan energi ketika dibutuhkan, tetapi juga
                nyaman menghabiskan waktu sendiri saat dibutuhkan.
              </p>
              <p className="my-2 mx-5">
                - Kemampuan mendengarkan dan berbicara: Ambivert memiliki
                keseimbangan yang baik antara mendengarkan dan berbicara. Mereka
                dapat memberikan perhatian kepada orang lain dan juga
                berkontribusi dalam percakapan dengan ide-ide mereka.
              </p>
              <p className="my-2 mx-5">
                - Toleransi terhadap kegiatan sosial: Mereka mampu menikmati
                interaksi sosial dalam jumlah tertentu, tetapi juga membutuhkan
                waktu untuk merenung dan memulihkan energi secara pribadi.
              </p>
              <p className="my-2 mx-5">
                - Fleksibel dalam gaya kepemimpinan: Ambivert cenderung memiliki
                kemampuan untuk menjadi pemimpin yang baik dengan menyesuaikan
                gaya kepemimpinan mereka dengan situasi dan kebutuhan tim.
              </p>
              <span className="font-bold">2. Cita-cita yang cocok </span>
              <p className="my-2 mx-5">
                - Karir yang memungkinkan kerja sosial dan refleksi pribadi:
                Ambivert cenderung menemukan kepuasan dalam karir yang
                memungkinkan mereka untuk berinteraksi dengan orang lain, tetapi
                juga memiliki waktu untuk memikirkan dan merenungkan ide-ide
                mereka sendiri. Contoh karir yang cocok meliputi konsultan,
                pengusaha, psikolog, atau pengajar.
              </p>

              <span className="font-bold">
                3. Tokoh Dunia dengan Sifat Ekstrovert:
              </span>
              <p className="my-2 mx-5">
                - Barack Obama: Mantan Presiden Amerika Serikat ini dikenal
                dengan kemampuannya dalam berinteraksi dengan orang banyak,
                tetapi juga kemampuannya untuk merenung dan berpikir secara
                mendalam.
              </p>
              <p className="my-2 mx-5">
                - Emma Watson: Aktris dan aktivis ini memiliki kemampuan untuk
                berbicara di depan umum dan berinteraksi dengan orang banyak,
                tetapi juga menghargai privasi dan waktu pribadi.
              </p>
              <p className="my-2 mx-5">
                - Elon Musk: Pengusaha terkenal ini memiliki kombinasi
                kecenderungan introvert dan ekstrovert. Ia terlibat dalam banyak
                proyek sosial dan bisnis, tetapi juga memiliki sifat yang sangat
                reflektif dan pribadi.
              </p>
              <p>
                Perlu diingat bahwa sifat kepribadian dapat bervariasi di antara
                individu, dan orang bisa memiliki campuran sifat introvert dan
                ekstrovert dalam berbagai tingkatan. Penting untuk diingat bahwa
                tidak ada sifat kepribadian yang lebih baik atau lebih buruk
                daripada yang lain, dan keberagaman sifat kepribadian merupakan
                bagian alami dari manusia.
              </p>
            </span>
          </div>
        )}
      </div>
      <div className="w-full">
        <Link to={"/tes"} className="text-white font-bold">
          <div className="w-100 h-50 bg-bgOpt2 hover:bg-bgOpt cursor-pointer border border-1 rounded-2xl m-5 text-center p-2">
            Selesai
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HasilPage;
