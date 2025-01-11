import ChangeLang from "@/utils/ChangeLang";
import ChangePasswordForm from "@/components/auth/ChangePasswordForm";
import UseLangDetection from "@/hooks/UseLangDetection";
import { Back } from "@/images/svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const langDetection = UseLangDetection();
  const { t } = useTranslation();
  const navigate = useNavigate()

  return (
    <div
      className={`h-screen relative my-10 ${langDetection === "ar" && "arabic-font"} w-full`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <div className="container pt-[124px] mx-auto">
        <div className="w-[538px] max-md:w-[345px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 mr-auto rounded-xl cursor-pointer flex items-center justify-center bg-gray"
            onClick={()=>navigate(-1)}
            >
              <div>
                <img width={12} height={6} src={Back} alt="back" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className={`text-[28px] text-black-500 font-medium`}>
                {t("new Password")}
              </h2>
              <p className={`max-md:text-sm text-base text-black-200 font-normal`}>
                {t("enter a strong password")}
              </p>
            </div>
          </div>
          <ChangePasswordForm langDetection={langDetection} />
        </div>
      </div>
      <div className="absolute top-10 right-10">
        <ChangeLang />
      </div>
    </div>
  );
};

export default ChangePassword;
