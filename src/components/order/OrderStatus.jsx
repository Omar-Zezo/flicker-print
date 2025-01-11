import { t } from "i18next";

const OrderStatus = ({langDetection}) => {

  return (
    <div className="h-fit flex flex-col gap-5 bg-[#F4F7F9] rounded-[20px] p-5 shadow-sm">
      <div className="w-[321px]">
        <p className="text-xl text-black-500 font-semibold">
          {t("order Status")}
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">
            {t('all')}
          </p>
          <p className="text-base text-black-500 font-medium">5 {t('orders')}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">
          {t('design')}
          </p>
          <p className="text-base text-black-500 font-medium">2 {t('orders')}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">{t('print')}</p>
          <p className="text-base text-black-500 font-medium">3 {t('orders')}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">{t('on Delivery')}</p>
          <p className="text-base text-black-500 font-medium">_</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">{t('completed')}</p>
          <p className="text-base text-black-500 font-medium">4 {t('orders')}</p>
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
      </div>
    </div>
  );
};

export default OrderStatus;
