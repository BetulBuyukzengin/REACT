import './SearchBar.css';
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  const handleChange = (event) => {
    setTerm(event.target.value);
    // setTerm(event.target.value.replace(/[a-z]/,''));

  };
  return (
    <div className='search-bar'>
      <label>Enter search term</label>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
        {/* {term.length<4 && 'term must be longer'} */}
      </form>
    </div>
  );
}
export default SearchBar;
