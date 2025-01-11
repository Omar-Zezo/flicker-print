import { X } from "@/images/svg";
import Button from "@/utils/Button";
import { t } from "i18next";
import { useForm } from "react-hook-form";

const ChangePersonalInfo = ({ setShowPersonalInfo, langDetection }) => {
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
          onClick={() => setShowPersonalInfo(false)}
        >
          <img width={20} height={20} src={X} alt="x" />
        </div>
        <div className="size-full px-8 flex flex-col gap-3 items-center justify-center">
          <div className="size-full flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <p className="text-[28px] text-center text-black-500 font-semibold">
                {t("Personal Info")}
              </p>
            </div>
            <form
              className="flex flex-col gap-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-[444px]">
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="change-name"
                    className="text-base text-black-400 font-medium cursor-pointer"
                  >
                    {t("full name")}
                  </label>
                  <input
                    id="change-name"
                    type="text"
                    value={"Mohamed Ahmed Ali"}
                    className="w-full py-[25px] text-sm text-black-500 font-medium outline-none px-8 border-[.5px] border-black/15 rounded-[18px]"
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
              </div>
              <div className="flex justify-center gap-5">
                <button type="submit" className="w-[214px] h-[46px] font-medium text-sm bg-blue-500 text-white rounded-[42px]">
                  {t("save")}
                </button>

                <div
                  className="w-[214px] h-[46px]"
                  onClick={() => setShowPersonalInfo(false)}
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

export default ChangePersonalInfo;
