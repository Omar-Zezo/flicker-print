import PackagesContainer from "@/components/Packages/PackagesContainer";
import UseLangDetection from "@/hooks/UseLangDetection";
import Header from "@/utils/Header";
import Navigation from "@/utils/Navigation";

const Packages = () => {
  const lang = UseLangDetection();

  return (
    <div
      className={`flex flex-col gap-8 ${lang === "ar" && "arabic-font"}`}
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <Header title={"packages"} />
      <div className="container flex flex-col gap-8">
        <Navigation current={"packages"} />
        <PackagesContainer />
      </div>
    </div>
  );
};

export default Packages;
