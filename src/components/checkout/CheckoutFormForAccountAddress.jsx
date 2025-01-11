import { t } from "i18next";
import { Plus, SelectArrow } from "@/images/svg";

const CheckoutFormForAccountAddress = ({
  langDetection,
  register,
  errors,
}) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="w-[395px] flex flex-col gap-[12px]">
            <p className="flex text-base text-black-400 font-medium">
            {t('address')}<span className="text-[#D90202]">*</span>
            </p>
            <div className="rounded-[18px] relative border border-black/15">
              <select
                className="text-black-400 py-[23px] px-5 size-full bg-transparent cursor-pointer font-medium text-base outline-none"
                {...register("address", {
                  required: t("address is required"),
                })}
              >
                 <option
                  value=""
                  className="text-base text-black-400 font-medium"
                >
                  {t('select Your Address')}
                </option>
                <option
                  value="Cairo, Egypt"
                  className="text-base text-black-400 font-medium"
                >
                  Cairo, Egypt
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
            <p
              className={`text-red-600 text-base ${
                langDetection === "en" ? "pl-6" : "pr-6 text-right"
              }`}
            >
              {errors.address?.message}
            </p>
          </div>
        </div>

        <div className={`w-[185px] h-[46px] flex justify-center items-center gap-1 rounded-full bg-blue-500 cursor-pointer ${langDetection === "en" ? "hover:translate-x-1" : "hover:translate-x-[-4px]"} duration-300`}>
          <img width={24} height={24} src={Plus} alt="plus"/>
          <p className="text-white text-sm font-semibold">{t('add New Addrss')}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutFormForAccountAddress;
