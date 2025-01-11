import { getSpecialProducts } from "@/store/slices/product/specialProducts";
import Button from "@/utils/Button";
import Spiner from "@/utils/Spiner";
import { useSelector } from "react-redux";
import ProductCard from "../product/ProductCard";
import { t } from "i18next";
import UseFetchSpecialProducts from "@/hooks/UseFetchSpecialProducts";

const SpecialProductsContainer = ({langDetection}) => {
const {data} = useSelector((state) => state.specialProducts);
const {products, loaderStatus} = UseFetchSpecialProducts(data, getSpecialProducts);

  return (
    <div className={`flex flex-col gap-10 ${products?.length > 0 ? "flex" : "hidden"}`}>
      <div className="flex items-center justify-between">
        <h2 className={`text-[32px] max-md:text-base pb-1 relative text-black-500 font-semibold title-line ${langDetection === "en" ? "after:left-0":"after:right-0"}`}>
        {t('special Products')}
        </h2>
        <div>
          <Button
            text={t('view All Products')}
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
      <div className="flex flex-wrap gap-4">
      {loaderStatus ? (
          <Spiner />
        ) : products?.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          null
        )}
      </div>
    </div>
  );
};

export default SpecialProductsContainer;
