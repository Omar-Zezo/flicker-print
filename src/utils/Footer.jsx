import { Contact } from "@/components/footer/Contact";
import Social from "@/components/footer/Social";
import { footerHelp, ourCompany, paymentsFooter } from "@/constant";
import UseGetSettings from "@/hooks/UseGetSettings";
import {
  AppStore,
  BackgroundPattern,
  GooglePlay,
  Group13,
  Midjourney,
  NoiseTexture,
} from "@/images/imgs";
import { t } from "i18next";
import { Link } from "react-router-dom";

const Footer = ({ langDetection }) => {
  const settingsData = UseGetSettings()

  return (
    <footer
      className={`bg-header relative mt-20 pt-[60px] pb-10 ${
        langDetection === "ar" && "arabic-font"
      }`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <img
        src={Midjourney}
        alt="header-bg-1"
        className="rotate-[20] absolute right-0 bottom-0 mix-blend-color-dodge"
      />
      <img
        src={NoiseTexture}
        alt="noise-bg"
        className="absolute left-0 top-0 size-full object-cover"
      />
      <img
        src={BackgroundPattern}
        alt="pattern-bg"
        className="absolute left-0 top-0 size-full object-cover bg-blend-darken"
      />
      <div className="w-[90%] mx-auto flex flex-col items-center gap-[60px]">
        <div className="w-full">
          <img width={213} height={35} src={Group13} alt="logo-footer" />
        </div>
        <div className="w-full flex justify-between z-20">
          <div className="w-[324px] flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h5 className="text-white text-2xl font-semibold">
                {t("about Us")}
              </h5>
              <p className="text-white/70 w-[90%] text-base font-normal">
                {langDetection === "en"
                  ? settingsData?.general_description_en
                  : settingsData?.general_description_ar}
              </p>
            </div>
            <Social settingsData={settingsData} />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h5 className="text-white text-2xl font-semibold">
                {t("contact Us")}
              </h5>
            </div>
            <Contact settingsData={settingsData} />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h5 className="text-white text-2xl font-semibold">
                {t("let Us Help")}
              </h5>
            </div>
            <div className="flex flex-col gap-2">
              {footerHelp.map((link) => (
                <div key={link?.name}>
                  <Link
                    to={link.link}
                    className="flex gap-2 text-base text-white/70 hover:text-white duration-300 font-medium"
                  >
                    {t(link.name)}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h5 className="text-white text-2xl font-semibold">
                {t("our Company")}
              </h5>
            </div>
            <div className="flex flex-col gap-2">
              {ourCompany.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.link}
                    className="flex gap-2 text-base text-white/70 hover:text-white duration-300 font-medium"
                  >
                    {t(link.name)}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h5 className="text-white text-2xl font-semibold">
                {t("we accept")}
              </h5>
            </div>
            <div className="flex flex-col items-center gap-2">
              {paymentsFooter.map((pay) => (
                <div key={pay.name}>
                  <img width={65} height={40} src={pay.img} alt={pay.name}/>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`max-w-container gap-10 py-[42px] z-20 mt-[60px] px-[32px] rounded-[32px] bg-[#F4F7F94D] blur-[50]
          ${
            settingsData?.app_links_app_store === null &&
            settingsData?.app_links_google_play === null
              ? "hidden"
              : "flex"
          }
          `}
        >
          <p className="text-xl text-white font-semibold">
            {t("are you ready to use our services?")}
          </p>
          <div
            className={`w-[424px] h-[59px] ${
              langDetection === "en" ? "ml-auto" : "mr-auto"
            } flex justify-center gap-4`}
          >
            {settingsData?.app_links_app_store && (
              <div>
                <a href={settingsData?.app_links_app_store}>
                  <img width={204} height={59} src={AppStore} alt="app store" />
                </a>
              </div>
            )}
            {settingsData?.app_links_google_play && (
              <div>
                <a href={settingsData?.app_links_google_play}>
                  <img
                    width={204}
                    height={59}
                    src={GooglePlay}
                    alt="google play"
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
