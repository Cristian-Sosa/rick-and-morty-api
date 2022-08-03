import { useEffect, useRef, useState } from "react";

// personal components imports
import NavBar from "../components/NavBar";
import FilterBar from "../components/FilterBar";
import Card from "../components/Card";
import PagesBar from "../components/PagesBar";

function CardList() {
  const [characters, setCharacters] = useState([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState();

  const navRef = useRef();

  const searchByName = (e) => {
    e.preventDefault();

    setName(e.target[0].value);
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const response = await fetch(
        // `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`
        `https://rickandmortyapi.com/api/character/?page=${page}${
          name !== undefined ? `&name=${name}` : `/`
        }`
      );

      const data = await response.json();

      setLoading(false);

      setCharacters(data.results);
    }
    navRef.current.scrollIntoView({ behavior: "smooth" });

    fetchData();
  }, [page, name]);

  return (
    <main className="pb-5 bg-dark text-white">
      <NavBar navRef={navRef} />
      <FilterBar searchByName={searchByName} />

      {loading ? (
        <div
          className="d-flex justify-content-center"
          style={{ width: "100vw", height: "100vh", paddingTop: "280px" }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <section className="container-sm">
            <div className="row">
              {characters.map((character) => {
                return <Card key={character.id} character={character} />;
              })}
            </div>
          </section>
          <PagesBar page={page} setPage={setPage} />
        </div>
      )}
    </main>
  );
}

export default CardList;
