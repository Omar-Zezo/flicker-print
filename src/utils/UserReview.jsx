import RatingStars from "@/utils/RatingStars";
import TimeAgoComponentAr from "./TimeAgoComponentAr";
import TimeAgoComponentEn from "./TimeAgoComponentEn";
import UseLangDetection from "@/hooks/UseLangDetection";


const UserReview = ({ userReview }) => {

  const lang = UseLangDetection()
  
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <p className="text-black-500 text-xl font-medium">
            {userReview?.user?.name}
          </p>
          <p className="text-black-200 text-base font-medium">
            {
            lang === "en" ? (
              <TimeAgoComponentEn timestamp={1704048000000} />
            ):(
              <TimeAgoComponentAr timestamp={1704048000000} />
            )
            }
          </p>
        </div>
        <div className="flex gap-1">
        <RatingStars rating={userReview?.rate}/>
        </div>
      </div>
      <div>
        <p className="text-base text-black-300 font-medium">
          {userReview?.comment}
        </p>
      </div>
    </div>
  );
};

export default UserReview;
