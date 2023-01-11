import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";

const CoupDeC = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let filmId = window.localStorage.film
      ? window.localStorage.film.split(",")
      : [];
    // Tant qu'il y a des films id, fetch moi leurs infos
    for (let i = 0; i < filmId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${filmId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d`
        )
        // Destructuration + ajout de l'autre film, sinon la première donnée écrase l'autre
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Coups de coeur <span>❤</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((film) => <Card film={film} key={film.id} />)
        ) : (
          <h2> Aucun coup de coeur pour le moment</h2>
        )}
      </div>
    </div>
  );
};

export default CoupDeC;
