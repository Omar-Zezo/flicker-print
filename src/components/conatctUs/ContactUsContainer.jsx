import { E_Mail, Location2, Phone1 } from "@/images/svg";
import ContactForm from "@/components/conatctUs/ContactForm";
import { t } from "i18next";
import UseGetSettings from "@/hooks/UseGetSettings";

const ContactUsContainer = ({lang}) => {
  const settingsData = UseGetSettings()

  return (
    <div className="flex justify-between">
    <div className="w-[552px] flex flex-col gap-10">
      <div className="flex flex-col gap-[16px]">
        <h3 className="text-[28px] text-black-500" font-500>
          {t('get in touch')}
        </h3>
        <p className="text-base text-black-200 font-medium">
          {t("we're here to support")}
        </p>
      </div>
      <div className="w-[296px] flex flex-col gap-[16px]">
        <div className="flex gap-2">
          <div className="p-1 bg-[#93C83D1A] rounded-[15px]">
            <img src={E_Mail} width={40} height={40} alt="e-mail" />
          </div>
          {
            settingsData?.communication_email && (
              <div className="flex flex-col gap-1">
            <p className="text-[14px] text-black-200 font-medium">
              {t('email')}
            </p>
            <p className="text-[14px] text-black-500 font-medium">
              {settingsData?.communication_email}
            </p>
          </div>
            )
          }
        </div>
        <div className="flex gap-2">
          <div className="p-1 bg-[#23B5761A] rounded-[15px]">
            <img src={Phone1} width={40} height={40} alt="e-mail" />
          </div>
          {
            settingsData?.communication_mobile && (
              <div className="flex flex-col gap-1">
              <p className="text-[14px] text-black-200 font-medium">
                {t('phone')}
              </p>
              <p className="text-[14px] text-black-500 font-medium">
                {settingsData?.communication_mobile}
              </p>
            </div>
            )
          }
        </div>
        <div className="flex gap-2">
          <div className="p-1 bg-[#009DBA1A] rounded-[15px]">
            <img src={Location2} width={40} height={40} alt="e-mail" />
          </div>
          {
            settingsData?.communication_address && (
              <div className="flex flex-col gap-1">
              <p className="text-[14px] text-black-200 font-medium">
                {t('location')}
              </p>
              <p className="text-[14px] text-black-500 font-medium">
                {settingsData?.communication_address}
              </p>
            </div>
            )
          }
        </div>
      </div>
      <div className="h-[500px] w-full rounded-[32px]">
        <iframe
          className="size-full rounded-[32px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722544.522375903!2d56.59094807749686!3d24.336131436733066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2z2KfZhNil2YXYp9ix2KfYqiDYp9mE2LnYsdio2YrYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1735805830136!5m2!1sar!2seg"
          allowFullScreen=""
          loading="lazy"
          title="safarymap"
        ></iframe>
      </div>
    </div>
    <div className="w-fit flex flex-col rounded-[32px] gap-10 border-2 border-section-gray bg-section-gray">
      <div className="flex flex-col items-center p-[32px] gap-[32px] w-[70%] mx-auto">
        <h3 className="text-black-500 text-[28px] font-medium">
          {t('send us a Message')}
        </h3>
        <p className="text-black-300 text-center font-medium">
          {t('your email address will not be published')}
        </p>
      </div>
      <ContactForm lang={lang}/>
    </div>
  </div>
  )
}

export default ContactUsContainer