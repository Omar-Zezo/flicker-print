import { Minus, PlusBlack, SelectArrow, WarningImg } from "@/images/svg";
import Button from "@/utils/Button";
import { useState } from "react";
import { t } from "i18next";
import UseFetchProductData from "@/hooks/UseFetchProductData";
import RatingStars from "@/utils/RatingStars";
import { Link } from "react-router-dom";
import ProductImgsGallery from "@/utils/ProductImgsGallery";
import RatingBars from "@/utils/RatingsBar";
import UserReview from "@/utils/UserReview";
import SimilarItems from "./SimilarItems";
import Feedback from "./Feedback";

const ProductDetailsContainer = ({ langDetection, getProductName }) => {
  const [qty, setQty] = useState(1);
  const [showFeedback, setShowFeedback] = useState(false);

  const {
    rates,
    similarProducts,
    usersReviews,
    product,
    loaderStatus,
    photo_gallery,
  } = UseFetchProductData(getProductName);

  console.log(product);

  return (
    <div className="container mx-auto flex flex-col gap-20">
      <div className="flex justify-between">
        <div className="w-[49%] h-fit relative">
          {product?.discount_percentage > 0 && (
            <div className="bg-green-500 text-white text-sm font-semibold absolute right-0 top-0 z-10 p-[10px] rounded-tr-[20px] rounded-bl-[6px]">
              {product?.discount_percentage}% OFF
            </div>
          )}
          {product?.is_need_design && (
            <div className="bg-black/5 text-white text-sm flex items-center gap-2 font-semibold absolute left-5 top-5 z-10 p-[10px] rounded-[10px]">
              <img src={WarningImg} alt="alert" width={24} height={24} />
              <p className="text-base text-black-400 font-medium">
                It's designable
              </p>
            </div>
          )}
          <ProductImgsGallery photo_gallery={photo_gallery} />
        </div>
        <div className="bg-white w-[49%]">
          <div className="w-[554px] flex flex-col gap-5">
            <div className="flex flex-wrap gap-1">
              {product?.categories?.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="w-fit text-base text-[#009DBA] font-medium rounded-[10px] px-[12px] py-2 bg-[#23B5761A]"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[28px] text-black-500 font-medium">
                {product?.name}
              </h2>
              <div className="flex gap-2">
                <div className="flex gap-1">
                  <RatingStars rating={product?.rates?.avg} />
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-xl text-black-500 font-normal">
                    {product?.rates?.avg}
                  </p>
                  <p className="text-black-300 text-sm">
                    ({product?.rates?.count})
                  </p>
                </div>
              </div>
              <p className="text-base text-black-200 font-medium">
                {product?.description}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <p className="text-black-500 text-xl font-medium">
                  {t("colors")}:
                </p>
                <p
                  className={`text-base text-black-200 ${
                    langDetection === "en" ? "ml-2" : "mr-2"
                  }`}
                >
                  Red
                </p>
              </div>
              <div className="flex gap-1">
                <div className="w-[40px] rounded-full h-[40px] bg-green-500 cursor-pointer"></div>
                <div className="w-[40px] rounded-full h-[40px] bg-green-500 cursor-pointer"></div>
                <div className="w-[40px] rounded-full h-[40px] bg-green-500 cursor-pointer"></div>
                <div className="w-[40px] rounded-full h-[40px] bg-green-500 cursor-pointer"></div>
                <div className="w-[40px] rounded-full h-[40px] bg-green-500 cursor-pointer"></div>
                <div className="w-[40px] rounded-full h-[40px] bg-green-500 cursor-pointer"></div>
              </div>
              <div className="flex flex-col gap-[16px] mt-8">
                <h3 className="text-black-500 text-xl font-medium">
                  {t("material")}
                </h3>
                <div className="flex flex-col gap-[16px]">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="ceramic"
                      value={"ceramic"}
                      name="matrial"
                      className="size-10 accent-blue-500 cursor-pointer"
                    />
                    <label
                      htmlFor="ceramic"
                      className="text-black-500 text-base font-medium cursor-pointer"
                    >
                      Ceramic
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="marble"
                      value={"marble"}
                      name="matrial"
                      className="size-10 accent-blue-500 cursor-pointer"
                    />
                    <label
                      htmlFor="marble"
                      className="text-black-500 text-base font-medium cursor-pointer"
                    >
                      Marble
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px]">
                  <h3 className="text-black-500 text-xl font-medium">
                    {t("material")}
                  </h3>
                  <div className="rounded-[18px] py-[23px] px-5 bg-[#FBFEFF] relative">
                    <select className="text-black-400 px-5 size-full bg-transparent cursor-pointer font-medium text-base outline-none border-[#00000033]">
                      <option className="text-base text-black-400 font-medium">
                        Ceramic
                      </option>
                    </select>
                    <img
                      className={`absolute ${
                        langDetection === "en" ? "right-4" : "left-4"
                      } top-1/2 z-10 translate-y-[-50%]`}
                      src={SelectArrow}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[16px]">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <p className="text-black-500 text-xl">{t("quantity")}</p>
                      <p className="text-black-200">
                        (${product?.price * qty} {t("for")} {qty} {t("piece")})
                      </p>
                    </div>
                    {product?.min_order_qty && (
                      <p className="text-[12px] text-green-500 font-semibold">
                        {t("the minimum order quantity")}{" "}
                        {product?.min_order_qty} {t("piece")}
                      </p>
                    )}
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
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-[16px]">
                      <p className="text-2xl text-black-500 font-medium">
                        ${product?.price}
                      </p>
                      <p className="text-2xl text-black-200 font-medium">
                        {product?.price_before_discount &&
                          `$${product?.price_before_discount}`}
                      </p>
                    </div>
                    <p className="text-[12px] text-black-400 font-normal">
                      {t("this price is exclusive of taxes")}
                    </p>
                  </div>
                  <div className="w-[180px] h-[56px]">
                    <Button
                      txtsize="text-base"
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
              <button
                className="px-3 py-2 rounded-[21px] text-[13px] bg-blue-500 text-white cursor-pointer font-semibold hover:translate-x-1 duration-300"
                onClick={() => setShowFeedback(true)}
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
            <button
              className={`${
                usersReviews?.length < 5 ? "hidden" : "block"
              } w-fit px-5 py-2 mx-auto rounded-[21px] text-[13px] bg-blue-500 text-white cursor-pointer font-semibold hover:translate-x-1 duration-300`}
            >
              {t("view More Reviews")}
            </button>
          </div>
        </div>
      </div>
      <SimilarItems
        similarProducts={similarProducts}
        loaderStatus={loaderStatus}
        langDetection={langDetection}
      />
      {showFeedback && <Feedback setShowFeedback={setShowFeedback} />}
    </div>
  );
};

export default ProductDetailsContainer;
