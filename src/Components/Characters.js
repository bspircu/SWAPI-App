import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import CharacterInfo from './CharecterInfo';
import Pagination from './Pagination';
import { fetcher } from '../fetcher';

function Characters() {
  useEffect(() => {
    fetchPeople();
  }, []);

  const [allCharacters, setAllCharacters] = useState({ results: [] });

  const fetchPeople = async () => {
    const data = await fetcher('https://swapi.co/api/people/');
    setAllCharacters(data);
  };

  const linkStyle = {
    color: 'yellow',
  };

  return (
    <Switch>
      <Route path="/Characters/:id">
        {({ match }) => {
          const character = allCharacters.results[match.params.id];
          return <CharacterInfo {...character} />;
        }}
      </Route>

      <Route path="/Characters">
        {() => [
          ...allCharacters.results.map((person, index) => (
            <h1 key={person.url}>
              <Link style={linkStyle} to={`/Characters/${index}`}>
                {person.name}
              </Link>
            </h1>
          )),
          <Pagination
            previous={allCharacters.previous}
            next={allCharacters.next}
            setState={setAllCharacters}
            key="pagination"
          />,
        ]}
      </Route>
    </Switch>
  );
}

export default Characters;

// alternative to pagination with multiple fetches on one page dynamically
// const urls = [
//   'https://swapi.co/api/people',
//   'https://swapi.co/api/people/?page=2',
//   'https://swapi.co/api/people/?page=3',
//   'https://swapi.co/api/people/?page=4',
//   'https://swapi.co/api/people/?page=5',
// ];
// const fetchPeople = async () => {
//   const data = await Promise.all(urls.map(url => fetch(url)));
//   // const [page1, page2, page3] = await Promise.all(data.map(r => r.json()));
//   // const allResults = [...page1.results, ...page2.results, ...page3.results];
//   // console.log([page1, page2, page3]);
//   const pages = await Promise.all(data.map(r => r.json()));
//   // const allResults = pages.map(page => page.results);
//   const allResults = pages.reduce((acc, page) => {
//     acc.push(...page.results);
//     return acc;
//   }, []);
//   console.log(pages);
//   console.log(allResults);
//   setCharacters(allResults);
// };
