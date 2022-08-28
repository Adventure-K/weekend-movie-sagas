import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList.jsx'
import DetailView from '../DetailView/DetailView.jsx'

// Material-UI
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   background: {
//     backgroundImage: `url(${"public/assets/filmstrip_PNG59.png"})`
//   }
// })

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
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
