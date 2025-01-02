import { useState } from "react";

const FilterOption = ({option, index, getValueFromChild}) => {
const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className={`w-[193px] hover:w-[230px] duration-300 px-5 rounded-[50px] border  hover:bg-blue-50 hover:border-blue-100 
      ${index === selectedOption ? "bg-blue-50 border-blue-100": "bg-transparent border-black/10"}`}
    >
      <div className="w-[161px] h-full mx-auto cursor-pointer flex items-center gap-2">
        <input
          id={option.id}
          name="subcategory"
          type="radio"
          className="size-5 cursor-pointer accent-blue-500"
          value={option.id}
          onChange={()=> {
            getValueFromChild(option.id)
            setSelectedOption(option.index)
          }}
        />
        <label
          htmlFor={option.id}
          className="text-sm text-black-400 py-5 font-medium cursor-pointer"
        >
          {option.name}
        </label>
      </div>
    </div>
  );
};

export default FilterOption;
