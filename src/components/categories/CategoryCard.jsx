import { t } from "i18next";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <div className="w-[224px] flex flex-col gap-[27px]">
      <Link to={`/categories/${category.id}`}>
        <div className="w-[224px] h-[224px] flex justify-center items-center rounded-full bg-[#F5F5F5]">
          <img width={140} height={160} src={category.image} />
        </div>
        <div className="w-[153px] mx-auto flex flex-col items-center gap-1">
          <h2 className="text-2xl text-center font-semibold">
            {category.name}
          </h2>
          <p className="text-black-200 text-base text-center">
            {t("discover")} {category.active_products_count} {t("product")}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
