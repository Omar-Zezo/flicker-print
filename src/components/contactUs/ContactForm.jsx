import BtnLoader from "@/utils/BtnLoader";
import { t } from "i18next";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { PhoneInput } from "react-international-phone";

const ContactForm = ({lang}) => {
const [btnLoaderStatus, setBtnLoaderStatus] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-[484px] mx-auto">
      <form
        className="w-full flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-[12px]">
          <label
            htmlFor="fullname-contact"
            className="text-base text-black-400 font-medium px-3"
          >
            {t('full name')}
          </label>
          <input
            id="fullname-contact"
            type="text"
            className="py-[25px] px-[32px] text-[14px] text-black-200 font-normal rounded-[18px] border-[.5px] outline-none border-black/10 bg-white"
            placeholder={t('full name')}
            {...register("name", {
                required: t("full name is required"),
                minLength: {
                  value: 3,
                  message: t("full Name must be more than 3 charactrs"),
                },
              })}
          />
          <p
          className={`text-red-600 text-base ${
            lang === "en" ? "pl-6" : "pr-6"
          }`}
        >
          {errors.name?.message}
        </p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <label
            htmlFor="email-contact"
            className="text-base text-black-400 font-medium px-3"
          >
            {t('email')}
          </label>
          <input
            id="email-contact"
            type="email"
            className="py-[25px] px-[32px] text-[14px] text-black-200 font-normal rounded-[18px] border-[.5px] outline-none border-black/10 bg-white"
            placeholder={t('email')}
            {...register("email", {
                required: t("email is required"),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t("invalid email address"),
                },
              })}
          />
           <p
          className={`text-red-600 text-base ${
            lang === "en" ? "pl-6" : "pr-6"
          }`}
        >
          {errors.email?.message}
        </p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <label
            htmlFor="phone-contact"
            className="text-base text-black-400 font-medium px-3"
          >
            {t('phone')}
          </label>
          <Controller
            name="mobileContact"
            control={control}
            rules={{
              validate: (value) => {
                if (!isValidPhoneNumber(value)) {
                  return t("please enter a valid phone number");
                }
                return true;
              },
            }}
            render={({ field }) => (
              <PhoneInput
                {...field}
                className="w-full h-[70px] flex items-center relative pl-8 outline-none border-black/10 rounded-[18px] text-base text-black-200 bg-white"
                defaultCountry="eg"
                onChange={(value) => {
                  field.onChange(value);
                }}
                inputStyle={{
                  width: "100%",
                  background: "transparent",
                  color: "#8A8A8A",
                  fontSize: "16px",
                  border: "none",
                }}
              />
            )}
          />
          <p
          className={`text-red-600 text-base ${
            lang === "en" ? "pl-6" : "pr-6 text-right"
          }`}
        >
          {errors.mobileContact?.message}
        </p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <label
            htmlFor="phone-contact"
            className="text-base text-black-400 font-medium px-3"
          >
            {t('message')}
          </label>
          <textarea className="w-full h-[212px] rounded-[18px] bg-white px-[32px] py-[25px] text-[14px] text-black-200 font-normal resize-none outline-none border-[.5px] border-black/10" placeholder={t('enter your message')}
          {...register("message", {
            required: t("message is required"),
          })}
          ></textarea>
           <p
          className={`text-red-600 text-base ${
            lang === "en" ? "pl-6" : "pr-6"
          }`}
        >
          {errors.message?.message}
        </p>
        </div>
        <button
          className="w-full h-[70px] mb-[32px] relative outline-none border-black/10 rounded-[18px] text-xl font-medium text-white bg-blue-500 duration-300 cursor-pointer"
          type="submit"
          disabled={btnLoaderStatus}
        >
          {btnLoaderStatus ? <BtnLoader /> : t("submit")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
