const Buscador = ({ search }) => {
  function handleChange(event) {
    search(event.target.value);
  }
  return (
    <div className="container-fluid">
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default Buscador;
