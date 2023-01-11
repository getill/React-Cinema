import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const Form = () => {
  const [filmData, setFilmData] = useState([]);
  const [inputSearch, setInputSearch] = useState("code");
  const [orderBy, setOrderBy] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query= 
          ${inputSearch}
          &language=fr-FR`
      )
      .then((res) => setFilmData(res.data.results));
  }, [inputSearch]);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Tapez le nom d'un film"
            id="search-input"
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <input type="submit" value="Rechercher" placeholder="Envoyer" />
        </form>
        <div className="btn-sort-container">
          <div
            className="btn-sort"
            id="goodToBad"
            onClick={() => {
              setOrderBy("goodToBad");
            }}
          >
            Top <span>→</span>
          </div>
          <div
            className="btn-sort"
            id="badToGood"
            onClick={() => {
              setOrderBy("badToGood");
            }}
          >
            Flop
            <span>→</span>
          </div>
        </div>
      </div>
      <div className="result">
        {filmData
          .sort((a, b) => {
            if (orderBy === "goodToBad") {
              return b.vote_average - a.vote_average;
            } else if (orderBy === "badToGood") {
              return a.vote_average - b.vote_average;
            }
          })

          .map((film) => (
            <Card key={film.id} film={film} />
          ))}
      </div>
    </div>
  );
};

export default Form;
