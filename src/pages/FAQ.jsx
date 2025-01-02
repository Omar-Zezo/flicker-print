import Navigation from "@/utils/Navigation";
import UseLangDetection from "@/hooks/UseLangDetection";
import Header from "@/utils/Header";
import Answers from "@/components/Home/Answers";

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
      <div className="container flex flex-col gap-10 mx-auto">
        <Navigation current="fAQs"/>
        <div className="container mx-auto">
        <Answers/>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
