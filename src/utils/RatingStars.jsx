import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RatingStars = ({rating}) => {

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              className="hidden"
              type="radio"
              name="rating"
              value={ratingValue}
            />
            <FontAwesomeIcon icon={faStar} size="xl" color={ratingValue <= rating ? "#93C83D":"#d9f5ad"} />
          </label>
        );
      })}
    </div>
  );
};

export default RatingStars;
