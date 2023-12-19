import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const maxStar = 5;
export const ReviewStars = ({ avgRating = maxStar }) => {
  const fullRating = Math.floor(avgRating); // natural whole number
  const isHalfStar = avgRating > fullRating; //true or false
  const emptyStar = isHalfStar
    ? maxStar - fullRating - 1
    : maxStar - fullRating;

  return (
    <div className="mb-3">
      <span>
        {Array(fullRating)
          .fill("")
          .map((it, i) => (
            <FaStar className="text-warning" />
          ))}
        {isHalfStar && <FaStarHalfAlt className="text-warning" />}
        {Array(emptyStar)
          .fill("")
          .map((it, i) => (
            <FaRegStar className="text-warning" />
          ))}
        / {avgRating}
        {/* <FaStar className="text-warning" />
        <FaStar className="text-warning" />
        <FaStar className="text-warning" />
        <FaStar className="text-warning" />
        <FaStarHalfAlt className="text-warning" /> */}
      </span>
    </div>
  );
};
