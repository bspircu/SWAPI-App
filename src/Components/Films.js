import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import FilmsInfo from './FilmsInfo';
import { fetcher } from '../fetcher';

function Films() {
  useEffect(() => {
    fetchFilms();
  }, []);

  const [allFilms, setAllFilms] = useState(null);

  const fetchFilms = async () => {
    const data = await fetcher('https://swapi.co/api/films/');
    setAllFilms(data);
  };

  const linkStyle = {
    color: 'yellow',
  };

  return (
    <Switch>
      <Route path="/Films/:id">
        {({ match }) => {
          if (allFilms) {
            const film = allFilms.results[match.params.id];
            return <FilmsInfo {...film} />;
          }
          return <h1>Loading..</h1>;
        }}
      </Route>

      <Route path="/Films">
        {() =>
          allFilms ? (
            [
              ...allFilms.results.map((film, index) => (
                <h1 key={film.url}>
                  <Link style={linkStyle} to={`/Films/${index}`}>
                    {film.title}
                  </Link>
                </h1>
              )),
            ]
          ) : (
            <h1>Loading...</h1>
          )
        }
      </Route>
    </Switch>
  );
}

export default Films;
