<<<<<<< HEAD:src/pages/TesPsikologiPage/TesIE/TesIE.jsx
import React, { useState } from 'react';
import HasilPage from '../../../components/Tes-Psikologi/Tes-IE/Hasil';
import PertanyaanPage from '../../../components/Tes-Psikologi/Tes-IE/Pertanyaan';
import MulaiPage from './Detail';
import { questions } from './data';
=======
import React, { useEffect, useState } from "react";
import HasilPage from "../../../components/Tes-Psikologi/Tes-IE/Hasil";
import PertanyaanPage from "../../../components/Tes-Psikologi/Tes-IE/Pertanyaan";
import MulaiPage from "./DetailIEPage";
import { questions } from "./data";
>>>>>>> 96252b67e66550f6b90bff128e19506c38b22c42:src/pages/TesPsikologiPage/TesIEPage/TesIE.jsx

function TesIE() {
  const [currentPage, setCurrentPage] = useState('start');
  const [responses, setResponses] = useState([]);
  const [introvertCount, setIntrovertCount] = useState(0);
  const [extrovertCount, setExtrovertCount] = useState(0);
  const [prevResponse, setPrevResponse] = useState('');

  const handleStart = () => {
    setCurrentPage('question1');
  };

  const handleNext = (answer) => {
    setResponses((prevResponses) => [...prevResponses, answer]);
    if (answer === 'introvert') {
      setIntrovertCount(introvertCount + 1);
    } else {
      setExtrovertCount(extrovertCount + 1);
    }

    const questionIndex = parseInt(currentPage.replace('question', ''), 10);
    if (questionIndex < 10) {
      setCurrentPage(`question${questionIndex + 1}`);
    } else {
      setCurrentPage('result');
    }
  };

<<<<<<< HEAD:src/pages/TesPsikologiPage/TesIE/TesIE.jsx
  const handleBefore = () => {
    const questionIndex = parseInt(currentPage.replace('question', ''), 10);
    if (questionIndex > 1) {
      setCurrentPage(`question${questionIndex - 1}`);
      setPrevResponse('');
      setResponses((prevResponses) =>
        prevResponses.slice(0, questionIndex - 2)
      );
      setIntrovertCount((prevCount) =>
        responses[questionIndex - 2] === 'introvert' ? prevCount - 1 : prevCount
      );
      setExtrovertCount((prevCount) =>
        responses[questionIndex - 2] === 'ekstrovert'
          ? prevCount - 1
          : prevCount
      );
    }
  };

  const getCurrentQuestionIndex = () => {
    return parseInt(currentPage.replace('question', ''), 10) - 1;
  };
=======
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
>>>>>>> 96252b67e66550f6b90bff128e19506c38b22c42:src/pages/TesPsikologiPage/TesIEPage/TesIE.jsx

  return (
    <div>
      {currentPage === 'start' && <MulaiPage onStart={handleStart} />}
      {currentPage.includes('question') && (
        <PertanyaanPage
          question={questions[getCurrentQuestionIndex()]}
          onNext={handleNext}
          onBefore={handleBefore}
          currentResponse={responses[getCurrentQuestionIndex()]}
          prevResponse={prevResponse}
        />
      )}
      {currentPage === 'result' && (
        <HasilPage
          introvertCount={introvertCount}
          extrovertCount={extrovertCount}
        />
      )}
    </div>
  );
}

export default TesIE;
