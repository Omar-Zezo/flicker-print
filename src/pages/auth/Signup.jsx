import { Group12 } from "@/images/imgs";
import SignupForm from "@/components/auth/SignupForm";
import ChangeLang from "@/utils/ChangeLang";
import { useTranslation } from "react-i18next";
import UseLangDetection from "@/hooks/UseLangDetection";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SignupFormB2b from "@/components/auth/SignupFormB2b";
import UseGetLoggedUser from "@/hooks/UseGetLoggedUser";

const Signup = () => {
  const langDetection = UseLangDetection()
  const { t } = useTranslation();
  const [formType, setFormtype] = useState(null)
  const {isAuth} = UseGetLoggedUser()

  const navigate = useNavigate()


  useEffect(()=>{
    if(localStorage.getItem('token')){
      if(isAuth === null){
        navigate('/auth/verify-email')
      }else{
        navigate('/')
      }
    }
  },[isAuth])



  useEffect(()=>{
    if(localStorage.getItem("accType")){
      setFormtype(localStorage.getItem("accType"))
    }else{
      navigate('/auth/select-account-type')
    }
  },[localStorage.getItem("accType")])

  return (
    <div className={`h-screen relative  ${langDetection === "ar" && "arabic-font"} w-full`} dir={langDetection === "en" ? "ltr" : "rtl"}>
      <div className="container flex mx-auto">
        <div className="w-[538px] max-md:w-[345px] py-[60px] max-md:pt-[133px] mx-auto flex flex-col gap-10 items-center">
          <div className="w-[303px] h-[122px] flex flex-col items-center gap-5">
            <Link to="/" className="max-md:w-[181px] h-[30px]">
            <img width={302} height={50} src={Group12} alt="flicker-logo" />
            </Link>
            <div className="flex flex-col gap-1">
              <h2 className={`text-[28px] max-md:text-xl text-center text-black-500 font-semibold`}>
              {t('welcome')}
              </h2>
              <p className={`max-md:text-sm text-base text-center text-black-200 font-normal`}>
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
      </div>
      <div className="absolute top-10 right-10">
        <ChangeLang />
      </div>
    </div>
  );
};

export default Signup;