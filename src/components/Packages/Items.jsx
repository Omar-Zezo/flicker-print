import { t } from "i18next";
import React from "react";
import Item from "./item";
import Spiner from "@/utils/Spiner";

const Items = ({ products, loaderStatus }) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-black-500 text-[32px] font-semibold">
        {t("items")} ({products?.length})
      </h2>
      <div className="w-[1138px] flex flex-wrap gap-[32px]">
        {loaderStatus ? (
          <Spiner />
        ) : products?.length > 0 ? (
          products.map((item, index) => (
            <Item key={index} item={item} />
          ))
        ) : (
          null
        )}
      </div>
    </div>
  );
};

export default Items;
