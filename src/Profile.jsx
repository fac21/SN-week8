import React from "react";


const USER_URL = 'https://imdb-api.com/en/API/Ratings/k_t885cb5s/tt1375666';

function Profile({ name }) {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    fetch(USER_URL)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [name]);

  if (!user) return <div>Loading...</div>;
  return (
    <div>
      <h1>{user.title}</h1>
      <img src={user.image} alt="" width="128" height="128" />
      {/* <h2>Repos</h2>
      <ReposList url={user.repos_url} /> */}
    </div>
  );
}

export default Profile;
