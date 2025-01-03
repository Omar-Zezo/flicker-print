import { Minus, PlusBlack } from "@/images/svg";
import Button from "@/utils/Button";
import { useState } from "react";
import { t } from "i18next";
import RatingStars from "@/utils/RatingStars";
import RatingBars from "@/utils/RatingsBar";
import UserReview from "@/utils/UserReview";
import ProductImgsGallery from "@/utils/ProductImgsGallery";
import UseFetchPackage from "@/hooks/UseFetchPackage";
import SimilarItems from "./SimilarItems";
import Feedback from "../product/Feedback";
import Items from "./Items";

const PackageDetailsContainer = ({ langDetection, getPackagetName }) => {
  const [qty, setQty] = useState(1);
  const [showFeedback, setShowFeedback] = useState(false);

  const { package_details, products, loaderStatus, rates, usersReviews, similarPackages } =
    UseFetchPackage(getPackagetName);

  return (
    <div className="container mx-auto flex flex-col gap-20">
      <div className="flex justify-between">
        <div className="w-[49%] h-fit">
        {package_details?.discount_percentage > 0 && (
            <div className="bg-green-500 text-white text-sm font-semibold absolute right-0 top-0 z-10 p-[10px] rounded-tr-[20px] rounded-bl-[6px]">
              {package_details?.discount_percentage}% OFF
            </div>
          )}
          {package_details?.is_need_design && (
            <div className="bg-black/5 text-white text-sm flex items-center gap-2 font-semibold absolute left-5 top-5 z-10 p-[10px] rounded-[10px]">
              <img src={WarningImg} alt="alert" width={24} height={24} />
              <p className="text-base text-black-400 font-medium">
                It's designable
              </p>
            </div>
          )}
          <ProductImgsGallery photo_gallery={package_details?.images}/>
        </div>
        <div className="bg-white w-[49%]">
          <div className="w-[554px] flex flex-col gap-5">
            <div className="flex flex-wrap gap-1">
              <div className="w-fit text-base text-[#009DBA] font-medium rounded-[10px] px-[12px] py-2 bg-[#23B5761A]">
                {package_details?.name}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[28px] text-black-500 font-medium">
                {package_details?.name}
              </h2>
              <div className="flex gap-2">
                <div className="flex gap-1">
                  <RatingStars rating={package_details?.rates_avg} />
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-xl text-black-500 font-normal">
                    {package_details?.rates_avg}
                  </p>
                  <p className="text-black-300 text-sm">
                    ({package_details?.rates_count})
                  </p>
                </div>
              </div>
              <p className="text-base text-black-200 font-medium">
                {package_details?.description}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-[16px] mt-8">
                <div className="flex flex-col gap-[16px]">
                  <div className="flex gap-2 items-center">
                    <p className="text-black-500 text-xl">{t("quantity")}</p>
                    <p className="text-black-200">
                      (${package_details?.price * qty} {t("for")} {qty}{" "}
                      {t("piece")})
                    </p>
                  </div>
                  <div className="relative w-[242px] flex justify-between items-center p-[15px] bg-section-gray rounded-full">
                    <div className="flex justify-center items-center cursor-pointer size-10 bg-white rounded-full">
                      <img
                        className={`${
                          qty === 1 && "opacity-30 cursor-not-allowed"
                        }`}
                        width={24}
                        height={24}
                        src={Minus}
                        alt="minus"
                        onClick={() => {
                          if (qty > 1) {
                            setQty(qty - 1);
                          }
                        }}
                      />
                    </div>
                    <p className="text-2xl text-black-400 font-medium">{qty}</p>
                    <div className="flex justify-center items-center cursor-pointer size-10 bg-white rounded-full">
                      <img
                        width={24}
                        height={24}
                        src={PlusBlack}
                        alt="minus"
                        onClick={() => setQty(qty + 1)}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center mt-10">
                  <div className="flex items-center gap-[16px]">
                    <p className="text-2xl text-black-500 font-medium">
                      ${package_details?.price}
                    </p>
                  </div>
                  <div className="w-[180px] h-[56px]">
                    <Button
                      txtSize="text-base"
                      bg="bg-blue-500"
                      text={t("add to cart")}
                      txtColor="text-white"
                      addCart={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Items products={products} loaderStatus={loaderStatus} />
      <div className="flex flex-col items-center gap-[38px]">
        <h4 className="w-fit py-4 px-8 border-2 text-center rounded-full border-blue-500">
          {t("reviews")}
        </h4>
        <div className="container flex flex-col gap-[66px]">
          <div className="flex gap-8">
            <div className="flex flex-col gap-5">
              <p className="text-black-500 text-[40px] font-semibold">
                {rates?.avg}
              </p>
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <RatingStars rating={rates?.avg} />
                </div>
                <p className="text-sm text-black-300 font-medium">
                  ({rates?.total_rates}) {t("review")}
                </p>
              </div>
              <button className="px-3 py-2 rounded-[21px] text-[13px] bg-blue-500 text-white cursor-pointer font-semibold hover:translate-x-1 duration-300"
              onClick={()=> setShowFeedback(true)}
              >
                {t("write a Review")}
              </button>
            </div>
            <RatingBars rates={rates} />
          </div>
          <div className="flex flex-col gap-8">
            {usersReviews?.map((userReview) => (
              <UserReview key={userReview.id} userReview={userReview} />
            ))}
            <button className={`${usersReviews?.length < 5 ? "hidden":"block"} w-fit px-5 py-2 mx-auto rounded-[21px] text-[13px] bg-blue-500 text-white cursor-pointer font-semibold hover:translate-x-1 duration-300`}>
            {t('view More Reviews')}
            </button>
          </div>
        </div>
      </div>
      <SimilarItems
        similarPackages={similarPackages}
        loaderStatus={loaderStatus}
        langDetection={langDetection}
      />
       {showFeedback && (
        <Feedback
          setShowFeedback={setShowFeedback}
        />
      )}
    </div>
  );
};

export default PackageDetailsContainer;
