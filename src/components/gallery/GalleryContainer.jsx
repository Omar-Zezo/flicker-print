import { t } from "i18next";
import Spiner from "@/utils/Spiner";
import GalleryCard from "./GalleryCard";
import Pagination from "@/utils/Pagination";
import { Empty } from "@/images/svg";
import { useState } from "react";
import UseFetchGalleryPhotos from "@/hooks/UseFetchGalleryPhotos";
import ViewItem from "./ViewItem";

const GalleryContainer = () => {
  const [showGalleryItem, setShowGalleryItem] = useState(false);
  const [itemToView, setItemToView] = useState(null)
  const { fetchedData, loaderStatus, current_page, total, handlePageClick } =
  UseFetchGalleryPhotos();

  const getItemToView = (item)=>{
    setItemToView(item)
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex  flex-wrap gap-5 mb-8">
        {loaderStatus ? (
          <Spiner />
        ) : fetchedData?.length > 0 ? (
          fetchedData.map((itemData) => (
            <>
            <GalleryCard key={itemData.id} getItemToView={getItemToView} itemData={itemData} showGalleryItem={showGalleryItem} setShowGalleryItem={setShowGalleryItem}/>
            </>
          ))
        ) : (
          <div className="flex flex-col mx-auto gap-[9px] mt-10">
            <img src={Empty} width={128} height={128} alt="empty" />
            <p className="w-full text-xl text-center text-black-500">
              {t("no gallery")}
            </p>
          </div>
        )}
      </div>
      <Pagination
        current_page={current_page}
        total={total}
        handlePageClick={handlePageClick}
      />
    {showGalleryItem && <ViewItem itemToView={itemToView} setShowGalleryItem={setShowGalleryItem}/>}
    </div>
  );
};

export default GalleryContainer;
