import UseLangDetection from "@/hooks/UseLangDetection";
import { CartImg } from "@/images/imgs";
import { Back } from "@/images/svg";
import Button from "@/utils/Button";
import { t } from "i18next";
import { Link, useNavigate } from "react-router-dom";
import DesignUnderReview from "../../components/order/DesignUnderReview";
import DesignConfirm from "../../components/order/DesignConfirm";
import DesignAfterComment from "../../components/order/DesignAfterComment";
import DesignInProduction from "../../components/order/DesignInProduction";

const ProductDesignStatus = () => {
  const langDetection = UseLangDetection();

  const navigate = useNavigate();

  const DesignStatus = "under review"

  return (
    <div
      className={`flex flex-col gap-8 ${
        langDetection === "ar" && "arabic-font"
      }`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <div className="container pt-[112px] flex flex-col gap-8">
        <div className="flex gap-2 text-base font-medium">
          <Link to="/">{t("home")}</Link>
          <span>/</span>
          <Link to={"/track-order"}>{t("tracking Order")}</Link>
          <span>/</span>
          <Link to="/order-details" className="text-black-500 cursor-pointer">
            {t("order Details")}
          </Link>
          <span>/</span>
          <p className="text-black-200">{t('product Status')}</p>
        </div>

        <div className="w-full mx-auto flex flex-col gap-20">
          <div className="h-fit flex flex-col gap-5 bg-field p-5 rounded-[20px]">
            <div className="flex items-center gap-5">
              <img
                width={13}
                height={6}
                src={Back}
                alt="back"
                className="cursor-pointer"
                onClick={() => navigate(-1)}
              />
              <p className="text-xl text-black-500 font-semibold">
                {t("order Details")}
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-1/3 p-4 flex items-center gap-2 bg-white border-[1.5px] border-blue-500 rounded-[20px]">
                <div className="size-[64px] rounded-[20px] text-[32px] text-blue-500 font-medium py-2 px-4 border border-black/10">
                  01
                </div>
                <div className="w-[120px] flex flex-col">
                  <p className="text-black-500 text-base font-semibold">
                    {t('design')}
                  </p>
                  <p className="text-black-200 text-[12px] font-medium">
                    {t('expected Time')} 3 {t('Days')}
                  </p>
                </div>
              </div>

              <div className={`w-1/3 p-4 flex items-center gap-2 bg-white rounded-[20px] ${DesignStatus === "production" && "border border-green-500"}`}>
                <div className={`size-[64px] rounded-[20px] text-[32px] ${DesignStatus === "production" ? "text-green-500":"text-black-100"} font-medium py-2 px-4 border border-black/10`}>
                  02
                </div>
                <div className="w-[120px] flex flex-col">
                  <p className="text-black-200 text-base font-semibold">
                    {t('production')}
                  </p>
                  <p className="text-black-200 text-[12px] font-medium">
                    {t('expected Time')} 3 {t('Days')}
                  </p>
                </div>
              </div>

              <div className="w-1/3 p-4 flex items-center gap-2 bg-white rounded-[20px]">
                <div className="size-[64px] rounded-[20px] text-[32px] text-black-100 font-medium py-2 px-4 border border-black/10">
                  D
                </div>
                <div className="w-[120px] flex flex-col">
                  <p className="text-black-100 text-base font-semibold">
                    {t('completed')}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex mt-5">
              <div className="flex flex-col gap-5">
                <div className="w-[315px] flex">
                  <div className="size-[100px] bg-white p-1 rounded-[20px]">
                    <img
                      src={CartImg}
                      alt="img"
                      className="size-full object-cover rounded-[20px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1 px-1">
                    <h3 className="text-black-500 text-base font-semibold">
                      Standard Business Cards
                    </h3>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-black-200 font-medium">
                        {t("color")}:
                      </p>
                      <p className="text-sm text-black-500 font-medium">Red</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-black-200 font-medium">
                        {t("type")}:
                      </p>
                      <p className="text-sm text-black-500 font-medium">
                        Standerd
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[148px] h-10">
                  <Button
                    txtSize="text-sm"
                    text={t('contact Us')}
                    txtColor="text-white"
                    bg="bg-blue-500"
                  />
                </div>
              </div>
              {
                DesignStatus === "under review" ? (
                  <DesignUnderReview/>
                ):(
                  DesignStatus === "confirm design" ? (
                    <DesignConfirm langDetection={langDetection}/>
                  ):(
                    DesignStatus === "recive comment" ? (
                      <DesignAfterComment/>
                    ):(
                      <DesignInProduction/>
                    )
                  )
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDesignStatus;
