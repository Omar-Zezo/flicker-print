import { Eye, EyeDisable, X } from "@/images/svg";
import Button from "@/utils/Button";
import { t } from "i18next";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ConfirmDeleteAcount = ({
  setShowConfirmDeleteAccount,
  langDetection,
}) => {
    const [showPassword, setShowPassord] = useState(false)
  const {
    register,
    handleSubmit,
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
          onClick={() => setShowConfirmDeleteAccount(false)}
        >
          <img width={20} height={20} src={X} alt="x" />
        </div>
        <div className="px-8 flex flex-col gap-3 items-center justify-center">
          <div className="w-[444px] flex flex-col gap-8">
            <div className=" flex flex-col gap-5">
              <p className="text-[28px] text-center text-black-500 font-semibold">
                {t("Delete Account")}
              </p>
              <p className="w-[90%] mx-auto text-sm text-center text-black-300 font-medium">
                Please enter your password to confirm and complete the account
                deletion process.
              </p>
            </div>
            <form
              className="flex flex-col gap-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="password"
                    className="text-base px-1 text-black-400 font-medium cursor-pointer"
                  >
                    {t("Your Password")}
                  </label>
                  <div className="relative">
                    <img
                      width={24}
                      height={21}
                      src={showPassword ? Eye : EyeDisable}
                      className={`absolute top-6 ${
                        langDetection === "en" ? "right-5" : "left-5"
                      } cursor-pointer`}
                      alt="toggle-password"
                      onClick={() =>
                        setShowPassord(!showPassword)
                      }
                    />
                    <input
                      className={`w-full h-[70px] ${
                        langDetection === "en" ? "pl-8" : "pr-8"
                      } outline-none border border-black/10 rounded-[18px] text-base text-black-200`}
                      type={showPassword ? "text" : "password"}
                      placeholder={t("enter your password")}
                      id="password"
                      {...register("password", {
                        required: t("Password is required"),
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
                </div>
              </div>
              <div className="flex justify-center gap-5">
                <button
                  type="submit"
                  className={`w-[214px] h-[46px] font-medium text-sm bg-[#D90202] text-white rounded-[42px] ${
                    langDetection === "en"
                      ? "hover:translate-x-1"
                      : "hover:translate-x-[-4px]"
                  } duration-300`}
                >
                  {t("Delete")}
                </button>

                <div
                  className="w-[214px] h-[46px]"
                  onClick={() => setShowConfirmDeleteAccount(false)}
                >
                  <Button
                    txtSize="text-sm"
                    text={t("cancel")}
                    txtColor="text-[#D90202]"
                    border={true}
                    borderColor="border-[#D90202]"
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

export default ConfirmDeleteAcount;
