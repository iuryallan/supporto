import React, { useState } from "react";
import "./avaliacao.css";
import Estrela from "./components/estrela";


const Avaliacao = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  return (
    <div className="container-review">
        <div className="card-review">
            <p className="info-text-review">
                Sua avaliação é anônima, mas pode aparecer publicamente sem que as pessoas saibam que foi você.
            </p>

            <Estrela rating={rating} setRating={setRating} />

            <label className="label-review">O que você tem a dizer deste profissional?</label>
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

export default Avaliacao;