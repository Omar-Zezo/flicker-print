import Navigation from "@/utils/Navigation";
import UseLangDetection from "@/hooks/UseLangDetection";
import Header from "@/utils/Header";
import ContentContainer from "@/components/policies/ContentContainer";
import { getPrivacyPolicy } from "@/store/slices/policies/policy";

const PrivacyPolicy = () => {
  const lang = UseLangDetection();

  return (
    <div
      className={`flex flex-col gap-8 ${
        lang === "ar" && "arabic-font"
      }`}
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <Header title="privacy Policy" />
      <div className="container flex flex-col gap-8">
        <Navigation current="privacy Policy"/>
        <ContentContainer dispatchMethod={getPrivacyPolicy}/>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
