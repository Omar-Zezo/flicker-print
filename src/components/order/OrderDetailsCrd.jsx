import { CartImg } from "@/images/imgs";
import Button from "@/utils/Button";
import { t } from "i18next";

const OrderDetailsCrd = () => {
  return (
    <div className="flex justify-between items-center py-5 border-b border-dashed border-[#E8E8E8] last-of-type:border-none">
      <div className="flex items-start gap-2">
        <div className="size-[80px] flex items-center justify-center bg-white text-[32px] text-blue-500 font-medium p-1 rounded-[20px]">
        <img
            src={CartImg}
            alt="img"
            className="size-full object-cover rounded-[20px]"
          />
        </div>
        <div className="flex flex-col gap-1 px-1">
          <h3 className="text-black-500 text-base font-semibold">
            #48098012132
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-sm text-black-200 font-medium">{t('color')}:</p>
            <p className="text-sm text-black-500 font-medium">Red</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-black-200 font-medium">{t('type')}:</p>
            <p className="text-sm text-black-500 font-medium">Standerd</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-black-200 font-medium">{t('quantity')}:</p>
            <p className="text-sm text-black-500 font-medium">4</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center gap-[16px]">
          <p className="text-black-500 text-base font-semibold">{t("price")}</p>
          <p className="text-black-500 text-base font-semibold p-2">$240</p>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center gap-[16px]">
          <p className="text-black-500 text-base font-semibold">
            {t("status")}
          </p>
          <p className="text-blue-500 bg-[#009DBA1A] rounded-[10px] text-sm font-medium py-2 px-[12px] ">
            Design
          </p>
        </div>
      </div>

      <div className="w-[148px] h-10">
        <Button
          text={t('track product')}
          txtSize="text-base"
          txtColor="text-white"
          bg="bg-blue-500"
          link="/product-status"
        />
      </div>
    </div>
  );
};

export default OrderDetailsCrd;
