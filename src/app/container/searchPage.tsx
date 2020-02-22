import React, { useState, useEffect } from "react";
import { Header } from "../components/Header/Header";
import Search from "../components/Search/Search";
import { SimpleCard } from "../components/Cards/SimpleCard";
import Pagination from "../components/Pagination";
import { getMovies, SearchMovies, fetchListGenres } from "app/ducks/movies";
import { connect } from "react-redux";
import { imageUrl } from "../config";

function App(props) {
  const [actualPage, setActualPage] = useState(1);
  const [actualSearch, setActualSearch] = useState("");

  useEffect(() => {
    props.fetchListGenres();
  }, []);

  const fetchResults = data => {
    return data.slice((actualPage - 1) * 5, (actualPage - 1) * 5 + 5);
  };

  const handleSearch = event => {
    setActualSearch(event.target.value);
    props.fetchSearchMovies(event.target.value, 1).then(setActualPage(1));
  };

  const handlePagination = page => {
    setActualPage(page);
    if (page % Math.ceil(props?.totalResults / 5) === 0) {
      if (actualSearch != "") {
        props.fetchSearchMovies(
          actualSearch,
          page / Math.ceil(props?.totalResults / 5)
        );
      } else {
        props.fetchListMovies(page / Math.ceil(props?.totalResults / 5));
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Header />
      <Search
        placeHolder="Busque um filme por nome, ano ou gênero....."
        onChange={text => handleSearch(text)}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {fetchResults(props?.movies)?.map((element, indx) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
            onClick={() => {
              props.history.push({
                pathname: `/${element.id}`
              });
            }}
          >
            <SimpleCard
              title={element.original_title}
              categories={element.genre_ids.map(
                element => props?.genres[element]
              )}
              date={element.release_date}
              description={element.overview}
              percent={element.vote_average * 10}
              image={imageUrl + element.poster_path}
              key={indx}
            />
          </div>
        ))}
      </div>
      <Pagination
        value={props?.movies.lenght}
        valuePerPage={5}
        onClick={(page: number) => {
          handlePagination(page);
        }}
        actualPage={actualPage}
      />
    </div>
  );
}

export default connect(getMovies, (dispatch: any) => ({
  fetchListGenres: () => dispatch(fetchListGenres()),
  fetchSearchMovies: (keyword: string) => dispatch(SearchMovies(keyword))
}))(App);
