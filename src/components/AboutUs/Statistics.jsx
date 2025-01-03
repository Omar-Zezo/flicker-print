import { AboutUsImg } from "@/images/imgs";
import { t } from "i18next";
import React from "react";

const Statistics = () => {
  return (
    <div className="w-fit mx-auto flex items-center gap-[100px]">
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col items-center gap-2">
          <p className="text-black-500 text-[40px] font-medium">3000+</p>
          <p className="text-black-200 text-base font-medium">{t('unique Styles')}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-black-500 text-[40px] font-medium">30+</p>
          <p className="text-black-200 text-base font-medium">{t('category')}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-black-500 text-[40px] font-medium">1200+</p>
          <p className="text-black-200 text-base font-medium">{t('costumed')}</p>
        </div>
      </div>
      <div className="w-[351px] h-[484px] rounded-[50px]">
        <img
          src={AboutUsImg}
          alt="about-us-img"
          className="size-full rounded-[50px] object-cover"
        />
      </div>
      <div className="w-[361px] flex flex-col gap-2">
        <h6 className="text-blue-500 text-base font-medium">{t("about Us")}</h6>
        <p className="w-[70%] text-black-500 text-[32px] font-semibold">
          {t('creative agency & their best Solution')}
        </p>
        <p className="text-base text-black-300 font-medium package-description">
          Flicker is a platform for custom product printing, offering
          high-quality solutions to showcase your style or brand!
        </p>
      </div>
    </div>
  );
};

export default Statistics;
