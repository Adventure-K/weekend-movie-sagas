import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import './DetailView.css';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    detailDiv: {
        height: "50vmax"
    },
    backButton: {
        position: "absolute",
        top: "2vh",
        right: "3vw",
        backgroundColor: "rgb(241, 167, 167)"
    },
    desc: {
        // display: "inline-block",
        width: "35vw",
        position: "relative",
        textAlign: "center",
        margin: "auto",
        fontStyle: "italic",
    },
    poster: {
        height: "40vh",
        marginBottom: "4em",
        border: "solid black 1px",
    },
    movieTitle: {
        marginBottom: "2em",
    },
    thisGenres: {
        position: "absolute",
        top: "22vh",
        right: "32vw",
        display: "inline",
        // border: "2px solid black",
        padding: "10px",
        textAlign: "left",
    },
    ul: {
        listStyleType: "none",
    },
    genresHead: {
        fontSize: "larger",
        fontVariant: "small-caps",
        // textDecoration: "underline",
    }
})



function DetailView() {

    const history = useHistory();
    const dispatch = useDispatch();

    const movie = useSelector(store => store.activeMovie);
    const genres = useSelector(store => store.genres);
    console.log(genres)

    // console.log(movie);
    const handleBack = () => {
        dispatch({
            type: 'DESELECT_MOVIE'
        })
        history.push('/');
    }

    const classes = useStyles();

    return (
        <div className={classes.detailDiv}>
            <Button variant="outlined" className={classes.backButton} onClick={handleBack}>Back</Button>
            <h2 className={classes.movieTitle}>{movie.title}</h2>
            <img className={classes.poster} src={movie.poster} alt={movie.title} />
            <p className={classes.desc}>{movie.description}</p>
            <div className={classes.thisGenres}>
            <span className={classes.genresHead}>genres</span>
                <ul className={classes.ul}> 
                    {genres.map((x, i) => {
                        return (
                            <li key={i}>{x.name}</li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default DetailView;