import { Comment } from "@/images/imgs";
import { PaymentChecke } from "@/images/svg";
import { t } from "i18next";
import { Link } from "react-router-dom";


const NotificationMenu = ({notification, langDetection, setNotification}) => {
  return (
    <div
      className={`w-[385px] ${
        notification ? "flex" : "hidden"
      } flex-col justify-between pt-4 bg-white absolute top-10 ${langDetection === "en" ? "right-[-10px] after:right-[15px]" : "left-[-10px] after:left-[15px]"} rounded-[18px] cursor-default arrow-user`}
      dir={langDetection === "en" ? "ltr" : "rtl"}
    >
      <div className="flex items-center px-5 relative pb-3 border-b border-black/10">
        <p className="text-base text-black-500 font-medium">{t('notifications')}</p>
        <p className={`w-fit ${langDetection === "en" ? "ml-auto" : "mr-auto"} text-[13px] text-blue-500 font-medium cursor-pointer`}>
          {t('mark all as read')}
        </p>
      </div>
      <div className="flex flex-col mt-2">
        <div className="py-3 px-5 border-b border-black/10 hover:bg-[#23B5761A]">
            <Link to=""  className="flex gap-2">
            <img width={40} height={40} className="size-10" src={PaymentChecke} alt="payment-check"/>
            <div className="w-full flex flex-col gap-1">
                <div className="w-full flex items-center justify-between">
                    <p className="text-sm text-black-500 font-medium">Payment completed successfully.</p>
                    <small className="text-black-200 text-[10px]">2 min ago</small>
                </div>
                <p className="text-black-200 text-[10px] font-medium">
                our payment has been successfully completed. Thank you for choosing our service!
                </p>
            </div>
            </Link>
        </div>

        <div className="py-3 border-b px-5 border-black/10 hover:bg-[#23B5761A]">
            <Link to=""  className="flex gap-2">
            <img width={40} height={40} className="size-10" src={Comment} alt="comment"/>
            <div className="w-full flex flex-col gap-1">
                <div className="w-full flex items-center justify-between">
                    <p className="text-sm text-black-500 font-medium">New Comment on Order #062345</p>
                    <small className="text-black-200 text-[10px]">2 min ago</small>
                </div>
                <p className="text-black-200 text-[10px] font-medium">
                A new comment has been added to your order. Check the details to stay updated and respond if needed.
                </p>
            </div>
            </Link>
        </div>

        <div className="py-3 border-b px-5 border-black/10 hover:bg-[#23B5761A]">
            <Link to=""  className="flex gap-2">
            <img width={40} height={40} className="size-10" src={PaymentChecke} alt="payment-check"/>
            <div className="w-full flex flex-col gap-1">
                <div className="w-full flex items-center justify-between">
                    <p className="text-sm text-black-500 font-medium">Payment completed successfully.</p>
                    <small className="text-black-200 text-[10px]">2 min ago</small>
                </div>
                <p className="text-black-200 text-[10px] font-medium">
                our payment has been successfully completed. Thank you for choosing our service!
                </p>
            </div>
            </Link>
        </div>

      </div>
      <div className="py-4">
        <Link to="/notifications" className="block text-sm text-center text-blue-500 hover:underline font-medium"
        onClick={()=> setNotification(false)}
        >{t('view all notification')}</Link>
      </div>
    </div>
  );
};

export default NotificationMenu;
