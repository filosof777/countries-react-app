import './App.css';
import countries from '../../../Countries';

function Items() {
  return (
    <>
    {countries.map(item => {
      const {src, title, population, region, capital} = item;
      return (
        <li className='countries__item'>
          <img className='countries__img' src={src} />
          <div className='countries__description'>
            <h4 className='countries__title'>{title}</h4>
            <p className='countries__info'>Population:<span className='countries__static'>{population}</span></p>
            <p className='countries__info'>Region: <span className='countries__static'>{region}</span></p>
            <p className='countries__info'>Capital: <span className='countries__static'>{capital}</span></p>
          </div>
        </li>
        )
      })}
    </>
  )
}

function List() {
  return (
    <div className='main__countries countries'>
      <div className='countries__container container'>
        <ul className='countries__list'>
          <Items />
        </ul>
      </div>
    </div>
  )
}

export default List;