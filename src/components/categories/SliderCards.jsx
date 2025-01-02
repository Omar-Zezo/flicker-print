// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import CategorySliderCard from "./CategorySliderCard";
import Spiner from "@/utils/Spiner";

const SliderCards = ({ SubCategoriesList, loaderStatus }) => {

  return (
    <div className={`slider-cards block`} dir="ltr">
      <div className="slider-cards-wraper">
        <Swiper
          className="container mySwiper category"
          modules={[Navigation]}
          navigation={true}
          slidesPerView={5}
          spaceBetween={20}
          breakpoints={{
            350: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {loaderStatus ? (
            <Spiner />
          ) : SubCategoriesList ? (
            SubCategoriesList.map((subCategory) => (
              <SwiperSlide key={subCategory.id} className="w-fit">
                <CategorySliderCard subCategory={subCategory} />
              </SwiperSlide>
            ))
          ) : null}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderCards;
