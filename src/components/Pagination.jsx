export function Pagination({ previousPage, nextPage }) {
  return (
    <div>
      <button onClick={previousPage}>prev</button>
      <button onClick={nextPage}>next</button>
    </div>
  );
}
