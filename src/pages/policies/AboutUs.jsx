import Navigation from "@/utils/Navigation";
import UseLangDetection from "@/hooks/UseLangDetection";
import Header from "@/utils/Header";
import Statistics from "@/components/AboutUs/Statistics";
\import ContactUsContainer from "@/components/conatctUs/ContactUsContainer";
import Answers from "@/utils/Answers";
import WhyUs from "@/components/AboutUs/WhyUs";
import OurProducts from "@/components/AboutUs/OurProducts";

const AboutUs = () => {
  const lang = UseLangDetection();
  return (
    <div
      className={`flex flex-col gap-8 ${lang === "ar" && "arabic-font"}`}
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <Header title="about Us" />
      <div className="container flex flex-col gap-8 mx-auto">
        <Navigation current="about Us" />
        <div className="flex flex-col gap-[200px]">
        <Statistics/>
        <WhyUs/>
        <OurProducts lang={lang}/>
        <ContactUsContainer lang={lang}/>
        <Answers/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
