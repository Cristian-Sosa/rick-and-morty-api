function PagesBar({ page, setPage }) {
  return (
    <nav className="d-flex justify-content-center">
      <button type='button' onClick={() => setPage(page - 1)} className={ page>1 ? 'mx-2 btn btn-link' : 'd-none' }>{page - 1}</button>
      <button type='button' className="mx-2 btn btn-link" disabled>{page}</button>
      <button type='button' onClick={() => setPage(page + 1)} className="mx-2 btn btn-link">{page + 1}</button>
    </nav>
  );
}
export default PagesBar;
