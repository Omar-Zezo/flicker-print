import { Eye, EyeDisable, X } from "@/images/svg";
import Button from "@/utils/Button";
import { t } from "i18next";
import { useState } from "react";
import { useForm } from "react-hook-form";

const NewPassword = ({ setShowNewPasswordForm, langDetection }) => {
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div
      className={`size-full fixed top-0 left-0 z-50 bg-black/80 ${
        langDetection === "ar" && "arabic-font"
      }`}
    >
      <div className="py-5 absolute top-1/2 translate-y-[-50%] pt-[70px] left-1/2 translate-x-[-50%] rounded-[25px] bg-white">
        <div
          className="size-10 rounded-[11px] absolute right-5 top-5 cursor-pointer bg-[#E8EFF5] flex justify-center items-center"
          onClick={() => setShowNewPasswordForm(false)}
        >
          <img width={20} height={20} src={X} alt="x" />
        </div>
        <div className="size-full px-8 flex flex-col gap-3 items-center justify-center">
          <div className="size-full flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <p className="text-[28px] text-center text-black-500 font-semibold">
                {t("Change Password")}
              </p>
            </div>
            <form
              className="flex flex-col gap-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-[444px] flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="profile-new-password"
                    className="px-1 text-base text-black-400 font-medium cursor-pointer"
                  >
                    {t("new Password")}
                  </label>
                  <div className="relative">
                    <img
                      width={24}
                      height={21}
                      src={showNewPassword ? Eye : EyeDisable}
                      className={`absolute top-6 ${
                        langDetection === "en" ? "right-5" : "left-5"
                      } cursor-pointer`}
                      alt="toggle-password"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    />
                    <input
                      className={`w-full h-[70px] ${
                        langDetection === "en" ? "pl-8" : "pr-8"
                      } outline-none border border-black/10 rounded-[18px] text-base text-black-200`}
                      type={showNewPassword ? "text" : "password"}
                      id="profile-new-password"
                      placeholder={t("new Password")}
                      {...register("newPassword", {
                        required: t("new Password is required"),
                        minLength: {
                          value: 8,
                          message: t("password must be more"),
                        },
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]*$/,
                          message: t("password must include"),
                        },
                      })}
                    />
                  </div>
                  <p
                    className={`text-red-600 text-base ${
                      langDetection === "en" ? "pl-6" : "pr-6"
                    }`}
                  >
                    {errors.newPassword?.message}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="confirm-new-password"
                    className="px-1 text-base text-black-400 font-medium cursor-pointer"
                  >
                    {t("Confirm New Password")}
                  </label>
                  <div className="relative">
                    <img
                      width={24}
                      height={21}
                      src={showPasswordConfirm ? Eye : EyeDisable}
                      className={`absolute top-6 ${
                        langDetection === "en" ? "right-5" : "left-5"
                      } cursor-pointer`}
                      alt="toggle-password"
                      onClick={() =>
                        setShowPasswordConfirm(!showPasswordConfirm)
                      }
                    />
                    <input
                      className={`w-full h-[70px] ${
                        langDetection === "en" ? "pl-8" : "pr-8"
                      } outline-none border border-black/10 rounded-[18px] text-base text-black-200`}
                      type={showPasswordConfirm ? "text" : "password"}
                      id="confirm-new-password"
                      placeholder={t("Confirm New Password")}
                      {...register("confirmNewPassword", {
                        required: t("confirm new Password is required"),
                        validate: (val) => {
                          if (val !== watch("password")) {
                            return t(
                              "password and password confirm don't match"
                            );
                          }
                        },
                      })}
                    />
                  </div>
                  <p
                    className={`text-red-600 text-base ${
                      langDetection === "en" ? "pl-6" : "pr-6"
                    }`}
                  >
                    {errors.confirmNewPassword?.message}
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-5">
                <button
                  type="submit"
                  className="w-[214px] h-[46px] font-medium text-sm bg-blue-500 text-white rounded-[42px]"
                >
                  {t("save")}
                </button>

                <div
                  className="w-[214px] h-[46px]"
                  onClick={() => setShowNewPasswordForm(false)}
                >
                  <Button
                    txtSize="text-sm"
                    text={t("cancel")}
                    txtColor="text-blue-500"
                    border={true}
                    borderColor="border-blue-500"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
