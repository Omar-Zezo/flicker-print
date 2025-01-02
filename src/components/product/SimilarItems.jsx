import ProductCard from "@/components/product/ProductCard";
import Button from "@/utils/Button";
import Spiner from "@/utils/Spiner";
import { t } from "i18next";

const SimilarItems = ({langDetection, similarProducts, loaderStatus}) => {

  return (
    <div className={`${similarProducts?.length > 0 ? "flex":"hidden"} flex-col gap-10`}>
      <div className="flex items-center justify-between">
        <h2 className={`text-[32px] pb-1 relative text-black-500 font-semibold title-line ${langDetection === "en" ? "after:left-0":"after:right-0"}`}>
        {t('discover Similar Items')}
        </h2>
        <div className="w-[220px] h-[56px]">
          <Button
            text={t('view All Products')}
            bg={"bg-blue-500"}
            txtColor={"text-white"}
            link={""}
            arrow={true}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
      {loaderStatus ? (
          <Spiner />
        ) : similarProducts?.length > 0 ? (
          similarProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="w-full text-xl text-center text-black-500">
            {t("no products")}
          </p>
        )}
      </div>
    </div>
  );
};

export default SimilarItems;
