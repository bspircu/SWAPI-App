import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import FilmsInfo from './FilmsInfo';
import { fetcher } from '../fetcher';
import { getId } from '../utilities';

function Films() {
  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  const [allFilms, setAllFilms] = useState(null);

  async function fetchFilms() {
    const data = await fetcher('https://swapi.co/api/films/');
    augmentFilms(data);
  }

  // augmenter takes data and adds id prop based on url
  //makes pushing data into pagination component possible.
  const augmentFilms = data => {
    const dataWithIds = {
      ...data,
      results: data.results.map(film => {
        const id = getId(film);
        return { ...film, id };
      }),
    };
    setAllFilms(dataWithIds);
  };

  const linkStyle = {
    color: 'yellow',
  };

  return (
    <Switch>
      <Route path="/Films/:id">
        {({ match }) => {
          return <FilmsInfo id={match.params.id} />;
        }}
      </Route>

      <Route path="/Films">
        {() =>
          allFilms ? (
            [
              ...allFilms.results.map(film => (
                <h1 key={film.url}>
                  <Link style={linkStyle} to={`/Films/${film.id}`}>
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
