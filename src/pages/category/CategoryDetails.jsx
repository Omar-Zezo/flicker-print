import CategoriesDetailsContainer from "@/components/categories/CategoriesDetailsContainer";
import UseFetchSubcategories from "@/hooks/UseFetchSubcategories";
import UseLangDetection from "@/hooks/UseLangDetection";
import Header from "@/utils/Header";
import Navigation3 from "@/utils/Navigation3";

const CategoryDetails = () => {
  const lang = UseLangDetection();
  const {
    mainCategoryDetails,
    subCategoryDetails,
    current_page,
    total,
    handlePageClick,
    loaderStatus,
  } = UseFetchSubcategories();

  return (
    <div
      className={`flex flex-col gap-8 ${lang === "ar" && "arabic-font"}`}
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <Header title={mainCategoryDetails?.name} />
      <div className="flex flex-col gap-8 mx-auto">
        <Navigation3
          prev={{ name: "all categories", link: "/categories" }}
          current={mainCategoryDetails?.name}
        />
        <CategoriesDetailsContainer
          subCategoryDetails={subCategoryDetails}
          mainCategoryId={mainCategoryDetails?.id}
          current_page={current_page}
          total={total}
          handlePageClick={handlePageClick}
          loaderStatus={loaderStatus}
        />
      </div>
    </div>
  );
};

export default CategoryDetails;
