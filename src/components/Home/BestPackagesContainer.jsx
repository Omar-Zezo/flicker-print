import Button from "@/utils/Button";
import Spiner from "@/utils/Spiner";
import { useSelector } from "react-redux";
import { t } from "i18next";
import PackageCard from "../Packages/PackageCard";
import { getPackagesHome } from "@/store/slices/packages/packagesHome";
import UseFetchData from "@/hooks/UseFetchData";

const BestPackagesContainer = ({ langDetection }) => {
  const { data } = useSelector((state) => state.packagesHome);
  const { fetchedData, loaderStatus } = UseFetchData(data, getPackagesHome);

  return (
    <div className={`flex flex-col gap-10 ${fetchedData?.length > 0 ? "flex" : "hidden"}`}>
      <div className="flex items-center justify-between">
        <h2
          className={`text-[32px] pb-1 relative text-black-500 font-semibold title-line ${
            langDetection === "en" ? "after:left-0" : "after:right-0"
          }`}
        >
          {t("best Packages")}
        </h2>
        <div className="w-[220px] h-[56px]">
          <Button
            text={t("view All Products")}
            bg={"bg-blue-500"}
            txtColor={"text-white"}
            link={""}
            arrow={true}
          />
        </div>
      </div>
      <div className="flex gap-4">
        {loaderStatus ? (
          <Spiner />
        ) : fetchedData?.length > 0 ? (
          fetchedData.map((packg) => <PackageCard key={packg.id} packg={packg} />)
        ) : (
          null
        )}
      </div>
    </div>
  );
};

export default BestPackagesContainer;
