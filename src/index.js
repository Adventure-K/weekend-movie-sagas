import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import '@fontsource/roboto';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchActiveMovieGenres);
}

function* fetchActiveMovieGenres(action) {
    try {
        const genres = yield axios.get(`/api/genre/${action.payload}`)
        yield put({ type: 'SET_GENRES', payload: genres.data});
    } catch {
        console.log('get genres error')
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie'); // sends request to DB for table of movies, sets it to variable when it arrives
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data }); // calls this action after the server responds with the data; forwards that data to action listener
    } catch {
        console.log('get all error');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES': // listens for this action from sagas
            return action.payload; // changes value of this reducer after the above action is heard to the data that was forwarded with the action
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const activeMovie = (state = {}, action) => {
    switch (action.type) {
        case 'ACTIVE_MOVIE':
            return action.payload;
        case 'DESELECT_MOVIE':
            return {};
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        activeMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
