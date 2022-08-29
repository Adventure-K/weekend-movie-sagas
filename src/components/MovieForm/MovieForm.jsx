import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
    backButton: {
        position: "absolute",
        top: "2vh",
        right: "3vw",
        backgroundColor: "rgb(241, 167, 167)"
    },

    submitButton: {
        backgroundColor: "#8adba0"
    },
})

function MovieForm() {

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_GENRES' });
    }, []);

    const genres = useSelector(store => store.allGenres);

    const handleBack = () => {
        history.push('/');
    }

    let [ newMovieData, setNewMovieData ] = useState({ title: '', poster: '', description: '' });
    let [ newGenreData, setNewGenreData ] = useState({ })

    const handleNameChange = (event, key) => {
        setNewMovieData({...newMovieData,
        [key]: event.target.value})
    }

    const addMovie = () => {
        event.preventDefault();
        dispatch({ type: 'ADD_MOVIE', payload: newMovieData })
        console.log(newMovieData);
        dispatch({ type: 'ADD_NEWMOVIE_GENRES', payload: })
    }

    const classes = useStyles();

    return (
        <>
            <Button variant="outlined" className={classes.backButton} onClick={handleBack}>Cancel</Button>
            <form onSubmit={addMovie}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={newMovieData.title} 
                    onChange={(event) => handleNameChange(event, 'title')}
                />
                <input 
                    type="text" 
                    placeholder="Poster URL" 
                    value={newMovieData.poster} 
                    onChange={(event) => handleNameChange(event, 'poster')}
                />
                <textarea 
                    type="text" 
                    rows="4" 
                    placeholder="Description" 
                    value={newMovieData.description} 
                    onChange={(event) => handleNameChange(event, 'description')}
                />
                <div className="genreChoices">
                    {genres.map((x, i) => {
                        return (
                            <>
                                <input type="checkbox" name="genresToAdd" key={i} value={x.name} onChange={(event) => handleGenreChange(event, 'genres')}/>{x.name} <br/>
                            </>
                        );
                    })}
                </div>
                <Button variant="outlined" className={classes.submitButton} type="submit">Submit</Button>
            </form>
        </>
    )
}

export default MovieForm;