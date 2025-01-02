import { Star } from "@/images/svg";
import { t } from "i18next";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
  return (
    <div>
      <Link to={`/product/${product.id}`}>
        <div className="flex mb-5">
          <div className="w-[288px] flex flex-col gap-[10px]">
            <div className="w-full h-[254px] relative flex justify-center items-center">
              <img src={product?.image} className="size-full rounded-[20px] object-cover" alt="product-img" />
              <div className={`${product.discount_percentage > 0 ? "block":"hidden"} px-5 py-2 absolute right-0 top-0 bg-green-500 rounded-tr-[20px] rounded-bl-md text-white text-center text-[10px] font-semibold`}>
              {product.discount_percentage} % {t('off')}
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <h3 className="text-xl text-black-500 font-medium">
                {product?.name}
              </h3>
              <p className="w-[90%] text-sm text-black-300 font-normal relative product-description">
                {product?.description}
              </p>
            </div>
            <div className="flex gap-2">
              <div className="flex gap-1">
                <img src={Star} alt="star" width={20} height={20} />
                <img src={Star} alt="star" width={20} height={20} />
                <img src={Star} alt="star" width={20} height={20} />
                <img src={Star} alt="star" width={20} height={20} />
                <img src={Star} alt="star" width={20} height={20} />
              </div>
              <div className="flex items-center gap-1">
                <p className="text-xl text-black-500 font-normal">20</p>
                <p className="text-black-300 text-sm">(2910)</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-black-500">
              <p className="text-xl font-semibold">${product?.price}</p>
              <p className="text-sm font-normal">(For Piece)</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
