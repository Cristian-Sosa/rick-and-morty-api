import { useEffect, useState } from "react";
import Card from "./Card";

function CardList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    }

    fetchData();
  }, []);

  return (
    <div className="bg-dark text-white">
      <h1 className="display text-center py-5">Rick and Morty API</h1>
      <div className="container">
        <div className="row">
          {characters.map((character) => {
            return <Card key={character.id} character={character} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CardList;
