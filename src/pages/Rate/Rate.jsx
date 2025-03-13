import React, { useState } from "react";
import "./rate.css";
import StarRating from "../../components/star-rating/rating";


const EvaluationPage = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  return (
    <div className="container">
        <div className="card">
            <p className="info-text">
                Sua avaliação é anônima, mas pode aparecer publicamente sem que as pessoas saibam que foi você.
            </p>

            <StarRating rating={rating} setRating={setRating} />

            <label className="label">O que você tem a dizer deste profissional?</label>
            <textarea
            className="review-textarea"
            placeholder="Escreva sua avaliação aqui..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            />

        <button onClick className="submit-btn">
        Enviar avaliação
        </button>
      </div>
    </div>
  );
};

export default EvaluationPage;
