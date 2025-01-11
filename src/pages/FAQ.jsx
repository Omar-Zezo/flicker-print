import Navigation from "@/utils/Navigation";
import UseLangDetection from "@/hooks/UseLangDetection";
import Header from "@/utils/Header";
import Answers from "@/utils/Answers";

const FAQ = () => {
  const langDetection = UseLangDetection();

  return (
    <div
      className={`flex flex-col gap-8 ${
        langDetection === "ar" && "arabic-font"
      }`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <Header title="fAQs"/>
      <div className="container flex flex-col gap-10">
        <Navigation current="fAQs"/>
        <Answers/>
      </div>
    </div>
  );
};

export default FAQ;
