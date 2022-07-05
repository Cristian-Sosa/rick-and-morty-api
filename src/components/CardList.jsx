import { useEffect, useState } from "react";
import Card from "./Card";
import PagesBar from "./PagesBar";

function CardList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <main className="bg-dark text-white pb-5">
      <h1 className="display-1 text-center py-5">Rick and Morty API</h1>
      <section className="container">
        <div className="row">
          {characters.map((character) => {
            return <Card key={character.id} character={character} />;
          })}
        </div>
      </section>
      <PagesBar page={page} setPage={setPage} />
    </main>
  );
}
export default CardList;
