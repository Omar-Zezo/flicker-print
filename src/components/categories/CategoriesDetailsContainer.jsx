import { t } from "i18next";
import SliderCards from "./SliderCards";
import Filter from "./Filter";
import ProductsContainer from "./ProductsContainer";
import { useState } from "react";

const CategoriesDetailsContainer = ({
  subCategoryDetails,
  mainCategoryId,
  loaderStatus,
}) => {
  const [categoryId, setcategoryId] = useState("");
  const [priceRange, setpriceRange] = useState("");

  //get subcategory id from filter
  const getValueFromFilter = (value) => {
    setcategoryId([value]);
  };

  //get price range from Filter
  const getPriceRange = (value) => {
    setpriceRange(value);
  };

  return (
    <div className="flex flex-col gap-16">
      <SliderCards
        loaderStatus={loaderStatus}
        SubCategoriesList={subCategoryDetails?.data}
      />
      <div className="flex gap-5">
        <Filter
          loaderStatus={loaderStatus}
          SubCategoriesList={subCategoryDetails?.data}
          getValueFromFilter={getValueFromFilter}
          getPriceRange={getPriceRange}
        />

        <div className="w-full pt-2 flex flex-col gap-14">
          <p className="text-xl text-black-300 font-medium">
            {t("showing")} 1-15 {t("of")} 214 {t("results")}
          </p>
          <ProductsContainer
            mainCategoryId={mainCategoryId}
            categories_ids={categoryId}
            priceRange={priceRange}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesDetailsContainer;
