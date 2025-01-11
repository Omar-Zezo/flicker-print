import { accountTypes } from "@/constant";
import { t } from "i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 

const SelectType = () => {
  const [accountType, setAccountType] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const navigate = useNavigate()

  const errorMsg = (msg) => toast.error(msg);

  const handelSelectAccount = ()=>{
    if(accountType){
        navigate('/auth/signup')
    }else{
        errorMsg(t("please select the type first"))
    }
  }


  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex gap-5">
        {accountTypes.map((type, index) => (
          <div key={type.type} className={`w-1/2 py-8 flex flex-col gap-4 items-center justify-center ${index === selectedType ? "border-blue-500" : "border-[#D8DFEB]"} rounded-[27px] border border-dashed cursor-pointer`}
          onClick={()=>{
            setSelectedType(type.id)
            localStorage.setItem("accType", type.type)
            setAccountType(type.type)
          }}
          >
            <img src={type.icon} width={64} height={64} alt="b2c" />
            <p className="max-md:text-sm text-xl font-medium">{t(type.name)}</p>
          </div>
        ))}
      </div>
      <div>
        <button
          className="w-full h-[70px] relative outline-none border-black/10 rounded-[18px] max-md:text-base text-xl font-medium text-white bg-blue-500 duration-300 cursor-pointer"
          type="submit"
          onClick={handelSelectAccount}
        >
          {t("next")}
        </button>
      </div>
    </div>
  );
};

export default SelectType;
