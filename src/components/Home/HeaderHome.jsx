import { BackgroundPattern, Midjourney, NoiseTexture } from "@/images/imgs";
import Button from "@/utils/Button";
import { t } from "i18next";
import HSlider from "./HSlider";

const HeaderHome = ({ langDetection }) => {
  return (
    <header className="w-full relative h-[787px] bg-header overflow-hidden">
      <img
        src={Midjourney}
        alt="header-bg-1"
        className="absolute right-0 bottom-0 mix-blend-screen"
      />
      <img
        src={NoiseTexture}
        alt="noise-bg"
        className="absolute left-0 top-0 size-full object-cover"
      />
      <img
        src={BackgroundPattern}
        alt="pattern-bg"
        className="absolute left-0 top-0 size-full object-cover"
      />
      <div className={`container left-1/2 translate-x-[-50%] flex top-[80px] absolute pt-20`}>
        <div className="w-1/2 pt-10 flex shrink-0 flex-col gap-8">
          <h2 className="text-white text-5xl leading-[72px] font-medium">
            {t('elevate Your Brand')}
            {
              langDetection === "en" && (<span className="text-blue-500">{t('print Services')}</span>) 
            }
          </h2>
          <div className="flex flex-col gap-8">
            <p className="w-[90%] text-base font-medium text-[#E6E6E6]">
              {t('boost our brand with our premium')}
            </p>
            <div className="w-[177px] h-14">
              <Button
                text={t('shop now')}
                link="/"
                bg="bg-blue-500"
                txtColor="text-white"
                arrow={true}
                txtSize="text-base"
              />
            </div>
            <div className="flex gap-5 mt-10">
              <div className="flex flex-col gap-5">
                <span className="text-[28px] font-medium text-white">3000+</span>
                <p className="text-[#B5B5B5] text-2xl font-medium">{t('unique Styles')}</p>
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-[28px] font-medium text-white">20+</span>
                <p className="text-[#B5B5B5] text-2xl font-medium">{t('category')}</p>
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-[28px] font-medium text-white">1200+</span>
                <p className="text-[#B5B5B5] text-2xl font-medium">{t('costumed')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-1/2 relative ${langDetection === "en" ? "left-[76px]":"left-[-75px]"} 2xl:left-[8%]`}>
        <HSlider langDetection={langDetection}/>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;