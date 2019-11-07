import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import FilmsInfo from './FilmsInfo';
import Pagination from './Pagination';
import { fetcher } from '../fetcher';

function Films() {
  useEffect(() => {
    fetchFilms();
  }, []);

  const [allFilms, setAllFilms] = useState({ results: [] });

  const fetchFilms = async () => {
    const data = await fetcher('https://swapi.co/api/films/');
    // console.log(data);
    setAllFilms(data);
  };

  const linkStyle = {
    color: 'yellow',
  };

  return (
    <Switch>
      <Route path="/Films/:id">
        {({ match }) => {
          const film = allFilms.results[match.params.id];
          return <FilmsInfo {...film} />;
        }}
      </Route>

      <Route path="/Films">
        {() => [
          ...allFilms.results.map((film, index) => (
            <h1 key={film.url}>
              <Link style={linkStyle} to={`/Films/${index}`}>
                {film.title}
              </Link>
            </h1>
          )),
          <Pagination
            previous={allFilms.previous}
            next={allFilms.next}
            setState={setAllFilms}
            key="pagination"
          />,
        ]}
      </Route>
    </Switch>
  );
}

export default Films;
