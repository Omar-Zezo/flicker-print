import RatingStars from "@/utils/RatingStars";
import { t } from "i18next";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
  return (
    <div>
      <Link to={`/product/${product.id}`}>
        <div className="flex mb-5">
          <div className="w-[288px] max-md:w-[172px] flex flex-col gap-[10px] max-md:gap-[9px]">
            <div className="w-full h-[254px] relative flex justify-center items-center">
              <img src={product?.image} className="size-full rounded-[20px] max-md:rounded-[12px] object-cover" alt="product-img" />
              <div className={`${product.discount_percentage > 0 ? "block":"hidden"} px-5 py-2 absolute right-0 top-0 bg-green-500 rounded-tr-[20px] rounded-bl-md text-white text-center text-[10px] font-semibold`}>
              {product.discount_percentage} % {t('off')}
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <h3 className="text-xl max-md:text-sm text-black-500 font-medium">
                {product?.name}
              </h3>
              <p className="w-[90%] text-sm max-md:text-[12px] text-black-500 font-normal relative product-description">
                <span className="font-semibold">1K+</span> bought in past month
              </p>
            </div>
            {/* <div className="flex gap-2">
              <RatingStars rating={product?.rates?.avg}/>
              <div className="flex items-center gap-1">
                <p className="text-xl text-black-500 font-normal">{product?.rates?.avg}</p>
                <p className="text-black-300 text-sm">({product?.rates?.count})</p>
              </div>
            </div> */}
            <div className="flex items-center gap-2 text-black-500">
              <p className="text-xl max-md:text-[12px] font-semibold">${product?.price}</p>
              <p className="text-sm max-md:text-[8px] font-normal">(For Piece)</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
