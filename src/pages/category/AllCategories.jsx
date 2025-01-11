import CategoriesContainer from "@/components/categories/CategoriesContainer";
import Navigation from "@/utils/Navigation";
import UseLangDetection from "@/hooks/UseLangDetection";
import Header from "@/utils/Header";

const AllCategories = () => {
  const langDetection = UseLangDetection();

  return (
    <div
      className={`flex flex-col gap-8 ${
        langDetection === "ar" && "arabic-font"
      } overflow-hidden`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <Header title="all categories"/>
      <div className="container flex flex-col gap-8">
        <Navigation current="all categories"/>
        <CategoriesContainer/>
      </div>
    </div>
  );
};

export default AllCategories;
