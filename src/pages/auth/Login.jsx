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
    if(isAuth === null){
      navigate('/auth/verify-email')
    }else{
      navigate('/')
    }
  }
},[isAuth])

  return (
    <div className={`h-screen relative flex items-center ${langDetection === "ar" && "arabic-font"} w-full`} dir={langDetection === "en" ? "ltr" : "rtl"}>
      <div className="container flex mx-auto">
        <div className="w-[538px] max-md:w-[345px] mx-auto flex flex-col gap-10 items-center">
          <div className="w-[303px] flex flex-col items-center gap-5">
            <Link to="/" className="max-md:w-[181px] h-[30px]">
            <img width={302} height={50} src={Group12} alt="flicker-logo" />
            </Link>
            <div className="flex flex-col gap-1">
              <h2 className={`text-[28px] max-md:text-xl text-center text-black-500 font-semibold`}>
              {t('welcome back')}
              </h2>
              <p className={`max-md:text-sm text-base text-center text-black-200 font-normal`}>
              {t('please login')}
              </p>
            </div>
          </div>
          <LoginForm langDetection={langDetection}/>
        </div>
      </div>
      <div className="absolute top-10 right-10">
        <ChangeLang />
      </div>
    </div>
  )
}

export default Login