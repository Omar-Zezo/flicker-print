import { Tracking } from "@/images/imgs";
import { t } from "i18next";
import React from "react";
import { useForm } from "react-hook-form";

const CodeTracking = ({langDetection}) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className={`w-full max-lg:p-4 max-md:gap-5 ${langDetection === "en" ? "pl-[60px] pr-3" : "pr-[60px] pl-3"} py-5 flex max-md:flex-col items-center justify-between mx-auto rounded-[32px] bg-section-gray`}>
      <div className=" max-md:order-1 flex flex-col gap-5">
        <h2 className="max-md:text-2xl max-md:text-center text-[40px] font-medium text-black">
          {t('place Your Code For Tracking')}
        </h2>
        <p className="text-base max-md:hidden text-black-300 font-medium">
          {t('enter your tracking code to monitor')}
        </p>
        <div className="flex flex-col gap-2">
        <form className="flex items-center relative"
        onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            className="w-full h-[50px] p-4 text-[12px] max-md:text-[10px] text-black-200 font-medium rounded-[32px] outline-none"
            placeholder={t('enter your order code or Mobile Number')}
            {...register("code", {
              required: t("order code or mobile number is required"),
            })}
          />
          <input
            type="submit"
            value={t('enter')}
            className={`bg-blue-500 block cursor-pointer text-white text-base max-md:text-[12px] font-medium w-[100px] h-[40px] absolute ${langDetection === "en" ? "right-1" : "left-1"} rounded-[32px]`}
          />
        </form>
        <p
          className={`text-red-600 text-base ${
            langDetection === "en" ? "pl-6" : "pr-6"
          }`}
        >
          {errors.code?.message}
        </p>
        </div>
      </div>

      <div className="max-md:w-full max-md:h-fit w-[513px] h-[276px]">
      <img src={Tracking} className={`rounded-[24px] ${langDetection === "en" ? "ml-auto" : "mr-auto"}`} alt="tracking" width={513} height={276}/>
      </div>
    </div>
  );
};

export default CodeTracking;
