import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetcher } from '../../fetcher';
import { getId } from '../../utilities';

function CharacterInsert({ url }) {
  const [character, setCharacter] = useState(null);

  const linkStyle = {
    color: 'yellow',
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetcher(url);
      setCharacter(data);
    }
    fetchData();
  }, [url]);

  const characterId = character ? getId(character) : null;
  return character ? (
    <Link style={linkStyle} to={`/Characters/${characterId}`}>
      <p>{character.name}</p>
    </Link>
  ) : (
    <p>Loading...</p>
  );
}
export default CharacterInsert;
