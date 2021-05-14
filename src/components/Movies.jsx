import React from 'react';


const MOVIE_YEAR_URL =
  'https://imdb-api.com/en/API/SearchMovie/k_t885cb5/';


// const MOVIE_YEAR_URL =
//   'https://imdb-api.com/en/API/SearchMovie/${import.meta.env.VITE_APP_API_KEY}/';

// const MOVIE_YEAR_URL = `https://imdb8.p.rapidapi.com/?rapidapi-key=${
//   import.meta.env.VITE_APP_API_KEY
// }/title/get-ratings`;
// `https://imdb8.p.rapidapi.com/?rapidapi-key=${
//   import.meta.env.VITE_APP_API_KEY}/title/get-ratings
// }`;

// https://imdb8.p.rapidapi.com/title/get-rating/?rapidapi-key=$213cd157ffmshca58f6dd9ea909fp1963c2jsn8e6b765d7f4"

function Movies({ year }) {
  const [movie, setMovie] = React.useState();

  React.useEffect(() => {
    fetch(MOVIE_YEAR_URL + year)
      .then((res) => res.json())
      .then((data) => {

        setMovie(data);
      });
  }, [year]);

  //   console.log(movie.results);
  if (!year) return <div>Loading...</div>;

  return (
    <div>
      <br></br>
      <form>
        <label>Which movie had the highest IMDb rating?</label>
        <br></br>
        <img src={movie.results[0].image} alt="" width="300" height="300" />
        <br></br>
        <button>{movie.results[0].title}</button>
        <br></br>
        <img src={movie.results[1].image} alt="" width="300" height="300" />
        <br></br>
        <button>{movie.results[1].title}</button>
        <br></br>
      </form>

      {/* <Score url={user.repos_url} /> */}
    </div>
  );
}

export default Movies;
