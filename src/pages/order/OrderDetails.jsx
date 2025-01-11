import UseLangDetection from "@/hooks/UseLangDetection";
import { t } from "i18next";
import Pagination from "@/utils/Pagination";
import OrderDetailsCrd from "@/components/order/OrderDetailsCrd";
import OrderDetailsStatus from "@/components/order/OrderDetailsStatus";
import OrderDetailsSummary from "@/components/order/OrderDetailsSummary";
import OrderInfo from "@/components/order/OrderInfo";
import { Back } from "@/images/svg";
import Navigation3 from "@/utils/Navigation3";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const langDetection = UseLangDetection();

  const handlePageClick = ()=> null
  const navigate = useNavigate()

  return (
    <div
      className={`flex flex-col gap-8 ${
        langDetection === "ar" && "arabic-font"
      }`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <div className="container pt-[112px] flex flex-col gap-8">
        <Navigation3  prev={{name: "tracking Order", link: "/track-order"}} current="order Details" />
        <div className="w-full mx-auto flex flex-col gap-20">
          <div className="flex gap-5">
            <div className="bg-field p-5 rounded-[20px]">
            <div className="w-[779px] h-fit flex flex-col gap-5">
              <div className="flex items-center gap-5">
              <img width={13} height={6} src={Back} alt="back" className="cursor-pointer" onClick={()=> navigate(-1)}/>
              <p className="text-xl text-black-500 font-semibold">
                {t("orders")} <span className="text-black-200">(5)</span>
              </p>
              </div>
              <div className="flex flex-col gap-5">
                <OrderDetailsCrd />
                <OrderDetailsCrd />
                <OrderDetailsCrd />
                <OrderDetailsCrd />
              </div>
              <Pagination
                current_page={1}
                total={50}
                handlePageClick={handlePageClick}
              />
            </div>
            </div>
            <div className="flex flex-col gap-5">
            <OrderDetailsStatus langDetection={langDetection} />
            <OrderDetailsSummary langDetection={langDetection} />
            <OrderInfo langDetection={langDetection}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
