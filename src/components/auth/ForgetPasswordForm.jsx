import UseLangDetection from "@/hooks/UseLangDetection";
import { checkEmail } from "@/store/slices/auth/sendEmail";
import BtnLoader from "@/utils/BtnLoader";
import { t } from "i18next";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const ForgetPasswordForm = () => {
  const [btnLoaderStatus, setBtnLoaderStatus] = useState(false);
  const { data, error } = useSelector((state) => state.sendEmail);
  const langDetection = UseLangDetection();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setBtnLoaderStatus(true);
    localStorage.setItem("email", data.email);
    dispatch(checkEmail({ data }));
  };

  useEffect(() => {
    if (data || error) {
      setBtnLoaderStatus(false);
    }
  }, [data, error]);

  return (
    <form
      className="w-full flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <input
          className={`w-full h-[70px] ${
            langDetection === "en" ? "pl-8" : "pr-8"
          } outline-none border-black/10 rounded-[18px] text-base max-md:text-sm text-black-200 bg-field`}
          type="email"
          placeholder={t("email")}
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
            langDetection === "en" ? "pl-6" : "pr-6"
          }`}
        >
          {errors.email?.message}
        </p>
      </div>
      <div>
        <button
          className="w-full h-[70px] relative outline-none border-black/10 rounded-[18px] text-xl max-md:text-base font-medium text-white bg-blue-500 duration-300 cursor-pointer"
          type="submit"
          disabled={btnLoaderStatus}
        >
          {btnLoaderStatus ? <BtnLoader /> : t("confirm")}
        </button>
      </div>
    </form>
  );
};

export default ForgetPasswordForm;
