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
    augmentFilms(data);
  };

  // augmenter takes data and adds id prop based on url
  //makes pushing data into pagination component possible.
  const augmentFilms = data => {
    const dataWithIds = {
      ...data,
      results: data.results.map(film => {
        const id = /\d+/.exec(film.url)[0];
        return { ...film, id };
      }),
    };
    console.log(dataWithIds);
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
