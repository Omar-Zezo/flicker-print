import { Flicker, Group9, Pdf, X } from "@/images/svg";
import Button from "@/utils/Button";
import { t } from "i18next";

const CommentsHistory = ({ setShowCommentHistory, langDetection }) => {
  return (
    <div
      className={`size-full fixed top-0 left-0 z-50 bg-black/80 ${
        langDetection === "ar" && "arabic-font"
      }`}
    >
      <div className="h-[90%] pt-[70px] pb-5 px-[36px] absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] rounded-[25px] bg-white">
        <div
          className="size-10 rounded-[11px] absolute right-5 top-5 cursor-pointer bg-[#E8EFF5] flex justify-center items-center"
          onClick={() => setShowCommentHistory(false)}
        >
          <img width={20} height={20} src={X} alt="x" />
        </div>
        <div className="size-full flex flex-col gap-8">
          <div className="w-[434px] mx-auto flex flex-col gap-5">
            <p className="text-[28px] text-center text-black-500 font-semibold">
              {t("comments History")}
            </p>
            <p className="text-base text-black-300 text-center font-medium">
              {t("here, you can view all your comments")}
            </p>
          </div>
          <div className="w-[444px] overflow-y-scroll p-2 flex flex-col gap-5">

            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="size-[48px] flex items-center justify-center rounded-full border border-black/10 bg-white">
                  <img width={15} height={18} src={Group9} alt="avtar" />
                </div>
                <img width={70} height={12} src={Flicker} alt="flicker" />
                <p className={`text-black-300 ${langDetection === "en" ? "ml-auto":"mr-auto"} mt-auto text-[12px] font-medium`}>
                  24-6-2024 / 12:30 PM
                </p>
              </div>
              <a
                href=""
                download={true}
                className="bg-[#23B5760D] flex gap-2 rounded-[12px] cursor-pointer p-2 border border-dashed border-[#23B576B2]"
              >
                <div className="size-10 flex items-center justify-center">
                  <img width={24} height={24} alt="pdf" src={Pdf} />
                </div>
                <div>
                  <p className="text-sm text-[#6C7176] font-medium">
                    {t('product photo')}
                  </p>
                  <p className="text-[10px] text-[#6C7176] font-medium">
                    {t('product photo')}
                  </p>
                </div>
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="size-[48px] text-black text-base font-medium flex items-center justify-center rounded-full border border-black/10 bg-white">
                  MA
                </div>
                <p className="text-base text-black font-semibold">Omar Ali</p>
                <p className={`text-black-300 ${langDetection === "en" ? "ml-auto":"mr-auto"} mt-auto text-[12px] font-medium`}>
                  24-6-2024 / 12:30 PM
                </p>
              </div>
              <p className="text-black-500 text-sm font-medium py-6 px-5 border border-black/15 rounded-[18px]">
              I need it Like thias
              </p>
              <a
                href=""
                download={true}
                className="bg-[#23B5760D] flex gap-2 rounded-[12px] cursor-pointer p-2 border border-dashed border-[#23B576B2]"
              >
                <div className="size-10 flex items-center justify-center">
                  <img width={24} height={24} alt="pdf" src={Pdf} />
                </div>
                <div>
                  <p className="text-sm text-[#6C7176] font-medium">
                    {t('product photo')}
                  </p>
                  <p className="text-[10px] text-[#6C7176] font-medium">
                    {t('product photo')}
                  </p>
                </div>
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="size-[48px] text-black text-base font-medium flex items-center justify-center rounded-full border border-black/10 bg-white">
                  OA
                </div>
                <p className="text-base text-black font-semibold">Mohamed Ali</p>
                <p className="text-black-300 ml-auto mt-auto text-[12px] font-medium">
                  24-6-2024 / 12:30 PM
                </p>
              </div>
              <p className="text-black-500 text-sm font-medium py-6 px-5 border border-black/15 rounded-[18px]">
              I need it Like thias
              </p>
              <a
                href=""
                download={true}
                className="bg-[#23B5760D] flex gap-2 rounded-[12px] cursor-pointer p-2 border border-dashed border-[#23B576B2]"
              >
                <div className="size-10 flex items-center justify-center">
                  <img width={24} height={24} alt="pdf" src={Pdf} />
                </div>
                <div>
                  <p className="text-sm text-[#6C7176] font-medium">
                    {t('product photo')}
                  </p>
                  <p className="text-[10px] text-[#6C7176] font-medium">
                    {t('product photo')}
                  </p>
                </div>
              </a>
            </div>

          </div>

          <div
            className="w-full h-[46px] shrink-0"
            onClick={() => setShowCommentHistory(false)}
          >
            <Button
              txtSize="text-sm"
              text={t("close")}
              txtColor="text-white"
              bg="bg-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsHistory;
