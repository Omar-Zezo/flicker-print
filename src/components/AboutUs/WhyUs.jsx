import { Speedometer, TeamLeader, Technology } from "@/images/svg";
import { t } from "i18next";
import React from "react";

const WhyUs = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <h2 className="text-black-500 pb-1 relative text-[32px] font-semibold title-line-center">
        {t('why Us')}
      </h2>
      <div className="flex gap-[24px]">
        <div className="w-1/3 flex gap-5 flex-col bg-white rounded-[20px] shadow-lg p-5">
          <div className="size-fit p-[10px] bg-[#E6E6E64D] rounded-[20px]">
            <img src={Technology} alt="" width={64} height={64} />
          </div>
          <h4 className="text-black-500 text-xl font-semibold">
            Modern Technology
          </h4>
          <p className="text-sm text-black-300 font-medium">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy dolor sit amet,
          </p>
        </div>

        <div className="w-1/3 flex gap-5 flex-col bg-white rounded-[20px] shadow-lg p-5">
          <div className="size-fit p-[10px] bg-[#E6E6E64D] rounded-[20px]">
            <img src={Speedometer} alt="" width={64} height={64} />
          </div>
          <h4 className="text-black-500 text-xl font-semibold">
          Speed And Accuracy
          </h4>
          <p className="text-sm text-black-300 font-medium">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy dolor sit amet,
          </p>
        </div>

        <div className="w-1/3 flex gap-5 flex-col bg-white rounded-[20px] shadow-lg p-5">
          <div className="size-fit p-[10px] bg-[#E6E6E64D] rounded-[20px]">
            <img src={TeamLeader} alt="" width={64} height={64} />
          </div>
          <h4 className="text-black-500 text-xl font-semibold">
          Professional Team
          </h4>
          <p className="text-sm text-black-300 font-medium">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy dolor sit amet,
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
