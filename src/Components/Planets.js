import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import PlanetsInfo from './PlanetsInfo';
import Pagination from './Pagination';
import { fetcher } from '../fetcher';
import { getId } from '../utilities';

function Planets() {
  useEffect(() => {
    fetchPlanets();
  }, []);

  const [allPlanets, setAllPlanets] = useState(null);

  const fetchPlanets = async () => {
    const data = await fetcher('https://swapi.co/api/planets/');
    augmentPlanets(data);
  };

  // augmenter takes data and adds id prop based on url
  //makes pushing data into pagination component possible.
  const augmentPlanets = data => {
    const dataWithIds = {
      ...data,
      results: data.results.map(planet => {
        const id = getId(planet);
        return { ...planet, id };
      }),
    };
    setAllPlanets(dataWithIds);
  };

  const linkStyle = {
    color: 'yellow',
  };

  return (
    <div>
      <Switch>
        <Route path="/Planets/:id">
          {({ match }) => {
            return <PlanetsInfo id={match.params.id} />;
          }}
        </Route>
        <Route path="/Planets/">
          {() =>
            allPlanets ? (
              [
                ...allPlanets.results.map(planet => (
                  <h1 key={planet.url}>
                    <Link style={linkStyle} to={`/Planets/${planet.id}`}>
                      {planet.name}
                    </Link>
                  </h1>
                )),
                <Pagination
                  previous={allPlanets.previous}
                  next={allPlanets.next}
                  setState={augmentPlanets}
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

export default Planets;
