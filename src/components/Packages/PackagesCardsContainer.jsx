import React from "react";
import PackageCard from "./PackageCard";
import Pagination from "@/utils/Pagination";

const PackagesCardsContainer = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex gap-2 flex-wrap">
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>
      <Pagination current_page={1} total={50} handlePageClick={() => null} />
    </div>
  );
};

export default PackagesCardsContainer;
