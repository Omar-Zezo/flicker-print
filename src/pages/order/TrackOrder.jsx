import UseLangDetection from "@/hooks/UseLangDetection";
import { t } from "i18next";
import OrderCard from "@/components/order/orderCard";
import Navigation from "@/utils/Navigation";
import Pagination from "@/utils/Pagination";
import OrderStatus from "@/components/order/OrderStatus";

const TrackOrder = () => {
  const langDetection = UseLangDetection();

  const handlePageClick = () => null;

  return (
    <div
      className={`flex flex-col gap-8 ${
        langDetection === "ar" && "arabic-font"
      }`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <div className="container pt-[112px] flex flex-col gap-8">
        <Navigation current="tracking Order" />
        <div className="w-full mx-auto flex flex-col gap-20">
          <div className="flex gap-5">
            <div className="w-full bg-field p-5 rounded-[20px]">
              <div className="w-[779px] flex flex-col gap-5">
                <p className="text-xl text-black-500 font-semibold">
                  {t("orders")} <span className="text-black-200">(5)</span>
                </p>
                <div className="flex flex-col gap-5">
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                </div>
                <Pagination
                  current_page={1}
                  total={50}
                  handlePageClick={handlePageClick}
                />
              </div>
            </div>
            <OrderStatus langDetection={langDetection} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
