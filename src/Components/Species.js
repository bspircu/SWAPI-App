import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import SpeciesInfo from './SpeciesInfo';
import Pagination from './Pagination';
import { fetcher } from '../fetcher';

function Species() {
  useEffect(() => {
    fetchSpecies();
  }, []);

  const [allSpecies, setAllSpecies] = useState(null);

  const fetchSpecies = async () => {
    const data = await fetcher('https://swapi.co/api/species/');
    augmentSpecies(data);
  };

  // augmenter takes data and adds id prop based on url
  //makes pushing data into pagination component possible.
  const augmentSpecies = data => {
    const dataWithIds = {
      ...data,
      results: data.results.map(oneSpecies => {
        const id = /\d+/.exec(oneSpecies.url)[0];
        return { ...oneSpecies, id };
      }),
    };
    setAllSpecies(dataWithIds);
  };

  const linkStyle = {
    color: 'yellow',
  };

  return (
    <div>
      <Switch>
        <Route path="/Species/:id">
          {({ match }) => {
            return <SpeciesInfo id={match.params.id} />;
          }}
        </Route>
        <Route path="/Species">
          {() =>
            allSpecies ? (
              [
                ...allSpecies.results.map(oneSpecies => (
                  <h1 key={oneSpecies.url}>
                    <Link style={linkStyle} to={`/Species/${oneSpecies.id}`}>
                      {oneSpecies.name}
                    </Link>
                  </h1>
                )),
                <Pagination
                  previous={allSpecies.previous}
                  next={allSpecies.next}
                  setState={augmentSpecies}
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

export default Species;
