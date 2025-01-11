import UseLangDetection from "@/hooks/UseLangDetection";
import { t } from "i18next";
import { useForm } from "react-hook-form";

const TrackOrder = () => {
  const langDetection = UseLangDetection();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex-1 pb-10 flex flex-col gap-8 border-2 border-[#F4F7F9] rounded-[18px]">
      <h2 className="py-5 px-8 text-2xl text-black-500 font-medium">
        {t("Track Order")}
      </h2>
      <div className="px-8">
        <div className="bg-section-gray flex flex-col items-center py-8 px-8 gap-5 rounded-[32px]">
          <div className="w-1/2 flex flex-col gap-5 items-center">
            <h2 className="text-[40px] text-center font-medium text-black">
              {t("place Your Code For Tracking")}
            </h2>
            <p className="text-base text-center text-black-300 font-medium">
              {t("enter your tracking code to monitor")}
            </p>
            <div className="w-full flex flex-col gap-2">
              <form
                className="flex items-center relative"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  type="text"
                  className="w-full h-[50px] p-4 text-[12px] text-black-200 font-medium rounded-[32px] outline-none"
                  placeholder={t("enter your order code or Mobile Number")}
                  {...register("code", {
                    required: t("order code or mobile number is required"),
                  })}
                />
                <input
                  type="submit"
                  value={t("enter")}
                  className={`bg-blue-500 block cursor-pointer text-white text-base font-medium w-[100px] h-[40px] absolute ${
                    langDetection === "en" ? "right-1" : "left-1"
                  } rounded-[32px]`}
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
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
