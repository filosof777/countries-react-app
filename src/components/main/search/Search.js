import './App.css';

function Search() {
  return (
    <div className='main__container container'>
      <div className='main__content'>
        <form className='main__form' action='#'>
          <button className='main__btn-search' type="submit">
            <i className="fal fa-search"></i>
          </button>
          <input className='main__input-search' type='search' />
        </form>
        <input className='main__input-datalist' list='main__datalist' name='main__datalist' placeholder='Filter by Country' />
        <datalist className='main__datalist' id='main__datalist'>
          <option className='main__option'>Africa</option>
          <option className='main__option'>America</option>
          <option className='main__option'>Asia</option>
          <option className='main__option'>Europe</option>
          <option className='main__option'>Oceania</option>
        </datalist>
      </div>
    </div>
  );
}

export default Search;

