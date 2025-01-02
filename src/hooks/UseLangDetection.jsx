import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { langAr, langEn } from "@/store/slices/translation/translation";
import { useLocation } from "react-router-dom";

const UseLangDetection = () => {
  const langDetection = useSelector(state=> state.langDetect.lang)

  const dispatch = useDispatch()

  useEffect(()=>{
    if(localStorage.getItem("i18nextLng") === "en"){
      dispatch(langEn())
    }else{
      dispatch(langAr())
    }
  }, [])

  return langDetection;
};

export default UseLangDetection;
