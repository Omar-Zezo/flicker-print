import Button from "@/utils/Button";
import Spiner from "@/utils/Spiner";
import { t } from "i18next";
import PackageCard from "./PackageCard";

const SimilarItems = ({langDetection, similarPackages, loaderStatus}) => {

  return (
    <div className={`${similarPackages?.length > 0 ? "flex":"hidden"} flex-col gap-10`}>
      <div className="flex items-center justify-between">
        <h2 className={`text-[32px] pb-1 relative text-black-500 font-semibold title-line ${langDetection === "en" ? "after:left-0":"after:right-0"}`}>
        {t('discover Similar Packages')}
        </h2>
        <div className="w-[220px] h-[56px]">
          <Button
            text={t('view All Packages')}
            bg={"bg-blue-500"}
            txtColor={"text-white"}
            link={""}
            arrow={true}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
      {loaderStatus ? (
          <Spiner />
        ) : similarPackages?.length > 0 ? (
            similarPackages.map((packag) => (
            <PackageCard key={packag.id} packag={packag} />
          ))
        ) : (
          null
        )}
      </div>
    </div>
  );
};

export default SimilarItems;
