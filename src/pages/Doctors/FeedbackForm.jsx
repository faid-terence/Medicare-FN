import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  return (
    <form action="">
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          How would you rate the overall Experience? *
        </h3>
        <div>
          {[...Array(5).keys()].map((index) => {
            const starRating = index + 1;
            return (
              <button key={starRating} type="button" onClick={() => handleRatingClick(starRating)}>
                <span>
                  {starRating <= rating ? <AiFillStar color="#FFD700" /> : <AiFillStar />}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </form>
  );
};

export default FeedbackForm;
