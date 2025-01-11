import Button from "@/utils/Button";
import { t } from "i18next";

const OrderDetailsStatus = ({ langDetection }) => {
  return (
    <div className="w-full h-fit flex flex-col gap-5 bg-[#F4F7F9] rounded-[20px] p-5 pb-0 shadow-sm">
      <div className="w-[321px] flex justify-between items-center">
        <p className="text-xl text-black-500 font-semibold">
          {t("order Status")}
        </p>
        <div className="w-[138px] h-10">
          <Button
            txtSize="text-[12px]"
            txtColor="text-white"
            bg="bg-blue-500"
            text={t('pay Remaining')}
          />
        </div>
      </div>

      <div className="w-[321px] flex flex-col gap-9">
        <div className="flex items-center gap-2">
          <div className="size-10 flex items-center justify-center text-base font-medium rounded-full bg-blue-500 text-white">
            01
          </div>
          <div className={`w-[110px] flex flex-col relative pip ${langDetection === "en" ? "after:left-[-30px]":"after:right-[-30px]"}`}>
            <p className="text-base text-blue-500 font-semibold">{t('design')}</p>
            <p className="text-blue-500 text-[12px] font-medium">
              {t('completed in')} 12{t('h')}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="size-10 flex items-center justify-center text-base font-medium rounded-full bg-blue-500 text-white">
            02
          </div>
          <div className={`w-[110px] flex flex-col relative pip ${langDetection === "en" ? "after:left-[-30px]":"after:right-[-30px]"}`}>
            <p className="text-base text-blue-500 font-semibold">{t('production')}</p>
            <p className="text-blue-500 text-[12px] font-medium">
                {t('completed in')} 6{t('h')}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="size-10 flex items-center justify-center text-base font-medium rounded-full bg-blue-500 text-white">
            03
          </div>
          <div className={`w-[110px] flex flex-col relative pip ${langDetection === "en" ? "after:left-[-30px]":"after:right-[-30px]"}`}>
            <p className="text-base text-blue-500 font-semibold">{t('delivery')}</p>
            <p className="text-black-300 text-[12px] font-medium">
                {t('expected Time')} 3{t('h')}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="size-10 flex items-center justify-center text-base font-medium rounded-full bg-blue-500 text-white">
            04
          </div>
          <div className={`w-[110px] flex flex-col relative`}>
            <p className="text-base text-blue-500 font-semibold">{t('completed')}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrderDetailsStatus;
