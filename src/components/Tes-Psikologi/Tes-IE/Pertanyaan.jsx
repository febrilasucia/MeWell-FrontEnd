import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuestionPage(props) {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const navigate = useNavigate();

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextClick = () => {
    if (selectedAnswer === '') {
      alert('Please select an answer!');
      return;
    }
    props.onNext(selectedAnswer);
  };

  const handleBeforeClick = () => {
    props.onBefore();
    setSelectedAnswer(props.prevResponse);
  };

  return (
    <div className="mx-56 mt-20">
      {/* judul */}
      <div className="mx-auto text-center my-5">
        <span className="text-[30px] font-bold text-textSec">
          Pilih satu jawaban
        </span>
      </div>
      {/* judul */}
      {/* deskripsi */}
      <div className="my-5">
        <p className="text-textFunc">
          Perjalanan Menuju Penemuan Diri: Pilihlah dengan Bijak Pernyataan yang
          Mencerminkan Kepribadianmu. Klik Tombol 'Lanjutkan' Setelah Memilih
          Pilihanmu.
        </p>
      </div>
      {/* deskripsi */}

      {/* pilihan */}
      <div className="flex gap-3 my-16 justify-center items-center">
        <div className="">
          <button
            className={`opsi w-[450px] h-[90px] p-3 bg-gray-200 hover:bg-bgOpt hover:border-none text-textSec hover:text-textOpt rounded-sm  focus:bg-bgOpt focus:text-white`}
            onClick={() => handleAnswerSelect('ekstrovert')}
          >
            {props.question.ekstrovertText}
          </button>
        </div>
        <div>
          <button
            className={`opsi w-[450px] h-[90px] p-3 bg-gray-200 hover:bg-bgOpt hover:border-none text-textSec hover:text-textOpt rounded-sm  focus:bg-bgOpt focus:text-white`}
            onClick={() => handleAnswerSelect('introvert')}
          >
            {props.question.introvertText}
          </button>
        </div>
      </div>
      {/* pilihan */}

      <div className="flex items-center text-center justify-between mt-48">
        <div className="w-[150px] h-[40px] p-2 bg-bgFunc3 hover:bg-bgFunc4 text-textOpt rounded-sm">
          <button onClick={handleBeforeClick}>{'<<'} Sebelumnya </button>
        </div>
        <div className="w-[150px] h-[40px] bg-bgFunc3 hover:bg-bgFunc4 p-2 text-textOpt rounded-sm">
          <button onClick={handleNextClick}>Lanjutkan {'>>'} </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
