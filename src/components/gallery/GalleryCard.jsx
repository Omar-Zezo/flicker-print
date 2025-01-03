import { ArrowLeft } from "@/images/svg";
import { t } from "i18next";

const GalleryCard = ({ itemData, getItemToView, setShowGalleryItem }) => {
  return (
    <div className="w-[285px] h-[400px] relative rounded-[40px]">
      <img width={285} height={400} className="size-full object-cover rounded-[40px]" src={itemData?.image} alt="gallery-1"/>
      <div className="size-full absolute top-0 left-0 rounded-[40px] flex flex-col bg-black/50">
      <div className="flex flex-col gap-2 py-10 px-5">
        <h2 className="text-2xl text-white font-semibold">{itemData?.name}</h2>
        <p className="text-[10px] text-white/60 font-medium">
        {itemData?.description}
        </p>
      </div>
      <div className="w-fit absolute bottom-5 right-5 flex items-center cursor-pointer"
      onClick={()=>{
        getItemToView(itemData)
        setShowGalleryItem(true)
      }}
      >
        <p className="text-base text-white font-semibold">{t('view')}</p>
        <img width={40} height={40} src={ArrowLeft} alt="arrow-left"/>
      </div>
      </div>
    </div>
  );
};

export default GalleryCard;
