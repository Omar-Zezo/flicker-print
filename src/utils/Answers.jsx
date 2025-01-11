import UseGetQuestions from "@/hooks/UseGetQuestions";
import Spiner from "@/utils/Spiner";
import QuestionsCard from "../components/questions/QuestionsCard";
import UseLangDetection from "@/hooks/UseLangDetection";
import { t } from "i18next";
import { useState } from "react";

const Answers = () => {
  const { questions, loaderStatus } = UseGetQuestions();
  const langDetection = UseLangDetection();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className="flex flex-col items-center gap-16"
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <h3 className="w-[30%] max-md:w-1/2 text-center text-[32px] max-md:text-base text-black-500 font-semibold pb-1 relative answer-line">
        {t("got Questions?")}
      </h3>
      <div className="container">
        <ul className="questions-list">
          {loaderStatus ? (
            <Spiner />
          ) : questions?.length > 0 ? (
            questions.map((question, index) => (
              <QuestionsCard
                key={question.id}
                index={index}
                question={question}
                langDetection={langDetection}
                isActive={activeQuestionIndex === index}
                onToggle={() => toggleQuestion(index)}
              />
            ))
          ) : (
            null
          )}
        </ul>
      </div>
    </div>
  );
};

export default Answers;
