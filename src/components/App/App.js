import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from '../Header/Header.jsx';
import MovieList from '../MovieList/MovieList.jsx'
import DetailView from '../DetailView/DetailView.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details">
          <DetailView />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
