import './App.css';

function Header() {
  function changeTheme() {
    document.body.classList.toggle('dark');
    document.querySelector('.far').classList.toggle('fas');
  }
  return (
    <header className="header">
      <div className='header__container container'>
        <div className='header__inner'>
          <a className='header__logo'>where in the world?</a>
          <button className='header__btn' onClick={changeTheme}><i className="far fa-moon"></i>dark mode</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
