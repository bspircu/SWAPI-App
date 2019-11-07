import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import SpeciesInfo from './SpeciesInfo';
import Pagination from './Pagination';
import { fetcher } from '../fetcher';

function Species() {
  useEffect(() => {
    fetchSpecies();
  }, []);

  const [allSpecies, setAllSpecies] = useState({ results: [] });

  const fetchSpecies = async () => {
    const data = await fetcher('https://swapi.co/api/species/');
    setAllSpecies(data);
  };

  const linkStyle = {
    color: 'yellow',
  };

  return (
    <div>
      <Switch>
        <Route path="/Species/:id">
          {({ match }) => {
            const species = allSpecies.results[match.params.id];
            return <SpeciesInfo {...species} />;
          }}
        </Route>

        <Route path="/Species">
          {() => [
            ...allSpecies.results.map((species, index) => (
              <h1 key={species.url}>
                <Link style={linkStyle} to={`/Species/${index}`}>
                  {species.name}
                </Link>
              </h1>
            )),
            <Pagination
              previous={allSpecies.previous}
              next={allSpecies.next}
              setState={setAllSpecies}
              key="pagination"
            />,
          ]}
        </Route>
      </Switch>
    </div>
  );
}

export default Species;
