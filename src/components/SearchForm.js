import React, { useState } from "react";
import styled from "styled-components";

export default function SearchForm(props) {
 
  const [searchName, setSearchName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    props.setFilter(searchName);
  }
 
  return (
    <Container className="search-form">
      <form onSubmit={event => handleSubmit(event)}>
        <label>Name 
          <InputText 
            name="search-name" 
            id="search-name" 
            type="text" 
            onChange={event => setSearchName(event.target.value)}
          />
        </label>
        <Button type="submit">Search</Button>
      </form>
    </Container>
  );
}

const Container = styled.section`
background-color: #C7EA46;
border-radius: 1rem;
border: solid 1px black;
margin: 1rem;
padding: 1rem;
text-align: center;
`;

const InputText = styled.input`
border: solid 1px black;
padding: 0.5rem;
border-radius: 0.5rem;
`;

const Button = styled.button`
padding: 0.5rem;
border-radius: 0.5rem;
border: solid 1px black;
background-color:#0B6623;
color: white;
`;