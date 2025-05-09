import Button from "@/utils/Button";
import React from "react";
import CategoryCard from "../categories/CategoryCard";
import UseFeaturedCategoriesHome from "@/hooks/UseFeaturedCategoriesHome";
import Spiner from "@/utils/Spiner";
import { t } from "i18next";

const FeaturedCategoriesHome = ({ langDetection }) => {
  const { fetchedData, loaderStatus } = UseFeaturedCategoriesHome();
  return (
    <div
      className={`flex flex-col gap-10 ${
        fetchedData?.length > 0 ? "flex" : "hidden"
      }`}
    >
      <div className="flex items-center justify-between">
        <h2
          className={`text-[32px] max-md:text-base pb-1 relative text-black-500 font-semibold title-line ${
            langDetection === "en" ? "after:left-0" : "after:right-0"
          }`}
        >
          {t("featured Categories")}
        </h2>
        <div className="w-[220px] h-[56px]">
          <Button
            text={t("view All Categories")}
            bg={"bg-blue-500"}
            txtColor={"text-white"}
            link={""}
            arrow={true}
            txtSize="text-base max-md:text-[10px]"
            pX="px-5 max-md:px-4"
            pY="py-4 max-md:py-1"
            weight="font-500"
          />
        </div>
      </div>
      <div className="flex gap-4">
        {loaderStatus ? (
          <Spiner />
        ) : fetchedData?.length > 0 ? (
          fetchedData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))
        ) : null}
      </div>
    </div>
  );
};

export default FeaturedCategoriesHome;
