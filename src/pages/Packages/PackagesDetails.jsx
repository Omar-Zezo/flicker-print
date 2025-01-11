import UseLangDetection from "@/hooks/UseLangDetection";
import Header from "@/utils/Header";
import { useState } from "react";
import PackageDetailsContainer from "@/components/Packages/PackageDetailsContainer";
import Navigation3 from "@/utils/Navigation3";

const PackagesDetails = () => {
  const langDetection = UseLangDetection();
  const [packageName, setPackageName] = useState()

  const getPackagetName = (name) => {
    setPackageName(name);
  };

  return (
    <div
      className={`flex flex-col gap-8 ${
        langDetection === "ar" && "arabic-font"
      }`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <Header title="package details"/>
      <div className="container flex flex-col gap-8">
        <Navigation3 prev={{name: "best packages", link: "/packages"}} current={packageName}/>
        <PackageDetailsContainer getPackagetName={getPackagetName} langDetection={langDetection}/>
      </div>
    </div>
  );
};

export default PackagesDetails;
