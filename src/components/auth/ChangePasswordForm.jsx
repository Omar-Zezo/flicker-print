import { t } from "i18next";
import { useForm } from "react-hook-form";
import { EyeDisable, Eye } from "@/images/svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetNewPassword } from "@/store/slices/auth/resetPassword";
import BtnLoader from "@/utils/BtnLoader";
import UseLangDetection from "@/hooks/UseLangDetection";

const ChangePasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [btnLoaderStatus, setBtnLoaderStatus] = useState(false);
  const { data, error } = useSelector((state) => state.resetPassword);
  const langDetection = UseLangDetection();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setBtnLoaderStatus(true);
    dispatch(
      resetNewPassword({
        data: {
          email: localStorage.getItem("email"),
          otp: localStorage.getItem("otp"),
          password: data.password,
          password_confirmation: data.password_confirmation,
        },
      })
    );
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
          placeholder={t("new password placeholder")}
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
          placeholder={t("confirm new password placeholder")}
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

export default ChangePasswordForm;
