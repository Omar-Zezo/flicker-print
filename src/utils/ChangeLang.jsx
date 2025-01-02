import { ArrowDown, ArrowDownWhite } from "@/images/svg";
import { langAr, langEn } from "@/store/slices/translation/translation";
import { t } from "i18next";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const ChangeLang = ({nav, navBlack}) => {
  const [showMenu, setShowMenu] = useState(false);
  const { i18n } = useTranslation();

  const dispatch = useDispatch()
  const {pathname} = useLocation()


  const changeLang = (lang)=> {
    i18n.changeLanguage(lang)
    if(lang === "en"){
      if(pathname === "/"){
        dispatch(langEn())
        window.location.reload()
      }else{
        dispatch(langEn())
      }
    }

    if(lang === "ar"){
      if(pathname === "/"){
        dispatch(langAr())
        window.location.reload()
      }else{
        dispatch(langAr())
      }
    }
  }

  return (
    <div className="w-fit">
      <div
        className="relative flex items-center cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        <small className={`${nav ? navBlack ? "text-base text-black-500": "text-base text-white" : "text-xl text-black-500"} font-medium`}>
          {nav ? t('lang-nav') : t('lang')}
        </small>
        <img width={24} height={24} src={nav && navBlack === false ? ArrowDownWhite : ArrowDown} alt="arrow-down" />
        <ul
          className={`w-full absolute ${
            showMenu ? "flex flex-col gap-1" : "hidden"
          } top-8`}
        >
          <li
            className={`font-medium text-center ${nav ? navBlack ? "text-black-500 text-base" : "text-white text-base" : "text-black-500 text-lg"} hover:bg-green-300/70 rounded-lg cursor-pointer p-1`}
            onClick={() => {
              changeLang("en")
            }}
          >
            {nav ? "EN" : "English"}
          </li>
          <li
            className={`font-medium text-center ${nav ? navBlack ? "text-black-500 text-base" : "text-white text-base" : "text-black-500 text-lg"} hover:bg-blue-300/70 rounded-lg cursor-pointer p-1`}
            onClick={() => {
              changeLang("ar")
            }}
          >
            {nav ? "AR" : "Arabic"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChangeLang;
