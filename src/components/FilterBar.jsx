function FilterBar({ searchByName, searchByStatus, status }) {
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
            <i class="bi bi-search"></i>
          </button>
        </form>

        <div className="py-3 col-12 col-md-6 d-flex flex-row justify-content-start align-items-center">
          <span className="navbar-brand fs-3 text-light" href="#">
            Filter By:
          </span>
          <ul className="navbar-nav d-flex flex-row">
            <li
              className={`nav-item me-2 rounded-pill d-flex flex-row align-items-center ${
                status == "Alive" ? `bg-primary px-3` : "bg-transparent"
              }`}
            >
              <i
                className={`bi bi-x-circle-fill ${
                  status == "Alive"
                    ? `d-inline-block me-2 fs-5 text-light`
                    : "d-none"
                }`}
              ></i>
              <a
                className={`fs-5 nav-link ${
                  status == "Alive" ? "text-light" : "text-white-50"
                }`}
                href="#"
                onClick={searchByStatus}
              >
                Alive
              </a>
            </li>
            <li
              className={`nav-item me-2 rounded-pill d-flex flex-row align-items-center ${
                status == "Dead" ? `bg-primary px-3` : "bg-transparent"
              }`}
            >
              <i
                className={`bi bi-x-circle-fill ${
                  status == "Dead"
                    ? `d-inline-block me-2 fs-5 text-light`
                    : "d-none"
                }`}
              ></i>
              <a
                className={`fs-5 nav-link ${
                  status == "Dead" ? "text-light" : "text-white-50"
                }`}
                href="#"
                onClick={searchByStatus}
              >
                Dead
              </a>
            </li>
            <li
              className={`nav-item me-2 rounded-pill d-flex flex-row align-items-center ${
                status == "Unknown" ? `bg-primary px-3` : "bg-transparent"
              }`}
            >
              <i
                className={`bi bi-x-circle-fill ${
                  status == "Unknown"
                    ? `d-inline-block me-2 fs-5 text-light`
                    : "d-none"
                }`}
              ></i>
              <a
                className={`fs-5 nav-link ${
                  status == "Unknown" ? "text-light" : "text-white-50"
                }`}
                href="#"
                onClick={searchByStatus}
              >
                Unknown
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default FilterBar;
