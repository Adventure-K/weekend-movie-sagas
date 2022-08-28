import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    marginAutoContainer: {
        display: "flexbox",

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

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const classes = useStyles();

    return (
        <main>
            {/* <div className={classes.marginAutoContainer} mx="auto">
                <div className={classes.marginAuto} mx="auto"> */}
                    <Grid className="movieGrid" container direction="row" justifyContent="center" alignItems="center">
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

