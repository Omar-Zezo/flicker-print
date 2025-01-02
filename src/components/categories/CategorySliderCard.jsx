import { Link } from "react-router-dom";

const CategorySliderCard = ({subCategory}) => {
  return (
    <div>
      <Link
        to={`/categories/sub/${subCategory?.id}`}
        className="flex flex-col items-center gap-[27px]"
      >
        <div className="size-[196px] rounded-full bg-[#F5F5F5] flex justify-center items-center">
          <img src={subCategory?.image} width={120} height={140} alt="cards-1" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-black-500 text-2xl text-center font-semibold">
          {subCategory?.name}
          </h3>
          <p className="text-base text-black-200">Discover {subCategory?.active_products_count} Products</p>
        </div>
      </Link>
    </div>
  );
};

export default CategorySliderCard;
