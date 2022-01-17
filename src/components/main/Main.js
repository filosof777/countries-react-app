import './App.css';
import Search from "./search/Search";
import List from './countries_list/List';

function Main() {
  return (
    <main className="main">
      <Search />
      <List />
    </main>
  )
}

export default Main;