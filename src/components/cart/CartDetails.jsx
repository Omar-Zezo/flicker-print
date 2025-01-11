import { CouponImg, XWhite } from "@/images/svg";
import Button from "@/utils/Button";
import { t } from "i18next";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartDetails = ({langDetection}) => {
  const [deliver, setDeliver] = useState(false);
  const [agree, setAgree] = useState(false);
  const [promoStatus, setPoromostatus] = useState(false);

  return (
    <div className="h-fit flex flex-col gap-5 bg-[#F4F7F9] rounded-[20px] p-5 shadow-sm">
      <div className="w-[321px]">
        <p className="text-xl text-black-500 font-semibold">
          {t("promo Code")}
        </p>
      </div>
      <div>
        {promoStatus ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[12px]">
              <img width={40} height={40} src={CouponImg} alt="coupon" />
              <div className="flex flex-col gap-1">
                <p className="text-sm text-black-500 font-semibold">
                  Coupon200
                </p>
                <p className="text-[12px] text-black-200 font-medium">
                  Coupon Appild
                </p>
              </div>
            </div>
            <div className="size-10 bg-blue-500 flex items-center justify-center cursor-pointer rounded-[11px]">
              <img src={XWhite} alt="x" width={20} height={20} />
            </div>
          </div>
        ) : (
          <form className="flex justify-between pb-5 border-b border-dashed border-[#E8E8E8]">
            <input
              className="w-[70%] px-4 py-[11px] bg-white text-black-200 text-[10px] font-medium rounded-full outline-none"
              type="text"
              placeholder={t('apply code here')}
            />
            <div className="w-[86px]">
              <Button
                text={t('apply')}
                bg="bg-blue-500"
                txtColor="text-white"
                txtSize="text-[10px]"
              />
            </div>
          </form>
        )}
      </div>
      <div className="flex flex-col gap-5 pb-5 border-b border-dashed border-[#E8E8E8]">
        <h3 className="text-black-500 text-xl font-semibold">
          {t('payment Summary')}
        </h3>
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">
            {t('number Of Items')}
          </p>
          <p className="text-base text-black-500 font-medium">5</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">{t('delivery')}</p>
          <p className="text-base text-[#D90202] font-medium">10$</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">{t('total Order')}</p>
          <p className="text-base text-black-500 font-medium">250$</p>
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center gap-2">
          <div
            className={`size-[20px] flex justify-center items-center cursor-pointer rounded-[7px] ${
              deliver && "bg-blue-500"
            } border border-blue-500`}
            onClick={() => setDeliver(!deliver)}
          >
            <span
              className={`text-white text-[12px] font-medium ${
                deliver ? "block" : "hidden"
              }`}
            >
              ✔
            </span>
          </div>
          <p className="text-sm text-black-500 font-medium">
            {t('deliver in the same day')} +200 {t('AED')}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={`size-[20px] flex justify-center items-center cursor-pointer rounded-[7px] ${
              agree && "bg-blue-500"
            } border border-blue-500`}
            onClick={() => setAgree(!agree)}
          >
            <span
              className={`text-white text-[12px] font-medium ${
                agree ? "block" : "hidden"
              }`}
            >
              ✔
            </span>
          </div>
          <p className="text-sm text-black-500 font-medium">
            {t('i agree to the')}
            <span className={`text-blue-500 underline`}>
              {t('terms and conditions')}
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link to="/checkout" type="submit" className="w-full h-[46px] flex items-center justify-center bg-blue-500 rounded-[42px] text-sm text-white font-medium">
          {t('checkout')}
        </Link>
        <div className="w-full h-[46px] flex items-center justify-center bg-[#23B5761A] rounded-[42px] text-sm text-black-300 font-medium">
          {t('expected Delivery')}
          <span className={`text-blue-500 ${langDetection === "en" ? "ml-1":"mr-1"}`}>SAT 22-4-2024</span>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
