import { X } from "@/images/svg";
import Button from "@/utils/Button";
import { t } from "i18next";
import { useState } from "react";

const PaymentType = ({ setShowPayType, langDetection }) => {
  const [paymentMethod, setPaymentMethod] = useState("pay-100");

  return (
    <div
      className={`size-full fixed top-0 left-0 z-50 bg-black/80 ${
        langDetection === "ar" && "arabic-font"
      }`}
    >
      <div className="w-[508px] py-5 absolute top-1/2 translate-y-[-50%] pt-[70px] left-1/2 translate-x-[-50%] rounded-[25px] bg-white">
        <div
          className="size-10 rounded-[11px] absolute right-5 top-5 cursor-pointer bg-[#E8EFF5] flex justify-center items-center"
          onClick={() => setShowPayType(false)}
        >
          <img width={20} height={20} src={X} alt="x" />
        </div>
        <div className="size-full px-8 flex flex-col gap-3 items-center justify-center">
          <div className="size-full flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <p className="text-[28px] text-center text-black-500 font-semibold">
                {t("how do You Like To Pay")}
              </p>
              <p className="w-[60%] mx-auto text-sm text-black-200 text-center font-medium">
                {t("would you like to pay in full or just 50% upfront")}
              </p>
            </div>
            <div>
              <form className="flex flex-col gap-2"
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <div className="flex items-center gap-2">
                  <input
                    checked={paymentMethod === "pay-100" ? true : false}
                    id="Pay-100"
                    type="radio"
                    name="payMethod"
                    value="pay-100"
                    className="size-8 accent-blue-500 cursor-pointer"
                  />
                  <label
                    htmlFor="Pay-100"
                    className="text-base text-black-400 font-medium cursor-pointer"
                  >
                    {t('pay 100%')}
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    checked={paymentMethod === "pay-50" ? true : false}
                    id="Pay-50"
                    type="radio"
                    name="payMethod"
                    value="pay-50"
                    className="size-8 accent-blue-500 cursor-pointer"
                  />
                  <label
                    htmlFor="Pay-50"
                    className="text-base text-black-400 font-medium cursor-pointer"
                  >
                    {t('pay 50%')}
                  </label>
                </div>
              </form>
            </div>
            <div className="flex justify-center gap-5">
              <div
                className="w-[214px] h-[46px]"
                onClick={() => setShowPayType(false)}
              >
                <Button
                  txtSize="text-sm"
                  text={t("cancel")}
                  txtColor="text-blue-500"
                  border={true}
                  borderColor="border-blue-500"
                />
              </div>
              <div className="w-[214px] h-[46px]">
                <Button
                  txtSize="text-sm"
                  text={t("submit")}
                  bg="bg-blue-500"
                  txtColor="text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentType;
