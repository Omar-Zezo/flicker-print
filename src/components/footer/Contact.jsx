import { Location, Mail, Phone } from "@/images/svg";

export const Contact = ({settingsData}) => {
  return (
    <div className="flex flex-col gap-2">
      {
        settingsData?.communication_mobile && (
          <div className="flex gap-2">
          <img width={24} height={24} src={Phone} alt="phone" />
          <p className="text-base text-white/70 font-medium">{settingsData?.communication_mobile}</p>
          </div>
        )
      }

      {
        settingsData?.communication_email && (
          <div className="flex gap-2">
          <img width={24} height={24} src={Mail} alt="phone" />
          <p className="text-base text-white/70 font-medium">{settingsData?.communication_email}</p>
          </div>
        )
      }


      {
        settingsData?.communication_address && (
          <div className="flex gap-2">
          <img width={24} height={24} src={Location} alt="phone" />
          <p className="text-base text-white/70 font-medium">{settingsData?.communication_address}</p>
          </div>
        )
      }

    </div>
  );
};
