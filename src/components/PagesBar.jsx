function PagesBar({ page, setPage }) {
  return (
    <nav className="d-flex justify-content-center">
      <button type='button' onClick={() => setPage(page - 1)} className={ page>1 ? 'btn btn-link mx-2' : 'd-none' }>{page - 1}</button>
      <button type='button' className="btn btn-link mx-2" disabled>{page}</button>
      <button type='button' onClick={() => setPage(page + 1)} className="btn btn-link mx-2">{page + 1}</button>
    </nav>
  );
}
export default PagesBar;
