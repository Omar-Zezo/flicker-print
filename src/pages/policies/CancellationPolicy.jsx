import Navigation from "@/utils/Navigation";
import UseLangDetection from "@/hooks/UseLangDetection";
import Header from "@/utils/Header";
import ContentContainer from "@/components/policies/ContentContainer";
import { getCancellationPolicy } from "@/store/slices/policies/policy";

const CancellationPolicy = () => {
  const lang = UseLangDetection();

  return (
    <div
      className={`flex flex-col gap-8 ${
        lang === "ar" && "arabic-font"
      }`}
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <Header title="cancellation Policy" />
      <div className="container flex flex-col gap-8 mx-auto">
        <Navigation current="cancellation Policy"/>
        <ContentContainer dispatchMethod={getCancellationPolicy}/>
      </div>
    </div>
  );
};

export default CancellationPolicy;
