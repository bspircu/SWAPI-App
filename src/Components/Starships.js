import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import StarshipsInfo from './StarshipsInfo';
import Pagination from './Pagination';
import { fetcher } from '../fetcher';
import { getId } from '../utilities';

function Starships() {
  useEffect(() => {
    fetchStarships();
  }, [fetchStarships]);

  const [allStarships, setAllStarships] = useState(null);

  async function fetchStarships() {
    const data = await fetcher('https://swapi.co/api/starships/');
    augmentStarships(data);
  }

  // augmenter takes data and adds id prop based on url
  //makes pushing data into pagination component possible.
  const augmentStarships = data => {
    const dataWithIds = {
      ...data,
      results: data.results.map(starship => {
        const id = getId(starship);
        return { ...starship, id };
      }),
    };
    setAllStarships(dataWithIds);
  };

  const linkStyle = {
    color: 'yellow',
  };

  return (
    <div>
      <Switch>
        <Route path="/Starships/:id">
          {({ match }) => {
            return <StarshipsInfo id={match.params.id} />;
          }}
        </Route>
        <Route path="/Starships/">
          {() =>
            allStarships ? (
              [
                ...allStarships.results.map(starship => (
                  <h1 key={starship.url}>
                    <Link style={linkStyle} to={`/Starships/${starship.id}`}>
                      {starship.name}
                    </Link>
                  </h1>
                )),
                <Pagination
                  previous={allStarships.previous}
                  next={allStarships.next}
                  setState={augmentStarships}
                  key="pagination"
                />,
              ]
            ) : (
              <h1>Loading...</h1>
            )
          }
        </Route>
      </Switch>
    </div>
  );
}

export default Starships;
