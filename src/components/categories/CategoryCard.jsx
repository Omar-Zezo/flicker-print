import { t } from "i18next";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <div className="max-md:w-[105px] shrink-0 max-md:h-[173px] flex flex-col gap-[27px]">
      <Link to={`/categories/${category.id}`}>
        <div className="w-[224px] h-[224px] max-md:size-[108px] flex justify-center items-center rounded-[32px] max-md:rounded-full bg-[#F5F5F5]">
          <img width={140} height={160} src={category.image} className="size-full object-cover rounded-[32px] max-md:rounded-full"/>
        </div>
        <div className="w-[153px] mx-auto max-md:w-[74px] max-md:h-[46px] flex flex-col items-center lg:gap-1">
          <h2 className="text-2xl max-md:text-sm text-center w-[95%] font-semibold overflow-hidden text-ellipsis text-nowrap">
            {category.name}
          </h2>
          <p className="text-black-200 text-base max-md:text-[10px] max-md:leading-3 text-center">
            {t("discover")} {category.active_products_count} {t("product")}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
