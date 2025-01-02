import { Package2 } from "@/images/imgs";
import RatingStars from "@/utils/RatingStars";

const Item = ({item}) => {
  return (
    <div className="w-[553] flex gap-[21px]">
    <div className="w-[224px] h-[215px] flex justify-center items-center bg-section-gray rounded-[20px]">
      <img src={item?.image} alt="img" className="size-full object-cover rounded-[20px]" />
    </div>
    <div className="w-[288px] h-[185px] flex flex-col gap-2">
      <h3 className="text-xl text-black-500 font-medium">{item?.name}</h3>
      <div className="flex gap-2">
        <div className="flex gap-1">
          <RatingStars rating={item?.rates?.avg} />
        </div>
        <div className="flex items-center gap-1">
          <p className="text-xl text-black-500 font-normal">
            {item?.rates?.avg}
          </p>
          <p className="text-black-300 text-sm">
            ({item?.rates?.count})
          </p>
        </div>
      </div>
      <p className="text-black-300 text-base font-normal">
      {item?.description} 
      </p>
      <p className="text-black-300 text-sm font-medium">
      Color : Red
      </p>
      <p className="text-black-300 text-sm font-medium">
      Material : Ceramic
      </p>
      <p className="text-black-300 text-sm font-medium">
      Quantity : 3
      </p>
    </div>
  </div>
  )
}

export default Item