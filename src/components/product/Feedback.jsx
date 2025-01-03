import { X } from "@/images/svg";
import AddRatingStars from "@/utils/AddRatingStars";
import Button from "@/utils/Button";
import { t } from "i18next";

const Feedback = ({ setShowFeedback, langDetection }) => {
  return (
    <div
      className={`size-full fixed top-0 left-0 z-50 bg-black/80 ${
        langDetection === "ar" && "arabic-font"
      }`}
    >
      <div className="w-[508px] py-5 absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] rounded-[25px] bg-white">
        <div
          className="size-10 rounded-[11px] absolute right-5 top-5 cursor-pointer bg-[#E8EFF5] flex justify-center items-center"
          onClick={() => setShowFeedback(false)}
        >
          <img width={20} height={20} src={X} alt="x" />
        </div>
        <div className="size-full px-8 flex flex-col gap-3 items-center justify-center">
          <div className="size-full flex flex-col gap-8">
            <div className="flex flex-col gap-5 pb-5 border-b border-[#E9EFF5]">
              <p className="w-[70%] mx-auto text-[28px] text-center text-black-500 font-semibold">
                {t("add Feedback")}
              </p>
              <p className="text-sm text-black-200 text-center font-medium">
                {t('please rate your experience below')}
              </p>
            </div>
            <div>
              <form className="size-full flex flex-col gap-8 items-center">
                <AddRatingStars />
                <textarea
                  className="text-sm text-black-200 font-normal outline-none h-[208px] w-full resize-none px-[32px] py-[25px] border border-[#E9EFF5] rounded-[18px] border-black/15"
                  placeholder={t('enter Your Comment Here')}
                ></textarea>
              </form>
            </div>
            <div className="flex justify-center gap-5">
              <div
                className="w-[214px] h-[46px]"
                onClick={() => setShowFeedback(false)}
              >
                <Button
                  txtSize="text-sm"
                  text={t("cancel")}
                  txtColor="text-blue-500"
                  border={true}
                  borderColor="border-blue-500"
                />
              </div>
              <div className="w-[214px] h-[46px]">
                <Button
                  txtSize="text-sm"
                  text={t("submit")}
                  bg="bg-blue-500"
                  txtColor="text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
