function FilterBar({ searchByName }) {
  return (
    <nav className="mt-3 mb-5 container-fluid navbar navbar-expand-lg bg-dark">
      <div className="d-flex flex-row-reverse m-auto container row">
        <form
          className="py-3 col-12 col-md-6 d-flex"
          id="form"
          onSubmit={searchByName}
        >
          <input
            className="form-control me-2 px-4 rounded-pill"
            id="NameInput"
            type="text"
            placeholder="Search"
          />
          <button className="btn btn-primary rounded-pill px-4" type="submit">
            Search
          </button>
        </form>

        <div className="py-3 col-12 col-md-6 d-flex flex-row justify-content-start align-items-center">
          <span className="navbar-brand fs-3 text-light" href="#">
            Filter By:
          </span>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item me-2">
              <a className="nav-link text-white-50" href="#">
                Status
              </a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link text-white-50" href="#">
                Episodes
              </a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link text-white-50" href="#">
                Clear Filters
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default FilterBar;
