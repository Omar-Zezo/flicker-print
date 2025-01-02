import { Group12 } from "@/images/imgs";
import SignupForm from "@/components/auth/SignupForm";
import ChangeLang from "@/utils/ChangeLang";
import { useTranslation } from "react-i18next";
import UseLangDetection from "@/hooks/UseLangDetection";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SignupFormB2b from "@/components/auth/SignupFormB2b";

const Signup = () => {
  const langDetection = UseLangDetection()
  const { t } = useTranslation();
  const [formType, setFormtype] = useState(null)

  const navigate = useNavigate()

  useEffect(()=>{
      if(localStorage.getItem("token")){
        navigate('/')
      }
  },[])

  useEffect(()=>{
    if(localStorage.getItem("accType")){
      setFormtype(localStorage.getItem("accType"))
    }else{
      navigate('/auth/select-account-type')
    }
  },[localStorage.getItem("accType")])

  return (
    <div className={`my-[60px] ${langDetection === "ar" && "arabic-font"} w-full`} dir={langDetection === "en" ? "ltr" : "rtl"}>
      <div className="container relative flex mx-auto">
        <div className="w-[538px] mx-auto flex flex-col gap-10 items-center">
          <div className="w-[303px] h-[122px] flex flex-col items-center gap-5">
            <Link to="/">
            <img width={302} height={50} src={Group12} alt="flicker-logo" />
            </Link>
            <div className="flex flex-col gap-1">
              <h2 className={`text-[40px] text-center text-black-500 font-semibold`}>
              {t('welcome')}
              </h2>
              <p className={`text-base text-center text-black-200 font-normal`}>
              {t('please login')}
              </p>
            </div>
          </div>
          {
            formType === "B2B" ? (
              <SignupFormB2b langDetection={langDetection}/>
            ):(
              <SignupForm langDetection={langDetection}/>
            )
          }
        </div>
        <div className="absolute top-0 right-0">
        <ChangeLang />
        </div>
      </div>
    </div>
  );
};

export default Signup;
