import React from "react";

const MOVIE_YEAR_URL = `https://imdb8.p.rapidapi.com/?rapidapi-key=${
  import.meta.env.VITE_APP_API_KEY
}/title/get-ratings`;
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
        console.log(data);
        setMovie(data);
      });
  }, [year]);

  //   console.log(movie.results);
  if (!year) return <div>Loading...</div>;

  return (
    <div>
      {/* <h1>{movie.name}</h1> */}
      {/* <img src={movie.avatar_url} alt="" width="128" height="128" />
      <h2>Repos</h2> */}
      {/* <Score url={user.repos_url} /> */}
    </div>
  );
}

export default Movies;
