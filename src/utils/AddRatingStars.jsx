import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const AddRatingStars = () => {
const [rateSatars, setRatestars] = useState(null)
  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
            <label key={index} className="cursor-pointer mr-4 last-of-type:mr-0">
            <input
              className="hidden"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={()=> setRatestars(ratingValue)}
            />
            <FontAwesomeIcon icon={faStar} size="3x" color={ratingValue <= rateSatars ? "#93C83D":"#d9f5ad"} />
          </label>
        );
      })}
    </div>
  );
};

export default AddRatingStars;
