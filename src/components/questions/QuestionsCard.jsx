import { ArrowRightBlue, XBlue } from "@/images/svg";

const QuestionsCard = ({ question, index, langDetection, isActive, onToggle }) => {
  return (
    <li className="my-3" key={index}>
      <button
        className={`w-full text-left font-medium border-0 ${
          isActive ? "bg-blue-500 text-white" : "bg-section-gray text-black-500"
        } cursor-pointer flex items-center ${
          langDetection === "en" ? "pr-3" : "pl-3"
        } rounded-tl-[16px] rounded-tr-[16px] ${
          !isActive && "rounded-br-[16px] rounded-bl-[16px]"
        }`}
        onClick={onToggle}
      >
        <h4
          className={`text-2xl font-semibold w-full py-[33px] px-5 ${
            langDetection === "en" ? "text-left" : "text-right"
          }`}
        >
          {question.question}
        </h4>
        {isActive ? (
          <div className="py-3 px-6 bg-white rounded-[42px] border border-black/10">
            <img width={24} height={24} src={XBlue} alt="close" />
          </div>
        ) : (
          <div className="py-3 px-6 bg-white rounded-[42px] border border-black/10">
            <img width={24} height={24} src={ArrowRightBlue} alt="arrow-right" />
          </div>
        )}
      </button>
      <div
        className={`rounded-bl-[16px] rounded-br-[16px] ${
          isActive ? "bg-blue-500 text-white" : "bg-section-gray text-black-500"
        } py-7 px-3 ${isActive ? "block" : "hidden"}`}
      >
        <span>
          <p className="text-bas font-medium">{question.answer}</p>
        </span>
      </div>
    </li>
  );
};

export default QuestionsCard;
