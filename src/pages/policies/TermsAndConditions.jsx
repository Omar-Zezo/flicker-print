import Navigation from "@/utils/Navigation";
import UseLangDetection from "@/hooks/UseLangDetection";
import Header from "@/utils/Header";
import ContentContainer from "@/components/policies/ContentContainer";
import { getTerms } from "@/store/slices/policies/policy";

const TermsAndConditions = () => {
  const lang = UseLangDetection();

  return (
    <div
      className={`flex flex-col gap-8 ${
        lang === "ar" && "arabic-font"
      }`}
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <Header title="terms And Conditions" />
      <div className="container flex flex-col gap-8 mx-auto">
        <Navigation current="terms And Conditions"/>
        <ContentContainer dispatchMethod={getTerms}/>
      </div>
    </div>
  );
};

export default TermsAndConditions;
