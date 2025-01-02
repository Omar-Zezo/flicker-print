import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "react-international-phone/style.css";
import { EyeDisable, Eye } from "@/images/svg";
import { useEffect, useState } from "react";
import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/store/slices/auth/login";
import BtnLoader from "@/utils/BtnLoader";
import UseLangDetection from "@/hooks/UseLangDetection";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [btnLoaderStatus, setBtnLoaderStatus] = useState(false);
  const { data, error } = useSelector((state) => state.login);
  const langDetection = UseLangDetection();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setBtnLoaderStatus(true);
    dispatch(loginUser({ data }));
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
          className={`w-full h-[70px] mt-10 ${
            langDetection === "en" ? "pl-8" : "pr-8"
          } outline-none border-black/10 rounded-[18px] text-base text-black-200 bg-field`}
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
      <div className="relative">
        <img
          width={24}
          height={21}
          src={showPassword ? Eye : EyeDisable}
          className={`absolute top-6 ${
            langDetection === "en" ? "right-5" : "left-5"
          } cursor-pointer`}
          alt="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
        />
        <input
          className={`w-full h-[70px] ${
            langDetection === "en" ? "pl-8" : "pr-8"
          } outline-none border-black/10 rounded-[18px] text-base text-black-200 bg-field`}
          type={showPassword ? "text" : "password"}
          placeholder={t("password")}
          {...register("password", { required: t("password is required") })}
        />
        <p
          className={`text-red-600 text-base mb-1 ${
            langDetection === "en" ? "pl-6" : "pr-6"
          }`}
        >
          {errors.password?.message}
        </p>
        <Link
          to="/auth/forget-password"
          className={`block text-sm text-blue-500 text-right ${
            langDetection === "ar" && "pr-6"
          } font-medium hover:underline`}
        >
          {t("forget Password")}
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <button
          className="w-full h-[70px] relative outline-none border-black/10 rounded-[18px] text-xl font-medium text-white bg-blue-500 duration-300 cursor-pointer"
          type="submit"
          disabled={btnLoaderStatus}
        >
          {btnLoaderStatus ? <BtnLoader /> : t("login")}
        </button>
        <p className="flex items-center justify-center gap-1 text-sm text-center text-black-500 font-medium">
          {t("I don't have an account")}
          <Link
            to="/auth/select-account-type"
            className="text-blue-500 font-semibold hover:underline"
          >
            {t("create account")}
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
