import { t } from "i18next";
import { useState } from "react";
import PackagesCardsContainer from "./PackagesCardsContainer";
import Filter from "./Filter";

const PackagesContainer = ({ loaderStatus }) => {
const [priceRange, setpriceRange] = useState()


  //get price range from Filter
  const getPriceRange = (value) => {
    setpriceRange(value);
  };

  return (
    <div>
      <div className="mt-16 flex justify-between">
        <div className="w-[272px]">
          <h3 className="text-[32px] mb-5 text-black-500 font-medium">
            {t("filter Option")}
          </h3>
          <Filter
            getPriceRange={getPriceRange}
          />
        </div>
        <div className="w-[896px] flex flex-col gap-2 pt-8">
          <p className="text-xl text-black-300 font-medium">
          {t('showing')} 1-15 {t('of')} 214 {t('results')}
          </p>
          <PackagesCardsContainer
            
          />
        </div>
      </div>
    </div>
  );
};

export default PackagesContainer;