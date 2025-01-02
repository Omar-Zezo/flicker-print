import Navigation from "@/utils/Navigation";
import UseLangDetection from "@/hooks/UseLangDetection";
import Header from "@/utils/Header";
import ContentContainer from "@/components/policies/ContentContainer";
import { getRefundPolicy } from "@/store/slices/policies/policy";

const RefundPolicy = () => {
  const lang = UseLangDetection();

  return (
    <div
      className={`flex flex-col gap-8 ${
        lang === "ar" && "arabic-font"
      }`}
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <Header title="refund Policy" />
      <div className="container flex flex-col gap-8 mx-auto">
        <Navigation current="refund Policy"/>
        <ContentContainer dispatchMethod={getRefundPolicy}/>
      </div>
    </div>
  );
};

export default RefundPolicy;
