import React, { useEffect, useState } from "react";
import HasilPage from "../../../components/Tes-Psikologi/Tes-IE/Hasil";
import PertanyaanPage from "../../../components/Tes-Psikologi/Tes-IE/Pertanyaan";
import MulaiPage from "./DetailIEPage";
import { questions } from "./data";

function TesIE() {
  const [currentPage, setCurrentPage] = useState("start");
  const [answers, setAnswers] = useState([]);
  const [introvertCount, setIntrovertCount] = useState(0);
  const [extrovertCount, setExtrovertCount] = useState(0);

  const handleStart = () => {
    setCurrentPage("question1");
  };

  const handleNext = (answer) => {
    setAnswers([...answers, answer]);
    if (answer === "introvert") {
      setIntrovertCount(introvertCount + 1);
    } else {
      setExtrovertCount(extrovertCount + 1);
    }

    const questionIndex = parseInt(currentPage.replace("question", ""), 10);
    if (questionIndex < 10) {
      setCurrentPage(`question${questionIndex + 1}`);
    } else {
      setCurrentPage("result");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {currentPage === "start" && <MulaiPage onStart={handleStart} />}
      {currentPage.includes("question") && (
        <PertanyaanPage
          question={
            questions[parseInt(currentPage.replace("question", ""), 10) - 1]
          }
          onNext={handleNext}
        />
      )}
      {currentPage === "result" && (
        <HasilPage
          introvertCount={introvertCount}
          extrovertCount={extrovertCount}
        />
      )}
    </div>
  );
}

export default TesIE;
