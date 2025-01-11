import Button from "@/utils/Button";
import Spiner from "@/utils/Spiner";
import { useSelector } from "react-redux";
import ProductCard from "../product/ProductCard";
import { t } from "i18next";
import UseFetchTrendingProducts from "@/hooks/UseFetchTrendingProducts";
import { getTrendingProduct } from "@/store/slices/product/trendingProduct";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TrendingProductsContainer = ({ langDetection }) => {
  const [selected, setSelected] = useState(null);
  const { data } = useSelector((state) => state.trendingProduct);
  const { products, loaderStatus, setLoaderStatus, categories } =
    UseFetchTrendingProducts(data, getTrendingProduct, setSelected);

  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col gap-10 ${
        products?.length > 0 ? "flex" : "hidden"
      }`}
    >
      <div className="flex items-center justify-between">
        <h2
          className={`text-[32px] max-md:text-base pb-1 relative text-black-500 font-semibold title-line ${
            langDetection === "en" ? "after:left-0" : "after:right-0"
          }`}
        >
          {t("Trending Product")}
        </h2>
        <div>
          <Button
            text={t("view All Products")}
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
      <ul className="flex gap-5">
        {categories?.map((category, index) => (
          <li
            key={category.id}
            onClick={() => {
              navigate(`?category_id_trend_request=${category.id}`);
              setLoaderStatus(true);
              setSelected(index);
            }}
            className={`text-xl max-md:text-[12px] ${
              selected === index
                ? "font-semibold text-black-500 border-greenY-500"
                : "font-medium text-black-300 border-transparent"
            } capitalize pb-2 cursor-pointer relative border-b-2`}
          >
            {category.name}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-4">
        {loaderStatus ? (
          <Spiner />
        ) : products?.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : null}
      </div>
    </div>
  );
};

export default TrendingProductsContainer;
