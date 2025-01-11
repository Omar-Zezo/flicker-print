import { Link } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import { Controller, useForm } from "react-hook-form";
import { EyeDisable, Eye } from "@/images/svg";
import { useEffect, useState } from "react";
import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "@/store/slices/auth/signup";
import BtnLoader from "@/utils/BtnLoader";
import UseLangDetection from "@/hooks/UseLangDetection";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [btnLoaderStatus, setBtnLoaderStatus] = useState(false);
  const { data, error } = useSelector((state) => state.signup);
  const langDetection = UseLangDetection();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setBtnLoaderStatus(true);
    if (data.mobile) {
      const phoneNumber = parsePhoneNumber(data.mobile);
      data.mobile_country_code = phoneNumber.countryCallingCode;
    }
    if (localStorage.getItem("accType")) {
      data.client_type = localStorage.getItem("accType");
    }
    localStorage.setItem("email", data.email);
    dispatch(signupUser({ data }));
  };

  useEffect(() => {
    if (data || error) {
      setBtnLoaderStatus(false);
      if (error) {
        localStorage.removeItem("email");
      }
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
          type="text"
          placeholder={t("full name")}
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
            langDetection === "en" ? "pl-6" : "pr-6"
          }`}
        >
          {errors.name?.message}
        </p>
      </div>
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
      <div dir="ltr">
        <Controller
          name="mobile"
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
              className="w-full h-[70px] flex items-center relative pl-8 outline-none border-black/10 rounded-[18px] text-base max-md:text-sm text-black-200 bg-field"
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
            langDetection === "en" ? "pl-6" : "pr-6 text-right"
          }`}
        >
          {errors.mobile?.message}
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
          } outline-none border-black/10 rounded-[18px] text-base max-md:text-sm text-black-200 bg-field`}
          type={showPassword ? "text" : "password"}
          placeholder={t("password")}
          {...register("password", {
            required: t("password is required"),
            minLength: { value: 8, message: t("password must be more") },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]*$/,
              message: t("password must include"),
            },
          })}
        />
        <p
          className={`text-red-600 text-base ${
            langDetection === "en" ? "pl-6" : "pr-6"
          }`}
        >
          {errors.password?.message}
        </p>
      </div>
      <div className="relative">
        <img
          width={24}
          height={21}
          src={showPasswordConfirm ? Eye : EyeDisable}
          className={`absolute top-6 ${
            langDetection === "en" ? "right-5" : "left-5"
          } cursor-pointer`}
          alt="toggle-password"
          onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
        />
        <input
          className={`w-full h-[70px] ${
            langDetection === "en" ? "pl-8" : "pr-8"
          } outline-none border-black/10 rounded-[18px] text-base max-md:text-sm text-black-200 bg-field`}
          type={showPasswordConfirm ? "text" : "password"}
          placeholder={t("confirm password")}
          {...register("password_confirmation", {
            required: t("confirm password is required"),
            validate: (val) => {
              if (val !== watch("password")) {
                return t("password and password confirm don't match");
              }
            },
          })}
        />
        <p
          className={`text-red-600 text-base ${
            langDetection === "en" ? "pl-6" : "pr-6"
          }`}
        >
          {errors.password_confirmation?.message}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <button
          className="w-full h-[70px] relative outline-none border-black/10 rounded-[18px] text-xl max-md:text-base font-medium text-white bg-blue-500 duration-300 cursor-pointer"
          type="submit"
          disabled={btnLoaderStatus}
        >
          {btnLoaderStatus ? <BtnLoader /> : t("create")}
        </button>
        <p className="flex items-center justify-center gap-1 text-sm text-center text-black-500 font-medium">
          {t("already have")}
          <Link
            to="/auth/login"
            className="text-blue-500 font-semibold hover:underline"
          >
            {t("login now")}
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;