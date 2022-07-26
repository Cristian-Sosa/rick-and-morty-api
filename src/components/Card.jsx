import StatusCharacter from "./Status";

function Card({ character }) {
  return (
    <div className="m-auto my-5 bg-dark col-sm-12 col-md-6 col-lg-4 d-flex flex-column justify-content-start align-items-center user-select-none">
      <img
        className="m-auto mb-3 border border-5 border-secondary rounded-pill"
        src={character.image}
        alt={character.name}
        style={{ width: "30%" }}
      />

      <h3
        className="mb-2 fs-1 text-center text-nowrap"
        style={{
          width: "80%",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {character.name}
      </h3>

      <StatusCharacter status={character.status} species={character.species} />

      <a
        href={`https://rickandmortyapi.com/api/character/${character.id}`}
        type="button"
        className="mt-4 center btn btn-primary rounded-pill"
        style={{ width: "60%" }}
      >
        View More
      </a>
    </div>
  );
}

export default Card;
