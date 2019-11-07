import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import SpeciesInfo from './SpeciesInfo';
import Pagination from './Pagination';

function Species() {
  useEffect(() => {
    fetchSpecies();
  }, []);

  const [allSpecies, setAllSpecies] = useState({ results: [] });

  const fetchSpecies = async () => {
    const data = await fetch('https://swapi.co/api/species/');
    const species = await data.json();
    console.log(species);
    setAllSpecies(species);
  };

  const linkStyle = {
    color: 'yellow',
  };

  return (
    <div>
      <Switch>
        <Route path="/Species/:id">
          {({ match }) => {
            console.log(match);
            const species = allSpecies.results[match.params.id];
            console.log(species);
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
