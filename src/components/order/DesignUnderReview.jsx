import { Time } from "@/images/svg";
import { t } from "i18next";

const DesignUnderReview = () => {
  return (
    <div className="w-2/3 py-6 flex justify-center items-start  ml-auto rounded-[20px] bg-white">
      <div className="w-[423px] flex flex-col items-center gap-4">
        <img src={Time} width={96} height={96} alt="Time" />
        <p className="text-base text-black-300 text-center font-medium">
          {t('your order is under review')}
        </p>
        <div className="w-[166px] h-[37px] p-2 flex items-center justify-center bg-[#23B5761A] text-sm text-blue-500 font-medium rounded-[10px]">
          {t('expected Time')}: 3{t('h')}
        </div>
      </div>
    </div>
  );
};

export default DesignUnderReview;
