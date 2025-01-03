import { useTranslation } from "react-i18next";
import { Group12 } from "@/images/imgs";
import ChangeLang from "@/utils/ChangeLang";
import UseLangDetection from "@/hooks/UseLangDetection";
import LoginForm from "@/components/auth/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import UseGetLoggedUser from "@/hooks/UseGetLoggedUser";
import { t } from "i18next";

const Login = () => {
const langDetection = UseLangDetection()
const {isAuth} = UseGetLoggedUser()

const navigate = useNavigate()

useEffect(()=>{
  if(localStorage.getItem('token')){
    if(isAuth === false){
      navigate('/auth/verify-email')
    }else{
      navigate('/profile')
    }
  }
},[])

  return (
    <div className={`${langDetection === "ar" && "arabic-font"} w-full`} dir={langDetection === "en" ? "ltr" : "rtl"}>
      <div className="container relative flex mx-auto">
        <div className="w-[538px] mx-auto flex flex-col gap-10 items-center">
          <div className="w-[303px] h-[122px] flex flex-col items-center gap-5">
            <Link to="/">
            <img width={302} height={50} src={Group12} alt="flicker-logo" />
            </Link>
            <div className="flex flex-col gap-1">
              <h2 className={`text-[40px] text-center text-black-500 font-semibold`}>
              {t('welcome back')}
              </h2>
              <p className={`text-base text-center text-black-200 font-normal`}>
              {t('please login')}
              </p>
            </div>
          </div>
          <LoginForm langDetection={langDetection}/>
        </div>
        <div className="absolute top-0 right-0">
        <ChangeLang />
        </div>
      </div>
    </div>
  )
}

export default Login