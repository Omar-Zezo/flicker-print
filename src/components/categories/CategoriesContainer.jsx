import { getCategories } from "@/store/slices/category/categories";
import { useSelector } from "react-redux";
import { t } from "i18next";
import Spiner from "@/utils/Spiner";
import Pagination from "@/utils/Pagination";
import CategoryCard from "./CategoryCard";
import UseFetchData from "@/hooks/UseFetchData";
import { Empty } from "@/images/svg";

const CategoriesContainer = () => {
  const { data } = useSelector((state) => state.categories);
  const {fetchedData, loaderStatus, current_page, total, handlePageClick} = UseFetchData(data, getCategories)

  

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex flex-wrap justify-center gap-5 mb-8">
        {loaderStatus ? (
          <Spiner />
        ) : fetchedData?.length > 0 ? (
          fetchedData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))
        ) : (
          <div className="flex flex-col mx-auto gap-[9px] mt-10">
            <img src={Empty} width={128} height={128} alt="empty"/>
            <p className="w-full text-xl text-center text-black-500">
            {t("no categories")}
          </p>
          </div>
        )}
      </div>
      <Pagination 
      current_page = {current_page}
      total = {total}
      handlePageClick = {handlePageClick}
      />
    </div>
  );
};

export default CategoriesContainer;
