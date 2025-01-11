import { t } from "i18next";

const OrderInfo = ({langDetection}) => {

  return (
    <div className="w-full h-fit flex flex-col gap-5 bg-[#F4F7F9] rounded-[20px] p-5 pb-0 shadow-sm">
      <div className="">
        <p className="text-xl text-black-500 font-semibold">
          {t("order Info")}
        </p>
      </div>

      <div className="w-[321px] flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-black-300 font-medium">
            {t('delivery Address')}
          </p>
          <p className="text-base text-black-500 font-semibold">Egypt,Giza, 2-Bader Alam Street</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm text-black-300 font-medium">
            {t('phone Number')}
          </p>
          <p className="text-base text-black-500 font-semibold">+20 1098208937</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm text-black-300 font-medium">
            {t('payment Method')}
          </p>
          <p className="text-base text-black-500 font-semibold">Visa</p>
        </div>

        

      </div>
      <div className="flex flex-col gap-[12px]">
      </div>
    </div>
  );
};

export default OrderInfo;
