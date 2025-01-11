import ProductCard from "../product/ProductCard";
import { useSelector } from "react-redux";
import { getProductsFilter } from "@/store/slices/product/productsFilter";
import Pagination from "@/utils/Pagination";
import Spiner from "@/utils/Spiner";
import { useEffect, useState } from "react";
import UseFetchProductsFilter from "@/hooks/UseFetchProductsFilter";
import { t } from "i18next";
import { Empty } from "@/images/svg";

const ProductsContainer = ({ categories_ids, priceRange, mainCategoryId }) => {
  const { data } = useSelector((state) => state.productsFilter);
  const [filterObj, setFilterObj] = useState({});

  useEffect(() => {
    setFilterObj({
      categories_ids: [mainCategoryId, ...categories_ids],
      min_price: priceRange[0],
      max_price: priceRange[1],
    });
  }, [categories_ids, priceRange, mainCategoryId]);

  const { fetchedData, loaderStatus, current_page, total, handlePageClick } =
    UseFetchProductsFilter(data, getProductsFilter, filterObj);

  console.log(fetchedData);

  return (
    <>
      <div className="w-full flex gap-2 flex-wrap">
        {loaderStatus ? (
          <Spiner />
        ) : fetchedData?.length > 0 ? (
          fetchedData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="flex flex-col mx-auto gap-[9px] mt-10">
            <img src={Empty} width={128} height={128} alt="empty" />
            <p className="w-full text-xl text-center text-black-500">
              {t("no Products")}
            </p>
          </div>
        )}
      </div>
      <div className="mt-8">
        <Pagination
          current_page={current_page}
          total={total}
          handlePageClick={handlePageClick}
        />
      </div>
    </>
  );
};

export default ProductsContainer;
