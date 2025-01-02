import { t } from "i18next";
import React from "react";

const RatingBars = ({ rates }) => {
  return (
    <div className="w-[902px] flex flex-col gap-5">
      {rates?.rates_with_percentage.map((rate, index) => (
        <div key={index} className="flex items-center gap-4">
          <p className="text-black-400 text-xl font-medium">{Number(rate?.rate)} {t('star')}</p>
          <div className="w-[767px] relative h-[15px] bg-section-gray rounded-full">
            <div style={{width:`${Number(rate?.percentage)}%`}} className={`h-full rounded-full bg-blue-500 absolute left-0 top-0`}></div>
          </div>
          <p className="text-black-400 text-xl font-medium">{Number(rate?.percentage)}%</p>
        </div>
      ))}
    </div>
  );
};

export default RatingBars;
