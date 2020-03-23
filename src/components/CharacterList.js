import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';

import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
  
  const [characters, setCharacters] = useState([]);

  useEffect(() => {

    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response);
        setCharacters(response.data.results);
      })
      .catch(err => {
        console.log(err)
      });

  }, []);

  return (
    <Container className="character-list">
      {
        (props.filterName == '') ? (
          characters.map(character => {
            return (<CharacterCard key={character.id} data={character} />)
          })
        ) : (
          characters
            .filter(character => character.name.toLowerCase().includes(props.filterName.toLowerCase()))
            .map(character => {
              return (<CharacterCard key={character.id} data={character} />)
            })
        )
      }
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-wrap: wrap;
`;