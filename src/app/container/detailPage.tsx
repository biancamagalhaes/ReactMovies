import React, { useEffect } from "react";
import { Header } from "../components/Header/Header";
import { connect } from "react-redux";
import { getMovies, fetchMovie, fetchTrailer } from "app/ducks/movies";
import DetailCard from "../components/Cards/DetailCard";
import { imageUrl } from "../config";

function App(props) {
  useEffect(() => {
    props.fetchMovie(props.match.params.movieID);
    props.fetchTrailer(props.match.params.movieID);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Header />
      {props.movie.id != 0 && (
        <DetailCard
          title={props?.movie?.original_title}
          image={imageUrl + props?.movie.poster_path}
          categories={props?.movie?.genres?.map(element => element.name)}
          date={props?.movie?.release_date || "Não informado!"}
          description={props?.movie?.overview || "Não informado!"}
          percent={props?.movie?.vote_average * 10}
          budget={"$" + props?.movie?.budget || "Não informado!"}
          duration={props?.movie?.runtime + "min" || "Não informado!"}
          gain={
            props?.movie?.gain != undefined
              ? props?.movie?.gain
              : "Não informado!"
          }
          language={props?.movie?.spoken_languages
            .map(element => element.name)
            .join(",")}
          revenue={"$" + props?.movie?.revenue || "Não informado!"}
          situation={
            props?.movie?.status == "released"
              ? "Lançado"
              : "Estreia" || "Não informado!"
          }
        />
      )}
      {props?.trailerKey != undefined || props?.trailerKey != " " ? (
        <div style={{ display: "flex", marginTop: "8vh" }}>
          {console.log(props.trailerKey)}
          <iframe
            src={`https://www.youtube.com/embed/${props.trailerKey}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            style={{ width: "100%", height: "40em" }}
          />
        </div>
      ) : null}
    </div>
  );
}

export default connect(getMovies, (dispatch: any) => ({
  fetchMovie: (id: string) => dispatch(fetchMovie(id)),
  fetchTrailer: (id: string) => dispatch(fetchTrailer(id))
}))(App);
