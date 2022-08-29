import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './MovieList.css'

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    marginAutoContainer: {
        display: "flexbox",
    },
    addButton: {
        position: "absolute",
        top: "2vh",
        right: "3vw",
        backgroundColor: "#8adba0"
    },
    marginAuto: {
        margin: "auto",
        alignItems: "center",
        display: "flexbox"
    },
    movieGrid: {
        textAlign: "center",
    }
});


import MovieItem from '../MovieItem/MovieItem.jsx';

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    const handleAddMovie = () => {
        history.push('/addMovie');
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const classes = useStyles();

    return (
        <main>
            {/* <div className={classes.marginAutoContainer} mx="auto">
                <div className={classes.marginAuto} mx="auto"> */}
                <Button variant="outlined" className={classes.addButton} onClick={handleAddMovie}>Add Movie</Button>
                    <Grid className={classes.movieGrid} container direction="row" justifyContent="center" alignItems="center">
                        <section className="movies">
                            {movies.map(movie => {
                                return (
                                    <MovieItem key={movie.id} movie={movie} />
                                );
                            })}
                        </section>
                    </Grid>
                {/* </div>
            </div> */}
        </main >

    );
}

export default MovieList;

