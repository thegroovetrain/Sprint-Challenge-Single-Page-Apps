import React, {useState} from "react";

import CharacterList from "./CharacterList";
import SearchForm from './SearchForm';

export default function CharactersPage() {

  const [ filterName, setFilterName ] = useState('');
  console.log(filterName);
  
  return (
    <div>
        <SearchForm setFilter={setFilterName} />
        <CharacterList filterName={filterName} />
    </div>
  );
}
