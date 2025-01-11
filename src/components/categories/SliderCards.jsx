import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { Navigation } from "swiper/modules";
import CategorySliderCard from "./CategorySliderCard";
import Spiner from "@/utils/Spiner";

const SliderCards = ({ SubCategoriesList, loaderStatus }) => {
  return (
    <div>
      <Swiper
        // modules={[Navigation]}
        // navigation
        spaceBetween={20}
        slidesPerView="auto"
      >
        {loaderStatus ? (
          <Spiner />
        ) : SubCategoriesList ? (
          SubCategoriesList.map((subCategory) => (
            <SwiperSlide key={subCategory.id} style={{width:"250px"}}>
              <CategorySliderCard subCategory={subCategory} />
            </SwiperSlide>
          ))
        ) : null}
      </Swiper>
    </div>
  );
};

export default SliderCards;
