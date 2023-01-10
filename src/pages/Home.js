import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import axios from "axios";

const Home = () => {
  const [filmData, setFilmData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=" +
          inputSearch +
          "&language=fr-FR"
      )
      .then((res) => setFilmData(res.data.results));
  }, [inputSearch]);
  return (
    <div>
      <Header />
      <div className="form-component">
        <form action="" className="form-container">
          <input
            type="text"
            placeholder="Tapez le nom d'un film"
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <input type="submit" placeholder="Rechercher" />
        </form>
      </div>
      <div className="result">
        {filmData &&
          filmData
            // Le slice permet ici de limiter à 24 recette max
            .slice(0, 24)
            .map((film) => <Card key={film.id} film={film} />)}
      </div>
      {/* <Card /> */}
    </div>
  );
};

export default Home;
