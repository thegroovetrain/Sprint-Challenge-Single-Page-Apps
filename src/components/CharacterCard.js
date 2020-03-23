import React, { useState } from "react";
import styled from 'styled-components';

export default function CharacterCard(props) {

  return (
    <Container>
      <h2>{props.data.name}</h2>
      <Image src={props.data.image} />
      <p><strong>Status: </strong>{props.data.status}</p>
      <p><strong>Species: </strong>{props.data.species}</p>
      <p><strong>Type: </strong>{props.data.type}</p>
      <p><strong>Gender: </strong>{props.data.gender}</p>
      <p><strong>Origin: </strong>{props.data.origin.name}</p>
      <p><strong>Location: </strong>{props.data.location.name}</p>
    </Container>
  );

}

const Container = styled.div`
  background-color: #C7EA46;
  border-radius: 1rem;
  border: solid 1px black;
  margin: 1rem;
  padding: 0 1rem;
  text-align: center;
`;

const Image = styled.img`
  border-radius: 0.5rem;
  border: solid 1px black;
`;