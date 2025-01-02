import { Facebook, Instagram, Linkedin, Telegram, Twitter } from "@/images/svg";

const Social = ({settingsData}) => {
  return (
    <div className="flex gap-4">

    <div>
      {
        settingsData?.communication_facebook && (
        <a href={settingsData?.communication_facebook} target="_blank">
          <img width={24} height={24} src={Facebook} alt="facebook" />
        </a>
        )
      }
    </div>

    <div>
      {
        settingsData?.communication_twitter && (
        <a href={settingsData?.communication_twitter} target="_blank">
          <img width={24} height={24} src={Twitter} alt="twitter" />
        </a>
        )
      }
    </div>

    <div>
      {
        settingsData?.communication_instagram && (
          <a href={settingsData?.communication_instagram} target="_blank">
          <img width={24} height={24} src={Instagram} alt="twitter" />
          </a>
        )
      }
    </div>

    <div>
      {
        settingsData?.communication_linkedin && (
          <a href={settingsData?.communication_linkedin} target="_blank">
          <img width={24} height={24} src={Linkedin} alt="twitter" />
          </a>
        )
      }
    </div>

    <div>
      {
        settingsData?.communication_telegram && (
          <a href={settingsData?.communication_telegram} target="_blank">
          <img width={24} height={24} src={Telegram} alt="twitter" />
          </a>
        )
      }
    </div>

  </div>
  )
}

export default Social