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
      <div className={`container mx-auto flex gap-5 mt-20 pt-20`}>
        <div className="w-1/2 pt-10 z-10 flex shrink-0 flex-col gap-8">
          <h2 className="text-white text-5xl max-md:text-base leading-[72px] font-medium">
            {t('elevate Your Brand')}
            {
              langDetection === "en" && (<span className="text-blue-500">{t('print Services')}</span>) 
            }
          </h2>
          <div className="flex flex-col gap-8">
            <p className="w-[90%] text-base max-md:text-[10px] font-medium text-[#E6E6E6]">
              {t('boost our brand with our premium')}
            </p>
            <div className="w-fit">
              <Button
                text={t('shop now')}
                link="/"
                bg="bg-blue-500"
                txtColor="text-white"
                arrow={true}
                txtSize="text-base max-md:text-[12px]"
                pX="px-8 max-md:px-2"
                pY="py-4 max-md:py-1"
                weight="font-medium"
              />
            </div>
            <div className="flex gap-5 mt-10">
              <div className="flex flex-col gap-5">
                <span className="text-[28px] max-md:text-base font-medium text-white">3000+</span>
                <p className="text-[#B5B5B5] text-2xl max-md:text-[12px] font-medium">{t('unique Styles')}</p>
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-[28px] max-md:text-base font-medium text-white">20+</span>
                <p className="text-[#B5B5B5] text-2xl max-md:text-[12px] font-medium">{t('category')}</p>
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-[28px] max-md:text-base font-medium text-white">1200+</span>
                <p className="text-[#B5B5B5] text-2xl max-md:text-[12px] font-medium">{t('costumed')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-1/2 max-md:hidden absolute ${langDetection === "en" ? "right-0":"left-0"}`}>
        <HSlider langDetection={langDetection}/>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;