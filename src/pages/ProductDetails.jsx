import UseLangDetection from "@/hooks/UseLangDetection";
import Header from "@/utils/Header";
import ProductDetailsContainer from "@/components/product/ProductDetailsContainer";
import Navigation4 from "@/utils/Navigation4";
import { useState } from "react";

const ProductDetails = () => {
  const langDetection = UseLangDetection();
  const [productName, setProductName] = useState()

  const getProductName = (name) => {
    setProductName(name);
  };

  return (
    <div
      className={`flex flex-col gap-8 ${
        langDetection === "ar" && "arabic-font"
      }`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <Header title="product details"/>
      <div className="container flex flex-col gap-8 mx-auto">
        <Navigation4 category={{name : "Mug", id: 1}} current={productName}/>
        <ProductDetailsContainer getProductName={getProductName} langDetection={langDetection}/>
      </div>
    </div>
  );
};

export default ProductDetails;
