import React from "react";
import "./estrela.css";
import { Star } from "lucide-react";

const Estrela = ({ rating, setRating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <button key={index} onClick={() => setRating(index + 1)} className="star-btn">
          <Star
            size={50}
            style={{ color: index < rating ? "#8E9DCC" : "#ccc" }}
            fill={index < rating ? "currentColor" : "none"}
          />
        </button>
      ))}
    </div>
  );
};

export default Estrela;