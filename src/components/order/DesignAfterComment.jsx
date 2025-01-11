import { Check2, Dashboard } from "@/images/svg";
import { useState } from "react";
import CommentsHistory from "./CommentsHistory";
import { t } from "i18next";

const DesignAfterComment = () => {
    const [showCommentHistory, setShowCommentHistory] = useState(false)
  return (
    <div className="w-2/3 py-6 flex justify-center items-start  ml-auto rounded-[20px] bg-white">
      <div className="w-[423px] flex flex-col items-center gap-4">
        <img src={Check2} width={96} height={96} alt="Time" />
        <p className="text-base text-black-300 text-center font-medium">
        {t("your comment has been submitted successfully")}
        </p>
        <div className="flex gap-2">
        <div className="w-[166px] h-[37px] p-2 flex items-center justify-center bg-[#23B5761A] text-sm text-blue-500 font-medium rounded-[10px]">
          {t('expected Time')}: 3{t('h')}
        </div>
        <div className="w-[166px] h-[37px] p-2 flex gap-2 items-center justify-center border border-blue-500 rounded-[10px] cursor-pointer"
        onClick={()=> setShowCommentHistory(true)}
        >
            <img src={Dashboard} alt="" width={24} height={24}/>
            <p className="text-sm text-blue-500 font-medium">{t('comments')}</p>
        </div>
        </div>
      </div>
      {showCommentHistory && (<CommentsHistory setShowCommentHistory={setShowCommentHistory}/>)}
    </div>
  );
};

export default DesignAfterComment;
