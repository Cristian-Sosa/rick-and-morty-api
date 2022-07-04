import { useEffect, useState } from "react";

function Card() {
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
    <div className="main">
      <h1>Rick and Morty API</h1>
      <div className="cardList">
        {characters.map((character) => {
          return <div key={character.id} className="card">
            <h2>{character.name}</h2>
            <img src={character.image} alt="" />
          </div>;
        })}
      </div>
    </div>
  );
}

export default Card;
