import ChangeLang from "@/utils/ChangeLang";
import SelectType from "@/components/auth/SelectType";
import UseLangDetection from "@/hooks/UseLangDetection";
import { Back } from "@/images/svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SelectAccountType = () => {
  const langDetection = UseLangDetection();
  const { t } = useTranslation();
  const navigate = useNavigate()

  useEffect(()=>{
      if(localStorage.getItem("token")){
        navigate('/')
      }
  },[])

  return (
    <div
      className={`my-10 ${langDetection === "ar" && "arabic-font"} w-full`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <div className="container pt-[124px] relative mx-auto">
        <div className="w-[538px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 mr-auto rounded-xl cursor-pointer flex items-center justify-center bg-gray">
              <div onClick={()=> navigate(-1)}>
                <img width={12} height={6} src={Back} alt="back" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className={`text-[28px] text-black-500 font-medium`}>
                {t("please select account type")}
              </h2>
            </div>
          </div>
          <SelectType langDetection={langDetection} />
        </div>
        <div className="absolute top-0 right-0">
        <ChangeLang />
        </div>
      </div>
    </div>
  );
};

export default SelectAccountType;
