function Card({ character }) {
  return (
    <div className="bg-dark col-md-4 d-flex flex-column justify-content-center">
      <img
        className="rounded-pill m-auto"
        src={character.image}
        alt={character.name}
      />
      <h3 className="text-center py-4">{character.name}</h3>
    </div>
  );
}

export default Card;
