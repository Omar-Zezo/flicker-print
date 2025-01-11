import ChangeLang from "@/utils/ChangeLang";
import VerifyForm from "@/components/auth/VerifyForm";
import UseLangDetection from "@/hooks/UseLangDetection";
import { Back } from "@/images/svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const VerifyPassword = () => {
  const langDetection = UseLangDetection();
  const { t } = useTranslation();
  const navigate = useNavigate()

  return (
    <div
      className={`h-screen relative my-10 ${langDetection === "ar" && "arabic-font"} w-full`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <div className="container pt-[124px] relative mx-auto">
        <div className="w-[538px] max-md:w-[345px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 mr-auto rounded-xl cursor-pointer flex items-center justify-center bg-gray"
            onClick={()=> navigate(-1)}
            >
              <div>
                <img width={12} height={6} src={Back} alt="back" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className={`text-[28px] max-md:text-xl text-black-500 font-medium`}>
                {t("verify your identity")}
              </h2>
              <div className="flex flex-col gap-1">
              <p className={`text-base max-md:text-sm text-black-200 font-normal`}>
                {t("we sent 6-digit code to")}
              </p>
              <p className={`text-base text-black-500 font-normal`}>
              {localStorage.getItem("email")}
              </p>
              <p className={`text-base text-black-200 font-normal`}>
                {t("this code will be valid")}
              </p>
              </div>
            </div>
          </div>
          <VerifyForm langDetection={langDetection} />
        </div>
      </div>
      <div className="absolute top-10 right-10">
        <ChangeLang />
      </div>
    </div>
  );
};

export default VerifyPassword;
