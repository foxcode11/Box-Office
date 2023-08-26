import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchString, setsearchString] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

  const onInputchange = ev => {
    setsearchString(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchString} onChange={onInputchange} />
      <label>
        shows
        <input
          type="radio"
          name="search-option"
          value="shows"
          checked={searchOption === 'shows'}
          onChange={onRadioChange}
        />
      </label>
      <label>
        actors
        <input
          type="radio"
          name="search-option"
          value="actors"
          checked={searchOption === 'actors'}
          onChange={onRadioChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
