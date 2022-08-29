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
        backgroundColor: "#8adba0",
        marginTop: "20px",
        marginBottom: "150px",
    },

    inputLine: {
        margin: "10px",
    },

    textArea: {
        margin: "10px",
        width: "50vw",
    },

    form: {
        marginTop: "80px",
    }
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

    let [newMovieData, setNewMovieData] = useState({ title: '', poster: '', description: '', genre_id: 0});

    const handleNameChange = (event, key) => {
        console.log(event)
        setNewMovieData({
            ...newMovieData,
            [key]: event.target.value
        })
    }

    const addMovie = () => {
        event.preventDefault();
        if (newMovieData.genre_id === 0) {
            alert('Select a genre.')
            return;
        }
        dispatch({ type: 'ADD_NEW_MOVIE', payload: newMovieData })
        console.log(newMovieData);
        history.push('/');
    }

    const classes = useStyles();

    return (
        <>
            <Button variant="outlined" className={classes.backButton} onClick={handleBack}>Cancel</Button>
            <form className={classes.form} onSubmit={addMovie}>
                <input
                    className={classes.inputLine}
                    type="text"
                    placeholder="Title"
                    value={newMovieData.title}
                    onChange={(event) => handleNameChange(event, 'title')}
                /> <br/>
                <input
                    className={classes.inputLine}
                    type="text"
                    placeholder="Poster URL"
                    value={newMovieData.poster}
                    onChange={(event) => handleNameChange(event, 'poster')}
                /> <br/>
                <textarea
                    className={classes.textArea}
                    type="text"
                    rows="8"
                    placeholder="Description"
                    value={newMovieData.description}
                    onChange={(event) => handleNameChange(event, 'description')}
                /> <br/>
                <div className="genreChoices">
                    <select name="genres" onChange={(event) => handleNameChange(event, 'genre_id')}>
                        <option id="nullGenre" value="0">Select a genre</option>
                        {genres.map(x => {
                            return (
                                <>
                                  <option key={x.id} value={x.id}>{x.id}. {x.name}</option>
                                </>
                            );
                        })}
                    </select>
                </div>
                <Button variant="outlined" className={classes.submitButton} type="submit">Submit</Button>
            </form>
        </>
    )
}

export default MovieForm;