import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import StarshipsInfo from './StarshipsInfo';
import Pagination from './Pagination';
import { fetcher } from '../fetcher';

function Starships() {
  useEffect(() => {
    fetchStarships();
  }, []);

  const [allStarships, setAllStarships] = useState({ results: [] });

  const fetchStarships = async () => {
    const data = await fetcher('https://swapi.co/api/starships/');
    setAllStarships(data);
  };

  const linkStyle = {
    color: 'yellow',
  };

  return (
    <div>
      <Switch>
        <Route path="/Starships/:id">
          {({ match }) => {
            const starship = allStarships.results[match.params.id];
            return <StarshipsInfo {...starship} />;
          }}
        </Route>

        <Route path="/Starships">
          {() => [
            ...allStarships.results.map((starship, index) => (
              <h1 key={starship.url}>
                <Link style={linkStyle} to={`/Starships/${index}`}>
                  {starship.name}
                </Link>
              </h1>
            )),
            <Pagination
              previous={allStarships.previous}
              next={allStarships.next}
              setState={setAllStarships}
              key="pagination"
            />,
          ]}
        </Route>
      </Switch>
    </div>
  );
}

export default Starships;
