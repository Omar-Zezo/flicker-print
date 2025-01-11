import { ArrowWave, Pdf } from "@/images/svg";
import Button from "@/utils/Button";
import { useState } from "react";
import DesignChange from "./DesignChange";
import { t } from "i18next";

const DesignConfirm = ({langDetection}) => {
  const [requestChanges, setRequestChanges] = useState(false)
  return (
    <div className="w-2/3 py-6 flex p-5 items-start relative ml-auto rounded-[20px] bg-white">
      <div className="w-[299px] flex flex-col gap-4">
        <p className="text-base text-black-500 font-semibold">{t('design File')}</p>
        <p className="text-[12px] font-medium text-black-500">
          {t('this is your design file')}
        </p>
        <a href="" download={true} className="bg-[#23B5760D] flex gap-2 rounded-[12px] cursor-pointer p-2 border border-dashed border-[#23B576B2]">
          <div className="size-10 flex items-center justify-center">
            <img width={24} height={24} alt="pdf" src={Pdf} />
          </div>
          <div>
            <p className="text-sm text-[#6C7176] font-medium">{t('product photo')}</p>
            <p className="text-[10px] text-[#6C7176] font-medium">
              {t('product photo')}
            </p>
          </div>
        </a>
      </div>

        <img width={120} height={136} src={ArrowWave} alt="arrow" className={`absolute top-1/2 translate-y-[-50%] right-1/2 ${langDetection === "ar" && "scale-x-[-1] right-[40%] top-[60%]"}`}/>

        <div className={`flex gap-2 mt-auto ${langDetection === "en" ? "ml-auto":"mr-auto"}`}>
            <div className="w-[150px] h-10">
            <Button
            txtColor="text-white"
            bg="bg-blue-500"
            txtSize="text-[12px]"
            text={t('confirm')}
            />
            </div>

            <div className="w-[150px] h-10"
            onClick={()=> setRequestChanges(true)}
            >
            <Button
            txtColor="text-blue-500"
            txtSize="text-[12px]"
            text={t('request Changes')}
            border={true}
            borderColor="border-blue-500"
            />
            </div>
        </div>
        {requestChanges && (<DesignChange setRequestChanges={setRequestChanges}/>)}
    </div>
  );
};

export default DesignConfirm;
