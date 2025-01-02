import { useSelector } from "react-redux";
import { t } from "i18next";
import Spiner from "@/utils/Spiner";
import { getGalleryPhoto } from "@/store/slices/gallery/photo-gallery";
import GalleryCard from "./GalleryCard";
import Pagination from "@/utils/Pagination";
import UseFetchData from "@/hooks/UseFetchData";
import { Empty } from "@/images/svg";
import { useState } from "react";
import ViewItem from "./ViewItem";

const GalleryContainer = () => {
  const [showGalleryItem, setShowGalleryItem] = useState(true);
  const { data } = useSelector((state) => state.galleryPhoto);
  const { fetchedData, loaderStatus, current_page, total, handlePageClick } =
    UseFetchData(data, getGalleryPhoto);

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex justify-center flex-wrap gap-5 mb-8">
        {/* {loaderStatus ? (
          <Spiner />
        ) : fetchedData?.length > 0 ? (
          fetchedData.map((photo) => (
            <GalleryCard key={photo.id} photo={photo} />
          ))
        ) : (
          <div className="flex flex-col mx-auto gap-[9px] mt-10">
            <img src={Empty} width={128} height={128} alt="empty" />
            <p className="w-full text-xl text-center text-black-500">
              {t("no gallery")}
            </p>
          </div>
        )} */}
            <GalleryCard  setShowGalleryItem={setShowGalleryItem}/>
            <GalleryCard  setShowGalleryItem={setShowGalleryItem}/>
            <GalleryCard  setShowGalleryItem={setShowGalleryItem}/>
            <GalleryCard  setShowGalleryItem={setShowGalleryItem}/>

      </div>
      <Pagination
        current_page={current_page}
        total={total}
        handlePageClick={handlePageClick}
      />
      {showGalleryItem && <ViewItem setShowGalleryItem={setShowGalleryItem}/>}
    </div>
  );
};

export default GalleryContainer;
