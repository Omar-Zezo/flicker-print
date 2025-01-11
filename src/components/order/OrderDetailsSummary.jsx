import { t } from "i18next";

const OrderDetailsSummary = ({langDetection}) => {

  return (
    <div className="w-full h-fit flex flex-col gap-5 bg-[#F4F7F9] rounded-[20px] p-5 pb-0 shadow-sm">
      <div className="">
        <p className="text-xl text-black-500 font-semibold">
          {t("summary")}
        </p>
      </div>

      <div className="w-[321px] flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">
            {t('order ID')}
          </p>
          <p className="text-base text-black-500 font-medium">#28739098</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">
          {t('status')}
          </p>
          <p className="text-base text-blue-500 font-medium">{t('design')}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">{t('date')}</p>
          <p className="text-base text-black-500 font-medium">May 7 2024</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">{t('number Of Items')}</p>
          <p className="text-base text-black-500 font-medium">3 {t('items')}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">{t('fast Delivery')}</p>
          <p className="text-base text-black-500 font-medium">50$</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">{t('delivery')}</p>
          <p className="text-base text-black-500 font-medium">$10</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">{t('total Order')}</p>
          <p className="text-base text-black-500 font-medium">300$</p>
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
      </div>
    </div>
  );
};

export default OrderDetailsSummary;
