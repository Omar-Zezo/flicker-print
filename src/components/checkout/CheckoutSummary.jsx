import { t } from "i18next";
import { Link } from "react-router-dom";

const CheckoutSummary = () => {

  return (
    <div className="h-fit flex flex-col gap-5 bg-[#F4F7F9] rounded-[20px] p-5 shadow-sm">
      <div className="w-[321px]">
        <p className="text-xl text-black-500 font-semibold">
          {t("payment Summary")}
        </p>
      </div>

      <div className="flex flex-col gap-5 pb-5 border-b border-dashed border-[#E8E8E8]">
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">
            {t('number Of Items')}
          </p>
          <p className="text-base text-black-500 font-medium">5</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">
          {t('order Price')}
          </p>
          <p className="text-base text-black-500 font-medium">$240</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">{t('fast Delivery')}</p>
          <p className="text-base text-[#D90202] font-medium">50$</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">{t('delivery')}</p>
          <p className="text-base text-[#D90202] font-medium">10$</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base text-black-300 font-medium">{t('total Order')}</p>
          <p className="text-base text-black-500 font-medium">300$</p>
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
      </div>
      <div className="flex justify-between gap-2">
        <button type="submit" className="w-fit px-[37px] h-[46px] flex items-center justify-center bg-blue-500 rounded-[42px] text-sm text-white font-medium">
        {t('confirm Payment')}
        </button>
        <Link to="/cart" className="w-fit px-[27px] h-[46px] flex items-center justify-center border border-blue-500 rounded-[42px] text-sm text-blue-500 font-medium">
          {t('cancel')}
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSummary;
