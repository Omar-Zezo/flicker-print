import { ArrowBottom, ArrowTop } from "@/images/svg";
import React, { useEffect, useState } from "react";
import FilterOption from "./FilterOption";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Spiner from "@/utils/Spiner";
import { t } from "i18next";

const Filter = ({SubCategoriesList, loaderStatus, getValueFromFilter, getPriceRange}) => {
  const [showSubcategories, setShowSubCategories] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [showMaterial, setShowMaterial] = useState(false);
  const [childValue, setChildValue] = useState('');

  const [value, setValue] = useState([30, 60]);

  //get subcategory id from child
  const getValueFromChild = (value) => {
    setChildValue(value);
  };


  useEffect(()=>{
    getValueFromFilter(childValue)
  },[childValue])

  useEffect(()=>{
    getPriceRange(value)
  },[value])



  return (
    <div className="flex flex-col gap-5">
      <div className={`flex w-full flex-col gap-5 rounded-[18px] py-5 px-3 border border-[#F4F7F9]`}>
        <div
          className={`flex justify-between cursor-pointer`}
          onClick={() => setShowSubCategories(!showSubcategories)}
        >
          <h4 className="text-xl text-black-500 font-medium">{t('subcategory')}</h4>
          <img
            width={40}
            height={40}
            src={showSubcategories ? ArrowTop : ArrowBottom}
            alt="arrow-top"
          />
        </div>
        <form
          className={`flex-col gap-5 h-[400px] overflow-y-auto ${showSubcategories ? "flex" : "hidden"}`}
        >
          {loaderStatus ? (
            <Spiner />
          ) : SubCategoriesList ? (
             SubCategoriesList.map((option) => (
              <FilterOption
              getValueFromChild={getValueFromChild}
              key={option.id}
              option={option}
            />
            ))
          ) : null}
        </form>
      </div>

      <div
        className={`w-full flex flex-col gap-5 rounded-[18px] py-5 px-3 border border-[#F4F7F9]`}
      >
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setShowPrice(!showPrice)}
        >
          <h4 className="text-xl text-black-400 font-medium">{t('price')}</h4>
          <img
            width={40}
            height={40}
            src={showPrice ? ArrowTop : ArrowBottom}
            alt="arrow-top"
          />
        </div>
        <form className={`${showPrice ? "flex" : "hidden"} flex-col gap-5`}>
        <RangeSlider value={value} onInput={setValue} />
        </form>
      </div>

      <div className="w-full flex flex-col gap-5 rounded-[18px] py-5 px-3 border border-[#F4F7F9]">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setShowColors(!showColors)}
        >
          <h4 className="text-xl text-black-400 font-medium">{t('colors')}</h4>
          <img
            width={40}
            height={40}
            src={showColors ? ArrowTop : ArrowBottom}
            alt="arrow-top"
          />
        </div>
        <form className={`${showColors ? "flex" : "hidden"} flex-col gap-5`}>
          <p>Colors</p>
        </form>
      </div>

      <div className="w-full flex flex-col gap-5 rounded-[18px] py-5 px-3 border border-[#F4F7F9]">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setShowMaterial(!showMaterial)}
        >
          <h4 className="text-xl text-black-400 font-medium">{t('material')}</h4>
          <img
            width={40}
            height={40}
            src={showMaterial ? ArrowTop : ArrowBottom}
            alt="arrow-top"
          />
        </div>
        <form className={`${showMaterial ? "flex" : "hidden"} flex-col gap-5`}>
          <p>Material</p>
        </form>
      </div>
    </div>
  );
};

export default Filter;
