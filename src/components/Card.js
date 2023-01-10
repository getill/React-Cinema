import React from "react";

const Films = ({ film }) => {
  return (
    <div className="card">
      <img
        src={
          film.poster_path
            ? "https://image.tmdb.org/t/p/original" + film.poster_path
            : "img/poster.jpg"
        }
        alt={"photo " + film.title}
      />
      <h2>{film.title}</h2>
      <h5>Sorti le : {film.release_date}</h5>
      <h4>{film.vote_average}</h4>
      <ul>
        <li></li>
      </ul>
      <p>{film.overview}</p>
      <button className="btn">Ajouter coups de coeur</button>
    </div>
  );
};

export default Films;
