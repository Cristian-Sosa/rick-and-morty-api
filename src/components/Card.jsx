function Card({ character }) {
  return (
    <div className="bg-dark col-md-4 d-flex flex-column justify-content-center h-100 py-5 px-5 my-5">
      <img
        className="rounded-pill m-auto mb-4 w-50 border border-5 border-secondary"
        src={character.image}
        alt={character.name}
      />
      <h3 className="text-center mb-2">{character.name}</h3>
      <span className="text-center text-white-50">
        Status: {character.status}
      </span>
      <span className="text-center text-white-50">
        Species: {character.species}
      </span>
      <span className="text-center text-white-50">
        Gender: {character.gender}
      </span>

      <button type='button' className="mt-5 btn btn-primary">View More</button>
    </div>
  );
}

export default Card;
